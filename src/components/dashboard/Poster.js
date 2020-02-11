import React from "react";
import PropTypes from "prop-types";

const Poster = ({ poster }) => (
  <>
    <img className="m-2" src={poster.url} alt={poster.title} />
  </>
);

Poster.prototype = {
  poster: PropTypes.shape({
    albumId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  })
};

export default Poster;
