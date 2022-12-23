import Abdulrahman from "../images/Abdulrahman.jpeg";

function Home() {
  return (
    <section className="intro" id="home">
      <h1 className="title home-title">
        Hi, my name is <strong>Abdulrahman</strong>
      </h1>
      <p className="subtitle home-subtitle">Momo Agent</p>
      <img src={Abdulrahman} alt="Mubarak"></img>
    </section>
  );
}

export default Home;
