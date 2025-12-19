'use client';

import { loginAction } from '@/app/actions/login/login.action';
import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import clsx from 'clsx';
import { EyeClosedIcon, EyeIcon, LogInIcon } from 'lucide-react';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export function LoginForm() {
  const initialState = {
    username: '',
    error: '',
  };
  const [state, action, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.error) {
      toast.dismiss();
      toast.error(state.error);
    }
  }, [state]);

  const [isVisiblePassword, setVisiblePassword] = useState(false);

  return (
    <div
      className={clsx(
        'flex items-center justify-center',
        'text-center max-w-sm mt-16 mb-32 mx-auto',
      )}
    >
      <form action={action} className='flex-1 flex flex-col gap-6'>
        <InputText
          type='text'
          name='username'
          labelText='Usuário'
          placeholder='Seu usuário'
          disabled={isPending}
          defaultValue={state.username}
        />

        <div className='grid grid-cols-[1fr_auto] items-end gap-2'>
          <InputText
            type={isVisiblePassword ? 'text' : 'password'}
            name='password'
            labelText='Senha'
            placeholder='Sua senha'
            disabled={isPending}
          />
          <button
            type='button'
            className={`cursor-pointer mb-2 transition`}
            onClick={() => setVisiblePassword(prev => !prev)}
          >
            <span>{isVisiblePassword ? <EyeIcon /> : <EyeClosedIcon />}</span>
          </button>
        </div>

        <Button disabled={isPending} type='submit' className='mt-4'>
          <LogInIcon />
          Entrar
        </Button>

        {!!state.error && <p className='text-red-600'>{state.error}</p>}
      </form>
    </div>
  );
}
