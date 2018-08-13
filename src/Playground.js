import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { PlayConsumer } from "./PlayContext";

const Playground = ({ __code, fullBleed, noPadding }) => (
  <PlayConsumer>
    {({ components }) => (
      <LiveProvider
        code={__code}
        scope={components}
        mountStylesheet={false}
        transformCode={c => `<>${c}</>`}
      >
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    )}
  </PlayConsumer>
);

export default Playground;
