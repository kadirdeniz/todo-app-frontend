import { shallow } from "enzyme";
import Todo from "../../component/Todo";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

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
});