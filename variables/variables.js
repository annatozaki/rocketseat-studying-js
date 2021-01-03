// VAR

// var is global and local at the same time

// Logical construction:

/* var x = 0

console.log('> existe x depois do bloco?', x ) // at this block, JS will recognized that x = 0 because the JS read the variable assigned before the "console.log"

 */

 // ------------ //


/* console.log('> existe x antes do bloco?', x )

{
    var x = 0
}

// at this block the JS will return that: x is undefined, in other words, it exists, but, when JS is reading "x" on console log, "x" was not set yet. However "x" exists somewhere in the document. This is interesting: var is global. For this reason the variable was recognized before it was set  (instead, this block would return "null" ) */

// ------------ //

console.log('> existe x antes do bloco?', x )

{
    var x = 0
}

console.log('> existe x depois do bloco?', x )

// ------------ //

// LET E CONST

// const e let are local and only work in the scope in wich they were created

/* console.log ('existe y fora do bloco?', y) //
Reference error "is not defined". We commented here, if not, it would break the entire code
 */

{
    let y = 2;
    console.log ('existe y depois do bloco?', y)
}

//let I can redefine, const we can't