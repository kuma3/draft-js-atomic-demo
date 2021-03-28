import AtomicBlock from "./AtomicBlock";

const blockRenderer = setEditorState => contentBlock => {
  const type = contentBlock.getType();

  if (type === "image-with-caption") {
    return {
      component: AtomicBlock,
      editable: true,
      props: {
        setEditorState
      }
    };
  }
};

export default blockRenderer;
