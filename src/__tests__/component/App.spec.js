import { shallow } from "enzyme";
import App from "../../App";
import Todo from "../../component/Todo";

const wrapper = shallow(<App />);

// App component will have only Todo component
describe("App", () => {
  it("renders Todo component", () => {
    expect(wrapper.find(Todo)).toHaveLength(1);
  });
});
