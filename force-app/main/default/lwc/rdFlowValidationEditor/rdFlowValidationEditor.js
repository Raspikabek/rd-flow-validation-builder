import { LightningElement, api } from "lwc";

export default class RdFlowValidationEditor extends LightningElement {
  // TODO: set a validate() method
  _inputVariables = [];
  _expressions = [];

  validateInputValue = "NO";
  validateInputOptions = [
    { label: "No Validations", value: "NO" },
    { label: "All Conditions Are Met (AND)", value: "AND" },
    { label: "Any Condition Is Met (OR)", value: "OR" },
    { label: "Custom Condition Logic is Met", value: "CUSTOM" }
  ];

  operatorValue = "equal";
  operatorOptions = [
    { label: "Equals", value: "equal" },
    { label: "Does Not Equals", value: "notEquals" },
    { label: "Starts With", value: "startsWith" },
    { label: "Ends With", value: "endsWith" },
    { label: "Contains", value: "contains" },
    { label: "Is Null", value: "isNull" }
  ];

  labels = {
    ConditionLogic: {
      HelpText:
        'Use parentheses, AND, OR, and NOT to customize the logic. For example, if you enter "(1 AND 2 AND 3) OR 4", the flow evaluates wheter the first three conditions are true or only the fourth condition is true'
    }
  };

  isSelected = false;

  handleHeaderClick() {
    this.isSelected = !this.isSelected;
  }

  @api
  get inputVariables() {
    return this._inputVariables;
  }

  @api
  builderContext;

  // Set a field with the data that was stored from the flow.
  // This data includes the public properties of the custom component
  set inputVariables(variables) {
    this._inputVariables = variables || [];
  }

  get renderValidationBuilder() {
    return this.validateInputValue !== "NO";
  }

  get renderCustomLogic() {
    return this.validateInputValue === "CUSTOM";
  }

  get resourceOptions() {
    const variables = this.builderContext.variables;
    return variables.map(({ name }) => ({
      label: name,
      value: name
    }));
  }

  handleValidateInputChange(event) {
    this.validateInputValue = event.detail.value;
  }

  handleSubmit(event) {
    console.log(event.detail);
  }

  handleExpressionAddition(event) {
    // TODO: fire `configuration_editor_input_value_changed` with the list of items stored plus new added item
    console.log(event.detail);
  }

  handleExpressionDeletion(event) {
    // TODO: fire `configuration_editor_input_value_changed` with the list of items stored less the deleted item
    console.log(event.detail);
  }
}
