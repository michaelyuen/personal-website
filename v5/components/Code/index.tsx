import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

type CodeContainerProps = BorderProps &
  ColorProps &
  SpaceProps &
  TypographyProps;

const CodeContainer = styled.code<CodeContainerProps>`
  ${border};
  ${color}
  ${space};
  ${typography};
  vertical-align: top;
`;

const Code = ({ children }) => {
  return (
    <CodeContainer
      backgroundColor="gray"
      borderColor="midgray"
      borderRadius="4px"
      borderStyle="solid"
      borderWidth="1px"
      fontFamily="mono"
      p="1"
    >
      {children}
    </CodeContainer>
  );
};

export default Code;
