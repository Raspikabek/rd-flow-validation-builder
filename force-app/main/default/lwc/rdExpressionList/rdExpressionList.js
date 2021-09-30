import { LightningElement } from "lwc";
import addConditionLabel from "@salesforce/label/c.RD_FlowValidationBuilder_AddCondition";

export default class RdExpressionList extends LightningElement {
  labels = { button: addConditionLabel };
  expressions = [
    { resource: "placeholder", condition: "equals", value: "test" },
    { resource: "placeholder", condition: "equals", value: "test" }
  ];

  handleClick() {
    console.log("FIRE POPUP TO RENDER EXPRESSION BUILDER!");
  }

  handleDelete(event) {
    // TODO: handle deletion of the item, remove from the list by name attribute?
    console.log(event.detail);
  }

  handleSubmit(event) {
    // TODO: handle Expression Builder popup submission, add item to list and store info in flow
    console.log(event.detail);
  }
}
