# 🖤🤍 SCCPedia - Site com todas as informações do Timão

Um site moderno e interativo dedicado ao Sport Club Corinthians Paulista, desenvolvido com as mais recentes tecnologias web para celebrar a história, tradição e paixão do time do povo.

## ⭐ Apoie o Projeto

Se você gostou do projeto e quer apoiar o desenvolvimento, deixe uma ⭐ no repositório!

**Como dar estrela:**

1. 👆 Clique no botão **"⭐ Star"** no topo desta página
2. 🤝 Compartilhe o projeto com outros corintianos
3. 🐛 Reporte bugs ou sugira melhorias nas [Issues](https://github.com/viniciusValverde1410/corinthiansWeb/issues)

_Cada estrela nme motiva a continuar desenvolvendo funcionalidades incríveis para a Fiel Torcida!_ 🖤🤍

## 📖 Sobre o Projeto

O **SCCPedia** é uma plataforma completa que reúne mais de 114 anos de história do clube mais brasileiro do Brasil. O site oferece uma experiência imersiva para os fãs do Timão, com informações detalhadas sobre elenco, lendas, títulos, história e muito mais.

### ✨ Principais Funcionalidades

- 🏠 **Página Inicial**: Apresentação do clube com carousel interativo e formulário de contato
- 🏟️ **Clube**: Informações institucionais, uniformes, hino e centros de excelência
- ⚽ **Elenco Atual**: Visualização do elenco com detalhes dos jogadores integrado via API
- 🌟 **Lendas & Ídolos**: Galeria de grandes nomes organizados por décadas
- 🏛️ **História**: Timeline completa com marcos históricos, evolução dos escudos e rivalidades
- 🏆 **Títulos**: Catálogo completo de conquistas organizadas por categoria (estaduais, nacionais e internacionais)
- 📱 **Design Responsivo**: Experiência otimizada para todos os dispositivos
- 🎵 **Hino Interativo**: Player de áudio com letra do hino oficial na página clube

## 🚀 Tecnologias Utilizadas

### Frontend

- **[Next.js 15.5.3](https://nextjs.org/)** - Framework React com App Router
- **[React 19.1.0](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[Axios 1.12.2](https://axios-http.com/)** - Cliente HTTP para requisições à API
- **[Ant Design 5.27.4](https://ant.design/)** - Biblioteca de componentes UI (Carousel)
- **[Formspree 3.0.0](https://formspree.io/)** - Gerenciamento de formulários
- **CSS Modules** - Estilização modular e componentizada

### Backend (API)

- **Node.js** - Runtime JavaScript
- **Prisma** - ORM para banco de dados
- **Express** - Framework web para Node.js
- **PostgreSQL/MySQL** - Banco de dados relacional

## 📦 Instalação e Configuração

### Pré-requisitos

- **Node.js** (versão 18+ recomendada)
- **npm** ou **yarn**
- **Git**

### 1. Clone o Repositório

```bash
git clone https://github.com/viniciusValverde1410/corinthiansWeb.git
cd corinthiansWeb
```

### 2. Instale as Dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure o Backend (API)

Para o funcionamento completo do site, você precisa configurar a API backend:

```bash
# Clone o repositório do backend
git clone https://github.com/viniciusValverde1410/corinthiansBackEnd.git
cd corinthiansBackEnd

# Instale as dependências
npm install

# Configure as variáveis de ambiente
crie e configure no arquivo .env
# Edite o arquivo .env com suas configurações de banco de dados

# Execute as migrações do banco
npx prisma migrate dev

# Inicie o servidor da API
npm run dev
```

A API ficará disponível em `http://localhost:4000`

Para mais informações consulte o readme.md em https://github.com/viniciusValverde1410/corinthiansBackEnd

### 4. Execute o Projeto Frontend

```bash
# No diretório do projeto frontend
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 🗂️ Estrutura do Projeto

```
corinthiansWeb/
├── public/
│   ├── images/                    # Imagens estáticas
│   │   ├── carouselHome/         # Imagens do carousel
│   │   ├── clubePage/            # Imagens da página do clube
│   │   └── historyPage/          # Imagens da página de história
│   └── songs/
│       └── hino-corinthians.mp3  # Áudio do hino oficial
├── src/
│   ├── app/                      # App Router do Next.js
│   │   ├── globals.css           # Estilos globais
│   │   ├── layout.js             # Layout principal
│   │   ├── page.jsx              # Página inicial
│   │   ├── clube/                # Página institucional
│   │   ├── elenco/               # Página do elenco
│   │   ├── historia/             # Página da história
│   │   ├── lendas/               # Página dos ídolos
│   │   └── titulos/              # Página dos títulos
│   └── components/               # Componentes reutilizáveis
│       ├── footer/               # Rodapé
│       ├── header/               # Cabeçalho/Menu
│       ├── heroSection/          # Hero section padronzizada
│       ├── rivalidadeCard/       # Card de rivalidades
│       ├── shieldCard/           # Card dos escudos
│       └── timelineCard/         # Card da timeline
├── eslint.config.mjs             # Configuração do ESLint
├── jsconfig.json                 # Configuração do JavaScript
├── next.config.mjs               # Configuração do Next.js
└── package.json                  # Dependências e scripts
```

## 🔗 API Endpoints

O projeto consome uma API REST com os seguintes endpoints:

### Elenco

```
GET http://localhost:4000/players
```

**Resposta**: Lista de jogadores do elenco atual

```json
{
  "players": [
    {
      "id": 1,
      "name": "Nome do Jogador",
      "position": "Posição",
      "number": 10,
      "image": "url_da_imagem",
      "description": "Descrição do jogador"
    }
  ]
}
```

### Lendas

```
GET http://localhost:4000/legends
```

**Resposta**: Lista de ídolos e lendas do clube

```json
{
  "legends": [
    {
      "id": 1,
      "name": "Nome da Lenda",
      "position": "Posição",
      "year": 1990,
      "image": "url_da_imagem",
      "description": "História e conquistas"
    }
  ]
}
```

### Títulos

```
GET http://localhost:4000/titles
```

**Resposta**: Lista de títulos conquistados

```json
{
  "titles": [
    {
      "id": 1,
      "name": "Nome do Título",
      "category": "estadual|nacional|internacional",
      "wonYear": "2020, 2021",
      "description": "Descrição da conquista",
      "imageUrl": "url_da_imagem"
    }
  ]
}
```

## 🎯 Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack (mais rápido)
npm run dev

# Build para produção
npm run build

```

## 🌐 Deploy

### Frontend (Vercel - Recomendado)

1. Conecte seu repositório à [Vercel](https://vercel.com/)
2. Configure as variáveis de ambiente se necessário
3. O deploy será automático a cada push na branch main

### Backend (Render - Recomendado)

1. Configure as variáveis de ambiente no serviço escolhido
2. Configure o banco de dados PostgreSQL
3. Execute as migrações do Prisma
4. Ajuste a URL da API no frontend

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 🐛 Problemas Conhecidos

- Certifique-se de que a API backend esteja rodando na porta 4000
- Verifique se todas as imagens estão no diretório correto

## 👥 Autor

**Vinícius Valverde**

- GitHub: [@viniciusValverde1410](https://github.com/viniciusValverde1410)

---

## 🖤🤍 Vai Corinthians!

_"Salve o Corinthians, o campeão dos campeões, eternamente dentro dos nossos corações!"_

**Sport Club Corinthians Paulista - Desde 1910**
