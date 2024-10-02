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
    })

})
