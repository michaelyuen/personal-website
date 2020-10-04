export default function TIL() {
  return (
    <section className="TILContainer">
      <h1>Today I Learned</h1>
      <h2>October 3rd, 2020</h2>
      <p>
        TIL about{" "}
        <a href="https://en.wikipedia.org/wiki/Ken_Miles">Ken Miles</a> and{" "}
        <a href="https://en.wikipedia.org/wiki/Carroll_Shelby">Carrol Shelby</a>
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
        the rush and exhilleration of being in a freakin' rocket ship on wheels;
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
        Thus, "pretter --write" <b>without any "files" option</b> is probably
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
