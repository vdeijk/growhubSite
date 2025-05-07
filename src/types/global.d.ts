declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.woff2' {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  readonly MODE: string;
  readonly VITE_BASENAME: string;
  readonly VITE_BASE_URL: string;
  // Add other environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}