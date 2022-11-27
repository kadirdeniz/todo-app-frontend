const { Matchers } = require("@pact-foundation/pact");
const { pactWith } = require("jest-pact");
const { createTodo } = require("../../api/api");

const withRequest = {
  method: "POST",
  path: "/todo",
  body: Matchers.like({
    text: "test",
  }),
};

const willRespondWith = {
  status: 200,
  body: Matchers.like({
    id: "1",
    text: "test",
  }),
};

pactWith(
  {
    consumer: "TodoFrontend",
    provider: "TodoBackend",
  },
  (provider) => {
    describe("Todo contract test", () => {
      it("should make contract with backend server", async () => {
        await provider.addInteraction({
          state: "a todo exists",
          uponReceiving: "a request",
          withRequest,
          willRespondWith,
        });
        const response = await createTodo(provider.mockService.baseUrl);
        expect(response).toEqual(
          Matchers.like({
            id: "1",
            text: "test",
          })
        );
      });
    });
  }
);
