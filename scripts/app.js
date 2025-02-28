let input = document.querySelector("#numberInput");
console.log(input);
input.addEventListener('input', () => {
    console.log('Changed!');
    console.log(input.value);

    if (input.value <= -10 || input.value >= 10) {
        alert('The number should be between -10 and 10');
    }
})
let fruit = {
    name: "PineApple",
    color: "Yellow",
    taste: "Sweet",
}
document.querySelector("#fruitName").innerHTML = `Name: ${fruit.name}`;
document.querySelector("#fruitColor").innerHTML = `Color: ${fruit.color}`;
document.querySelector("#fruitTaste").innerHTML = `Taste: ${fruit.taste}`;
