import { shallow } from "enzyme";
import Todo from "../../component/Todo";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<Todo />);

// Todo component should have todo with the id of todo
describe("Todo", () => {
  it("renders todo", () => {
    expect(wrapper.find("#todo")).toHaveLength(1);
  });
});
