import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Poster from "./Poster";
import * as api from "../../api";
import constants from "../../constants";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const DashboardContainer = ({ filteredName }) => {
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
  }, []);

  //   useEffect(() => {}, [filteredName, page]);

  const reddish = el => {
    const str = el.url.split("/");
    const rgb = str[str.length - 1];
    const r = rgb.slice(0, 2);
    const g = rgb.slice(2, 4);
    const b = rgb.slice(4, 6);

    return +("0x" + r) - +("0x" + g) - +("0x" + b);
  };

  const showPage = () => {
    const pages = (data.length / constants.pageVolume) >> 0;
    return data.slice(page * pages, page * pages + constants.pageVolume);
  };

  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="flex text-center p-3">
            {showPage().map((poster, id) => (
              <Poster key={id} poster={poster} />
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
        <div className="text-center p-5">
          <Spinner
            variant="primary"
            style={{ width: 60, height: 60 }}
            animation="border"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
};

DashboardContainer.propTypes = {
  filteredName: PropTypes.string
};

export default DashboardContainer;
