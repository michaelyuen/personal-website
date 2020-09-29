import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

const BlockquoteContainer = styled.blockquote<SpaceProps>`
  ${space};
  border-left: 4px solid ${({ theme }) => theme.colors.midgray};
  color: ${({ theme }) => theme.colors.midgray};
  font-style: italic;
`;

const Blockquote = ({ children }) => {
  return (
    <BlockquoteContainer mx={0} px={3}>
      {children}
    </BlockquoteContainer>
  );
};

export default Blockquote;
