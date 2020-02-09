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
  return (
    <Form
      onSubmit={() => history.push(`/search?s=${sanitiseQuery(formData.s)}`)}
      onChange={handleChange}
    >
      <Input
        name="s"
        size="small"
        action={{ icon: "search" }}
        placeholder="Search for films"
      />
    </Form>
  );
};
