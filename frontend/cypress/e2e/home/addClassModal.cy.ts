describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    describe('Add Class Modal', () => {
        it('1. Should open add class modal', () => {
            cy.get('[data-cy="HomePage-Add-Class-Button"]').click()
            cy.get('[data-cy="Add-Class-Modal"]').should('be.visible')
        })

        it('2. Should close modal when click on the X button', () => {
            cy.get('[data-cy="HomePage-Add-Class-Button"]').click()
            cy.get('[data-cy="Add-Class-Modal"]').should('be.visible')
            cy.get('button.absolute').click();
            cy.get('[data-cy="Add-Class-Modal"]').should('not.exist')
        })

        it('3. Should filll the form and submit successfully', () => {
            cy.get('[data-cy="HomePage-Add-Class-Button"]').click()
            cy.get('[data-cy="Add-Class-Modal"]').should('be.visible')
            cy.get('input[name="name"]').type('Тест ангид');
            cy.get('input[name="teacherName1"]').type('Багш 1');
            cy.get('input[name="teacherName2"]').type('Багш 2');
            //open datepicker and select day and close datepicker
            cy.get('[data-cy="HomePage-Modal-DatePicker-startDate-Button"]').then($button => {
                expect($button).to.be.visible;
            });
            cy.get('[data-cy="HomePage-Modal-DatePicker-startDate-Button"]').click();
            cy.get('table tbody tr td button').contains('5').click();
            cy.get('[data-cy="HomePage-Modal-DatePicker-startDate-Button"]').click();

            //open datepicker and select day and close datepicker
            cy.get('[data-cy="HomePage-Modal-DatePicker-endDate-Button"]').then($button => {
                expect($button).to.be.visible;
            });
            cy.get('[data-cy="HomePage-Modal-DatePicker-endDate-Button"]').click();
            cy.get('table tbody tr td button').contains('10').click();
            cy.get('[data-cy="HomePage-Modal-DatePicker-endDate-Button"]').click();

            cy.get('[data-cy="HomePage-Modal-DESIGN-RadioButton"]').click()

            // Submit the form
            cy.get('button').contains('Хадгалах').click();

            // Verify success message
            cy.get('.Toastify__toast--success').should('contain', 'Тест ангид class created successfully!');

        })

        it('4. Should display error message and disable button when required field aare not filled', () => {
            cy.get('[data-cy="HomePage-Add-Class-Button"]').click()
            cy.get('[data-cy="Add-Class-Modal"]').should('be.visible')
            cy.get('input[name="name"]').click();
            cy.get('input[name="teacherName1"]').click();
            cy.get('input[name="teacherName2"]').click();
            //open datepicker and close datepicker
            cy.get('[data-cy="HomePage-Modal-DatePicker-startDate-Button"]').click();
            cy.get('[data-cy="HomePage-Modal-DatePicker-startDate-Button"]').click();

            //open datepicker and close datepicker
            cy.get('[data-cy="HomePage-Modal-DatePicker-endDate-Button"]').then($button => {
                expect($button).to.be.visible;
            });
            cy.get('[data-cy="HomePage-Modal-DatePicker-endDate-Button"]').click();
            cy.get('[data-cy="HomePage-Modal-DatePicker-endDate-Button"]').click();
            cy.get
            //count how many error message displayed
            cy.get('div.text-red-500').should('have.length', 5)

            // Button disable
            cy.get('[data-cy="HomePage-AddClassModal-Submit-Button"]').should('be.disabled');

            //close modal
            cy.get('button.absolute.right-4').click();
            cy.get('[data-cy="Add-Class-Modal"]').should('not.exist')
        })
    })

})
