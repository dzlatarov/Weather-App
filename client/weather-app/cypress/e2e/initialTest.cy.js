describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.get(".unitWrapper").should("exist");
    cy.get(".unitWrapper").get(".metricWrapper").should("have.text", "metric");
    cy.get(".unitWrapper")
      .get(".imperialWrapper")
      .should("have.text", "imperial");
  });
});
