describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    describe('Adjust Class Modal', () => {
        it('1. Should open adjust class modal', () => {
            cy.get('[data-cy="HomePage-ClassCard-DropDownMenu-Menu-Button"]').first().focus().should('have.css', 'cursor', 'pointer').click()
            cy.get('[data-cy="HomePage-ClassCard-DropDownMenu-Menu-Content"]').should('be.visible')
            cy.get('[data-cy="HomePage-ClassCard-DropDownMenu-Edit-Button"]').click()
            cy.get('[data-cy="HomePage-Adjust-Class-Modal"]').should('be.visible')

        })

        it('2. Should close modal when click on the X button', () => {
            cy.get('[data-cy="HomePage-ClassCard-DropDownMenu-Menu-Button"]').first().focus().should('have.css', 'cursor', 'pointer').click()
            cy.get('[data-cy="HomePage-ClassCard-DropDownMenu-Menu-Content"]').should('be.visible')
            cy.get('[data-cy="HomePage-ClassCard-DropDownMenu-Edit-Button"]').click()
            cy.get('[data-cy="HomePage-Adjust-Class-Modal"]').should('be.visible')
            cy.get('button.absolute').click();
            cy.get('[data-cy="Add-Class-Modal"]').should('not.exist')
        })

        it('3. Should change inputs in form and submit successfully', () => {
            cy.get('[data-cy="HomePage-ClassCard-DropDownMenu-Menu-Button"]').first().focus().should('have.css', 'cursor', 'pointer').click()
            cy.get('[data-cy="HomePage-ClassCard-DropDownMenu-Menu-Content"]').should('be.visible')
            cy.get('[data-cy="HomePage-ClassCard-DropDownMenu-Edit-Button"]').click()
            cy.get('[data-cy="HomePage-Adjust-Class-Modal"]').should('be.visible')
            cy.get('input[name="name"]').type('change');

            cy.get('input[name="teacherName1"]').clear().type('өөрчлөлт');
            cy.get('input[name="teacherName2"]').clear().type('өөрчлөлт');
            cy.get('[data-cy="HomePage-Modal-CODING-RadioButton"]').click()
            cy.get('[data-cy="HomePage-Modal-CODING-RadioButton"]').should('be.checked')
            cy.get('[data-cy="HomePage-Modal-DESIGN-RadioButton"]').should('not.be.checked')

            // Submit the form
            cy.get('button').contains('Хадгалах').click();

            // Verify success message
            cy.get('.Toastify__toast--success').should('contain', 'change class updated successfully!');


        })

    })

})
