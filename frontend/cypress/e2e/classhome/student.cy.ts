import { CreateStudentMutationMutationResult } from '../../../generated/index';
describe('Class home page - Student section', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-cy="HomePage-ClassCard-Header"]').first().click();
        cy.url().should('include', `/classhome/`);
    });

    describe('Class Home page tabs', () => {
        it('1. Should change category to student', () => {
            cy.get('[data-cy="ClassHomePage-ClassItemTabs-Student"]').click();
        });

        it('2. Should change category to topic', () => {
            cy.get('[data-cy="ClassHomePage-ClassItemTabs-Topic"]').click();
        });

        it('3. Should change category to report', () => {
            cy.get('[data-cy="ClassHomePage-ClassItemTabs-Report"]').click();
        });
    });

    describe('Add student Modal', () => {
        it('1. Should open add student modal', () => {
            cy.get('[data-cy="ClassHomePage-AddStudent-OpenModal-Button"]').click();
            cy.get('[data-cy="Add-Student-Modal"]').should('be.visible');
        });

        it('2. Should close modal when click on the X button', () => {
            cy.get('[data-cy="ClassHomePage-AddStudent-OpenModal-Button"]').click();
            cy.get('[data-cy="Add-Student-Modal"]').should('be.visible');
            cy.get('button.absolute').click();
            cy.get('[data-cy="Add-Student-Modal"]').should('not.exist');
        });

        it('3. Should fill the form and submit successfully', () => {
            cy.intercept('POST', '/graphql', (req) => {
                req.reply({ statusCode: 200, body: { data: { createStudentMutation: { student: { id: 1 } } } } });
            }).as('createStudentMutation');

            cy.get('[data-cy="ClassHomePage-AddStudent-OpenModal-Button"]').click();
            cy.get('[data-cy="Add-Student-Modal"]').should('be.visible');

            cy.get('input[name="studentCode"]').type('LP656451');
            cy.get('input[name="firstName"]').type('Firstname');
            cy.get('input[name="lastName"]').type('Lastname');
            cy.get('input[name="phoneNumber"]').type('99025871');
            cy.get('input[name="email"]').type('test@gmail.com');

            cy.get('[data-cy="HomePage-Modal-active-RadioButton"]').click(); // Assuming active radio button has this data-cy

            // Submit the form
            cy.get('button').contains('Хадгалах').click();

            // Verify success message
            cy.get('.Toastify__toast--success').should('contain', 'Firstname student added successfully!');
            cy.intercept('POST', 'http://localhost:3000/api/graphql', (req) => {
                console.log("request", req);
            })
        });

        it('4. Should display error message and disable button when required fields are not filled', () => {
            cy.get('[data-cy="ClassHomePage-AddStudent-OpenModal-Button"]').click();
            cy.get('[data-cy="Add-Student-Modal"]').should('be.visible');

            cy.get('input[name="studentCode"]').click();
            cy.get('input[name="firstName"]').click();
            cy.get('input[name="lastName"]').click();
            cy.get('input[name="phoneNumber"]').click();
            cy.get('input[name="email"]').click();

            cy.get('div.text-red-500').should('have.length', 3);

            cy.get('[data-cy="ClassHomePage-AddStudent-Save-Button"]').should('be.disabled');

        })
    })

    describe('Adjust student Modal', () => {
        it('1. Should open adjust student modal when click dropdown menu', () => {
            cy.get('[data-cy="ClassHomePage-StudentTable-DropDownMenu-Menu-Button"]').first().focus().should('have.css', 'cursor', 'pointer').click()
            cy.get('[data-cy="ClassHomePage-StudentTable-DropDownMenu-Menu-Content"]').should('be.visible')
            cy.get('[data-cy="ClassHomePage-StudentTable-DropDownMenu-Edit-Button"]').click()
            cy.get('[data-cy="ClassHomePage-AdjustStudent-Modal"]').should('be.visible')
        })
        it('2. Should open adjust student modal when click dropdown menu', () => {
            cy.get('[data-cy="ClassHomePage-StudentTable-DropDownMenu-Menu-Button"]').first().focus().should('have.css', 'cursor', 'pointer').click()
            cy.get('[data-cy="ClassHomePage-StudentTable-DropDownMenu-Menu-Content"]').should('be.visible')
            cy.get('[data-cy="ClassHomePage-StudentTable-DropDownMenu-Edit-Button"]').click()
            cy.get('[data-cy="ClassHomePage-AdjustStudent-Modal"]').should('be.visible')
            cy.get('button.absolute').click();
            cy.get('[data-cy="ClassHomePage-AdjustStudent-Modal"]').should('not.exist')
        })
        it('3. Should change inputs in form and submit successfully', () => {
            cy.get('[data-cy="ClassHomePage-StudentTable-DropDownMenu-Menu-Button"]').first().focus().should('have.css', 'cursor', 'pointer').click()
            cy.get('[data-cy="ClassHomePage-StudentTable-DropDownMenu-Menu-Content"]').should('be.visible')
            cy.get('[data-cy="ClassHomePage-StudentTable-DropDownMenu-Edit-Button"]').click()
            cy.get('[data-cy="ClassHomePage-AdjustStudent-Modal"]').should('be.visible')
            cy.get('input[name="studentCode"]').clear().clear().type('LP656451');
            cy.get('input[name="firstName"]').clear().type('ChangeName');
            cy.get('input[name="lastName"]').clear().type('ChangeName');
            cy.get('input[name="phoneNumber"]').clear().type('99999999');
            cy.get('input[name="email"]').clear().type('changeemail@gmail.com');

            // Submit the form
            cy.get('button').contains('Хадгалах').click();

            // Verify success message
            cy.get('.Toastify__toast--success').should('contain', 'ChangeName student updated successfully!');

        })
    })

    describe('Search input',()=>{
        it('1. Should type on search input', ()=>{
            cy.get('[data-cy="ClassHomePage-StudentSection-Search-Input"]').type('search')
            cy.get('[data-cy="ClassHomePage-StudentSection-Search-Input"]').clear()


        })
    })
})