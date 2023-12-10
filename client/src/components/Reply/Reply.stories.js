import { Reply } from ".";

export default {
  title: "Components/Reply",
  component: Reply,
  argTypes: {
    property: {
      options: ["send", "two-icons", "one-icon", "three-icons"],
      control: { type: "select" },
    },
    device: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property: "send",
    device: "desktop",
    className: {},
  },
};
