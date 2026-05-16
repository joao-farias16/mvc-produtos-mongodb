# Sistema MVC de Produtos com MongoDB

## Descrição

Aplicação web desenvolvida utilizando Node.js, Express, EJS e MongoDB seguindo o padrão MVC (Model-View-Controller).

O sistema permite:

- Página Home
- Página Sobre
- Página Contato
- Cadastro de produtos
- Listagem de produtos
- Edição de produtos
- Exclusão de produtos
- Armazenamento persistente utilizando MongoDB Atlas
- Interface moderna e responsiva

---

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- EJS
- CSS
- Dotenv

---

## Estrutura do projeto

```plaintext
src/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── produtoController.js
│
├── models/
│   └── Produto.js
│
├── routes/
│   └── produtoRoutes.js
│
├── views/
│   ├── home.ejs
│   ├── sobre.ejs
│   ├── contato.ejs
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
└── server.js
```

---

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

---

## Configuração do ambiente

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
```

---

## Executando o projeto

Rodar:

```bash
npm run dev
```

Servidor:

```plaintext
http://localhost:3000
```

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

## Funcionalidades

- Persistência utilizando MongoDB
- CRUD completo
- Organização MVC
- Componentes reutilizáveis
- Interface moderna
- Responsividade

---

## Observações

Projeto desenvolvido para fins acadêmicos com foco na prática de:

- Node.js
- Express
- MongoDB
- Mongoose
- MVC
- CRUD
- Organização de projetos