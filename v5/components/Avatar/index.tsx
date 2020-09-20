import styled, { css } from "styled-components";
import Theme from "../../styles/theme.d";

type Props = {
  theme: Theme;
};

const getHeightAndWidth = ({
  theme: {
    sizes: { avatar },
  },
}: Props) => css`
  height: ${avatar};
  width: ${avatar};
`;

const AvatarContainer = styled.img`
  border-radius: 50%;
  ${getHeightAndWidth};
`;

export default function Avatar() {
  return (
    <AvatarContainer
      className="Avatar"
      src="/images/me.jpg"
      alt="Michael Yuen"
    ></AvatarContainer>
  );
}
