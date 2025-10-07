import CookSmarer from "../components/CookSmarer";
import { useTitle } from "../hooks/useTitle";
import womanLarge from "/images/image-about-our-mission-large.webp";
import womanSmall from "/images/image-about-our-mission-small.webp";
import familyLarge from "/images/image-about-beyond-the-plate-large.webp";
import familySmall from "/images/image-about-beyond-the-plate-small.webp";

const About = () => {
  useTitle("About");
  return (
    <div className="about">
      <section className="about__section about__section-1">
        <div className="left-col">
          <span className="badge">Our mission</span>
          <h1>Help more people cook nourishing meals, more often.</h1>
          <div>
            <p>
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p>
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
        </div>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={womanLarge}
            type="image/webp"
          />
          <img
            src={womanSmall}
            alt="Woman cooking"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </section>
      <hr className="divider divider--big-margin" />
      <section className="about__section about__section-2">
        <h2>Why we exist</h2>
        <ul className="custom-bullet-list">
          <li>
            <span>Cut through the noise.</span>
            <p>
              The internet is bursting with recipes, yet most busy cooks still
              default to take-away or packaged foods. We curate a tight
              collection of fool-proof dishes so you can skip the scrolling and
              start cooking.
            </p>
          </li>
          <li>
            <span>Empower home kitchens.</span>
            <p>
              When you control what goes into your meals, you control how you
              feel. Every recipe is built around unrefined ingredients and ready
              in about half an hour of active prep.
            </p>
          </li>
          <li>
            <span>Make healthy look good.</span>
            <p>
              High-resolution imagery shows you exactly what success looks
              like—because we eat with our eyes first, and confidence matters.
            </p>
          </li>
        </ul>
      </section>
      <hr className="divider divider--big-margin" />
      <section className="about__section about__section-3">
        <h2>Our food philosophy</h2>
        <ul className="custom-bullet-list">
          <li>
            <span>Whole ingredients first.</span>
            <p>
              Fresh produce, grains, legumes, herbs, and quality fats form the
              backbone of every recipe.
            </p>
          </li>
          <li>
            <span>Flavor without compromise.</span>
            <p>
              Spices, citrus, and natural sweetness replace excess salt, sugar,
              and additives.
            </p>
          </li>
          <li>
            <span>Respect for time.</span>
            <p>
              Weeknight meals should slot into real schedules; weekend cooking
              can be leisurely but never wasteful.
            </p>
          </li>
          <li>
            <span>Sustainable choices.</span>
            <p>
              Short ingredient lists cut down on food waste and carbon
              footprint, while plant-forward dishes keep things planet-friendly.
            </p>
          </li>
        </ul>
      </section>
      <hr className="divider divider--big-margin" />
      <section className="about__section about__section-4">
        <div>
          <h2>Beyond the plate</h2>
          <p>
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul>
            <li>Encourage family dinners and social cooking.</li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={familyLarge}
            type="image/webp"
          />
          <img
            src={familySmall}
            alt="Family cooking"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </section>
      <CookSmarer />
    </div>
  );
};

export default About;
