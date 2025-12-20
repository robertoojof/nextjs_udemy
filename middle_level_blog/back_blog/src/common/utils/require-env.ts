export function requireEnv(varName: string): string {
  const value = process.env[varName];
  if (!value) {
    throw new Error(
      `❌ Variável de ambiente obrigatória não definida: ${varName}
      nome do arquivo .env atual: ${process.env.NODE_ENV}
      `,
    );
  }
  return value;
}
