## DESAFIO

Pré-requisitos
Node.js (v14+)
PostgreSQL
Next.js
Prisma
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/PavaniTiago/desafio.git
cd nome-do-repositorio
Instale as dependências:

bash
Copiar código
npm install
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

env
Copiar código
DATABASE_URL="postgres://desafio_tbd2_user:WnejVeNZaqqKuI3qAkqU2r3iZ0h6g3ov@dpg-cpoqr0uehbks73ep5sug-a.oregon-postgres.render.com/desafio_tbd2"
JWT_SECRET="seu-segredo-para-jwt"
Certifique-se de substituir sua-url-do-banco-de-dados pela URL de conexão com seu banco de dados PostgreSQL e seu-segredo-para-jwt por uma string segura para assinar tokens JWT.

Execute as migrações do banco de dados com o Prisma:

bash
Copiar código
npx prisma migrate dev
Isso criará as tabelas necessárias no seu banco de dados PostgreSQL com base no seu modelo de dados definido em prisma/schema.prisma.

Uso
Rodando o servidor de desenvolvimento
Para iniciar o servidor de desenvolvimento:

bash
Copiar código
npm run dev
O servidor estará acessível em http://localhost:3000.

Rotas
1. POST /api/signup
Cria um novo usuário com email e senha.

Corpo da requisição:

json
Copiar código
{
  "email": "usuario@example.com",
  "senha": "senha"
}
2. POST /api/login
Autentica um usuário e retorna um token JWT.

Corpo da requisição:

json
Copiar código
{
  "email": "usuario@example.com",
  "senha": "senha"
}
Exemplo de resposta:

json
Copiar código
{
  "user": {
    "id": 1,
    "email": "usuario@example.com"
  },
  "token": "seu-token-jwt"
}
3. GET /api/user
Obtém informações do usuário autenticado.

Query string:

Inclua o token JWT no parâmetro token da query string.

Exemplo de uso:

bash
Copiar código
curl -X GET 'http://localhost:3000/api/user?token=seu-token-jwt'
Exemplo de resposta:

json
Copiar código
{
  "user": {
    "id": 1,
    "email": "usuario@example.com"
  }
}
Tratamento de Erros
400 Bad Request: Ocorre quando há erros nos dados da requisição (por exemplo, campos ausentes ou inválidos).
401 Unauthorized: Indica que a requisição não possui credenciais de autenticação válidas.
404 Not Found: Retornado quando o recurso solicitado não é encontrado (por exemplo, usuário não encontrado).
Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Este README fornece uma visão geral clara do projeto, orientações para instalação e uso da API, além de exemplos de rotas e tratamento de erros. Certifique-se de personalizar as instruções e exemplos conforme necessário para se adequarem ao seu projeto específico.
