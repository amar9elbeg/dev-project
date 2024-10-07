import { CreateStudentMutationMutationResult } from '../../../generated/index';
describe('Class home page - Topic section', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-cy="HomePage-ClassCard-Header"]').first().click();
        cy.url().should('include', `/classhome/`);
        cy.get('[data-cy="ClassHomePage-ClassItemTabs-Topic"]').click();
    });

    describe('Add topic Modal', () => {
        it('1. Should open add topic modal when click button', () => {
            cy.get('[data-cy="ClassHomePage-AddTopic-OpenModal-Button"]').click();
            cy.get('[data-cy="Add-Topic-Modal"]').should('be.visible');
        });

        it('2. Should close modal when click on the X button', () => {
            cy.get('[data-cy="ClassHomePage-AddTopic-OpenModal-Button"]').click();
            cy.get('[data-cy="Add-Topic-Modal"]').should('be.visible');
            cy.get('button.absolute').click();
            cy.get('[data-cy="Add-Topic-Modal"]').should('not.exist');
        });

        it('3. Should fill the form and submit successfully', () => {

            cy.get('[data-cy="ClassHomePage-AddTopic-OpenModal-Button"]').click();
            cy.get('[data-cy="Add-Topic-Modal"]').should('be.visible');

            cy.get('input[name="name"]').type('topicNew');
            cy.get('input[name="description"]').type('topic decsription');
            cy.get('textarea[name="defaultFeedbackGood"]').type('default feed back 1');
            cy.get('textarea[name="defaultFeedbackMedium"]').type('default feed back 1');
            cy.get('textarea[name="defaultFeedbackNotEnough"]').type('default feed back 1');

            cy.get('[data-cy="HomePage-Modal-active-RadioButton"]').click(); 

            // Submit the form
            cy.get('button').contains('Хадгалах').click();

            // Verify success message
            cy.get('.Toastify__toast--success').should('contain', 'topicNew topic added successfully!');
            cy.intercept('POST', 'http://localhost:3000/api/graphql', (req) => {
                console.log("request", req);
            })
        });

        it('4. Should display error message and disable button when required fields are not filled', () => {
            cy.get('[data-cy="ClassHomePage-AddTopic-OpenModal-Button"]').click();
            cy.get('[data-cy="Add-Topic-Modal"]').should('be.visible');

            cy.get('input[name="name"]').click();
            cy.get('input[name="description"]').click();
            cy.get('textarea[name="defaultFeedbackGood"]').click();
            cy.get('textarea[name="defaultFeedbackMedium"]').click();
            cy.get('textarea[name="defaultFeedbackNotEnough"]').click();
            cy.get('[data-cy="HomePage-Modal-active-RadioButton"]').click(); 


            cy.get('div.text-red-500').should('have.length', 5);

            cy.get('[data-cy="ClassHomePage-AddTopic-Save-Button"]').should('be.disabled');

        })
    })

    describe('Adjust student Modal', () => {
        it('1. Should open adjust topic modal when click dropdown menu', () => {
            cy.get('[data-cy="ClassHomePage-TopicTable-DropDownMenu-Menu-Button"]').first().focus().should('have.css', 'cursor', 'pointer').click()
            cy.get('[data-cy="ClassHomePage-TopicTable-DropDownMenu-Menu-Content"]').should('be.visible')
            cy.get('[data-cy="ClassHomePage-TopicTable-DropDownMenu-Edit-Button"]').click()
            cy.get('[data-cy="ClassHomePage-AdjustTopic-Modal"]').should('be.visible')
        })
        it('2. Should open adjust topic modal when click dropdown menu', () => {
            cy.get('[data-cy="ClassHomePage-TopicTable-DropDownMenu-Menu-Button"]').first().focus().should('have.css', 'cursor', 'pointer').click()
            cy.get('[data-cy="ClassHomePage-TopicTable-DropDownMenu-Menu-Content"]').should('be.visible')
            cy.get('[data-cy="ClassHomePage-TopicTable-DropDownMenu-Edit-Button"]').click()
            cy.get('[data-cy="ClassHomePage-AdjustTopic-Modal"]').should('be.visible')
            cy.get('button.absolute').click();
            cy.get('[data-cy="ClassHomePage-AdjustTopic-Modal"]').should('not.exist')
        })
        it('3. Should change inputs in form and submit successfully', () => {
            cy.get('[data-cy="ClassHomePage-TopicTable-DropDownMenu-Menu-Button"]').first().focus().should('have.css', 'cursor', 'pointer').click()
            cy.get('[data-cy="ClassHomePage-TopicTable-DropDownMenu-Menu-Content"]').should('be.visible')
            cy.get('[data-cy="ClassHomePage-TopicTable-DropDownMenu-Edit-Button"]').click()
            cy.get('[data-cy="ClassHomePage-AdjustTopic-Modal"]').should('be.visible')

            cy.get('input[name="name"]').clear().type('change');
            cy.get('input[name="description"]').clear().type('change');
            cy.get('textarea[name="defaultFeedbackGood"]').clear().type('change');
            cy.get('textarea[name="defaultFeedbackMedium"]').clear().type('change');
            cy.get('textarea[name="defaultFeedbackNotEnough"]').clear().type('change');

            // Submit the form
            cy.get('[data-cy="ClassHomePage-AdjustTopic-Save-Button"]').click();

            // Verify success message
            cy.get('.Toastify__toast--success').should('contain', 'topic updated successfully!');

        })
    })

    describe('Search input',()=>{
        it('1. Should type on search input', ()=>{
            cy.get('[data-cy="ClassHomePage-TopicSection-Search-Input"]').type('search')
            cy.get('[data-cy="ClassHomePage-TopicSection-Search-Input"]').clear()


        })
    })
})