import Suggestion from "./Suggestion.jsx";
import User from "./User.jsx";

import "../../css/sidebar.css";

const suggestions = [
  {
    img: "img/smallcutecats.svg",
    username: "smallcuteanimals",
    reason: "Segue Você",
  },

  {
    img: "img/chibirdart.svg",
    username: "chibirdart",
    reason: "Segue Você",
  },
  {
    img: "img/razoesparaacreditar.svg",
    username: "razoesparaacreditar",
    reason: "Segue Você",
  },
  {
    img: "img/adorable_animals.svg",
    username: "adorable_animals",
    reason: "Segue Você",
  },
  {
    img: "img/smallcutecats.svg",
    username: "smallcutecats",
    reason: "Segue Você",
  },
];

export default function Sidebar(props) {
  return (
    <aside>
      <User user="Catana" username="catanacomics" img="img/catanacomics.svg" />
      <div className="suggestions">
        <div className="title">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {suggestions.map((suggestion, index) => {
          return (
            <Suggestion
              username={suggestion.username}
              img={suggestion.img}
              reason={suggestion.reason}
              key={index}
            />
          );
        })}
      </div>
      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </aside>
  );
}
