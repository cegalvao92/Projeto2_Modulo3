<!-- # Projeto2_Modulo3

- Dentro da pasta Models tem os modelos de banco dos arquivos cidades.js, estados.js e paises.js.

  ```javascript
  const mongoose = require("mongoose");
  ```

- importando o mongoose

```javascript
const cidadesModel = new mongoose.Schema({
    nome: { type: String, required: true },
    quantidadeDeBairros: { type: Number, required: true },
    populacao: { type: Number, required: true },
    dataAniversarioCidade: { type: Date, required: true }
});

```

```javascript
const estadosModel = new mongoose.Schema({
    nome: { type: String, required: true },
    regiao: { type: String, required: true },
    populacao: { type: Number, required: true },
    valorSalarioMinimo: { type: Number, required: true }
});
```

```javascript
const paisesModel = new mongoose.Schema({
    nome: { type: String, required: true },
    linguaMae: { type: String, required: true },
    populacao: { type: Number, required: true },
    pib: { type: Number, required: true }
});
```

- criando nosso modelo do banco

```javascript
const Cidade = mongoose.model("Cidades",cidadesModel);
```

```javascript
const Estado = mongoose.model("Estados",estadosModel);
```

```javascript
const Pais = mongoose.model("Paises",paisesModel);
```

- a criação do modelo na colection.

  ```javascript
  module.exports = Pais;
  ```

- Exportando o modelo pronto  -->