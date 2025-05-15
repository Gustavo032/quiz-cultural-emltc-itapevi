# 🎭 Quiz Cultural EMLTC – Descubra Seu Curso Ideal

Este é um projeto de extensão universitária desenvolvido como parte do curso de Engenharia de Software (Anhanguera), em parceria com a **Escola Municipal Livre de Teatro e Circo (EMLTC)** de Itapevi – SP.

## 📌 Objetivo

O sistema tem como objetivo ajudar moradores da cidade a descobrirem qual curso cultural mais combina com seus interesses e perfil pessoal. O quiz analisa as respostas de forma comportamental e temática, e sugere cursos como:

- 🎭 Teatro
- 🎪 Circo
- 💃 Dança (Ballet, Jazz, Contemporâneo, etc.)
- 🎶 Música
- 🎨 Artes Visuais (Desenho, Artesanato)

## 💡 Como funciona

O sistema exibe 15 perguntas e o usuário responde com base em seu grau de afinidade:

- Concordo totalmente
- Concordo
- Indiferente
- Discordo
- Discordo totalmente

Cada resposta gera uma pontuação, que é somada para cada categoria. Ao final, o sistema mostra o curso com maior pontuação e uma descrição personalizada.

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/) – Frontend moderno e responsivo
- TypeScript – Tipagem estática
- Tailwind CSS (opcional) – Estilização
- Vite – Ferramenta de build e dev server

## 📁 Estrutura

```
src/
├── components/
│   ├── Quiz.tsx
│   ├── Question.tsx
│   └── Result.tsx
├── data/
│   └── questions.json
├── types.ts
├── App.tsx
```

## 🚀 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/quiz-cultural-emltc.git
cd quiz-cultural-emltc
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm run dev
```

Acesse o projeto em `http://localhost:5173`

## 🌍 Deploy

O projeto pode ser facilmente publicado usando o [Vercel](https://vercel.com/):

- Faça login com sua conta GitHub
- Clique em “Import Project”
- Escolha o repositório
- Clique em “Deploy”

## 📄 Licença

Este projeto foi desenvolvido com fins educacionais e de extensão social.  
É gratuito, de código aberto e pode ser adaptado por outras instituições culturais.

## 🤝 Contato e parceria

**Escola Municipal Livre de Teatro e Circo – Itapevi**  
📍 Av. Luiz Manfrinato, 194 – Centro – Itapevi – SP  
📞 (11) 4205-1871 Ramal 24

