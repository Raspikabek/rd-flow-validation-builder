import { LightningElement, api } from "lwc";

/**
 * Renders a custom popover.
 * Fires event `close` clicking close button
 */
export default class RdPopover extends LightningElement {
  /**
   * The Lightning Design System name of the icon.
   * Names are written in the format `utility:down` where `utility` is the category,
   * and `down` is the specific icon to be displayed.
   * The icon is displayed in the header to the left of the title.
   */
  @api iconName;

  /**
   * The title can include text, and is displayed in the header.
   * To include additional markup or another component, use the `title` slot.
   */
  @api title;

  get renderHeader() {
    return this.iconName === null || this.title === null;
  }
  /**
   * Nubbin class name found in https://www.lightningdesignsystem.com/components/popovers/#Nubbins
   * example: `slds-nubbin_left-top`
   */
  @api nubbin = "";

  get nubbinClass() {
    return "slds-popover slds-popover_panel " + this.nubbin;
  }

  handleCloseButton = () => {
    this.dispatchEvent(new CustomEvent("close"));
  };
}
