import { useTranslation } from "react-i18next";
import classes from "./promo.module.scss";

const Promo = () => {
  const { t } = useTranslation();

  return (
    <div className={classes["promo"]}>
      <div className="container">
        <div className={classes["promo__content"]}>
          <div className={classes["promo__content__texts"]}>
            <h1 className={classes["promo__content__texts__gardientText"]}>
              {t("promo.title_gradient")}
            </h1>
            <h1 className={classes["promo__content__texts__topText"]}>
              {t("promo.title_top")}
            </h1>
            <button className={classes["promo__content__texts__btn"]}>
              {t("promo.try_demo")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
