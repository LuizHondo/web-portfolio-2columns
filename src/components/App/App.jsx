import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "../Nav/Nav.jsx";
import Main from "../Main/Main.jsx";

import Footer from "../Footer/Footer.jsx";
//////////////////
// When the api is ready
/////////////////////
// const [projects, setProjects] = useState([])

// Promise.all([api.getUserInfo(), api.getInitialCards()])
//       .then(([userData, cardsData]) => {
//         setCurrentUser(userData);
//         const normalizedCards = (cardsData || []).map((card) => ({
//           ...card,
//           isLiked: Array.isArray(card.likes)
//             ? card.likes.some((id) => String(id) === String(userData._id))
//             : Boolean(card.isLiked),
//         }));
//         setCards(normalizedCards);
//       })
//       .catch((err) => console.error('Error loading initial data:', err));
const homeProjects = [
  {
    title: "Cat in a piano maneiro",
    url: "https://i.pinimg.com/736x/b3/d4/40/b3d440f9ff37d267cae3bfe6ad65236d.jpg",
  },
  {
    title: "Dripping eye",
    url: "https://i.pinimg.com/736x/64/3b/4f/643b4f8e6e067781d4046fa00f7ae49d.jpg",
  },
];
const projects = [
  {
    title: "Big hamsters",
    url: "https://i.pinimg.com/736x/d4/03/f1/d403f1c5e797f9073187c405d73ea39f.jpg",
    description:
      "I have made this art thinking of how similar humankind is from a hamster",
  },
  {
    title: "Guy in a suit",
    url: "https://i.pinimg.com/736x/f2/a1/f5/f2a1f5a00ceefc664add2f820689bf57.jpg",
    description:
      "I have made this guy holding this tie to represent how breathless try to fit in feels some times",
  },
  {
    title: "Cat in a piano maneiro",
    url: "https://i.pinimg.com/736x/b3/d4/40/b3d440f9ff37d267cae3bfe6ad65236d.jpg",
    description:
      "I have made this art because everyone likes cats and piano songs, but we usually have this thought mislead because actually cats have to press any piano tiles and to get very scared because of how loud the piano is",
  },
  {
    title: "Dripping eye",
    url: "https://i.pinimg.com/736x/64/3b/4f/643b4f8e6e067781d4046fa00f7ae49d.jpg",
    description:
      "I have made art thinkg of how bad it must feel to try to read all of those out loud and thinking there would be a text end when actually there will only be Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus, neque obcaecati quam, ipsum officia perferendis ratione error corporis tempore autem pariatur exercitationem aut eum, dicta voluptate ut. Error officiis sequi quidem? Doloremque perferendis temporibus provident dolores molestias ipsam commodi.",
  },
];

function App() {
  return (
    <div className="page">
      <Nav />
      <Main projects={projects} homeProjects={homeProjects} />
      <Footer />
    </div>
  );
}

export default App;
