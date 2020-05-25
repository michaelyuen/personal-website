export default function Work() {
  return (
    <section className="WorkContainer">
      <h1>
        <span>my</span>Work
      </h1>
      <p>
        I need to build this page out. For now, I'll have to direct you to{" "}
        <a
          href="https://www.linkedin.com/in/yuenmichael/"
          target="_blank"
          rel="noopener noreferrer"
        >
          my LinkedIn
        </a>
        .
      </p>
      <p>
        Also, some music I'm currently enjoying (GTA radio is <em>so good</em>):
      </p>
      <p style={{ textAlign: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/AtPS-pJwBL4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: "100%" }}
        ></iframe>
      </p>
    </section>
  );
}
