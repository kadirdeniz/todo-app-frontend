import { shallow } from "enzyme";
import Todo from "../../component/Todo";
import TodoForm from "../../component/TodoForm";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "../../component/TodoList";

Enzyme.configure({ adapter: new Adapter() });

describe("Todo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Todo />);
  });

  // Todo component should have todo with the id of todo
  it("renders todo", () => {
    expect(wrapper.find("#todo")).toHaveLength(1);
  });

  // Todo div should have todo class
  it("renders todo with class", () => {
    expect(wrapper.find("div.todo")).toHaveLength(1);
  });

  // Todo component should have todo form inside of todo div
  it("renders todo form", () => {
    const todoDiv = wrapper.find("div.todo");
    expect(todoDiv.find(TodoForm)).toHaveLength(1);
  });

  // Todo component should have todo list inside of todo div
  it("renders todo list", () => {
    const todoDiv = wrapper.find("div.todo");
    expect(todoDiv.find(TodoList)).toHaveLength(1);
  });
});