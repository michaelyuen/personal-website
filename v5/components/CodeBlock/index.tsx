import { ReactNode } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  javascript,
  typescript,
} from "react-syntax-highlighter/dist/esm/languages/hljs";
import {
  atelierCaveLight,
  atelierLakesideLight,
  codepenEmbed,
  monoBlue,
  nightOwl,
  ocean,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { withTheme } from "styled-components";
import Theme from "../../styles/theme.d";
import Code from "../Code";
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);

type Props = {
  children: ReactNode[];
  className?: string;
  inline?: boolean;
  theme: Theme;
};

const CodeBlock = ({
  children,
  className,
  inline,
  theme: {
    colors: { _name },
  },
}: Props) => {
  const style = {
    dark: nightOwl,
    gray: ocean,
    rose: atelierCaveLight,
    chocolate: codepenEmbed,
    teal: atelierLakesideLight,
    light: monoBlue,
  };
  const match = /language-(\w+)/.exec(className || "");
  const language = (match && match[1]) || "javascript";

  return inline ? (
    <Code>{children}</Code>
  ) : (
    <SyntaxHighlighter language={language} style={style[_name]}>
      {children}
    </SyntaxHighlighter>
  );
};

export default withTheme(CodeBlock);
