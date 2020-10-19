export default function TIL() {
  return (
    <section className="TILContainer">
      <h1>Today I Learned</h1>
      <h2>October 18th, 2020</h2>
      <p>
        TIL the 2020 World Series will be played by the Tampa Bay Rays and the
        Los Angeles Dodgers.
      </p>
      <p>
        I'm not happy that the Rays beat the Yankees, but I am ecstatic that
        they beat the <s>Asterisks</s> Astros. As for the National League, I
        don't have such strong feelings. I am sad the Braves couldn't pull it
        off after having a 3-1 lead, but game 7 was really great and the Dodgers
        have definitely demonstrated some grit and resilience.
      </p>
      <p>My pick for the WS is the Rays.</p>
      <h2>October 17th, 2020</h2>
      <p>
        TIL about{" "}
        <a
          href="https://date-fns.org/v2.16.1/docs/Unicode-Tokens"
          target="_blank"
        >
          Unicode Tokens, as the library date-fns calls them.
        </a>
      </p>
      <p>
        A big pain in being a JavaScript programmer, and probably a programmer
        at large, is a lack of standardization. I see it as a natural downside
        that comes with a quickly evolving ecosystem - which is a good thing!
        This may be plain wrong, but I'd be willing to guess many "standards"
        (in the JS ecosystem) are really "de facto standards". The distinction I
        would make is that the latter is a result of a critical mass of users
        going "hey, well other people do it this way" versus a formal standard
        that is thoughtfully created based upon research.
      </p>
      <p>
        I figured I may be talking out of my ass (I'm a little drunk), so I
        popped in a quick query of "de facto standard vs" to DuckDuckGo, and
        this was my second result after Wikipedia:{" "}
        <a
          href="https://www.electronicdesign.com/technologies/embedded-revolution/article/21796209/whats-the-difference-between-de-jure-and-de-facto-standards"
          target="_blank"
        >
          What’s The Difference Between De Jure And De Facto Standards?
        </a>{" "}
        Interesting to me that the source seems to indicate a wider application
        than programming, but not wholly surprising. Anyway, I digress...
      </p>
      <p>
        Awesome to see that there is, in fact, a standard for tokens to be used
        in date/time formatting! To me, that not only instills confidence in the
        date-fns library, but also in the gained knowledge that I could write
        something based upon the same standard and it would automatically be
        interoperable and somewhat future-proof. Nice!
      </p>
      <h2>October 16th, 2020</h2>
      <p>
        TIL about the{" "}
        <a
          href="https://github.com/probablyup/markdown-to-jsx#optionsoverrides---rendering-arbitrary-react-components"
          target="_blank"
        >
          markdown-to-jsx
        </a>{" "}
        feature to replace arbitrary custom elements in markdown with React
        components.
      </p>
      <p>
        At work, we have to process a lot of markdown content and turn it into
        html for our applications. In a case I was reviewing today, I noticed
        the markdown also contained custom tags - something like{" "}
        <code>
          hello world &lt;custom-element&gt;content&lt;/custom-element&gt;
        </code>
        .
      </p>
      <p>
        Well, that's certainly not markdown! But as it turns out, at least in
        the case of markdown-to-jsx, handling this can become super easy and
        elegant! Now we can literally map the custom tag to a React component
        and voila! Way better than before.
      </p>
      <h2>October 15th, 2020</h2>
      <p>
        TIL{" "}
        <a
          href="https://www.nbcnews.com/politics/politics-news/chris-christie-says-he-was-icu-7-days-battling-covid-n1243589"
          target="_blank"
        >
          Chris Christie spent 7 days in ICU during his battle with Coronavirus.
        </a>
      </p>
      <p>
        Given all of the people that have been infected recently in relation to
        the White House, I have been wondering <em>how</em> none of them have
        had severe, life-threatening experiences (that we know of). I think it's
        safe to assume they are certainly receiving the best health care
        possible, but still. Many are certainly in the high risk demographics
        (old, fat, pre-existing conditions). I guess this is the first person
        that I'm aware of that has actually come out publicly about their very
        serious experience. 7 days in ICU sounds super scary to me. It seems
        good that his statements are indicating self-reflection and gained
        awareness. Sad that it would have to take a near death experience to do
        that, but I hope he is being honest and continues to use his influence
        to advocate for following public health guidelines and taking them
        seriously. This virus does not play politics.
      </p>
      <h2>October 14th, 2020</h2>
      <p>
        TIL about the game{" "}
        <a href="https://en.wikipedia.org/wiki/Disco_Elysium" target="_blank">
          Disco Elysium
        </a>
        .
      </p>
      <p>
        I'm by no means a hardcore gamer, but this game is pretty interesting
        and unique to me. Thus far, I'm really enjoying it. I guess it would be
        categorized as a role-playing game. The gameplay is primarily centered
        around dialogue and decision making. Beyond simple decision making, your
        character has various traits to be developed that present unique
        decision that can only succeed if certain skills are sufficient. These
        traits also actively participate in the dialogue, or should I say inner
        monologue? I'm getting a kick out of "Electrochemistry" which seems to
        be encouraging substance abuse in amusing ways. Additionally, I find the
        setting and art style to be quite unique and compelling, and nicely
        support the primarily dialogue-driven interactions. The voice acting is
        fun too! I wish there was more of that.
      </p>
      <h2>October 13th, 2020</h2>
      <p>
        TIL what <em>en passant</em> means in chess.
      </p>
      <p>
        Or in French, "in passing". I had no idea about this chess rule! I've
        recently signed up on{" "}
        <a href="https://www.chess.com/member/mikeybabyy" target="_blank">
          chess.com
        </a>{" "}
        and went through some of their beginner's lessons, which is where I
        learned this. The move occurs when an opponents pawn makes its first
        move and chooses to move two squares. If, as a result, the opponents
        pawn is situated directly next to your pawn, you may play an{" "}
        <em>en passant</em> <b>on your next move</b> by capturing the opponent's
        pawn as normal by moving diagonally behind it. If you don't choose to
        make this move on your immediate next turn, the right to do so is lost.
      </p>
      <p>
        I think that was a decent explanation, but regardless Wikipedia's is
        probably much better.{" "}
        <a href="https://en.wikipedia.org/wiki/En_passant" target="_blank">
          https://en.wikipedia.org/wiki/En_passant
        </a>
      </p>
      <h2>October 12th, 2020</h2>
      <p>TIL about the term didactic.</p>
      <p>
        Seems like one of those words I see at different times, but if I were
        pressed for a definition I'd be stumped. I was watching some of this
        youtube video of{" "}
        <a href="https://youtu.be/ImyFyZJ0BNo" target="_blank">
          Ron Paul and William Buckley on Firing Line
        </a>
        , and Buckley was speaking about the Libertarian party and their
        attempts to run for office as being didactic rather than political. I
        didn't understand, so naturally I looked up the definition -- "Designed
        or intended to teach". Therefore, my interpretation is that Buckley was
        commenting on running under the Libertarian party as being something
        that may be instructive to people and/or politics, but not political as
        there was no expectation of possibly winning. Ron Paul disagreed.
      </p>
      <h2>October 11th, 2020</h2>
      <p>TIL a little about microeconomics.</p>
      <p>
        I started going through the course on{" "}
        <a href="khanacademy.org/" target="_blank">
          Khan Academy
        </a>
        . I've known about it for a while. Really, who hasn't? But today I
        finally followed the impulse to check it out further in the interest of
        continued learning. At a glance, the website targets curriculum from
        high school and below, but do you really remember everything from high
        school? I think I slept through a lot of economics. But now I'm
        interested and it's wonderful!
      </p>
      <h2>October 10th, 2020</h2>
      <p>
        TIL that the bikini is named after the{" "}
        <a href="https://en.wikipedia.org/wiki/Bikini" target="_blank">
          Bikini Atoll
        </a>
        , where the first public nuclear bomb test took place.
      </p>
      <p>
        I was playing Cranium tonight with Sue's family, and this was part of a
        question. I think it was "clothing named after nuclear bomb", or
        something like that. Apparently they all knew this! I had no idea.
      </p>
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