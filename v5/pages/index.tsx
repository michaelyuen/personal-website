import Link from "next/link";

export default function Home() {
  return (
    <div className="HomeContainer">
      <h1>
        <span>my</span>Bio
      </h1>
      <p>
        👋🏻 I'm Michael but sometimes I go by <b>my</b>. My purpose in live is to
        create order.
      </p>
      <p>
        I am a <s>🤖 robot</s>, <s>👽 alien</s>, 👨🏻‍🌾 human bean, and I live in
        📍East Village, New York City with my beautiful girl bean{" "}
        <a href="https://sue.fyi" target="_blank" rel="noopener noreferrer">
          Sue
        </a>
        .
      </p>
      <p>
        I'm also a software engineer and I love building{" "}
        <a
          href="https://en.wikipedia.org/wiki/Graphical_user_interface"
          target="_blank"
          rel="noopener noreferrer"
        >
          GUIs
        </a>
        . Currently, I work at MLB on{" "}
        <a href="https://www.mlb.com" target="_blank">
          mlb.com
        </a>
        . Previously, I worked at Resy on{" "}
        <a href="https://www.resy.com" target="_blank">
          resy.com
        </a>
        . Read more on{" "}
        <Link href="/work">
          <a>my work page</a>
        </Link>
        .
      </p>
      <p>
        When I'm not <s>🤖 computing</s> coding, I enjoy playing video games.
        Right now that's primarily Red Dead Redemption 2 and Super Mega Baseball
        3, with some Minecraft, Overcooked, and Tricky Towers sprinkled in. I
        don't <em>really</em> enjoy the mobile games, but I still play them -
        Star Wars Galaxy of Heroes, Tap Sports Baseball, and Clash of Clans.
      </p>
      <p>
        As someone that loves order, I enjoy taking notes and trying to manage
        them over time. Recently, I came across the concept of a{" "}
        <a
          href="https://fortelabs.co/blog/how-to-take-smart-notes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          zettelkasten
        </a>{" "}
        and have started attempting to follow that approach. Find out more on{" "}
        <Link href="/notes">
          <a>my notes page</a>
        </Link>
        .
      </p>
      <p>
        Another hobby I would like take up is writing, so naturally there must
        be a blog! That's a big part of the motivation behind rebuilding this
        website, aside from it already being long overdue. To enable myself to
        efficiently{" "}
        <a
          href="https://www.swyx.io/writing/learn-in-public"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn in public
        </a>{" "}
        and share what I enjoy.
      </p>
    </div>
  );
}
