const items_container = document.getElementById("items_container");
const submit_btn = document.getElementById("submit_btn");
const itemElement = [];
const votes = [];
const data = [];

let voted = false;
const db = firebase.database().ref("/items");

db.once("value", snapchat =>  {
    const itemObj = snapchat.value();
    if(itemObj){
        Object.keys(itemObj).forEach(key => {
            data.push({...itemObj[key], id:key});
            for(let i = 0; i < itemObj; i++){
                votes.push(key);
            }
        });

        createDom();
    }
});

function createDom() {
    items_container.innerHTML = "";

    data.forEach(data => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <span>${data.value}</span>
            <small></small>
            <div class="process-bar"></div>
        `;

        item.setAttribute("data-id", data.id);
        itemElement.push(item);
        items_container.appendChild(item);
    });

    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener("click", () => {
            items.forEach(innerHTML => {
                innerHTML.classList.remove("active");
            });
            items.classList.add("active");
        });
    });

    submit_btn.addEventListener("click", () => {
        if(!voted){
            const votedItem = document.querySelector(".item.active");
            if(!votedItem){
                alert("Please select an option.");
                return;
            }
            const id = votedItem.getAttribute("data-id");
            votes.push(id);

            db.child(id).update({
                votes: data.find(item => item.id === id).votes + 1
            });

            calculateVotes();
            submit_btn.innerText = "Thank you for your response";
            voted = true;
        }
    });
}

function calculateVotes() {
    const votesObj = {};
    const totalVotes = votes.length;
    const items = document.querySelectorAll(".item");

    votes.forEach(vote => {
        votesObj[vote] = votesObj[vote] ? ++votesObj[vote] : 1;
    });

    items.forEach(item => {
        const id = item.getAttribute("data-id");
        const votePercent = (votesObj[id] || 0) / totalVotes * 100;
        const voteFinalValue = `${votePercent.toFixed(2)}%`;

        item.querySelector("small").innerText = voteFinalValue;
        item.querySelector(".percent_bar").style.width = voteFinalValue;
    });
}