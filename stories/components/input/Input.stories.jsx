import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  // primary: false,
};
