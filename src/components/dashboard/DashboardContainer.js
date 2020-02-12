import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Poster from "./Poster";
import * as api from "../../api";
import constants from "../../constants";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const DashboardContainer = ({ searchName }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    api
      .getData()
      .then(result => {
        result.sort((a, b) => reddish(a) - reddish(b));
        setData(result);
      })
      .catch(error => {
        console.log("Api call error " + error);
        throw error;
      });
    // eslint-disable-next-line
  }, []);

  const getRGB = el => {
    const str = el.url.split("/");
    const rgb = str[str.length - 1];
    const r = rgb.slice(0, 2) || "00";
    const g = rgb.slice(2, 4) || "00";
    const b = rgb.slice(4, 6) || "00";

    return { r, g, b };
  };

  const reddish = el => {
    const rgb = getRGB(el);

    return +("0x" + rgb.r) - +("0x" + rgb.g) - +("0x" + rgb.b);
  };

  const isBright = el => {
    const rgb = getRGB(el);

    return (+("0x" + rgb.r) + +("0x" + rgb.g) + +("0x" + rgb.b)) / 3 > 80;
  };

  const showPage = data => {
    const pages = (data.length / constants.pageVolume) >> 0;
    return data.slice(page * pages, page * pages + constants.pageVolume);
  };

  const isMobile = () => window.innerWidth < 576;

  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="d-flex justify-content-center flex-wrap mt-5 p-3">
            {showPage(
              searchName
                ? data.filter(el => el.title.includes(searchName))
                : data
            ).map((poster, id) => (
              <Poster
                key={id}
                poster={poster}
                isBright={isBright(poster)}
                isMobile={isMobile()}
              />
            ))}
          </div>
          <Button
            variant="primary"
            className="position-fixed"
            style={{ bottom: 20, right: 20 }}
            onClick={() => setPage(page + 1)}
          >
            Show More
          </Button>
        </>
      ) : (
        <Spinner
          variant="primary"
          className="position-fixed"
          style={{
            width: 60,
            height: 60,
            top: window.innerHeight / 2 - 30,
            left: window.innerWidth / 2 - 30
          }}
          animation="border"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

DashboardContainer.propTypes = {
  searchName: PropTypes.string
};

export default DashboardContainer;
