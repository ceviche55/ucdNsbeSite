import './Home.scss';

const Home = () => {

  return (
    <div className="app__header app__flex">
      <div className="home-page">
        <div className="hero-section">
          <h1 className="hero-title">National Society of Black Engineers</h1>
          <h2 className="hero-subtitle">UC DENVER CHAPTER</h2>
          <p className="hero-description">Welcome to NSBE, a non-profit organization dedicated to increasing the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community.</p>
        </div>
      </div>
      <div className="background-image" />
    </div>
  );
};

export default Home;
