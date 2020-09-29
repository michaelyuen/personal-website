import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

type ColorModeButtonContainerProps = BorderProps &
  ColorProps &
  PositionProps &
  SpaceProps &
  TypographyProps;

const ColorModeButtonContainer = styled.button<ColorModeButtonContainerProps>`
  ${border};
  ${color};
  ${position};
  ${space};
  ${typography};

  &:hover {
    cursor: pointer;
  }
`;

export default function ColorModeButton({ mode, setMode }) {
  return (
    <ColorModeButtonContainer
      backgroundColor="gray"
      border="none"
      borderRadius="0"
      color="text"
      fontFamily="mono"
      fontSize="0"
      fontWeight="bold"
      p="2"
      position="fixed"
      onClick={() => setMode()}
      right="2"
      top="2"
      zIndex={3}
    >
      {mode}
    </ColorModeButtonContainer>
  );
}
