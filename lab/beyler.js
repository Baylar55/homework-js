let name = prompt("What is your name?")
let height = prompt("How much is your height?")
let weight = prompt("How much is your weight?")
let BMR=weight / Math.pow(height,2)
if (BMR<=0) {
    alert(name + ", brat you don't live.")
} 
else if(BMR>0 && BMR<18.5){
    alert(name + " is underweight.")
}
else if(BMR>=18.5 && BMR<=24.9){
    alert(name + " is normal.")
}
else if(BMR>=25 && BMR<=29.9){
    alert(name + " is overweight.")
}
else if(BMR>=30 && BMR<=34.9){
    alert(name + " is obese.")
}
else {
    alert(name + " is extremely obese.")
}

