import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import woman from "/images/image-home-hero-large.webp";
import man from "/images/image-home-real-life-large.webp";
import { CARDS } from "../data/texts";
import CookSmarer from "../components/CookSmarer";

const Home = () => {
  useTitle("Recipe Finder");
  return (
    <div className="home">
      <section className="section-1">
        <div className="container">
          <h1>
            <span className="accent accent--big">Healthy</span> meals, zero fuss
          </h1>
          <p>
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
          <Link
            to="/recipes"
            className="button">
            Start exploring
          </Link>
          <img
            src={woman}
            alt="Cheerful woman holding a cutting board while cooking salad in the kitchen"
          />
        </div>
      </section>
      <section className="section-2">
        <h2>What you'll get</h2>
        <div className="home__cards">
          {CARDS.map(({ img, title, desc }) => (
            <div key={title}>
              <span
                className="home__icon"
                dangerouslySetInnerHTML={{ __html: img }}
              />
              <h3>{title}</h3>
              <p>{desc} </p>
            </div>
          ))}
        </div>
      </section>
      <section className="real-life">
        <div>
          <h2>Built for real life</h2>
          <p>
            Cooking shouldn't be complicated. These recipes come in under{" "}
            <span className="accent">30 minutes</span> of active time, fit busy
            schedules, and taste good enough to repeat.
          </p>
          <p>
            Whether you're new to the kitchen or just need fresh ideas, we've
            got you covered.
          </p>
        </div>
        <img
          src={man}
          alt="Man preparing food on the table"
        />
      </section>
      <CookSmarer />
    </div>
  );
};

export default Home;
