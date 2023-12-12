describe('template spec', () => {
  before(() => {
    cy.log("runs once before all tests in the block");
  });
  after(() => {
    cy.log("runs once before all tests in the block");
  });
  afterEach(() => {
    cy.log("runs once before all tests in the block");
  });
  //before each test case
  beforeEach(() => {
     //arrange
    cy.visit('http://127.0.0.1:8000/');
     //reset database using cypress command
    cy.exec(
      "cd -clone-demo-app-cypress-automation && php artisan migrate:fresh --seed"
    );
     //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit("http://127.0.0.1:8000/user-management/user");

  }
  );


  it('user can create new user', () => {
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type('baru');
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
    //assert
    //cy.get("p").should("be.visible");
    //cy.get("p").should("have.text", "Data Berhasil Ditambahkan");
    //cy.get(".nav-link > .d-sm-none").click();
    /* ==== End Cypress Studio ==== */
  });

  it('user can create new user1', () => {
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type('baru');
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
  });

    it('user can create new user2', () => {
      cy.get('.card-header-action > .btn-icon').click();
      cy.get('#name').type('baru');
      cy.get('#email').type('baru@gmail.com');
      cy.get('#password').type('1234567890');
      cy.get('.btn-primary').click();
      cy.get('.nav-link > .d-sm-none').click();
      cy.get('.text-danger').click();
    });
})