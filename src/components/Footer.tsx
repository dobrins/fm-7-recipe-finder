import { SOCIAL_ICONS } from "../data/texts";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  const isAnyRecipes = pathname.startsWith("/recipes");
  const style = isAnyRecipes ? "footer footer--recipes" : "footer";

  return (
    <footer className={style}>
      <div className="footer__container">
        <p>Made with ❤️ and 🥑</p>
        <ul>
          {SOCIAL_ICONS.map(({ img, title }) => (
            <li key={title}>
              <a
                href="#"
                title={title}>
                <span dangerouslySetInnerHTML={{ __html: img }} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
