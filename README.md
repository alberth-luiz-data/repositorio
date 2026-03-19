# Alberth Luiz — Portfolio

Portfolio pessoal construído com React + Framer Motion + Vite.

## 🚀 Setup Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🌐 Deploy na Vercel

1. Faça push do projeto para o GitHub
2. Acesse [vercel.com](https://vercel.com) e conecte sua conta GitHub
3. Clique em "New Project" e importe o repositório
4. Configurações já estão prontas (Vite detectado automaticamente)
5. Clique em "Deploy"

## ✏️ Como personalizar

### Adicionar projetos
Edite `src/data/index.js` — array `projects`:
```js
{
  id: 2,
  client: 'Nome do Cliente',
  clientAbbr: 'ABR',
  via: 'Empresa que você trabalhava',
  name: 'Nome do Projeto',
  description: 'Descrição do que você fez...',
  tags: ['Python', 'SQL', 'Azure'],
  logoColor: '#cor-do-texto',
  logoBg: 'rgba(r,g,b,0.15)',
  logoBorder: 'rgba(r,g,b,0.3)',
}
```

### Adicionar participações
Edite `src/data/index.js` — array `participacoes`:
```js
{
  id: 3,
  type: 'evento', // 'curso' | 'evento' | 'mentoria'
  typeLabel: 'Evento',
  name: 'Nome do evento',
  org: 'Organizador',
  desc: 'Descrição',
}
```

### Adicionar certificações
Edite `src/data/index.js` — array `certifications`.

## 🛠️ Stack
- React 18
- Framer Motion (animações)
- Vite (build tool)
- Lucide React (ícones)
