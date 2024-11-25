# Estrutura de Dados - Pilha/Stack

As pilhas são estruturas de dados que seguem a política LIFO (Last-in, First-Out), ou seja, o último elemento que entrar na pilha é o primeiro a sair e o primeiro elemento a entrar na pilha é o último a sair. 

A pilha pode ser implementada com `arrays` ou com `listas encadeadas`. Neste repositório nós exploramos a criação de pilhas utilizando `arrays`.

Uma pilha pode ter tamanho fixo ou dinâmico. As pilhas de tamanho fixo podem sofrer "estouro de pilha" (stackoverflow) em caso de tentar empilhar mais um elemento em uma pilha que já está cheia.

Alguns termos importantes:
- Top: É o último elemento inserido na pilha.
- Stack: "Pilha" em inglês.
- Stackoverflow: Acontece quando uma pilha de tamanho fixo está cheia e o código tenta empilhar mais um elemento.
- Push: Função usada para empilhar um novo elemento na pilha.
- Pop: Função utilizada para remover um elemento da pilha e retornar esse elemento.

## Arquivos do repositório

Este repositório contém a implementação de pilha em JavaScript. 

- Arquivo `array-stack.js`: contém a implementação de uma pilha utilizando array.
- Arquivo `stackoverflow.js`: contém um exemplo de estouro de pilha utilizando recursão.
- Pasta `exercises`: contém resoluções de questões do [LeetCode](https://leetcode.com/).

## Executando exemplos

Para executar os exemplos basta você utilizar o Node.js. Caso você ainda não tenha o Node.js instalado, instale por [esse link](https://nodejs.org/en).

```bash
node array-stack.js
```

## Casos de uso de Pilhas

- Chamadas de funções
- Recursividade
- Histórico de Navegação
- Controle de Rollbacks

# Links

[Introdução a Estrutura de Dados](https://www.alura.com.br/artigos/estruturas-de-dados-introducao)
[Sobre Estrutura de Dados](https://dev.to/trinity_/estruturas-de-dados-em-javascript-com-exemplos-de-codigo-4an0)
[Introdução a Pilhas](https://www.devmedia.com.br/pilhas-fundamentos-e-implementacao-da-estrutura-em-java/28241)
[Aplicações de Pilhas](https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-stack/)
[NeetCode](https://neetcode.io) (Pratique algoritmos e estruturas de dados)