import Slider from "./Slider/Slider";

function Home({ homeProjects }) {
  return (
    <div className="home__container">
      <div className="home__content">
        <Slider homeProjects={homeProjects}></Slider>
      </div>
    </div>
  );
}

export default Home;
