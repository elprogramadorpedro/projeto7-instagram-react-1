import Story from "./Story.jsx";

export default function Main() {
  const stories = [
    { img: "img/9gag.svg", user: "9gag" },
    { img: "img/meowed.svg", user: "meowed" },
    { img: "img/barked.svg", user: "barked" },
    {
      img: "img/nathanwpylestrangeplanet.svg",
      user: "nathanwpylestrangeplanet",
    },
    { img: "img/wawawicomics.svg", user: "wawawicomics" },
    { img: "img/respondeai.svg", user: "respondeai" },
    { img: "img/filomoderna.svg", user: "filomoderna" },
    { img: "img/memeriagourmet.svg", user: "memeriagourmet" },
    { img: "img/9gag.svg", user: "9gag" },
  ];

  return (
    <main>
      <section className="stories">
        {stories.map((story) => (
          <Story img={story.img} user={story.user} />
        ))}
      </section>
      <section>This is the body of the page</section>
    </main>
  );
}
