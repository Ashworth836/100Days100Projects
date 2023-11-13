const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");
const lengthElement = document.getElementById("length");
const resultElement = document.getElementById("result");
const symbolsElement = document.getElementById("symbols");
const numbersElement = document.getElementById("numbers");
const lowercaseElement = document.getElementById("lowercase");
const uppercaseElement = document.getElementById("uppercase");


const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
}

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getRandomNumber = () => {
    return  String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const getRandomSymbol = () =>{
    const symbols = '!@#$%^&*()_-+=[]|\\:;"<>,.?/';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


clipboard.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = resultElement.innerText;

    if(!password) { return };

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    // window.getSelection().removeAllRanges();
    textarea.remove();
    alert("Text copied to clipboard!");
})

generate.addEventListener("click", () => {
    const length = +lengthElement.value;
    const hasNumber = numbersElement.checked;                          
    const hasSymbol = symbolsElement.checked;                          
    const hasLower = lowercaseElement.checked;                          
    const hasUpper = uppercaseElement.checked;    
    
    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})

const generatePassword = (lower, upper, number, symbol, length) => {
    let generatedPassword = "";
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    const typesCount = typesArr.length;

    if(typesCount === 0){
        return "";
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(typeObj => {
            const funcName = Object.keys(typeObj)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}