import React from "react";
import { Editor as DraftEditor } from "draft-js";
import data from "./initialData";
import styled from 'styled-components';
import AtomicBlock from './AtomicBlock';

function Editor() {
  const [editorState, setEditorState] = React.useState(data);

  const blockRenderer = () => contentBlock => {
    const type = contentBlock.getType();

    if (type === "atomic") {
      return {
        component: AtomicBlock,
      };
    }
  };

  return (
    <Wrapper>
      <DraftEditor
        editorState={editorState}
        onChange={setEditorState}
        blockRendererFn={blockRenderer()}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  width: 800px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #d3d3d3;
`;

export default Editor;
