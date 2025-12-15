'use server';

import { simulateDelay } from '@/utils/async-delay';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await simulateDelay(5000); // Vou manter

  return {
    username: '',
    error: 'Teste de erro',
  };
}
