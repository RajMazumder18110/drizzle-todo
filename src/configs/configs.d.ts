declare module NodeJS {
  interface ProcessEnv {
    PORT?: string;
    JWT_AUTHENTICATION_SECRET: string;
  }
}
