# Alguns detalhes

O nest pode usar tanto o express quanto o fastify como framework HTTP
subjacente. Por padrão, ele usa o express, mas você pode mudar para o fastify se
desejar.

- main.ts: É o ponto de entrada da aplicação. Aqui, você cria a instância do
  aplicativo Nest e inicia o servidor HTTP.

- controlleres: Os controladores lidam com as requisições HTTP e definem os
  endpoints da API. Eles recebem as requisições, processam os dados e retornam
  as respostas apropriadas.

- providers: São injetáveis de dependência que fornecem funcionalidades
  específicas, como serviços, repositórios, etc. Eles são responsáveis pela
  lógica de negócio da aplicação.

- modules: Os módulos organizam o código em unidades coesas. Cada módulo pode
  conter controladores, providers e outros módulos relacionados a uma
  funcionalidade específica. os modulos são encapsulados e ajudam a manter o
  código organizado e modular.

## Injeção de dependência

A injeção de dependência é um padrão de design que permite que as dependências
de um objeto sejam fornecidas externamente, em vez de serem criadas internamente
pelo próprio objeto. No NestJS, a injeção de dependência é um recurso
fundamental que facilita a gestão e o compartilhamento de dependências entre
diferentes partes da aplicação. No NestJS, você pode definir providers
(fornecedores) que são responsáveis por criar e fornecer instâncias de classes
ou serviços. Esses providers podem ser injetados em outros componentes, como
controladores ou outros providers, por meio do construtor da classe. Por
exemplo, se você tiver um serviço que depende de um repositório para acessar
dados, você pode definir o repositório como um provider e injetá-lo no serviço.
O NestJS cuidará da criação e gerenciamento das instâncias, garantindo que as
dependências sejam resolvidas corretamente. Isso promove um código mais modular,
testável e manutenível, pois as dependências podem ser facilmente substituídas
ou modificadas sem afetar o restante da aplicação.

exemplo:

```typescript
class UserService {
  private repo = new UserRepository(); // ❌ forte acoplamento

  findAll() {
    return this.repo.findAll();
  }
}
```

❌ Problemas:

UserService fica acoplado ao UserRepository

Difícil de testar (não dá pra trocar por um mock)

Difícil de trocar implementação (ex: banco diferente)

```typescript
@Injectable()
class UserService {
  constructor(private readonly repo: UserRepository) {}
}
```

```typescript
@Injectable()
class UserRepository {}
```

➡️ O Nest cria o UserRepository e injeta no UserService.

✔ Benefícios:

Baixo acoplamento

Testes fáceis

Código mais limpo

Troca de implementações sem quebrar tudo
