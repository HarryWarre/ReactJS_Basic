import React, { useState, useEffect } from "react";
import Nav from "../Navigation/Nav";
import Model from "./Model/ModelList";
import Banner from "./Banner";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
function Details() {
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {
    const currentUrl = window.location.pathname;
    const urlParts = currentUrl.split("/");
    const extractedType = urlParts[urlParts.length - 2];
    const extractedId = urlParts[urlParts.length - 1];

    setType(extractedType);
    setId(extractedId);
  }, []);

  return (
    <div>
      <Nav />
      <div>
        <Banner id={id} type={type} />
      </div>
      <div>
        <Link
          to={{
            pathname: `/${id}`,
          }}
          className="text-decoration-none text-secondary">
          <Model />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
