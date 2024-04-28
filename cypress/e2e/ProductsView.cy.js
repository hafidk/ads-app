import MockAdapter from 'axios-mock-adapter';

describe('template spec', () => {
  beforeEach(() => {
    // Start Cypress server and visit the page
    cy.visit('http://localhost:3000/');
  });

  it('renders products fetched from API', () => {
    // Define the mock response for the Axios request
    const mockResponse = {
      data: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ],
    };

    // Intercept the Axios request and respond with the mock data
    cy.intercept('/api/data', mockResponse).as('getProducts');

    // Wait for the Axios request to complete and the products to render
    cy.wait('@getProducts');

    // Assert that the products are rendered on the page
    cy.get('.product').should('have.length', 2); // Adjust the selector as per your application's structure
    cy.contains('Product 1');
    cy.contains('Product 2');
  });
});
