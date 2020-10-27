import React, { Fragment } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";

const totalRating = 5;

interface IProps {
  rating: number;
}

const StarRating = ({ rating }: IProps): JSX.Element => {
  const ratingList = () => {
    let indents = [];
    for (let i = 1; i <= totalRating; i++) {
      if (i <= rating) {
        indents.push(
          <StarIcon
            key={i}
            style={{
              opacity: 1,
              color: "#F2C94C",
            }}
          />
        );
      } else {
        indents.push(
          <StarBorderIcon
            key={i}
            style={{
              opacity: 0.5,
            }}
          />
        );
      }
    }
    return indents;
  };
  return <Fragment>{ratingList()}</Fragment>;
};
export default StarRating;
