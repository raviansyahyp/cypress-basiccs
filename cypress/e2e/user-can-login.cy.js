describe('User can login to system', () => {
  //positive test case
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/')
    //act
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    cy.get('[data-id="password"]').type("password");
    cy.get('[data-id="submit"]').click();
    cy.get('[data-id="username"]').click();
    cy.get('[data-id="logout-btn"]').click();
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('login user', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:8000/');
    cy.get(':nth-child(2) > .form-control').clear('s');
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').clear('p');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  });

  //negative test case

  it('User can not login with valid username and wrong password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/')
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password-salah");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should("have.text", "These credentials do not match our records.");
  })

  it('User can not login with invalid username and valid password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/')
    //act
    cy.get(':nth-child(2) > .form-control').type("superadminnn@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should("have.text", "These credentials do not match our records.");
  })

  it('User can not login with empty username and correct password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/')
    //act
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should("have.text", "The email field is required.");
  })

  it('User can not login with correct username and empty password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/')
    //act
    cy.get(':nth-child(2) > .form-control').type("superadminnn@gmail.com");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should("have.text", "The password field is required.");
  })

  it('User can not login with empty username and empty password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/')
    //act
    cy.get('.btn').click();
    //assert
    cy.get(':nth-child(2) > .invalid-feedback').should("have.text", "The email field is required.");
    cy.get(':nth-child(3) > .invalid-feedback').should("have.text", "The password field is required.");
  })

  
})