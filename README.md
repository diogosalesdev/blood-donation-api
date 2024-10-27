# Blood Donation API

A **Blood Donation API** é uma plataforma que permite que clínicas de doação de sangue gerenciem campanhas de doação e notifiquem doadores. Os doadores podem se cadastrar para serem notificados sobre campanhas, e as clínicas podem organizar campanhas e gerenciar as inscrições.

## Índice

- [Blood Donation API](#blood-donation-api)
  - [Índice](#índice)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura e Padrões](#arquitetura-e-padrões)
  - [Instalação Local](#instalação-local)
  - [Configuração do Ambiente](#configuração-do-ambiente)
  - [Executando o Projeto](#executando-o-projeto)
  - [Endpoints](#endpoints)
    - [Autenticação](#autenticação)
    - [Doadores](#doadores)
    - [Campanhas](#campanhas)
    - [Notificações](#notificações)
  - [Cron Jobs](#cron-jobs)
  - [Testes](#testes)
  - [Contribuição](#contribuição)
  - [Licença](#licença)

---

## Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **NestJS**: Framework Node.js para criação de APIs robustas e escaláveis.
- **Prisma**: ORM para banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Docker**: Utilizado para a criação de um ambiente de desenvolvimento isolado.
- **SendGrid**: Serviço de envio de e-mails para notificação de doadores.
- **Swagger**: Documentação interativa da API.
- **Dayjs**: Biblioteca para manipulação de datas.

---

## Arquitetura e Padrões

Esta API segue as melhores práticas de desenvolvimento, incluindo:

- **Padrão MVC**: Separação clara entre Modelos, Controladores e Serviços.
- **Injeção de Dependências**: A arquitetura do NestJS permite uma estrutura modular e injeção de dependências limpa.
- **Reposição de Regras de Negócio**: As regras de negócio são separadas dos controladores para maior clareza e reutilização.
- **Testes**: São incluídos testes unitários e de integração.
- **Documentação com Swagger**: Todos os endpoints estão documentados para fácil compreensão e testes.

---

## Instalação Local

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/blood-donation-api.git
    cd blood-donation-api
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie os serviços Docker para PostgreSQL e Prisma:
    ```bash
    docker-compose up -d
    ```

---

## Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

    ```plaintext
    DATABASE_URL=postgresql://user:password@localhost:5432/blood_donation
    SENDGRID_API_KEY=your-sendgrid-api-key
    EMAIL_FROM=noreply@yourdomain.com
    ```

2. Configure o banco de dados Prisma executando as migrações:

    ```bash
    npx prisma migrate dev
    ```

---

## Executando o Projeto

1. Inicie o servidor de desenvolvimento NestJS:
    ```bash
    npm run start:dev
    ```

2. Acesse a documentação Swagger em [http://localhost:3000/api](http://localhost:3000/api).

---

## Endpoints

### Autenticação

- **POST** `/auth/register` - Cadastro de um novo usuário.
- **POST** `/auth/login` - Login de um usuário.

### Doadores

- **POST** `/donors` - Criação de um novo doador.
- **GET** `/donors/:id` - Obter informações de um doador específico.
- **PUT** `/donors/:id` - Atualizar informações de um doador.
- **DELETE** `/donors/:id` - Remover um doador.

### Campanhas

- **POST** `/campaigns` - Criação de uma nova campanha de doação.
- **GET** `/campaigns` - Listar todas as campanhas.
- **GET** `/campaigns/:id` - Obter detalhes de uma campanha específica.
- **PUT** `/campaigns/:id` - Atualizar uma campanha.
- **DELETE** `/campaigns/:id` - Remover uma campanha.

### Notificações

- **GET** `/notifications/donor/:id` - Enviar notificações por e-mail para um doador.

> **Nota**: Consulte a documentação Swagger para detalhes completos sobre cada endpoint, incluindo parâmetros e formatos de resposta.

---

## Cron Jobs

Esta API inclui um cron job diário que verifica quais doadores estão elegíveis para doar sangue novamente. Esse cron job é configurado para rodar às 00:00 e utiliza a biblioteca `@nestjs/schedule`.

- **Critério de Notificação**: O cron job verifica se já passaram 90 dias desde a última doação registrada de um doador e, se sim, envia um e-mail de notificação.

---

## Testes

1. Para executar os testes unitários:
    ```bash
    npm run test
    ```

2. Para executar os testes de integração:
    ```bash
    npm run test:e2e
    ```

---

## Contribuição

Contribuições são bem-vindas! Para contribuir, siga estes passos:

1. Fork o projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

---

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.