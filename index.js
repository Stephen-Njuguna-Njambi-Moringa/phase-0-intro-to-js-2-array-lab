// Write your solution here!

let cats =["Milo", "Otis", "Garfield"]

// passed
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
// passed
function destructivelyRemoveLastCat(name){
  cats.pop(name);
  return cats;
}

// passed
function destructivelyPrependCat(name){
  cats.unshift(name);
  return cats;
}

//failed
function destructivelyRemoveFirstCat(){
  cats.shift();
  return cats;
}

// passed
function appendCat(name){
  var name_1=[...cats,name];
  return name_1;
}

function prependCat(name){
  var name_2=[name, ...cats];
  return name_2;
}

function removeLastCat(){
  var catts=cats.slice(0,cats.length-1);
  return catts;
}

function removeFirstCat(){
  var caats=cats.slice(1);
  return caats;
}
 