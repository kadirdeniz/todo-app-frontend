import { shallow } from "enzyme";
import App from "../../App";
import Todo from "../../component/Todo";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);

// App component will have only Todo component
describe("App", () => {
  it("renders Todo component", () => {
    expect(wrapper.find(Todo)).toHaveLength(1);
  });
});
