import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Header = ({ onFilter }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/" className="mr-auto">
      Mini Task
    </Navbar.Brand>
    <Form inline>
      <FormControl
        type="text"
        placeholder="Filter by Name"
        className="mr-sm-2"
        onSubmit={onFilter}
      />
      <Button variant="outline-info" type="submit">
        Filter
      </Button>
    </Form>
  </Navbar>
);

Header.propTypes = {
  onFilter: PropTypes.func.isRequired
};

export default Header;
