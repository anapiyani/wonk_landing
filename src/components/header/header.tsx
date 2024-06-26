import { useTranslation } from "react-i18next";
import logotype from "@/assets/logotype.svg";
import classes from "./haeder.module.scss";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={classes["header"]}>
      <div className="container">
        <div className={classes["header__content"]}>
          <div className={classes["header__content__logo"]}>
            <img src={logotype} alt="WONK" />
          </div>
          <nav className={classes["header__content__navs"]}>
            <ul>
              <li>
                <a href="#">{t("header.home")}</a>
              </li>
              <li>
                <a href="#">{t("header.blog")}</a>
              </li>
              <li>
                <a href="#">{t("header.blog_post")}</a>
              </li>
            </ul>
          </nav>
          <div className={classes["header__content__demo_button"]}>
            <button className={classes["header__content__demo_button__btn"]}>
              {t("header.open_demo")}
            </button>
            <button
              className={classes["header__content__demo_button__lang"]}
              onClick={() =>
                changeLanguage(i18n.language === "en" ? "ru" : "en")
              }
            >
              {t("header.language")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
