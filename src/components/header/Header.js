import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Header = ({ onSearch }) => (
  <Navbar bg="dark" variant="dark" className="fixed-top">
    <Navbar.Brand href="/" className="mr-auto">
      Mini Task
    </Navbar.Brand>
    <Form inline onSubmit={onSearch}>
      <FormControl
        type="text"
        placeholder="Search by Name"
        className="mr-sm-2"
      />
      <Button variant="outline-info" type="submit">
        Search
      </Button>
    </Form>
  </Navbar>
);

Header.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Header;
