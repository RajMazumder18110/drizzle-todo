declare module NodeJS {
  interface ProcessEnv {
    PORT?: string;
    POSTGRES_DATABASE_URL: string;
    JWT_AUTHENTICATION_SECRET: string;
  }
}
