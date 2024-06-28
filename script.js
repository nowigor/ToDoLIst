const Click = () =>{
    const input = document.getElementById("items");
    const result = document.getElementById("result");

    const newParagraph = document.createElement("p");
    newParagraph.className = "single-item"
    newParagraph.textContent = input.value;

    result.appendChild(newParagraph);

    
}
