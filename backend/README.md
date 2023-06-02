# Descrição do Projeto

Este é um projeto de backend robusto e eficiente construído com Node.js, Express, JSON Web Token (JWT), Prisma Client e Amazon Simple Email Service (SES) SDK. O projeto foi estruturado para suportar uma aplicação de grande escala, com foco em segurança, desempenho e eficiência que vamos conectar com uma aplicação mobile.

# Tecnologias usado no Backend

Biblioteca Node.js produção
  * dotenv
  * express
  * jsonwebtoken
  * @prisma/client
  * @aws-sdk/client-ses

Biblioteca Node.js desenvolvimento
  * prisma
  * ts-node
  * nodemon
  * typescript
  * @types/node
  * @types/express
  * @types/jsonwebtoken

## Descrição das tecnologias usadas:

### Node.js & Express.js:
  Utilizamos Express, um framework web minimalista e flexível para Node.js, para criar nossa API RESTful. Ele fornece um conjunto robusto de recursos para construir aplicativos web e móveis de única e múltiplas páginas, bem como APIs híbridas.

### JSON Web Token (JWT):
  Para autenticação e segurança, usamos JSON Web Tokens. JWT é um padrão aberto (RFC 7519) que define uma maneira compacta e independente de transmitir informações de forma segura entre as partes como um objeto JSON.

### Prisma Client:
  Utilizamos o Prisma como ORM para lidar com nossas operações de banco de dados. O Prisma Client é um cliente de banco de dados auto-hospedado, otimizado para desenvolvedores e usado para enviar consultas ao banco de dados.

### AWS SES (Amazon Simple Email Service):
  AWS SES é um serviço de envio de e-mail flexível, rentável e escalável que permite aos desenvolvedores enviar e-mails a partir de dentro de qualquer aplicação. Utilizamos o @aws-sdk/client-ses para integrar este serviço em nossa aplicação.

Instalação:

Antes de começar, certifique-se de ter Node.js e npm/yarn instalados em seu ambiente.

Clone o repositório em seu local de trabalho:

  ```bash
  $ git clone https://github.com/SilvaneiMartins/twitter-clone
  ```
Navegue até a pasta do projeto:

  ```bash
  $ cd twitter-clone/backend
  ```
Instale as dependências do projeto:

  ```bash
  $ yarn
  ```
ou

  ```bash
  $ npm install
  ```
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

  ```bash
  $ DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
  $ JWT_SECRET="your_jwt_secret"
  $ AWS_ACCESS_KEY_ID="your_aws_access_key_id"
  $ AWS_SECRET_ACCESS_KEY="your_aws_secret_access_key"
  ```
Execute as migrações do Prisma:

  ```bash
  $ yarn prisma migrate dev
  ```

Inicie o servidor:

  ```bash
  $ yarn dev
  ```
ou

  ```bash
  $ npm run dev
  ```

O servidor estará rodando na porta definida em suas variáveis de ambiente (por padrão, é a porta 3333).

Este é um projeto de código aberto. Sinta-se à vontade para fazer um fork, sugerir melhorias, relatar problemas ou enviar solicitações de pull.

Para qualquer dúvida ou discussão sobre o código, sinta-se à vontade para abrir uma issue.

## Contribuição:

Pull requests são bem-vindas. Para mudanças importantes, por favor, abra um problema primeiro para discutir o que você gostaria de mudar.

Certifique-se de atualizar os testes conforme apropriado.

# Desenvolvedor

<a href="https://github.com/SilvaneiMartins">
    <img
        style="border-radius:50%"
        src="https://github.com/SilvaneiMartins.png"
        width="100px;"
        alt="Silvanei Martins"
    />
    <br />
    <sub>
        <b>Silvanei de Almeida Martins</b>
    </sub>
</a>
     <a href="https://github.com/SilvaneiMartins" title="Silvanei martins" >
 </a>
<br />
🚀 Feito com ❤️ por Silvanei Martins
