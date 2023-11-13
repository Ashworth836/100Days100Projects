const scoreElement = document.getElementById("score");
const instructions = document.querySelector(".instructions");
const startButton = document.getElementById("startButton");
    
const DEFAULT_MAX_FORCE = 0.2;
const DEFAULT_MAX_SPEED = 3;
const CONSUMABLES_SIZE = 7;
const VEHICLE_SIZE = 15;
const POISON_COUNT = 30;
const FOOD_COUNT = 100;
    
const consumables = [];
let vehicle = undefined;
let score = 0;
let canvas;
    
const startGame = () => {
    instructions.style.display = "none";
    document.body.style.background = "#121212";
    scoreElement.style.color = "#fefefe";
    setUp();
}
    
const setUp = () => {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    vehicle = new Vehicle(width / 2, height / 2);
    
    for (let i = 0; i <= FOOD_COUNT; i++) {
        consumables.push(new Consumable("food"));
    }
          
    for (let i = 0; i < POISON_COUNT; i++) {
        consumables.push(new Consumable("poison"));
    }
}
    
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    setUp();
}
    
function draw() {
    background(0);
    
    for (let i = consumables.length - 1; i >= 0; i--) {
        const consumable = consumables[i];
        consumable.draw();
        if (vehicle.checkConsumableCollection(consumable)) {
            if (consumable.type === "food") {
                score++;
            } else {
                score -= 5;
            }
    
            updateScore();
    
            const newConsumable = new Consumable(consumable.type);
            consumables.splice(i, 1, newConsumable);
        }
    }
    
    createMouseElement();
    vehicle.update();
    vehicle.checkEdges();
    vehicle.draw();
}
    
const updateScore = () => {
    scoreElement.innerHTML = `Score ${score}`;
}
    
const createMouseElement = () => {
    const mouse = createVector(mouseX, mouseY);
    fill('rgba(255, 255, 255, 0.2)');
    circle(mouseX, mouseY, 30);
    vehicle.flee(mouse);
}
    
class Consumable {
    constructor(food, size) {
        this.type = food;
        this.position = createVector(random(width), random(height));
        this.size = size || CONSUMABLES_SIZE;
    }
    
    draw() {
        if (this.type === "food") {
            fill("green");
        } else {
            fill("red");
        }
        circle(this.position.x, this.position.y, this.size * 2);
    }
}
    
class Vehicle {
    constructor(x, y, max_speed, max_force) {
        this.position = createVector(x, y);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.acceleration = createVector(0, 0);
        this.size = VEHICLE_SIZE;
        this.max_speed = max_speed || DEFAULT_MAX_SPEED;
        this.max_force = max_force || DEFAULT_MAX_FORCE;
    }
    
    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.max_speed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }
    
    draw() {
        stroke(0);
        fill(175);
        let angle = this.velocity.heading() + radians(90);
    
        push();
        translate(this.position.x, this.position.y);
        rotate(angle);
    
        beginShape();
        vertex(0, -this.size);
        vertex(-this.size / 2, this.size);
        vertex(this.size / 2, this.size);
        endShape(CLOSE);
    
        pop();
    }
    
    checkEdges() {
        if (this.position.x < 0) {
            this.position.x = width - this.size;
        }
    
        if (this.position.x > width) {
            this.position.x = this.size;
        }
    
        if (this.position.y < 0) {
            this.position.y = height - this.size;
        }
    
        if (this.position.y > height) {
            this.position.y = this.size;
        }
    }
    
    checkConsumableCollection(consumable) {
        const d = dist(
            this.position.x,
            this.position.y,
            consumable.position.x,
            consumable.position.y
        );
        if (d < consumable.size * 2) {
            return true;
        } else {
            return false;
        }
    }
    
    applyForce(force) {
        this.acceleration.add(force);
    }
    
    flee(target) {
        if (dist(target.x, target.y, this.position.x, this.position.y) < 100) {
            let desired = p5.Vector.sub(target, this.position);
            desired.setMag(this.max_speed);
    
            let steering = p5.Vector.sub(desired, this.velocity);
            steering.limit(this.max_force);
    
            steering.mult(-1);
            this.applyForce(steering);
        }
    }
}
    
startButton.addEventListener("click", startGame);