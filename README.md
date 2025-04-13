# Torneio Futsal

Projeto para gerenciamento de torneios de futsal.

#### Logs de Erro
Se ocorrer algum erro durante a execução, um arquivo chamado error.log será criado automaticamente na raiz do projeto.
A biblioteca winston foi utilizada para o gerenciamento de logs.

## 🚀 Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/JeanNesi/exercicio-tratamento-de-erros.git
```

### 2. Acesse a pasta do projeto
```bash
cd exercicio-tratamento-de-erros
```
Abra o terminal dentro da raiz do projeto e escolha uma das opções abaixo para executar a aplicação:

### 🔧 Opção 1: Rodando com Node.js
> É necessário ter o Node.js v18 ou superior instalado.

Instale as dependências:
```bash
npm install
```

Inicie a aplicação:
```bash
npm run dev
```

### 🐳 Opção 2: Rodando com Docker

Build da imagem:
```bash
docker build -t torneio-futsal .
```

Execute o container:
```bash
docker run --rm torneio-futsal
```

