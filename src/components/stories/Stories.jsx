import Story from "./Story.jsx";

import "../../css/stories.css";

const placeholderData = [
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

/* Randomize array using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Stories(props) {
  const content = props.content
    ? shuffleArray([...props.content])
    : placeholderData;

  return (
    <section className="stories">
      {content.map((story, index) => (
        <Story img={story.media_url} user={story.username} key={index} />
      ))}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </section>
  );
}
