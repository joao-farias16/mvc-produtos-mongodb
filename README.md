# Sistema MVC de Produtos com MongoDB

## Descrição

Aplicação web desenvolvida utilizando Node.js, Express, EJS e MongoDB seguindo o padrão MVC (Model-View-Controller).

O sistema permite:

* Página Home
* Página Sobre
* Página Contato
* Autenticação de usuários
* Controle de sessão
* Proteção de rotas
* Cadastro de produtos
* Listagem de produtos
* Edição de produtos
* Exclusão de produtos
* Armazenamento persistente utilizando MongoDB Atlas
* Documentação interativa utilizando Swagger/OpenAPI
* Interface moderna e responsiva

---

## Tecnologias Utilizadas

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* EJS
* CSS
* Dotenv
* Express Session
* Cookie Parser
* Swagger UI Express
* Swagger JSDoc

---

## Estrutura do Projeto

```plaintext
src/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── produtoController.js
│   └── authController.js
│
├── middlawares/
│   └── auth.js
│
├── models/
│   └── Produto.js
│
├── routes/
│   ├── produtoRoutes.js
│   └── authRoutes.js
│
├── swagger/
│   └── swagger.js
│
├── views/
│   ├── home.ejs
│   ├── sobre.ejs
│   ├── contato.ejs
│   ├── login.ejs
│   ├── produtos.ejs
│   │
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
├── public/
│   └── css/
│       └── style.css
│
└── app.js
```

---

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

---

## Configuração do Ambiente

Este projeto utiliza variáveis de ambiente.

O arquivo `.env` não é enviado para o GitHub por conter informações privadas.

Crie um arquivo:

```plaintext
.env
```

Utilize o arquivo `.env.example` como modelo:

```env
PORT=3000
MONGO_URI=SUA_STRING_MONGODB_AQUI
SESSION_SECRET=sua_chave_secreta
```

Substitua:

```plaintext
SUA_STRING_MONGODB_AQUI
```

pela string do seu MongoDB Atlas.

Exemplo:

```env
PORT=3000
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/produtosMVC?retryWrites=true&w=majority&appName=Cluster0
SESSION_SECRET=minha_chave_secreta
```

---

## Executando o Projeto

Rodar:

```bash
npm run dev
```

ou

```bash
node src/app.js
```

Servidor:

```plaintext
http://localhost:3000
```

---

## Autenticação

O sistema possui autenticação de usuários baseada em sessões utilizando Express Session.

As rotas protegidas exigem autenticação prévia para acesso, garantindo maior controle sobre a navegação da aplicação.

---

## Rotas

### Home

```plaintext
GET /
```

### Sobre

```plaintext
GET /sobre
```

### Contato

```plaintext
GET /contato
```

### Login

```plaintext
GET /login
POST /login
```

### Logout

```plaintext
GET /logout
```

### Produtos

Listar:

```plaintext
GET /produtos
```

Cadastrar:

```plaintext
POST /produtos/adicionar
```

Editar:

```plaintext
GET /produtos/editar/:id
POST /produtos/editar/:id
```

Excluir:

```plaintext
GET /produtos/excluir/:id
```

---

## Documentação Swagger

A documentação interativa da aplicação está disponível em:

```plaintext
http://localhost:3000/api-docs
```

Através dela é possível:

* Visualizar todos os endpoints disponíveis
* Consultar parâmetros de requisição
* Ver exemplos de entrada e saída
* Testar rotas diretamente pelo navegador utilizando o recurso **Try it out**
* Facilitar a integração com aplicações Front-end e Mobile

---

## Funcionalidades

* Autenticação de usuários
* Controle de sessão
* Proteção de rotas
* Persistência utilizando MongoDB Atlas
* CRUD completo de produtos
* Organização em padrão MVC
* Componentes reutilizáveis com EJS
* Documentação OpenAPI com Swagger
* Interface moderna
* Responsividade

---

## Observações

Projeto desenvolvido para fins acadêmicos com foco na prática de:

* Node.js
* Express
* MongoDB
* Mongoose
* MVC
* CRUD
* Sessões
* Swagger/OpenAPI
* Documentação de APIs
* Organização de projetos

```
```
