import { shallow } from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "../../component/TodoList";

Enzyme.configure({ adapter: new Adapter() });

const mockTodos = [
  {
    id: "1",
    text: "Todo 1",
  },
  {
    id: "2",
    text: "Todo 2",
  },
  {
    id: "3",
    text: "Todo 3",
  },
];

describe("TodoList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TodoList todos={mockTodos} />);
  });

  // TodoList component should have div with the class of todo-list
  it("renders todo list div", () => {
    expect(wrapper.find("div.todo-list")).toHaveLength(1);
  });

  // TodoList component should have ul
  it("renders todo list ul", () => {
    expect(wrapper.find("ul")).toHaveLength(1);
  });

  // TodoList component should have li
  it("renders todo list li", () => {
    expect(wrapper.find("li")).toHaveLength(3);
  });

  // TodoList component should have li with the text of Todo 1
  it("renders todo list li with text", () => {
    expect(wrapper.find("li").at(0).text()).toBe("Todo 1");
  });

  // TodoList component li should have the key of 1
  it("renders todo list li with key", () => {
    expect(wrapper.find("li").at(0).key()).toBe("1");
  });
});
