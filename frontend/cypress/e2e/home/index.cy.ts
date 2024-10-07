describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    describe('Class Change', () => {
        it('1. Should change class category to coding', () => {
            cy.get('[data-cy="Class-Tabs-Coding-Classes"]').click()
        })

        it('2. Should change class category to design', () => {
            cy.get('[data-cy="Class-Tabs-Design-Classes"]').click()
        })

        it('3. Should change class category to all', () => {
            cy.get('[data-cy="Class-Tabs-All-Classes"]').click()
        })
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

        it('3. Should fill the form and submit successfully', () => {
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

        it('4. Should display error message and disable button when required field are not filled', () => {
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
    describe('ClassCard Menu',()=>{
        it('1. Should open menu when click',()=>{
            cy.get('[data-cy="HomePage-ClassCard-DropDownMenu-Menu-Button"]').first().focus().should('have.css', 'cursor', 'pointer').click()
            cy.get('[data-cy="HomePage-ClassCard-DropDownMenu-Menu-Content"]').should('be.visible')
        })
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

    describe('Class card navigation', () => {
        it('1. Should navigate to class home page on card clic', () => {
            cy.get('[data-cy="HomePage-ClassCard-Header"]').first().click()
            cy.url().should('include', `/classhome/`)
        })
    })

})
