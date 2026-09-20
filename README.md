
# 🎬 VT-FLIX

Aplicação web de filmes desenvolvida com **Next.js, React e TypeScript**, utilizando a API do TMDB para consultar filmes, pesquisar títulos e visualizar informações detalhadas.

O projeto foi desenvolvido com foco em aprimorar conhecimentos em desenvolvimento Front-End, consumo de APIs, componentização, testes automatizados e integração contínua.

## 🚀 Demonstração

🔗 **Aplicação online:** https://vt-flix.vercel.app

🔗 **Repositório:** https://github.com/VToMagnata/VT-FLIX

---

## 📸 Sobre o projeto

O VT-FLIX é uma aplicação de consulta de filmes que permite ao usuário navegar por diferentes categorias, pesquisar títulos e acessar informações detalhadas sobre cada filme.

A aplicação utiliza a API do **The Movie Database (TMDB)** para obter os dados dos filmes.

### Funcionalidades

- 🎥 Exibição de filmes através da API do TMDB.
- 🔍 Pesquisa de filmes por título.
- 📄 Visualização de informações detalhadas dos filmes.
- 📚 Navegação entre páginas de filmes.
- ⭐ Exibição da avaliação dos filmes.
- 📱 Interface responsiva.
- 🔄 Consumo de API através de requisições HTTP.
- 🧪 Testes automatizados com Jest e React Testing Library.
- ⚙️ Pipeline de CI/CD utilizando GitHub Actions.

---

## 🛠️ Tecnologias utilizadas

### Front-End

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

### API e integração

- [TMDB API](https://developer.themoviedb.org/)
- Axios

### Testes

- Jest
- React Testing Library
- Jest DOM

### CI/CD e Deploy

- GitHub Actions
- Vercel
- Git e GitHub

---

## 📂 Estrutura do projeto

```text
VT-FLIX/
├── .github/
│   └── workflows/
│       └── main.yml
├── public/
├── src/
│   └── app/
│       ├── api/
│       ├── components/
│       ├── ...
│       └── page.tsx
├── package.json
├── tsconfig.json
└── README.md
```

> A estrutura acima apresenta a organização principal do projeto. Alguns diretórios podem variar conforme a implementação atual.

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/VToMagnata/VT-FLIX.git
```

### 2. Acesse o diretório

```bash
cd VT-FLIX
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
TMDB_TOKEN=seu_token_do_tmdb
```

Adicione seu token de autenticação da API do TMDB.

> Não compartilhe seu token publicamente nem o envie para o repositório.

### 5. Execute o servidor de desenvolvimento

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

---

## 🔄 Pipeline CI/CD

O projeto utiliza **GitHub Actions** para automatizar etapas de validação e construção da aplicação.

O pipeline é executado a partir de alterações enviadas para a branch `main`.

### CI — Integração Contínua

A Integração Contínua (CI) permite validar automaticamente as alterações realizadas no código.

O workflow executa etapas como:

1. **Checkout:** obtém o código do repositório.
2. **Instalação de dependências:** instala os pacotes necessários para o projeto.
3. **Lint:** verifica possíveis problemas de padronização e qualidade do código.
4. **Testes:** executa os testes automatizados com Jest.
5. **Build:** verifica se a aplicação pode ser compilada corretamente.

Essas etapas ajudam a identificar erros antes da disponibilização da aplicação.

### CD — Entrega e Deploy Contínuo

A Entrega Contínua (CD) automatiza o processo de disponibilização da aplicação.

Após as etapas de validação, o workflow pode realizar o deploy da aplicação na Vercel utilizando as configurações e credenciais necessárias.

O objetivo é reduzir processos manuais e facilitar a publicação de novas versões.

### Fluxo do pipeline

```text
Push na branch main
        ↓
GitHub Actions
        ↓
Instalação das dependências
        ↓
Lint
        ↓
Testes automatizados
        ↓
Build da aplicação
        ↓
Deploy na Vercel
        ↓
Aplicação atualizada
```

> O deploy depende da configuração correta do workflow e das credenciais necessárias para a Vercel.

---

## 🧪 Executando os testes

Para executar os testes automatizados:

```bash
npm test
```

Para executar o lint:

```bash
npm run lint
```

Para verificar o build da aplicação:

```bash
npm run build
```

---

## 🔐 Variáveis de ambiente

O projeto utiliza variáveis de ambiente para armazenar informações sensíveis, como o token de acesso à API do TMDB.

As credenciais não devem ser inseridas diretamente no código-fonte ou compartilhadas no repositório público.

Em ambientes de produção, as variáveis devem ser configuradas nas configurações da plataforma de deploy.

---

## 🎯 Objetivos do projeto

- Praticar o desenvolvimento de aplicações com Next.js e React.
- Aprofundar conhecimentos em TypeScript.
- Aprimorar o consumo de APIs externas.
- Aplicar componentização e organização de código.
- Implementar testes automatizados.
- Conhecer conceitos de CI/CD com GitHub Actions.
- Automatizar o processo de build e deploy.

---

## 📊 Comparativo: Antes e Depois

Durante o desenvolvimento do VT-FLIX, foram realizadas melhorias na arquitetura, organização do código e desempenho da aplicação.

### ⚡ Desempenho

| Métrica        | Antes |     Depois |
| -------------- | ----: | ---------: |
| LCP            | 2,42s |      0,44s |
| Redução do LCP |     — | **81,82%** |

As melhorias foram obtidas por meio da busca inicial de filmes no servidor, otimização de imagens e utilização de cache com `revalidate`.

### 🏗️ Organização do código

**Antes:**

* Lógica de estados, filtros e requisições concentrada no componente principal.
* Requisições e gerenciamento de dados misturados à interface.
* Carregamento dos dados iniciais realizado no cliente.

**Depois:**

* Criação do Custom Hook `useHome` para centralizar estados, filtros, requisições e paginação.
* Separação das funções de comunicação com a API em arquivos específicos.
* Utilização de Server Component para buscar os filmes iniciais.
* Utilização de `dynamic import` para carregar o componente de detalhes sob demanda.

### 🔐 Comunicação com a API

**Antes:**

* Requisições realizadas diretamente pelo cliente, com necessidade de organizar o acesso à API.

**Depois:**

* Criação de uma API Route no Next.js para intermediar as requisições ao TMDB.
* Utilização da variável de ambiente `TMDB_TOKEN` para proteger o token de autenticação.
* Utilização de `fetch` no servidor com cache e revalidação de 300 segundos.

### 🧪 Qualidade e manutenção

* Aplicação de `useMemo` para memorizar os filmes filtrados.
* Controle de atualizações assíncronas para evitar alterações de estado obsoletas.
* Organização da lógica em Custom Hooks e funções reutilizáveis.
* Manutenção dos testes automatizados com Jest e React Testing Library.





## 👨‍💻 Autor

**Vitor Losina Trevisan**

GitHub: [@VToMagnata](https://github.com/VToMagnata)
