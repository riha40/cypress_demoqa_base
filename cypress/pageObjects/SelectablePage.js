import BasePage from "./BasePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get selectElement() {
    return cy.get("#demo-tabpane-list");
  }
  static get listOptions() {
    return cy.get("#verticalListContainer");
  }
  static get gridTab() {
    return cy.get("#demo-tab-grid");
  }
  static get gridNumbers() {
    return cy.get("#gridContainer");
  }
}

export default SelectablePage;