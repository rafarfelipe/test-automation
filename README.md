# Testes E2E do Cypress para Funcionalidade de Login

Este projeto contém testes end-to-end para a funcionalidade de login da aplicação de demonstração OrangeHRM usando Cypress.

## Cenários de Teste

Os seguintes cenários de teste são cobertos:

1. **Login com Sucesso**
   - Abre a aplicação.
   - Preenche o nome de usuário e a senha.
   - Clica no botão de login.
   - Verifica se o login foi bem-sucedido verificando a URL e a presença do dashboard.

2. **E-mail Incorreto**
   - Abre a aplicação.
   - Preenche um nome de usuário incorreto e a senha correta.
   - Clica no botão de login.
   - Verifica se uma mensagem de erro é exibida indicando credenciais inválidas.

3. **Senha Incorreta**
   - Abre a aplicação.
   - Preenche o nome de usuário correto e uma senha incorreta.
   - Clica no botão de login.
   - Verifica se uma mensagem de erro é exibida indicando credenciais inválidas.

4. **E-mail e Senha Vazios**
   - Abre a aplicação.
   - Deixa os campos de nome de usuário e senha vazios.
   - Clica no botão de login.
   - Verifica se mensagens de erro são exibidas indicando que os campos são obrigatórios.

5. **Logout**
   - Faz login com o nome de usuário e senha corretos.
   - Clica no botão de logout.
   - Verifica se o logout foi bem-sucedido.

## Executando os Testes

Para executar os testes, use o seguinte comando:

```sh
npx cypress open
```

Isso abrirá o Cypress Test Runner, onde você pode selecionar e executar os testes.

## Tratamento de Exceções

Os testes incluem um manipulador para exceções não capturadas para evitar falhas nos testes devido a certos problemas conhecidos:

```javascript
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("Cannot read properties of undefined (reading 'response')")) {
    return false;
  }
});
```

Este manipulador ignora exceções específicas que são conhecidas por ocorrer durante os testes.
