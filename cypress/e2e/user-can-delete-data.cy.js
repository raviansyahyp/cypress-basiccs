describe('template spec', () => {
    afterEach(() =>{
        cy.exec(
            "cd demo-app-cypress-automation && php artisan migrate:fresh --seed"
            );
    })
    //before each test case
    beforeEach(() => {
    //reset database using cypress command
    cy.exec(
    "cd clone-demo-app-cypress-automation && php artisan migrate:fresh --seed"
    );
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit("http://127.0.0.1:8000/user-management/user");
    }
    );

    //positive test case
    it('User can delete data', () => {
        cy.get(".table td")
        .contains("user")
        .parent()
        .find("button")
        .contains("Delete")
        .click();
    //make sure sweet alert visible
        cy.get(".swal-button-container")
        .find("button")
        .contains("OK")
        .click();
        cy.get(".alert")
            .should("be.visible")
            .and("have.class", "alert-success")
            .contains("User Deleted Successfully");
    });

    it('User can cancel delete data', () => {
        //arrange
        //act
        cy.get(".table td")
        .contains("user")
        .parent()
        .find("button")
        .contains("Delete")
        .click();
    //make sure sweet alert visible
        cy.get(".swal-button-container")
        .find("button")
        .contains("Cancel")
        .click();
        //assert
        cy.get(".table td")
            .contains("user").should("be.visible");
    });
    it('dummy test', () => {
        //arrange
        //act
        //assert
        });
});