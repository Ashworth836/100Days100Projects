const app = document.getElementById("app");
const animation = document.getElementById("animation");

const BLOCKS_NR = 20;
const blocks = [];
const b_width = Math.ceil(window.innerWidth / BLOCKS_NR);
const b_height = Math.ceil(window.innerHeight / BLOCKS_NR);

createBlock("random");

animation.addEventListener("change", (evt) => {
    const selectedAnimation = evt.target.value;
    cleanUp();
    createBlock(selectedAnimation);
});

function createBlock(animation){
    for (let i = 0; i < BLOCKS_NR; i++) {
        const row = [];
        for (let j = 0; j < BLOCKS_NR; j++) {
            const block = document.createElement("div");
            block.classList.add("block");
            block.style.width = b_width + "px";
            block.style.height = b_height + "px";

            switch(animation) {
                case "fall" : {
                    block.style.top = -b_height + "px";
                    block.style.left = j * b_width + "px";
                    break;
                }

                case "random" : {
                    block.style.top = Math.random() * window.innerHeight + "px";
                    block.style.left = Math.random() * window.innerWidth + "px";
                    break;
                }

                case "oval" : {
                    block.style.top = (Math.sin(j / BLOCKS_NR * Math.PI) * b_height) + "px";
                    block.style.left = (Math.cos(i / BLOCKS_NR * Math.PI * 2) * b_width) + "px";
                    break;
                }

                case "middle" : {
                    block.style.top = (window.innerHeight / 2 - b_height / 2) + "px";
                    block.style.left = (window.innerWidth / 2 - b_width / 2) + "px";
                    break;
                }
            }
            block.style.backgroundPosition = `${-b_width * j}px ${-b_height * i}px`;
            row.push(block);
            app.appendChild(block);
        }
        blocks.push(row);
    }
    setTimeout(() => {animationBlocks(animation)}, 1000);
}

function animationBlocks(animation) {
    blocks.forEach((row, i) => {
        row.forEach((block, j) => {
            switch(animation) {
                case "fall" :
                case "random": {
                    block.style.transitionDelay = Math.random() * 1000 + "ms";
                    break;
                }
                
                case "oval": {
                    block.style.transitionDelay = (i * BLOCKS_NR + j) * 100 + "ms";
                    break;
                }

                case "middle": {
                    block.style.transitionDelay = (i * BLOCKS_NR + j) * 20 + "ms";
                    break;
                }
            }
            block.style.top = (b_height * i) + "px";
            block.style.left = (b_width * j) + "px";
        });
    });
}

function cleanUp() {
    blocks.forEach((row) => {
        row.forEach((block) => {
            block.remove();
        });
    });

    blocks.length = 0;
}
