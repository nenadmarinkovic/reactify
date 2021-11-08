import React from "react";
import { Pre } from "../styles/components/highlighter";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/vsLight";
import datoCMS from "./data/code-datocms";

const Highlighter = (props) => {
  return (
    <Highlight
      {...defaultProps}
      theme={props.globalTheme == "dark" ? darkTheme : lightTheme}
      code={datoCMS}
      language="jsx"
    >
      {({ className, style, tokens, i, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style} key={i}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={i} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default Highlighter;
