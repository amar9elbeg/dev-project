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

})
