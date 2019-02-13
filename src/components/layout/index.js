import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../header";
import Footer from "../footer";

import "../../../sass/style.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Job Application Portal" />
    <Header />
    {children}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.element.isRequired
};

export default TemplateWrapper;
