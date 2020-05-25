export default function Blog() {
  return (
    <section className="BlogContainer" style={{ textAlign: "center" }}>
      <h1>Coming Soon</h1>
      <p>Until then, here's a cute cowboy dog.</p>
      <figure style={{ margin: "auto" }}>
        <img src="/images/cowboy-sulley.jpg" />
        <figcaption style={{ fontSize: "1rem", textAlign: "left" }}>
          Credit:{" "}
          <a
            href="http://www.laurahoerner.com/fun-stuff"
            target="_blank"
            rel="noopener noreferrer"
          >
            Laura Hoerner
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
