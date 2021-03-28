import { EditorState, convertFromRaw } from "draft-js";

const data = {
  blocks: [
    {
      key: "fhifa",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. ",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "8fjpq",
      text: "Image caption",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "8mr9l",
      text:
        "Tellus integer feugiat scelerisque varius morbi enim. Varius duis at consectetur lorem donec. Et netus et malesuada fames ac turpis. Morbi quis commodo odio aenean sed adipiscing diam donec. Arcu dictum varius duis at consectetur lorem donec. Non arcu risus quis varius quam quisque. Habitant morbi tristique senectus et netus et.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ],
  entityMap: {}
};

export default EditorState.createWithContent(convertFromRaw(data));
