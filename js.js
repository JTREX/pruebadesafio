ary = [1,2,3,4,5,6];

function sumar(array) {
  return array.reduce(function(a, b){return a+b;})
}

sumar(ary);
