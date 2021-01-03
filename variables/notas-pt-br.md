# Atalhos do VSCode:

* Alt + ↑ = Levar a linha de código para cima.
* Alt + ↓ = Levar a linha atual de código para baixo.
* Duplo clique + Ctrl+ D = Selecionar todos as palavras com o mesmo nome.
* Duplo clique + Ctrl + F = Selecionar muitas palavras com o mesmo nome de uma vez.
* Shift + Alt + ↓ = Escrever em duas linhas ao mesmo tempo.
* Ctrl + C e Ctrl + V = Copiar e colar linhas de código, não precisa selecionar antes, ok?
* Ctrl + ; = comentário
* alt + shift + A =  comentario em bloco

---

# TIPOS DE DADOS

 **Tipos de Dados**

    Primitivas/ Valores Primitivos
    Estruturais
    Estruturais Primitivas
    
## Primitivas

* String
* Number
* Boolean
* Undefined
* Symbol
* BigInt

## Estruturais

**Objetos**

    Array
    Map
    Set
    Date
    ...

## Estruturais Primitivas/  Estruturais "Root" Primitivas

* Null

## **Observações:**

  **null:** 

    algo que existe, mas não tem nada dentro

  **undefined:**

    algo que não existe

 **Object:**

    propriedades / atributos
    funções / métodos 


**Arrays:**

    Agrupado de dados



---

# VARIABLES

**Tipos**

    var
    let
    const

---
## **Escopo**

* Determina a visibilidade da variável no Javascript

### **Declaração de Blocos**

Cada declaração de blocos tem um bloco de escopo, ou seja, tudo dentro de { }

Ex.:

```
{
    var x = 0;
}
```

* #### Escopo do VAR
    Var é global e consegue funcionar fora do escopo [lines:3-32](variables.js)

* #### Escopo do LET e CONST
    Let e Const não são globais, eles são locais e só podem funcionar dentro do escopo do bloco. [lines:34-46](variables.js)

## CRIANDO VARIAVEIS

JS é "case-sensitive" e aceita códigos Unicode

**Eu posso:**
  
    Começar com esses caracteres especiais: $ _
  
    Começar com letras

    Colocar acentos

    Letras maiúsculas e minúsculas fazem diferença

**Eu não posso:**

    Começar com números

    Colocar espaços

**Ideal:**

    Criar nomes que fazem sentido

    Criar nomes que explicam o que são e o que fazem

    camelCase

    snake_case

    Escrever em Inglês.