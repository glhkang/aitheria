# 🧠 aitheria

aitheria is a lightweightfrontend interface for exploring multi-character, mood-driven interactions with **google gemini**. designed for quick experimentation with **agentic ai architectures** and **prompt engineering** workflows.

## ✨ features

-   🔄 selectable character personas with distinct moods
-   🤖 chat powered by **google gemini** via `@google/generative-ai`
-   🔐 basic access control via passcode modal
-   ⚡ fast, lightweight frontend using **vite** and **react 19**
-   🎨 responsive ui built with **bulma css**
-   🧠 prompt logic extensible for agent design & dialogue testing

## 🛠️ tech stack

| layer            | tech/tool                           |
| ---------------- | ----------------------------------- |
| framework        | `react 19`, `react router 7`        |
| ai integration   | `@google/generative-ai` (gemini)    |
| styling          | `bulma`, `flexbox`, `fontawesome`   |
| animation        | `@lottiefiles/dotlottie-react`      |
| build tool       | `vite`                              |
| code quality     | `eslint`, `postcss`, `autoprefixer` |
| deployment ready | supports `.env` config separation   |

## 👷 for agent/prompt/ai engineers

-   plug in custom system/user prompts to test multi-agent interactions
-   modify character personas for **agent simulation** and **llm fine-tuning**
-   ideal for **forward-deployed prototypes** using llm apis
-   minimal codebase structured for fast iteration and deployment

## 🧪 local dev

```bash
npm install
npm run dev
```

> add your gemini api key in `.env`:

```
vite_api_key=your_google_api_key_here
```

## 🧠 author’s intent

built to show interest and capability in:

-   agent orchestration
-   prompt engineering ux
-   llm interface design
-   lightweight ai tooling for deployment
