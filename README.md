# 💇 Hair Day

Sistema de agendamento para salão de beleza desenvolvido com React + TypeScript.

## 🚀 Tecnologias

- React 18
- TypeScript
- Vite
- TailwindCSS
- Phosphor Icons
- Flatpickr (calendário customizado)
- Class Variance Authority (CVA)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🎯 Funcionalidades

- ✅ Agendar horários por data e hora
- ✅ Visualizar agenda do dia
- ✅ Agendamentos organizados por período (Manhã, Tarde, Noite)
- ✅ Excluir agendamentos
- ✅ Persistência local (LocalStorage)
- ✅ Calendário customizado com tema escuro
- ✅ Validação de horários disponíveis

## 🎨 Componentes Principais

- **DateField**: Campo de seleção de data com calendário customizado
- **HoursField**: Seleção de horários por período
- **SchedulingSection**: Visualização da agenda organizada por período
- **TimeSelect**: Botão de seleção de horário

## 📱 Layout

O projeto utiliza um design system customizado com tokens de cores e tipografia definidos no TailwindCSS.

---

Desenvolvido durante o curso da Rocketseat 🚀
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
