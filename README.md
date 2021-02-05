# teste-tecnico-backend-seidor
Teste técnico para vaga de backend júnior. API de utilização de automóveis com CRUD básico.

# Rodando o Back End
Server Local

# Com o git/With git
# Clone este repositório/Clone this repository
$ git clone <https://github.com/lenizelira/teste-tecnico-backend-seidor.git>

# Acesse a pasta do projeto no terminal - cmd/Access the mkdir of project on terminal
$ cd teste-tecnico-backend-seidor

# Instale as dependências/Install the dependencies
$ npm install
$ npm instal mongoose

# Execute o servidor/Run the server
$ npm start

# O servidor inciará na porta:5050 - acesse <http://localhost:8080>
# Mongo conectado em mongodb://localhost:27017/teste connected to mongodb

# Arquitetura

Arquitetura MVC
    |
    \--📂 teste-tecnico-backend-seidor
        |   README.md  
        |   .gitignore
        |   package-lock.json
        |   package.json
        |   **server.js**
        \--📂 node_modules
        \--📂src
            📂---controllers
            |       aluguelController.js
            |       automovelController.js
            |       motoristaController.js
            |
            📂---models
            |       aluguelSchema.js
            |       automovelSchema.js
            |       motoristachema.js
            |       repository.js   
            |
            📂---routes
            |       aluguelRoute.js
            |       automovelRoute.js
            |       motoristaRoute.js
            |__      index.js**


![Representação visual/diagrama](https://app.diagrams.net/#G1Kn3y6ju_JS5z_ZhEgwbWOU5lLd4HJrNA)


