- Na pasta index.js na raiz do projeto.

  ```javascript
  const express = require("express");
  ```

- import do express

  ```javascript
  const app = express();
  ```

- definindo o app como express

  ```javascript
  app.use(express.json());
  ```

- definindo o JSON no projeto

  ```javascript
  const Conn = require("./models/conn/index");
  ```

- importando a conexao

  ```javascript
  Conn();
  ```

- executa a func de conexao

  ```javascript
  const cidadesRouter = require("./routers/cidades.routes");
  ```

  ```javascript
  const estadosRouter = require("./routers/estados.routes");
  ```

  ```javascript
  const paisesRouter = require("./routers/paises.routes");
  ```

- Importando as rotas

  ```javascript
  app.use('/cidades',cidadesRouter);
  app.use('/estados',estadosRouter);
  app.use('/paises',paisesRouter);
  ```

- Chamando as rotas que foram importadas

  ```javascript
  app.get("/",(req,res) =>{
      res.json({api:"ok"})
  
  })
  ```

- Rota que leva para a raiz da aplicação

  ```javascript
  app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
  });
  ```

- Função `app.listen()`indicando exatamente onde nosso servidor irá rodar