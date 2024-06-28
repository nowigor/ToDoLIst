const Click = () =>{
    const input = document.getElementById("items");
    const result = document.getElementById("result");

    const newParagraph = document.createElement("p");
    newParagraph.className = "single-item"
    newParagraph.textContent = input.value;
    result.appendChild(newParagraph);

    
}
document.getElementById('result').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'P') {
        event.target.className = "single-item-clicked";
    }
});
