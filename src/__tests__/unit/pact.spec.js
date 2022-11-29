const { Matchers } = require("@pact-foundation/pact");
const { pactWith } = require("jest-pact");
const { createTodo } = require("../../api/api");

const withRequest = {
  method: "POST",
  path: "/todos",
  body: {
    text: Matchers.like("buy some milk"),
  },
};

const willRespondWith = {
  status: 200,
  body: {
    id: Matchers.like("1"),
    text: Matchers.like("buy some milk"),
  },
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
          state: "create todo",
          uponReceiving: "a request for create todo",
          withRequest,
          willRespondWith,
        });
        const response = await createTodo(
          provider.mockService.baseUrl,
          "buy some milk"
        );

        expect(response).toEqual({
          id: "1",
          text: "buy some milk",
        });
      });
    });
  }
);
