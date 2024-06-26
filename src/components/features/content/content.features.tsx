import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import classes from "./styles.module.scss";

type TProps = {
  image: string;
  title: string;
  description: string;
};

const FeaturesContent = (props: TProps) => {
  return (
    <div className={classes["features"]}>
      <div className={classes["features__content"]}>
        <div className={classes["features__content__about"]}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <a href="#">
            Learn more{" "}
            <ArrowRightAltIcon
              className={classes["features__content__about__icon"]}
            />
          </a>
        </div>
        <div className={classes["features__content__image"]}>
          <img src={props.image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesContent;
