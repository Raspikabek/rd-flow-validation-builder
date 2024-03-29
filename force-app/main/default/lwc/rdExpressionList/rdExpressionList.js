import { LightningElement, api } from "lwc";
import addConditionLabel from "@salesforce/label/c.RD_FlowValidationBuilder_AddCondition";

export default class RdExpressionList extends LightningElement {
  @api builderContext;

  @api showRowNumbers = false;

  labels = { button: addConditionLabel };
  expressions = [
    {
      order: 1,
      resource: "placeholder",
      condition: "equals",
      value: "test"
    },
    {
      order: 2,
      resource: "placeholder",
      condition: "equals",
      value: "test"
    }
  ];

  renderPopover = false;

  handleClick() {
    this.renderPopover = true;
  }

  handlePopoverClose() {
    this.renderPopover = false;
  }

  handleItemSelect(event) {
    // TODO: handle selection to display popup with current content
    console.log(event.detail);
  }
  handleItemDelete(event) {
    // TODO: handle deletion of the item, remove from the list by name attribute?
    console.log(event.detail);
  }

  handleSubmit(event) {
    // TODO: handle Expression Builder popup submission, add item to list and store info in flow
    console.log(event.detail);
  }

  get showRowNumber() {
    return true;
  }
}
