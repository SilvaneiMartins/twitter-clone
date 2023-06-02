<h1 align="center">
   CLONE TWITTER
</h1>

<h3 align="center">
	🚧  APLICAÇÃO BACKEND E MOBILE EM CONSTRUÇÃO...  🚧
</h3>

## Informações e processo de instalação

Para realizar o clone o projeto em sua máquina, e necessário que tenha as seguintes ferramentas instalado em sua máquina yarn ou npm, node js instalado globalmente, expo (não obrigatoriamente precisa ser instalado global na sua máquina). 

para instalar as depenicas você tem que rodar o comando yarn e em seguida yarn android caso seja ANDROID para executar a aplicação ou yarn ios caso seja emulador IOS.

## Canal no YouTube

Para mais conteúdos educativos sobre desenvolvimento de software, verifique o meu canal do YouTube:

[Canal do YouTube](https://www.youtube.com/channel/UCmYDvec1_liMzbQcbXtuLmg)

========================================================================================
# BACKEND
========================================================================================

# Descrição do Projeto

Este é um projeto de backend robusto e eficiente construído com Node.js, Express, JSON Web Token (JWT), Prisma Client e Amazon Simple Email Service (SES) SDK. O projeto foi estruturado para suportar uma aplicação de grande escala, com foco em segurança, desempenho e eficiência que vamos conectar com uma aplicação mobile.

# Tecnologias usado no Backend

Biblioteca utilizado em produção
  * dotenv
  * express
  * jsonwebtoken
  * @prisma/client
  * @aws-sdk/client-ses

Biblioteca utilizado em desenvolvimento
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
No projeto backend tem variáveis ambiente que precisa ser configurado para o projeto funcionar corretamente, segue abaixo as variáveis ambiente que precisa ser configurado.

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

  ```bash
    # Porta do servidor;
  $ PORT="your_aws_access_key_id"

    # Chave secreta do JWT;
  $ JWT_SECRET="your_jwt_secret"

    # A opção utilizado é numero, exemplo 10 
    # Tempo de expiração do token de email;
  $ EMAIL_TOKEN_EXPIRATION_MINUTES=
  
    # A opção utilizado é numero, exemplo 12 
    # Tempo de expiração do token de autenticação;
  $ AUTHENTICATION_EXPIRATION_HOURS=
  
    # Url do banco de dados;
  $ DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
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

## Contribuição para projeto Backend:

Pull requests são bem-vindas. Para mudanças importantes, por favor, abra um problema primeiro para discutir o que você gostaria de mudar.

Certifique-se de atualizar os testes conforme apropriado.

========================================================================================
# MOBILE
========================================================================================

# Descrição do Projeto

Este é um projeto de aplicativo móvel poderoso e ágil, construído com as melhores práticas e tecnologias de ponta como React Native, Expo, Expo-router, React Navigation, React Native Reanimated e TypeScript. Projetado para criar aplicativos mobile eficientes, escaláveis e altamente interativos para iOS e Android que vai comunicar com o um backend.

<h1 align="center">
    <a href="https://imgur.com/KnNzTph"><img src="https://i.imgur.com/KnNzTph.jpg" title="source: imgur.com" /></a>
    <br />
</h1>

# Tecnologias usado no Backend

Biblioteca utilizado em produção
  * expo
  * expo-router
  * react-native
  * @expo/vector-icons
  * @react-navigation/drawer
  * @react-navigation/native
  * react-native-reanimated

Biblioteca utilizado em desenvolvimento
  * typescript
  * @types/react

## Descrição das tecnologias usadas:

### React Native & Expo:
    Neste projeto, utilizamos o React Native, uma biblioteca JavaScript criada pelo Facebook, para construir interfaces de usuário nativas e eficientes para iOS e Android. O Expo é uma ferramenta que nos permite construir, implantar e iterar rapidamente em aplicativos React Native.
### Expo-router:
    Utilizamos o expo-router para o roteamento em nosso aplicativo. Expo-router é uma solução de roteamento simples e poderosa que permite uma navegação eficiente entre as telas do aplicativo.
### React Navigation:
    React Navigation é uma biblioteca de navegação popular e poderosa para React Native. Ela permite a navegação entre as diferentes telas com uma variedade de transições disponíveis.
### React Native Reanimated:
    React Native Reanimated é uma biblioteca que proporciona uma API mais flexível e eficiente para animações complexas, o que nos permite criar uma UX fluida e responsiva.
### TypeScript:
    TypeScript, um superconjunto de JavaScript que adiciona tipos estáticos, é usado para tornar o código mais seguro e previsível, melhorando a experiência de desenvolvimento com ferramentas como autocompletar e prevenção de erros.

# Instalação:

Para rodar este projeto em seu ambiente local, siga as etapas abaixo:

Obs. importante: Atualmente o projeto MOBILE não necessita de nenhuma variável ambiente para essa primeira fase do projeto, só seguir as instrução e instalar as dependências.


Clone este repositório:

    ```bash
    $ git clone https://github.com/SilvaneiMartins/twitter-clone
    ```

Entre no diretório do projeto:

    ```bash
    $ cd twitter-clone/mobile
    ```

Instale as dependências:

    ```bash
    $ yarn install
    ```
ou

    ```bash
    $ npm install
    ```

Inicie o projeto:

    ```bash
    $ expo start
    ```
ou

    ```bash
    $ npx expo start
    ```

Agora você deve ver o QR code e a URL do Expo em seu terminal. Você pode escanear o QR code usando o aplicativo Expo Go no seu smartphone ou iniciar um emulador de Android/iOS para ver o aplicativo.

## Contribuição para projeto Mobile:

Contribuições de todos os tipos são bem-vindas neste projeto. Se você encontrar um bug ou deseja uma nova funcionalidade, sinta-se à vontade para abrir uma issue ou enviar um Pull Request.

# Licença

Este projeto está sob a licença MIT. Caso gostaria de ler, por favor acessar a licença aqui neste link [LICENSE](https://github.com/SilvaneiMartins/mydelivey/blob/master/LICENSE) para maiores informações.

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