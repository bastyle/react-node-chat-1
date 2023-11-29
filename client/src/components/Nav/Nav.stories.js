import { Nav } from ".";

export default {
  title: "Components/Nav",
  component: Nav,
  argTypes: {
    property1: {
      options: ["messages", "home", "news", "help"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "messages",
    notification: true,
    className: {},
    iconClassName: {},
    divClassName: {},
  },
};
