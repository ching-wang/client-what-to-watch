import React, { useState } from "react";
import { Form, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { sanitiseQuery } from "../common/util";

export const NavSearchBar = () => {
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
        inverted
        name="s"
        size="small"
        action={{ icon: "search" }}
        placeholder="Search for films or TV shows"
      />
    </Form>
  );
};
