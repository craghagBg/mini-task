import React from "react";
import PropTypes from "prop-types";

const Poster = ({ poster, isBright, isMobile }) => (
  <div
    className="poster m-2"
    style={{
      backgroundImage: `url(${isMobile ? poster.thumbnailUrl : poster.url})`
    }}
  >
    {isMobile ? (
      <p className={isBright ? "text-dark" : "text-light"}>{poster.title}</p>
    ) : (
      <h4 className={isBright ? "text-dark" : "text-light"}>{poster.title}</h4>
    )}
  </div>
);

Poster.prototype = {
  poster: PropTypes.shape({
    albumId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  }),
  isBright: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired
};

export default Poster;
