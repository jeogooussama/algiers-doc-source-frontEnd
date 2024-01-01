import { Footer, HeroArea, Navbar, SearchBar, Usage } from "../../components/inedx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroArea />
      <Usage/>
      <SearchBar/>
      <Footer/>
    </div>
  );
};

export default Home;
