import { LightningElement, api } from "lwc";

export default class RdExpressionListItem extends LightningElement {
  @api
  expression;

  handleClick() {
    this.dispatchEvent(
      new CustomEvent("delete", { detail: this.expression.name })
    );
  }
}
