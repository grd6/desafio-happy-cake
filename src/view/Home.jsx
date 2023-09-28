import imagen from "../assets/img/1445007519.svg";
const style = {};

const Home = () => {
  return (
    <main>
      <section>
        <h3>Bienvenido a Happy Cake</h3>
        <h6>El lugar de los pasteles felices</h6>
        <img src={imagen} alt="cake" />
      </section>
    </main>
  );
};

export default Home;
