import { useTranslation } from "react-i18next";
import logotype from "@/assets/logotype.svg";
import classes from "./footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={classes["footer"]}>
      <div className="container">
        <div className={classes["footer__content"]}>
          <div className={classes["footer__content__texts"]}>
            <img src={logotype} alt="logotype" />
            <p>{t("footer.contacts")}</p>
            <p>{t("footer.contact_details")}</p>
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
