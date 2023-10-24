import { Tile } from ".";

export default {
  title: "Components/Tile",
  component: Tile,
  argTypes: {
    property1: {
      options: ["article", "help", "recent-message", "news", "send-message"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "article",
    className: {},
    image: "/img/image-4-2.png",
    chipNewsChipNewsClassName: {},
    chipNewsDivClassName: {},
    chipNewsDivClassNameOverride: {},
    chipNewsChipNewsClassNameOverride: {},
    text: "Introducing a new file content source for Fin - PDF Uploads",
    text1:
      "When you migrate your articles to Intercom using our Zendesk migration tool – we&#39;ll now automatically create URL redirects from your previous URLs to your new Intercom articles.",
  },
};
