/// <reference types="cypress" />

describe("Login", () => {
  it("Login com sucesso", () => {
    // Abrir a aplicação
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('h5.oxd-text.oxd-text--h5.orangehrm-login-title').should('contain', 'Login');

    // Preencher email e senha
    cy.get("input[placeholder$=Username]").type("Admin");
    cy.get("input[placeholder^=Password]").type("admin123");

    // Clicar no botão de login
    cy.get("button").click();

    // Verificar se o login foi bem-sucedido
    cy.url().should("include", "/dashboard");
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should("contain","Dashboard");
  });

  it("E-mail incorreto", () => {
    // Usuário insere E-mail inválido e recebe uma mensagem de erro.
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("input[placeholder$=Username]").type("sadagadhau");
    cy.get("input[placeholder^=Password]").type("admin123");
    cy.get("button").click();
    cy.get('h5.oxd-text.oxd-text--h5.orangehrm-login-title').should('contain', 'Login');
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials');
});

  it("Senha incorreta", () => {
    // Usuário insere senha inválida e recebe uma mensagem
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("input[placeholder$=Username]").type("Admin");
    cy.get("input[placeholder^=Password]").type("admin1234");
    cy.get("button").click();
    cy.get('h5.oxd-text.oxd-text--h5.orangehrm-login-title').should('contain', 'Login');
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials');
  });
  it("Senha e e-mail vazios", () => {
    // Inserir senha e e-mail vazios
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("input[placeholder$=Username]").clear();
    cy.get("input[placeholder^=Password]").clear();
    cy.get("button").click();
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('contain', 'Required');
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('contain', 'Required');
  });

  it("Fazer o Logout", () => {
    // Fazer o logout e verificar se foi bem-sucedido
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("input[placeholder$=Username]").type("Admin");
    cy.get("input[placeholder^=Password]").type("admin123");
    cy.get("button").click();
    cy.url().should("include", "/dashboard");
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
    cy.get(':nth-child(4) > .oxd-userdropdown-link').contains('Logout').click();
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of undefined (reading 'response')")) {
      return false;
    }
  });
    
})
