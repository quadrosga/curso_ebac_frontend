/// <reference types="cypress" />

describe("Testes para funcionalidades da lista de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("deve preencher o formulário de adição de contato", () => {
    cy.get("input[type='text']").type("nome teste");
    cy.get("input[type='email']").type("nome@teste.com");
    cy.get("input[type='tel']").type("2112345678");
    cy.get(".adicionar").click();

    // Verifica se um novo contato foi adicionado
    cy.get(".contato").should("have.length", 4);

    // Tira um screenshot
    cy.screenshot("tela-adicao-contato");
  });

  it("deve alterar dados do contato", () => {
    // Clica no botão de edição do último contato
    cy.get(".edit").last().click();

    // Altera o nome do contato adicionando "2"
    cy.get("input[type='text']").clear().type("nome teste 2");
    cy.get(".alterar").click();

    // Verifica se o nome do contato foi alterado
    cy.get("ul").last().find("li").first().should("contain", "nome teste 2");

    // Tira um screenshot
    cy.screenshot("tela-edicao-contato");
  });

  it("deve remover contatos até restarem 3", () => {
    // Remove os contatos até que restem apenas 3
    cy.get(".contato").then(($contatos) => {
      const total = $contatos.length;

      if (total > 3) {
        for (let i = total; i > 3; i--) {
          cy.get(".delete").last().click();
          cy.wait(500); // Aguarda para garantir que a remoção foi processada
        }
      }
    });

    // Verifica que restaram exatamente 3 contatos
    cy.get(".contato").should("have.length", 3);

    // Tira um screenshot
    cy.screenshot("tela-remocao-contato");
  });
});
