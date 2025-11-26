import Slider from "../Slider/Slider.jsx";
function Home({ homeProjects }) {
  console.log("home " + homeProjects);
  return (
    <div className="home__container">
      <div className="home__content">
        <Slider homeProjects={homeProjects}></Slider>
      </div>
    </div>
  );
}

export default Home;
