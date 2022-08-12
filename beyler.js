// PUSH function

 const arr = [10, 30, 40];
function push(array, index, element) {
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1];
  }
  array[index] = element;
  return array;
}
const newArray = push(arr, 6, 20);
console.log(newArray);




// POP function
const array2=[1,2,3,4]
function pop(array, index) {
  const emptyArray = [];
  if(index>array.length-1){
    return `Index is out of range`;
  }
  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
      emptyArray.push(array[i]);
    }
  }
  return emptyArray;
}

const updatedArray = pop(array2, 1);
console.log(updatedArray);
