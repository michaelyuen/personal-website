export default function TIL() {
  return (
    <section className="TILContainer">
      <h1>Today I Learned</h1>
      <h2>October 9th, 2020</h2>
      <p>TIL the Yankees will not be proceeding to the ALCS.</p>
      <p>
        I just finished watching game 5 of the ALDS against the Tampa Bay Rays.
        The game was really close; a pitcher's duel. In the end, one home run
        made the difference. I'm sad, but good for the Rays; they deserve it.
        May they kick the cheating Astros' ass.
      </p>
      <h2>October 8th, 2020</h2>
      <p>
        TIL about{" "}
        <a href="https://github.com/remarkjs/strip-markdown" target="_blank">
          strip-markdown
        </a>
        , part of the remark suite.
      </p>
      <p>
        For work, I had to support a feature where a string of markdown should
        only conditionally support links. The remark plugin strip-markdown was
        nearly perfect! One odd thing I noticed is that it always seemed to
        leave a newline character at the end of the parsed string. I wonder if
        this is a bug, and may investigate further to see if I can contribute
        back to the library.
      </p>
      <h2>October 7th, 2020</h2>
      <p>
        TIL about the{" "}
        <a
          href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments"
          target="_blank"
        >
          @ts-expect-error comment.
        </a>
      </p>
      <p>
        When writing code in TypeScript, you typically rely on its static
        analysis abilities to signal errors in real time. This is a wonderful
        feature of the language, but can backfire when it comes to testing when
        you sometimes <b>intentionally</b> want to do things wrong. As it turns
        out, TypeScript has something for that case! From the handbook: "That’s
        why TypeScript 3.9 brings a new feature: // @ts-expect-error comments.
        When a line is preceded by a // @ts-expect-error comment, TypeScript
        will suppress that error from being reported; but if there’s no error,
        TypeScript will report that // @ts-expect-error wasn’t necessary."
        Awesome!
      </p>
      <h2>October 6th, 2020</h2>
      <p>TIL that GraphQL has been used in production since 2012!</p>
      <p>
        Wow, that is pretty crazy to me for what I think of as a relatively new
        technology. I don't think I even knew I wanted to be a software engineer
        in 2012!
      </p>
      <h2>October 5th, 2020</h2>
      <p>
        TIL how to define a function parameter as optional in TypeScript -
        `function Foo(optional?){}`
      </p>
      <p>
        The question mark! So simple, but I either never knew this or forgot. I
        really like combination of being succinct and easy to understand at a
        glance. Also, the consistency between this case and defining optional
        properties in a type or interface is great!
      </p>
      <h2>October 4th, 2020</h2>
      <p>
        TIL about the Danish word <em>arbejdsgl&aelig;de</em>, or "happiness at
        work" or "work joy".
      </p>
      <p>
        I learned this in the book I'm reading{" "}
        <a href="https://www.goodreads.com/book/show/35785251-the-best-team-wins">
          <b>The Best Team Wins</b>
        </a>
        . The context is around hierarchy in the workplace and how a lower
        "power-distance" (i.e., boss being ruler vs. collaborator) relates to
        employees being more engaged, feeling a greater sense of psychological
        safety, and therefore being more likely to take initiative and challenge
        the status quo (i.e., Innovate). The book goes on to explain how Danish
        teams have one of the lowest power-distance scores and attempts to
        correlate this with other figures about Denmark's amount of innovation,
        general happiness of citizens, and employee satisfaction.
      </p>
      <h2>October 3rd, 2020</h2>
      <p>
        TIL about{" "}
        <a href="https://en.wikipedia.org/wiki/Ken_Miles">Ken Miles</a> and{" "}
        <a href="https://en.wikipedia.org/wiki/Carroll_Shelby">
          Carroll Shelby
        </a>
        , the protagonists in the film{" "}
        <a href="https://en.wikipedia.org/wiki/Ford_v_Ferrari">
          Ford v Ferrari.
        </a>
      </p>
      <p>
        Excellent film! Wonderful story, acting, casting, etc. I generally
        regard auto racing as boring (and I'm a baseball fan). And even for
        those who do enjoy it, I think making it a compelling motion picture is
        a quite different challenge. However, they did it! I felt something of
        the rush and exhilaration of being in a freakin' rocket ship on wheels;
        especially the scene where Shelby gives Henry Ford II a ride. Whoa!
        🏎️💨💨
      </p>
      <p>
        What's more, the storytelling and human aspects are what really did it
        for me. Ken Miles is a legend and Christian Bale's acting was sublime as
        usual. How can you not love the triumph of the human spirit?
      </p>
      <h2>October 2nd, 2020</h2>
      <p>
        TIL why examples using lint-staged use cli commands directly. Because it
        makes the most sense due to lint-staged implicitly providing staged
        files as an argument to the configured cli commands.
      </p>
      <p>
        What I'm talking about has to do with{" "}
        <a href="https://github.com/typicode/husky">husky</a> and{" "}
        <a href="https://github.com/okonet/lint-staged">lint-staged</a>, two
        great tools commonly used together. I was recently creating a new
        library, which inevitably meant facing the task of setting up initial
        configuration for common code quality tools such as{" "}
        <a href="https://eslint.org/">eslint</a>,{" "}
        <a href="https://prettier.io/">prettier</a>, and{" "}
        <a href="https://jestjs.io/en/">jest</a>. Let's use prettier for
        example, and refer to the{" "}
        <a href="https://prettier.io/docs/en/install.html#git-hooks">
          Git Hooks
        </a>
        section of their installation documentation.
      </p>
      <p>
        I had already set up an npm script that looked like `"prettier":
        "prettier --write .""`, so looking at the example I thought to myself
        "why would I write the same code again instead of reusing the npm
        script?". Well the reason is a one character difference, but it comes
        down to what is after "prettier --write". In the npm script, it's a "."
        meaning <i>all</i> files. That is in direct opposition to the concept of
        lint-staged, which is to do the operation against just the staged files.
        Another key piece of knowledge I mentioned above, that lint-staged
        implicitly passes the staged files as an argument to the cli command.
        Thus, "prettier --write" <b>without any "files" option</b> is probably
        what is desired, because lint-staged will add that for you.
      </p>

      <h2>October 1st, 2020</h2>
      <p>TIL that identical twins can't be of different sexes.</p>
      <p>
        Sue's sister is pregnant with twins, and somehow the subject arose. I
        feel pretty dumb because I reacted "<b>for sure</b> identical twins can
        be boy and girl!" Well, I was totally wrong and hopefully this learning
        will stick with me.
      </p>
      <p>
        <b>Bonus fun fact:</b> Apparently semi-identical twins are a thing!
      </p>
      <p>
        Here's a source:{" "}
        <a href="https://www.bbc.com/news/health-47371431">
          https://www.bbc.com/news/health-47371431
        </a>
      </p>
    </section>
  );
}
