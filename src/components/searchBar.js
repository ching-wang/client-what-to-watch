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
  const handleSubmit = () => {
    const query = String(formData.s || "").trim();
    if (query) {
      history.push(`/search?s=${sanitiseQuery(query)}`);
    }
  };
  return (
    <Form onSubmit={handleSubmit} onChange={handleChange}>
      <Input
        className="search-bar"
        name="s"
        fluid
        color="olive"
        size="big"
        action={{ icon: "search", color: "black" }}
        placeholder="Search for films or TV shows"
      />
    </Form>
  );
};

export default SearchBar;
