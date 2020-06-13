import styled from "styled-components";

const ColorModeButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 0;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: bold;
  padding: ${({ theme }) => theme.space[2]}px;
  position: fixed;
  right: ${({ theme }) => theme.space[2]}px;
  top: ${({ theme }) => theme.space[2]}px;
  z-index: ${({ theme }) => theme.zIndices[3]};

  &:hover {
    cursor: pointer;
  }
`;

export default function ColorModeButton({ mode, setMode }) {
  return (
    <ColorModeButtonContainer onClick={() => setMode()}>
      {mode}
    </ColorModeButtonContainer>
  );
}
