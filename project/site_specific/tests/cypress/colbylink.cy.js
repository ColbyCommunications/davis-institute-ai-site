describe('Colby Link', () => {
    it('Should go to ways to give page', () => {
        cy.visit('/');
        cy.get('.header__utility > ul > li:first-child a').click({ force: true });
        cy.origin('www.colby.edu', () => {
            cy.location('hostname', { timeout: 3000 }).should('include', 'www.colby.edu');
        });
    });
});
