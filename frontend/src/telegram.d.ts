 
interface TelegramWebAppUser {
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
    language_code: string;
  }
  
  interface TelegramWebApp {
    initDataUnsafe: {
      query_id?: string;
      user?: TelegramWebAppUser;
      auth_date?: number;
      hash?: string;
    };
    close: () => void;
    expand: () => void;
  }
  
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
  
  declare module '*.mp3' {
    const src: string;
    export default src;
  }
  
  declare module '*.png' {
    const src: string;
    export default src;
  }