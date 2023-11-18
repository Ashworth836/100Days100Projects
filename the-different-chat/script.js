const msg = document.getElementById("msg");
const close = document.getElementById("close");
const popup = document.getElementById("popup");
const form = document.getElementById("sendForm");
const messages = document.getElementById("messages");

close.addEventListener("click", () => {
    popup.style.display = "none";
});

const socket = io.connect('https://general-tub.glitch.me');

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const message = msg.value;

    if(message.trim()){
        socket.emit("chat message", message);

        msg.value = "";

        scrollBottom();
    }
});

socket.emit("chat join", (msgs) => {
    msgs.forEach(msg => {
        addMsg(msg);
    });
});

const addMsg = (msg) => {
    const messageElement = document.createElement("li");
    messageElement.innerHTML = msg.split(" ").reverse().map(scramble).join("");
    messages.appendChild(messageElement);
}
const scramble = (word) => {
    const firstWord = word[0];
    const lastWord = word[word.length - 1];
    const restWord = word.slice(1, word.length - 1).split("");

    for(let i = 0; i < 100; i++){
        const temp = restWord[i];
        const rndIdx = Math.floor(Math.random() * restWord.length);
        restWord[i] = restWord[rndIdx];
        restWord[rndIdx] = temp;
    }

    return firstWord + restWord.join("") + lastWord
}