describe("Login", () => {
  it("Sucsessful log in  ", () => {
    cy.loginToApplication()
  })

  it("Locked Out User ", () => {
    cy.lockedOutUser()
  })

  it("Wrong Username ", () => {
    cy.wrongUserName()
  })

  it("Wrong Password ", () => {
    cy.wrongPassword()
  })
})
