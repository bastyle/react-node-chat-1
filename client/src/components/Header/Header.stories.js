import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    property1: {
      options: [
        "home-1",
        "operator-stamp",
        "company-stamp",
        "expanded-1",
        "variant-9",
        "company",
        "title",
        "home-2",
        "AI-bot-stamp",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "home-1",
    className: {},
    text: "Title",
  },
};
