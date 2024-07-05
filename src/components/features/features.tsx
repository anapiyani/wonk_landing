import { useTranslation } from "react-i18next";
import FeaturesContent from "./content/content.features";
import dashboardSquare from "@/assets/dashboardSquare.png";
import dashboardSquareTool from "@/assets/dashboardSquareTools.jpeg";
import dashboardSquarePens from "@/assets/dashboardSquarePens.png";
import dashboard from "@/assets/dashboardCentered.png";
import classes from "./features.module.scss";

const Features = () => {
  const { t } = useTranslation();

  return (
    <div className={classes["features"]}>
      <div className="container">
        <div className={classes["features__content"]}>
          <div className={classes["features__content__header_texts"]}>
            <h1
              className={
                classes["features__content__header_texts__header_text"]
              }
            >
              {t("features.title")}
            </h1>
            <p>{t("features.description")}</p>
          </div>
          <FeaturesContent
            image={dashboardSquare}
            title={t("features.sections.ai_chat")}
            description={t("features.sections.ai_chat_description")}
          />
          <FeaturesContent
            image={dashboardSquareTool}
            title={t("features.sections.instant_help")}
            description={t("features.sections.instant_help_description")}
          />
          <FeaturesContent
            image={dashboardSquarePens}
            title={t("features.sections.organization")}
            description={t("features.sections.organization_description")}
          />

          <div className={classes["features__content__main_feature"]}>
            <div
              className={classes["features__content__main_feature__main_texts"]}
            >
              <h1
                className={
                  classes[
                    "features__content__main_feature__main_texts__main_text"
                  ]
                }
              >
                {t("features.sections.homework_management")}
              </h1>
              <p>{t("features.sections.submission_description")}</p>
            </div>
            <div className={classes["features__content__main_feature__image"]}>
              <img src={dashboard} alt="image" />
            </div>
          </div>
          <div className={classes["features__content__sections"]}>
            <div className={classes["features__content__sections__header"]}>
              <h1>{t("features.sections.title")}</h1>
              <p>{t("features.sections.personal_schedule_description")}</p>
            </div>
            <div
              className={classes["features__content__sections__allSections"]}
            >
              <div
                className={
                  classes["features__content__sections__allSections__section"]
                }
              >
                <h3>{t("features.sections.schedule_resources")}</h3>
                <p>{t("features.sections.timely_updates_description")}</p>
              </div>
              <div
                className={
                  classes["features__content__sections__allSections__section"]
                }
              >
                <h3>{t("features.sections.feedback")}</h3>
                <p>{t("features.sections.streamlined_process_description")}</p>
              </div>
              <div
                className={
                  classes["features__content__sections__allSections__section"]
                }
              >
                <h3>{t("features.sections.preparedness")}</h3>
                <p>{t("features.sections.preparedness_description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
