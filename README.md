# Cadastro de notas de alunos via API RestFull ![Badge](https://img.shields.io/badge/Status-Conclu%C3%ADdo-green)

API RestFull para cadastro de notas de alunos utilizando mongodb desenvolvido no bootcamp fullstack da IGTI

## <img src="https://img.icons8.com/ios-filled/20/000000/browser-window.png"/> Insomnia

<p align="center">
  <img src="https://github.com/cicerorod/igti-fullstack-mod4-crud-mongodb/blob/master/img/tela.PNG">
</p>

## ![](https://img.icons8.com/metro/20/000000/run-command.png) Execução

1. Clonar via prompt de comando o projeto em uma pasta de sua preferência: `git clone https://github.com/cicerorod/igti-fullstack-mod4-crud-mongodb.git`
2. Acessar a pasta principal do projeto via prompt de comando. Ex: `cd igti-fullstack-mod4-crud-mongodb`;
3. Executar o comando `yarn` para baixar as dependências. Ex: `yarn`;
4. Executar o comando `yarn start`. Ex: `yarn start`
5. Acessar o endereço `http://localhost:3000` conforme rotas definidos no item rotas

### ![](https://img.icons8.com/metro/20/000000/run-command.png) Rotas

#### `/studentRouter/student`

HTTP GET solicitação que retorna uma resposta JSON contendo as notas cadastradas.

##### `GET`: `http://localhost:3000/studentRouter/student/`

##### Exemplo de retorno:

```json
[
  {
    "_id": "5ef8404586891b16db8f48ff",
    "name": "Pedro Augusto",
    "subject": "Historia",
    "type": "Trabalho Pratico",
    "value": 17.5,
    "lastModified": "2020-07-24T03:47:46.202Z"
  },
  {
    "_id": "5ef8405586891b16db8f4902",
    "name": "Ana Maria Silva",
    "subject": "Portugues",
    "type": "Prova Final",
    "value": 23.8,
    "lastModified": "2020-07-24T03:47:46.207Z"
  }
]
```

#### `/studentRouter/student/id`

HTTP DEL, solicitação para excluir um registro referente ao `id`.

##### `DEL`: `http://localhost:3000/studentRouter/student/id`

##### Exemplo: `http://localhost:3000/studentRouter/student/5ef985cf8df14a28a0b7d66a`

##### Exemplo de retorno:

```Request
200OK
```

#### `/studentRouter/student`

HTTP POST para inserção de registros. O formato da solicitação é JSON.

##### `Post`: `http://localhost:3000/studentRouter/student/`

##### Exemplo de parâmetro:

```json
{
  "name": "ciceo Rodrigues 05",
  "subject": "Matematica",
  "type": "Trabalho Pratico",
  "value": 100
}
```

##### Exemplo de retorno:

```Json
{
  "_id": "5f1a62353708e80eb878c20b",
  "name": "ciceo Rodrigues 05",
  "subject": "Matematica",
  "type": "Trabalho Pratico",
  "value": 100,
  "lastModified": "2020-07-24T04:23:17.870Z",
  "__v": 0
}

```

#### `/studentRouter/student/`

HTTP PATCH para alteração de registros. O formato da solicitação é JSON.

##### `Post`: `http://localhost:3000/studentRouter/student/5ef985d38df14a28a0b7d66b`

##### Exemplo de parâmetro:

```json
{
  "name": "ciceo Rodrigues Silva ",
  "subject": "Matematica",
  "type": "Trabalho Pratico",
  "value": 200
}
```

##### Exemplo de retorno:

```Json
{
  "_id": "5ef985d38df14a28a0b7d66b",
  "name": "ciceo Rodrigues Silva",
  "subject": "Matematica",
  "type": "Trabalho Pratico",
  "value": 200,
  "lastModified": "2020-06-29T06:10:27.973Z",
  "__v": 0
}

```

<!-- :hammer:-->

## ![](https://img.icons8.com/ios-filled/20/000000/hammer.png) Recursos utilizados:

- **[Node.js](https://nodejs.org/en/)**
- **[Mongoose](https://mongoosejs.com/docs/)**
- **[Express](https://expressjs.com/pt-br/)**
- **[DotEnv](https://www.npmjs.com/package/dotenv)**
- **[Cors](https://www.npmjs.com/package/cors)**
- **[Json](https://www.w3schools.com/js/js_json_intro.asp)**
- **[Nodemon](https://www.npmjs.com/package/nodemon)**
- **[Insomnia](https://insomnia.rest/download/)**
- **[MongoDB](https://www.mongodb.com/)**
- **[MongodB Compass GUI](https://www.mongodb.com/download-center/compass)**
- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)**
- **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=hackingcarreira_wmc-github-gllemos)**

## ![](https://img.icons8.com/ios-glyphs/20/000000/pull-request.png) Contribuições

1. Faça o _fork_ do projeto (<https://github.com/cicerorod/igti-fullstack-mod4-crud-mongodb/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/[nome]`)
3. Faça o _commit_ (`git commit -am 'Add files [nome]'`)
4. _Push_ (`git push origin feature/[nome]`)
5. Crie um novo _Pull Request_

## ![](https://img.icons8.com/windows/20/000000/regular-document.png) Licença

Este projeto está sob a licença do MIT. Consulte [LICENSE](https://github.com/cicerorod/igti-fullstack-mod4-crud-mongodb/blob/master/LICENSE) para obter mais informações.

## ![](https://img.icons8.com/ios-glyphs/22/000000/code-file.png) Desenvolvedor

<img src="https://avatars.githubusercontent.com/cicerorod" width=115>

[![](https://img.icons8.com/fluent/30/000000/github.png)](https://github.com/cicerorod)
[![](https://img.icons8.com/metro/25/000000/linkedin.png)](https://www.linkedin.com/in/c%C3%ADcero-rodrigues-89623784/)
[![](https://img.icons8.com/metro/25/000000/facebook.png)](https://www.facebook.com/cicero.rodrigues.90834)
[![](https://img.icons8.com/material-rounded/29/000000/instagram-new.png)](https://www.instagram.com/cicero_rod/)
[![](https://img.icons8.com/metro/26/000000/email.png)](mailto:cicerorod@gmail.com)

<p align="center">
  <img src="https://img.icons8.com/wired/32/000000/icons8-new-logo.png" >
  </br>
  <a href="https://icons8.com/icon/">Icons by Icons8</a>
  
</p>
