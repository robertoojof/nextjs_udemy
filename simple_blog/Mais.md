# Estudos

- SSR - Server-Side Rendering
- CSR - Client-Side Rendering

- SSG - Static Site Generation ??? - Explicar o que é

- Dynamic Rendering ??? - Explicar o que é

- ISR - Incremental Static Regeneration ??? - Explicar o que é (combinação de
  SSG com Dynamic Rendering)

- ISR - Depois que alguma coisa é atualizada o cache é invalidado e a página é
  re-gerada no próximo request.

Rotas:

- / - Home (publica)
- /post/[slug] - Post (página dinâmica, publica)

- /admin/post (dinâmico, privada) - ler (R) lista de posts / (D) Delete post
- /admin/post/[id] (dinâmico, privada) - ler (R) um post específico / (U) Update
- /admin/post/new (dinâmico, privada) - criar (C) novo post

- /admin/login - página de login (dinâmico,pública)

## Sobre o tailwindcss

Ele é mobile first, ou seja, as classes sem prefixo são para mobile (smaller
than 640px) e as classes com prefixo são para telas maiores. Exemplo:

- `bg-red-500` - aplica o fundo vermelho em todas as telas
- `md:bg-blue-500` - aplica o fundo azul em telas médias (768px) ou maiores
- `lg:bg-green-500` - aplica o fundo verde em telas grandes (1024px) ou maiores
  ...

## Sobre o cache do Next.js

O build dá informações sobre as páginas Por exemplo, se eu tenho uma página que
mostra o horário atual, o Next.js não vai saber que essa página precisa ser
atualizada a cada minuto, então ele vai servir a versão em cache, que pode estar
desatualizada. (Isso considerando que eu tenha usado uma função que pega a hora
no momento não tenha usado react hooks para pegar a hora no cliente e
atualizar).

São 4 formas de cache no next.js:

<table class="w-full table-auto"><thead><tr><th class="min-w-[12ch]">Mechanism</th><th class="min-w-[12ch]">What</th><th class="min-w-[12ch]">Where</th><th class="min-w-[12ch]">Purpose</th><th class="min-w-[12ch]">Duration</th></tr></thead><tbody><tr><td><a href="#request-memoization">Request Memoization</a></td><td>Return values of functions</td><td>Server</td><td>Re-use data in a React Component tree</td><td>Per-request lifecycle</td></tr><tr><td><a href="#data-cache">Data Cache</a></td><td>Data</td><td>Server</td><td>Store data across user requests and deployments</td><td>Persistent (can be revalidated)</td></tr><tr><td><a href="#full-route-cache">Full Route Cache</a></td><td>HTML and RSC payload</td><td>Server</td><td>Reduce rendering cost and improve performance</td><td>Persistent (can be revalidated)</td></tr><tr><td><a href="#router-cache">Router Cache</a></td><td>RSC Payload</td><td>Client</td><td>Reduce server requests on navigation</td><td>User session or time-based</td></tr></tbody></table>

- no next 16 já é possivel utilizar a diretiva 'use cache' para definir o cache
  diretamente no componente.

- para forçar a não utilização do cache, usar a diretiva 'dynamic =
  force-dynamic' no componente.

### Revalidação do cache

Pode ser feita por tempo ou de forma manual(com server actions). E são métodos
não exclusivos, ou seja, podem ser usados juntos.

- por tempo: usando a diretiva 'revalidate = X' onde X é o número de segundos
  para revalidar o cache. Exemplo: 'revalidate = 60' (revalida a cada 60
  segundos)

```tsx
export const revalidate = 60; // revalida a cada 60 segundos
```

- manual: usando server actions para invalidar o cache quando alguma ação é
  realizada (ex: criar, editar, deletar um post). Exemplo: import {
  revalidatePath } from 'next/cache'; Depois de realizar a ação, chamar a função
  revalidatePath('/caminho-da-página').

```tsx
import { revalidatePath } from 'next/cache';
// depois de criar, editar ou deletar um post
revalidatePath('/admin/post');
```

### Server Actions

diretiva 'use server' no arquivo(colocando no topo, assim todas as funções
dentro dele são server actions) ou função.

Com a diretiva no topo do arquivo é bom evitar a criação de funções helpers,
pois podem ser expostas ao cliente coisas que são do servidor.

```tsx
'use server';
```

- são funções que garantidamente rodam no servidor.

off, carece presquisa: revalidateTag() - revalida tags específicas (precisa
marcar as páginas com tags usando a função 'tags' do next/cache)

- diretiva 'use cache'
- cacheComponents
- cacheLife
- updateTag
- revalidateTag

nota: ao terminar o curso refatorar para uso da diretiva 'use cache' que se
tornou estável no next 16.

## Hook conhecidos agora

- _usetransition_ Serve para gerenciar estados de transição em componentes
  React, permitindo que você controle como e quando as atualizações de estado
  ocorrem, melhorando a experiência do usuário em situações onde mudanças de
  estado podem ser demoradas ou complexas. uso:

```tsx
import { useTransition } from 'react';
const [isPending, startTransition] = useTransition();
```

- _useactionstate_ Serve para gerenciar o estado de ações do servidor (server
  actions) em componentes React no Next.js, permitindo que você acompanhe o
  progresso e o estado dessas ações, como carregamento, sucesso ou falha, e
  atualize a UI de acordo. uso:


## Links Úteis

- <https://nextjs.org/docs/app/building-your-application/data-fetching/caching>
- <http://nextjs.org/blog>
```
