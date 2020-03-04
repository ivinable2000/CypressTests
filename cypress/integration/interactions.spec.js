// /// <reference types = "Cypress" />
// This is a triple slash configuration to enable code completion, but must be applied to a file to work
// The jsconfig.json files enables code completion for all files

alert(Cypress.env('CYPRESS_MY_ENV_VARIABLE'));

describe('Basic page interactions', () =>{
    beforeEach(() => {
        cy.visit('/example-4');
    });
    
    it('sets the header text to the item\'s name when double clicked', () => {
        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
            .dblclick();
        
        cy.get('[data-cy=box-1-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two');
        
    });

    it('dispalys the correct count for the number of selected boxes', () => {
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input') //chooses the first child of the element and the tag "input" inside that child
            .check();

        cy.get('[data-cy=box-2-selected-count]')
            .invoke('text')
            .should('equal', '1');
    });

    it('displays the anme of the currently selected item', () => {
        cy.get('[data-cy=box-3-dropdown')
            .select('Option Three');

        cy.get('[data-cy=box-3-selected-name')
            .invoke('text')
            .should('equal', 'Option Three');
    });

    it('should display of the most recently hovered item', () => {
        cy.get('[data-cy=box-4-items-list] > :nth-child(2)')
            .trigger('mouseover', 10, 20)
            //how to activate debugger
            // .then(() => {
            //     debugger;
            // });
            //shorthand for activating debugger
            //.debug()
        
            cy.get('[data-cy=box-4-selected-name]')
                .invoke('text')
                .should('equal', 'Option Two')
    });
})

//Common assertions
//.should('have.length', '3')
//.should('exist') or .should('not.exist')
//.should('have.class', 'list-item-selected') to check CSS Classes
//.should('have.css', 'background-color', 'blue) to check specific styles
//.invoke('text') should('contain') or .should('not.contain') to checl for text content

/*
Sinon Library for using test doubles
cy.stub and cy.spy

import { api } from './my-api';
//api.getUser();

replaces the functions and checks
cy.stub(api, 'getUser')
    .returns({ name: 'Bill' });
    or
    .resolves({ name: 'Bill' });
    or
    .rejects(); //network error

watches the functions and asserts
const mySpy = 
    cy.spy(api, 'getUser');

expect(mySpy).to.be.called
*/

/**
 * CYPRESS EXTRA COMMANDS
 * ==============================================
 * 
 * cy.wrap() is used to replace chai assertions
 *  expect($element) ...       -- OLD WAY
 *  cy.wrap($element).should() -- NEW WAY
 * 
 * -=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=
 * cy.and is used to concatanate should() assertions
 * cy.get('h1')
 *  .should(...)        -- OLD WAY
 *  .should(...)
 * 
 * cy.get('h1)
 *  .should(...)        -- NEW WAY
 *  .and(...)
 * 
 * -=-=-=-=-=-=--=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=
 * cy.get(...).filter() is used to filter the HTML tags by selecting by a tag
 * cy.get(...).not() is used to filter HTML tags by selecting everything but a tag
 * 
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=
 * .type() is used to type special characters on a web application, like enter, tab, etc.
 * 
 * cy.get(...)
 *  .type('This is a test {enter});
 * 
 */