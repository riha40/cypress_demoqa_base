import SelectablePage from "../../pageObjects/SelectablePage";
import TextBoxPage from "../../pageObjects/textBoxPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it.only("Select list elements", () => {
      //verify that they are there
      SelectablePage.selectElement.should("contain", "Cras justo odio");
      SelectablePage.selectElement.should("contain", "Morbi leo risus");
      //click on the specific selectable options
      SelectablePage.listOptions.contains("Cras justo odio").click();
      SelectablePage.listOptions.contains("Morbi leo risus").click();
      //verify that they are selected
      SelectablePage.listOptions.contains("Morbi leo risus").should('have.class', 'active');
      SelectablePage.listOptions.contains("Cras justo odio").should('have.class', 'active');
      //verify that other options isn't pressed
      SelectablePage.listOptions.contains("Dapibus ac facilisis in").should('have.class', 'mt-2 list-group-item list-group-item-action');
      SelectablePage.listOptions.contains("Porta ac consectetur ac").should('have.class', 'mt-2 list-group-item list-group-item-action');
     
    });
    it("Select grid elements", () => {
      //open grid tab
      SelectablePage.gridTab.click();
      //select numbers
      SelectablePage.gridNumbers.contains("Two").click();
      SelectablePage.gridNumbers.contains("Four").click();
      SelectablePage.gridNumbers.contains("Six").click();
      SelectablePage.gridNumbers.contains("Eight").click();
      //validate, that numbers are pressed
      SelectablePage.gridNumbers.contains("Two").should('have.class', 'active')
      SelectablePage.gridNumbers.contains("Four").should('have.class', 'active')
      SelectablePage.gridNumbers.contains("Six").should('have.class', 'active')
      SelectablePage.gridNumbers.contains("Eight").should('have.class', 'active')
      //validate, taht rest of the numbers aren't pressed
      SelectablePage.gridNumbers.contains("One").should('have.class', 'list-group-item list-group-item-action');
      SelectablePage.gridNumbers.contains("Three").should('have.class', 'list-group-item list-group-item-action');
      SelectablePage.gridNumbers.contains("Five").should('have.class', 'list-group-item list-group-item-action');
      SelectablePage.gridNumbers.contains("Seven").should('have.class', 'list-group-item list-group-item-action');
      SelectablePage.gridNumbers.contains("Nine").should('have.class', 'list-group-item list-group-item-action');

    });
  });  
});
