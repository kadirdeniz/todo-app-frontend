import { shallow } from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoForm from "../../component/TodoForm";

Enzyme.configure({ adapter: new Adapter() });

describe("TodoForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TodoForm />);
  });
  // Todo component should have a form with the id of todo-form
  it("renders form with id", () => {
    expect(wrapper.find("#todo-form")).toHaveLength(1);
  });

  // Todo component should have label for todo
  it("renders label for todo", () => {
    expect(wrapper.find("label")).toHaveLength(1);
    expect(wrapper.find("label").text()).toBe("Todo");
  });

  // Todo component should have input for todo
  it("renders input for todo", () => {
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("input").text()).toBe("");
  });

  // Todo component should have button for todo
  it("renders button for todo", () => {
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.find("button").text()).toBe("Add");
  });
});
