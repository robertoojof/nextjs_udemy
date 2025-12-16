import { hashPassword, verifyPassword } from '@/lib/login/manage-login';

(async () => {
  const minhaSenha = 'chocolate-comprimenta**'; // NÃO ESQUECER DE APAGAR SUA SENHA DAQUI - SENHA FICTICIA
  const hashDaSuaSenhaEmBase64 = await hashPassword(minhaSenha);

  console.log({ hashDaSuaSenhaEmBase64 });
})();

// Resultado esperado (exemplo):
(async () => {
  const restult = await verifyPassword(
    'chocolate-comprimenta**',
    'JDJiJDEwJG9yUS8zSzl6ZXZ2VlV1aS96NS81bmU0V3VZTVhvc0g2QlVwTi45a2FZSEMwSVlQYURNeXFD',
  ); // true

  console.log({ restult });
})();
