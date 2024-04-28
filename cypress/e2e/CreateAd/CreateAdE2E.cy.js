import MockAdapter from 'axios-mock-adapter';

describe('Create an Ad E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should do the entire process for creating an Ad', () => {
     cy.get('.product-card').should('have.length.greaterThan', 0);

     cy.get('.product-card').first().click();
 
     cy.get('.ad').should('have.length', 0);
 
     cy.get('#create-ad').click();
 
     cy.get('input[name="title"]').type('New Ad Title');
     cy.get('textarea[name="description"]').type('New Ad Description');
         // Attach image file
         cy.fixture('image.jpg').then((fileContent) => {
          cy.get('input[type="file"]').then(($input) => {
            const file = new File([fileContent], 'image.jpg', { type: 'image/jpeg' });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            $input[0].files = dataTransfer.files;
            cy.wrap($input).trigger('change', { force: true });
          });
        });
     cy.get('button[type="submit"]').click();
 
     cy.location('pathname').should('eq', '/read/dumbells');

  });
});

