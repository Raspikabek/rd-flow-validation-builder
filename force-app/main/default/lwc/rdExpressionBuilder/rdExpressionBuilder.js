import { LightningElement, api } from "lwc";
import conditionLabel from "@salesforce/label/c.RD_FlowValidationBuilder_Condition";
import doneLabel from "@salesforce/label/c.RD_FlowValidationBuilder_Done";
import resourceLabel from "@salesforce/label/c.RD_FlowValidationBuilder_Resource";
import valueLabel from "@salesforce/label/c.RD_FlowValidationBuilder_Value";
// TODO: migrate Resource & Value inputs as search boxes

const CONDITION_OPTIONS = [
  { label: "Equals", value: "EQUAL" },
  { label: "Does Not Equal", value: "NOT_EQUAL" },
  { label: "Starts With", value: "STARTS_WITH" },
  { label: "Ends With", value: "ENDS_WITH" },
  { label: "Contains", value: "CONTAINS" },
  { label: "Does Not Contain", value: "NOT_CONTAIN" },
  { label: "Is Null", value: "IS_NULL" }
];

export default class RdExpressionBuilder extends LightningElement {
  labels = {
    button: doneLabel,
    condition: conditionLabel,
    resource: resourceLabel,
    value: valueLabel
  };

  conditionOptions = CONDITION_OPTIONS;

  resourceInputValue;
  conditionInputValue = "EQUAL";
  valueInputValue;

  @api
  get inputVariables() {
    return this._inputVariables;
  }

  @api
  builderContext;

  get builderContextOptions() {
    if (this.builderContext) {
      const variables = this.builderContext.variables;
      return variables.map(({ name }) => ({
        label: name,
        value: name
      }));
    }
    return [{ label: "Placeholder", value: "placeholder" }];
  }

  handleConditionChange(event) {
    this.conditionInputValue = event.detail.value;
  }

  handleResourceChange(event) {
    this.resourceInputValue = event.detail.value;
  }

  handleValueChange(event) {
    this.valueInputValue = event.detail.value;
  }

  handleButtonClick() {
    const values = {
      resourceInputValue: this.resourceInputValue,
      conditionInputValue: this.conditionInputValue,
      valueInputValue: this.valueInputValue
    };
    this.dispatchEvent(new CustomEvent("submit", { detail: values }));
  }
}
