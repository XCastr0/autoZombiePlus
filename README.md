🧟‍♂️ Zombie+ Automation Project
Este projeto realiza a automação de testes para o site Zombie+, utilizando a biblioteca Playwright. Os testes cobrem fluxos principais, como login, navegação e manipulação de filmes.

🎯 Objetivo
Automatizar cenários críticos do site Zombie+ para garantir qualidade e estabilidade, como login, cadastro de leads e manipulação de filmes.

📂 Estrutura do Projeto
A estrutura do projeto está organizada para facilitar a separação de responsabilidades e a reutilização de código:
![image](https://github.com/user-attachments/assets/c2aec691-b9d3-4ce8-8de6-a0854d2c287b)



🚀 Configuração e Execução
1️⃣ Pré-requisitos
Antes de começar, você precisará:

Node.js (versão LTS recomendada)
npm
2️⃣ Instalar dependências
Clone o repositório e instale as dependências:


git clone https://github.com/seu-usuario/zombieplus-automation.git
cd zombieplus-automation
npm install
3️⃣ Configurar o ambiente
Certifique-se de que os dados necessários estão no arquivo movies.json, dentro de tests/support/fixtures/.

4️⃣ Executar os testes
Para rodar todos os testes:

npx playwright test
Para executar um teste específico:
bash
Copiar código
npx playwright test tests/e2e/login.spec.js
5️⃣ Gerar relatório
Depois de rodar os testes, você pode gerar um relatório:

npx playwright show-report
📝 Testes Automatizados
Os seguintes cenários estão cobertos:

1. Login (login.spec.js)
Verificar login com credenciais válidas.
Verificar mensagens de erro com credenciais inválidas.
Testar fluxo de logout.
2. Leads (leads.spec.js)
Criar novos leads através do formulário.
Validar campos obrigatórios.
Verificar envio duplicado.
3. Filmes (movies.spec.js)
Listar filmes disponíveis.
Reproduzir um filme selecionado.
Adicionar filmes aos favoritos.
⚙️ Tecnologias Utilizadas
Playwright: Automação de navegadores para testes de ponta a ponta.
JavaScript: Linguagem principal do projeto.
JSON: Para fixtures e dados de teste.
Relatórios do Playwright: Visualizar resultados detalhados.
📈 Relatórios
Os relatórios são gerados automaticamente na pasta playwright-report após a execução dos testes. Para abrir o relatório:

npx playwright show-report

