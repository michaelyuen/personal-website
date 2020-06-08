import Link from "next/link";
import styled from "styled-components";

type Item = {
  label: string;
  value: string;
};

type Props = {
  className?: string;
  items: Item[];
};

export const NavContainer = styled.nav`
  a {
    font-size: ${({ theme }) => theme.fontSizes[4]}px;
    line-height: 1;
  }
`;

export default function Nav({ className, items }: Props) {
  return (
    <NavContainer className={className}>
      <ul>
        {items.map((item) => (
          <li key={item.value}>
            <Link href={item.value} scroll={false}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </NavContainer>
  );
}
