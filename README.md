# Chat Offline

Aplicação de chat em uma única janela, desenvolvida em React + TypeScript com Vite, focada em uma experiência simples, responsiva e totalmente offline.

O projeto permite enviar mensagens alternando entre dois remetentes — usuário e robô — sem persistência em banco ou backend. O histórico fica somente em memória durante a sessão atual da aplicação.

## Funcionalidades

- Alternância do remetente entre usuário e robô
- Histórico de mensagens em memória
- Estado vazio com mensagem inicial quando não há conversa
- Layout centralizado e responsivo em telas maiores
- Input fixo no rodapé da área de chat
- Textarea com ajuste de altura e envio por Enter
- Toggle de envio da próxima mensagem sem alterar mensagens já enviadas
- Scroll automático para a última mensagem

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## Estrutura do projeto

```text
src/
├── App.tsx
├── index.css
├── main.tsx
├── types/
│   └── message.ts
├── components/
│   ├── Chat.tsx
│   ├── ChatInput.tsx
│   ├── MessageBubble.tsx
│   ├── MessageList.tsx
│   └── SenderToggle.tsx
└── assets/
```

## Modelo de dados

```ts
type Sender = 'user' | 'robot'

type Message = {
  id: string
  text: string
  sender: Sender
}
```

## Requisitos atendidos

- Mensagens do usuário alinhadas à direita e do robô à esquerda
- Bolhas neutras, sem distinção de cor por remetente
- Textarea multilinha com auto-resize
- Botão de envio desabilitado quando o texto está vazio
- Scroll automático para as mensagens mais recentes
- Sem persistência, autenticação, backend ou edição de mensagens

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse a aplicação no navegador pelo endereço exibido no terminal.

## Comandos úteis

```bash
npm run build
npm run lint
npm run preview
```

## Observações

Este projeto foi implementado seguindo a especificação do PRD, mantendo o escopo enxuto do chat offline e priorizando clareza, layout responsivo e experiência de uso direta no frontend.
