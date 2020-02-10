import React, { useState } from "react";
import { Form, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { sanitiseQuery } from "../common/util";

const SearchBar = () => {
  const [formData, setFormData] = useState({ s: "" });
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const history = useHistory();
  return (
    <Form
      onSubmit={() => history.push(`/search?s=${sanitiseQuery(formData.s)}`)}
      onChange={handleChange}
    >
      <Input
        className="search-bar"
        name="s"
        fluid
        color="olive"
        size="small"
        action={{ icon: "search", color: "black" }}
        placeholder="Search for films or TV shows"
      />
    </Form>
  );
};

export default SearchBar;
