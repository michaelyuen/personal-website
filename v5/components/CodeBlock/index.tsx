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
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);

type Props = {
  language: string;
  theme: Theme;
  value: string;
};

const CodeBlock = ({
  language = null,
  theme: {
    colors: { _name },
  },
  value,
}: Props) => {
  const style = {
    dark: nightOwl,
    gray: ocean,
    rose: atelierCaveLight,
    chocolate: codepenEmbed,
    teal: atelierLakesideLight,
    light: monoBlue,
  };

  return (
    <SyntaxHighlighter language={language} style={style[_name]}>
      {value}
    </SyntaxHighlighter>
  );
};

export default withTheme(CodeBlock);
