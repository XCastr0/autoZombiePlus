🧟‍♂️ Zombie+ Automation Project
Este projeto é uma automação de testes para o site Zombie+, desenvolvido utilizando a poderosa biblioteca Playwright. Aqui você encontrará detalhes sobre a estrutura do projeto, como configurá-lo e executar os testes.

🎯 Objetivo
Automatizar o fluxo de teste do site Zombie+, garantindo a qualidade da experiência do usuário ao verificar cenários importantes, como login, navegação entre páginas e interações específicas.

📂 Estrutura do Projeto
A estrutura do projeto segue uma organização modular para facilitar o entendimento e a manutenção:

bash
Copiar código
zombieplus-automation/
├── tests/                     # Testes automatizados
│   ├── login.spec.js          # Testes de login
│   ├── navigation.spec.js     # Testes de navegação
│   ├── video-playback.spec.js # Testes de reprodução de vídeo
│   └── ...
├── utils/                     # Arquivos utilitários e helpers
│   └── helpers.js
├── reports/                   # Relatórios gerados pelos testes
├── playwright.config.js       # Configurações do Playwright
├── package.json               # Dependências e scripts
└── README.md                  # Documentação do projeto
🚀 Configuração e Execução
1️⃣ Pré-requisitos
Antes de começar, certifique-se de que você tem os seguintes requisitos instalados:

Node.js (versão LTS recomendada)
npm ou yarn
2️⃣ Clonar o repositório
bash
Copiar código
git clone https://github.com/seu-usuario/zombieplus-automation.git
cd zombieplus-automation
3️⃣ Instalar dependências
bash
Copiar código
npm install
4️⃣ Executar os testes
Para rodar os testes, utilize o comando:

bash
Copiar código
npx playwright test
5️⃣ Gerar relatório
Após a execução dos testes, você pode gerar um relatório interativo:

bash
Copiar código
npx playwright show-report
📝 Testes Automatizados
Os seguintes cenários foram automatizados:

Login

Validação de credenciais válidas e inválidas.
Teste de mensagens de erro para campos obrigatórios.
Navegação

Garantia de que o menu principal leva às páginas corretas.
Testes de responsividade em diferentes tamanhos de tela.
Reprodução de Vídeo

Verificação se os vídeos são reproduzidos corretamente.
Teste de mensagens de erro para vídeos indisponíveis.
⚙️ Tecnologias Utilizadas
Playwright: Biblioteca para automação de navegadores.
Node.js: Ambiente de execução JavaScript.
Allure Reports: Para gerar relatórios detalhados (opcional).
GitHub Actions: Configurado para integração contínua (se aplicável).
🤝 Contribuição
Se você deseja contribuir para este projeto:

Faça um fork do repositório.
Crie uma branch para sua funcionalidade (git checkout -b feature/nova-funcionalidade).
Envie suas alterações por meio de um pull request.
📞 Contato
Se tiver dúvidas ou sugestões, entre em contato comigo:

LinkedIn: Beatriz Castro
GitHub: XCastr0
