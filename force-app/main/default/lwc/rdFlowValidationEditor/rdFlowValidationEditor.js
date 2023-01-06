import { LightningElement, api } from "lwc";
import noValidationsLabel from "@salesforce/label/c.RD_FlowValidationBuilder_NoValidations";
import allConditionsAreMetLabel from "@salesforce/label/c.RD_FlowValidationBuilder_AllConditionsAreMet";
import anyConditionIsMetLabel from "@salesforce/label/c.RD_FlowValidationBuilder_AnyConditionIsMet";
import customConditionLogicLabel from "@salesforce/label/c.RD_FlowValidationBuilder_CustomConditionLogicIsMet";
import validateInputLabel from "@salesforce/label/c.RD_FlowValidationBuilder_ValidateInput";
import conditionLogicLabel from "@salesforce/label/c.RD_FlowValidationBuilder_ConditionLogic";
import conditionLogicHelpTextLabel from "@salesforce/label/c.RD_FlowValidationBuilder_ConditionLogicHelpText";
import errorMessageLabel from "@salesforce/label/c.RD_FlowValidationBuilder_ErrorMessage";

export default class RdFlowValidationEditor extends LightningElement {
  labels = {
    validateInput: validateInputLabel,
    customLogicInput: conditionLogicLabel,
    customLogicInputHelpText: conditionLogicHelpTextLabel,
    errorMessageInput: errorMessageLabel
  };
  // TODO: set a validate() method
  _inputVariables = [];
  _expressions = [];

  validateInputValue = "NO";
  validateInputOptions = [
    { label: noValidationsLabel, value: "NO" },
    { label: allConditionsAreMetLabel, value: "AND" },
    { label: anyConditionIsMetLabel, value: "OR" },
    { label: customConditionLogicLabel, value: "CUSTOM" }
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

    /** TEST to store the value in the metadata flow -- REMOVE LATER */
    if (event && event.detail) {
      const newValue = 1;
      const valueChangedEvent = new CustomEvent(
        "configuration_editor_input_value_changed",
        {
          bubbles: true,
          cancelable: false,
          composed: true,
          detail: {
            name: "value",
            newValue,
            newValueDataType: "Number"
          }
        }
      );
      this.dispatchEvent(valueChangedEvent);
    }
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
