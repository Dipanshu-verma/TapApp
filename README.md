
# TapMe - Telegram Clicker Game

TapMe is a Telegram-integrated clicker game where users earn coins by tapping a button. The project comprises a frontend built with React.js, a backend using Node.js with GraphQL-Yoga and Supabase, and a Telegram bot that manages user interactions.

**[Tap here to interact with the bot](https://t.me/Co2Dipanshubot)**

## Project Structure

- **frontend/**: The React.js application for the clicker game interface.
- **backend/**: The Node.js server with GraphQL for handling data and Supabase for storing user information.
- **bot/**: The Telegram bot that facilitates user interactions and commands.

## Prerequisites

Ensure the following are installed before you begin:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

## Getting Credentials

### 1. Create a Telegram Bot and Obtain the Bot Token

1. Open Telegram and search for [BotFather](https://t.me/BotFather).
2. Start a chat with BotFather and use the `/newbot` command to create a new bot.
3. Follow the prompts to set a name and username for your bot. Use the following details:
   - **Bot Name**: Co2Dipanshu
   - **Username**: @Co2Dipanshubot
4. Once created, BotFather will provide you with a **Bot Token**. Save this token; it will be used in your bot's environment file.

### 2. Set Up Supabase and Obtain URL and Key

1. Go to [Supabase](https://supabase.io/) and sign up or log in.
2. Create a new project and name it as you prefer.
3. Once the project is set up, navigate to **Project Settings** > **API**.
4. Copy the **URL** and **anon key** from the **API** section; these will be used in your backend environment file.

## Environment Variables

### Backend (`backend/.env`)

```plaintext
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
```

### Bot (`bot/.env`)

```plaintext
BOT_TOKEN=your-telegram-bot-token
FRONTEND_URL=your-frontend-url
BACKEND_URL=your-backend-url
WEBHOOK_URL=your-bot-server-url
PORT=your-server-Port
```

This README provides comprehensive instructions on setting up, running, and configuring the TapMe project, including obtaining necessary credentials and deploying the components. Let me know if you need further adjustments or details!
