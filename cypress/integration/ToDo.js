/// <reference types="Cypress" />

before('Go to url', () => {
    cy.visit("http://todomvc.com/examples/react")
    cy.url().should('eq', 'http://todomvc.com/examples/react/#/')
  })

describe('ToDoApp', () => {
    
    
    it('should add to do successfully', () => {
        cy.get('.new-todo').type('task to do {enter}')
        cy.get('.new-todo').type('another task to do {enter}')
        // cy.get('.new-todo').type( '{enter}')
        
    })

    it('should add a new todo successfully', () => {
        cy.get('.todo-list')
          .find('li')
          .should('have.length', 2);
    
        cy.getFirstTodoItem().should(
          'be.equal',
          'task to do'
        );
      });
  })