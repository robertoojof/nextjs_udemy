# Blog Simples

Blog feito com base em exercicio do curso de Next.js da Udemy.

Utiliza o yarn v4 como gerenciador de pacotes.

## Notas para instalação (usando o yarn v4)

1. Habilitar o sistema para yarn v4 com o comando `corepack enable`
2. Habilitar o yarn v4 com o comando `yarn set version stable`
3. Instalar as dependências com o comando `yarn install`
4. Para rodar o projeto, utilizar o comando `yarn dev`

## função `cn` em @lib/utils

Essa função cn (que geralmente é uma abreviação para classnames) é o "padrão
ouro" atual para lidar com estilos no ecossistema React + Tailwind CSS. Ela
resolve dois problemas específicos de uma vez só: condicionalidade e conflito de
estilos.

1. O que é `clsx`? A biblioteca clsx serve para construir strings de classes CSS
   de forma condicional.

Sem ela, fazer lógica dentro do className fica uma bagunça de template literals
e operadores ternários difíceis de ler. O clsx limpa isso aceitando vários tipos
de argumentos (strings, objetos, arrays) e filtrando valores "falsy" (null,
undefined, false).

Exemplo sem clsx:

```JavaScript

<div className={`btn ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}>
```

Exemplo com clsx:

```JavaScript

import { clsx } from 'clsx';

// Se isActive=true e isDisabled=false clsx('btn', isActive && 'active',
isDisabled && 'disabled'); // Resultado: "btn active" Resumo: clsx cuida da
LÓGICA (mostrar ou esconder classes).
```

2. O que é tailwind-merge? A tailwind-merge resolve conflitos de especificidade
   do Tailwind.

O problema do CSS é que se você tiver duas classes que alteram a mesma
propriedade (ex: p-4 e p-8), o navegador não escolhe a última que você escreveu
no atributo class, mas sim a que foi definida por último no arquivo CSS gerado.
Isso pode causar bugs visuais onde você tenta sobrescrever um estilo, mas o
estilo antigo persiste.

A twMerge entende a sintaxe do Tailwind. Ela olha para todas as classes,
identifica quais entram em conflito e garante que a última classe passada vença,
removendo a anterior.

O problema (sem twMerge): Imagine um componente botão que tem px-4 por padrão.
Você tenta usá-lo passando px-8.

```JavaScript

// Resultado final na DOM: class="px-4 px-8" No CSS, se a regra do px-4 estiver
```

definida depois do px-8, o botão continuará pequeno, mesmo você pedindo px-8.

A solução (com twMerge):

```JavaScript

import { twMerge } from 'tailwind-merge';

twMerge('px-4 py-2', 'p-8');
// Resultado: "p-8" (ele remove px-4 e py-2 porquep-8 sobrescreve ambos)
// Resumo: tailwind-merge cuida da LIMPEZA (garante que a última classe ganhe).
```

## Server-Components e Client-Components

Por padrão, todos os componentes em Next são Server-Components. Isso significa
que eles são renderizados no servidor e enviados como HTML para o cliente.
Server Components são ótimos para desempenho, pois reduzem a quantidade de
JavaScript enviado ao navegador. No entanto, eles não podem usar hooks do React
que dependem do estado ou do ciclo de vida do componente, como useState ou
useEffect. Para usar esses hooks, você precisa transformar o componente em um
Client-Component. Isso é feito adicionando a diretiva "use client" no topo do
arquivo do componente. Client Components são renderizados no cliente e podem
usar todos os hooks do React, mas isso pode aumentar a quantidade de JavaScript
enviada ao navegador, o que pode impactar o desempenho. Exemplo de
Client-Component:

```JavaScript
"use client";
import { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

componentes de servidor importados em componentes de cliente são permitidos e se
transformam em componentes de cliente automaticamente. Isso se voce usa o
import, mas se voce importa ele como uma children prop, ele continua sendo um
servercomponent.

Mas o contrário não acontece, os clientcomponents importados em servercomponents
continuam sendo clientcomponents.
