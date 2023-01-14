import { LightningElement, api } from "lwc";

export default class RdExpressionListItem extends LightningElement {
  @api
  expression;

  @api
  showRowNumber = false;

  handleDeleteButton() {
    this.dispatchEvent(
      new CustomEvent("delete", { detail: this.expression.name })
    );
  }

  handleTileClick() {
    this.dispatchEvent(new CustomEvent("select", { detail: this.expression }));
  }
}
