import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,
  argTypes: {
    property1: {
      options: ["person-2", "AI-last-message", "AI-previous-messages", "person-1", "AI-header", "person-3", "company"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "person-2",
    propertyCompanyClassName: {},
    frameClassName: {},
    ellipse: "/img/ellipse-6-14.png",
    img: "/img/ellipse-6-16.png",
    ellipse1: "/img/ellipse-6-15.png",
    divClassName: {},
  },
};
