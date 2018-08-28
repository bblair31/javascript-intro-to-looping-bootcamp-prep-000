function forLoop(array) {
 for (var i = 0; i < 25; i++) {
   if (i == 1) {
     return ( `I am ${i} strange loop.`)
   } else {
     return (`I am ${i} strange loops.`)
   }
 }
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return "done"
}

function incrementVariable(i) {
  i = i + 1;
}
function doWhileLoop(array) {
  do {
    (array.length - 1)
  } while (array.length > 0 && incrementVariable(true))
 return array.pop
}