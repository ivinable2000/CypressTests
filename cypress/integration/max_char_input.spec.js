describe('Text Box with max characters', () => {
    it('displats the appropraite remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-last-name"]').type('hello');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10');

            cy.get('[data-cy="input-last-name"]').type(' my friend');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');
    })

    it('prevents the user from typing more characters once the max is exceeded', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]').type('this is longer than 15 characters');

        cy.get('[data-cy="input-last-name"]')
            .should('have.attr', 'value', 'this is longer ')
    })
})