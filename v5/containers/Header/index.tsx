import Link from "next/link";
import { useState } from "react";
import cx from "classnames";
import _throttle from "lodash.throttle";
import styled from "styled-components";
import Avatar from "../../components/Avatar";
import Nav, { NavContainer } from "../../components/Nav";
import { useEventListener } from "../../hooks";

const navItems = [
  {
    label: "bio.",
    value: "/",
  },
  {
    label: "work.",
    value: "/work",
  },
  {
    label: "notes.",
    value: "/notes",
  },
  {
    label: "blog.",
    value: "/blog",
  },
];

export const HeaderContainer = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.accent.two};
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  position: sticky;
  top: 0;
  transition: transform 300ms ease;
  width: 100%;
  z-index: 1;

  &.HeaderContainer--not-top {
    transform: translateY(-150px);

    h1 {
      span {
        opacity: 0;
        width: 0 !important;
        transition: opacity 600ms ease 300ms, width 300ms ease 600ms;
      }
    }
  }

  .HeaderContainer__avatar-name-container {
    align-items: center;
    color: inherit;
    display: flex;
    flex-direction: column;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  .Avatar,
  h1 {
    font-family: "Pacifico", serif;
    margin-bottom: 0.5em;

    span {
      display: inline-block;
      width: auto;
      transition: opacity 600ms ease 600ms, width 300ms ease 300ms;

      &:first-child {
        width: 79px;
      }

      &:nth-child(2) {
        width: 9px;
      }

      &:last-child {
        width: 45px;
      }
    }
  }

  ${NavContainer} {
    font-family: "Gaegu";

    ul {
      display: flex;

      a {
        color: inherit;
        padding-right: 10px;
      }
    }
  }
`;

const SCROLL_THRESHOLD = 120;

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEventListener(
    "scroll",
    _throttle(() => {
      if (typeof window !== "undefined") {
        if (window.pageYOffset > SCROLL_THRESHOLD) {
          setIsAtTop(false);
        } else {
          setIsAtTop(true);
        }
      }
    }, 150)
  );

  return (
    <HeaderContainer
      className={cx({
        HeaderContainer: true,
        "HeaderContainer--not-top": !isAtTop,
      })}
    >
      <Link href="/">
        <a className="HeaderContainer__avatar-name-container">
          <Avatar />
          <h1>
            m<span>ichael</span>
            <span>&nbsp;</span>y<span>uen</span>
          </h1>
        </a>
      </Link>
      <Nav items={navItems} />
    </HeaderContainer>
  );
}
