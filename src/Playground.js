import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled, { css } from "react-emotion";
import { PlayConsumer } from "./PlayContext";

const Wrapper = styled("div")(({ theme, fullBleed }) => ({
  // background: theme.styleguide.colors.codeBg,
  // minHeight: '50px'
  // padding: '10px'
  // boxShadow: ' 0px 0px 4px rgba(0,0,0,0.05)'

  ...(fullBleed && {
    width: "100vw",
    position: " relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw"
  })
}));

const Editor = styled("div")(({ theme }) => ({
  background: theme.styleguide.colors.codeBg,
  minHeight: "50px",
  padding: "10px"
}));

const Preview = styled("div")(({ theme }) => ({
  padding: "10px 0px"
}));

const editorStyle = css({
  ":focus": { outline: "none" }
});

const Playground = ({ __code, fullBleed }) => (
  <PlayConsumer>
    {({ components }) => (
      <Wrapper fullBleed={fullBleed}>
        <LiveProvider
          code={__code}
          scope={components}
          mountStylesheet={false}
          transformCode={c => `<>${c}</>`}
        >
          <Preview>
            <LivePreview />
          </Preview>
          <Editor>
            <LiveEditor className={editorStyle} />
          </Editor>
          <LiveError />
        </LiveProvider>
      </Wrapper>
    )}
  </PlayConsumer>
);

export default Playground;
