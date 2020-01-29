import React from "react";
import { Checkbox } from "semantic-ui-react";

const CheckboxExampleShorthandElement = () => (
  <Checkbox label={<label>Make my profile visible</label>} />
);

const CheckBox = () => {
  return (
    <div class="ui checkbox">
      <input type="checkbox" class="hidden" readonly="" tabindex="0" />
      <label>Remember me</label>
    </div>
  );
};

export default CheckBox;
