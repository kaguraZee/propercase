var button= document.querySelector('#btn')

button.addEventListener("click",capitalizedLetter);

function capitalizedLetter() {
    let inputWord=document.querySelector('#txt').value;
    let words=inputWord.split(' ');

    const capitalizedWord = words.map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1);
        
    });

    const outputText = capitalizedWord.join(' ');
    document.querySelector("#result").innerText = outputText;
}