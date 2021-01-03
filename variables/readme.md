
# VsCode Shortcuts:

* Alt + ↑ = code up.
* Alt + ↓ = code down.
* Double Click + Ctrl+ D = Select all words with the same name.
* Double Click + Ctrl + F = Select many words with the same name at once.
* Shift + Alt + ↓ = Write in two lines at the same time.
* Ctrl + C e Ctrl + V = Cut and paste code lines, don't need to select before, ok?
* Ctrl + ; = Comment.
* alt + shift + A =  Block comment.

---

# DATA TYPES

 **Data types**

    Primitive / Primitive value
    Structural
    Structural Primitive

## Primitives

* String
* Number
* Boolean
* Undefined
* Symbol
* BigInt

## Structural

**Object**

    Array
    Map
    Set
    Date
    ...

## Structural Primitive /  Structural Root Primitive

* Null

## **Observations:**

  **null:** 

    something that exists but has nothing inside

  **undefined:**

    something that does not exist

 **Object:**

    props / attributes
    functions / methods 


**Arrays:**

    grouping of data



---

# VARIABLES

**Types**

    var
    let
    const

---
## **Scope**

* Determines the visibility of some variable in Javascript

### **Block Statement**

Each block statement has a block scope. In other words: everything inside { }

Ex.:

```
{
    var x = 0;
}
```

* #### Var scope
    Var is global and can work outside a block scope. [lines:3-32](variables.js)

* #### Let e Const scope
    Let and Const are not global, they are local and can work only inside a block scope. [lines:34-46](variables.js)

## Create variables

JS is case-sensitive and accepts Unicode strings

**I can:**
  
    Start with these special caracters: $ _
  
    Start with letters

    Put accents

    Upper and lower case letters make a difference

**I can't:**

    Start with numbers

    Put empty spaces

**Ideal:**

    Create names that make sense

    Create names that explain what the variable is or do

    camelCase

    snake_case

    Write in English