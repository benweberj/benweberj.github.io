let particles;
let canvas;
let birds;

let particleCount;
let minDist;
let attractionForce;
let repelMultiplier;
let maxSpeed;

function preload() {
    birds = loadSound('birds.mp3');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', -1);
    birds.play();

    $('#controls-toggle').click(() => {
        $('#controls').slideToggle();
        $('#controls-toggle').slideToggle();
    });

    $('input[name="run-button"]').click(start);

    start();
}

function start() {
    if (frameCount > 1) {
        $('#controls').slideToggle();
        $('#controls-toggle').slideToggle();
    }

    particleCount = int($('input[name="particle-count"]').val());
    minDist = int($('input[name="min-dist"]').val());
    attractionForce = parseFloat($('input[name="attraction"]').val());
    repelMultiplier = parseFloat($('input[name="repel"]').val());
    maxSpeed = parseFloat($('input[name="max-speed"]').val());
    console.log(maxSpeed);

    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(maxSpeed));
    }

}

function draw() {
    background(9, 38, 45);

    particles.forEach(particle => {
        particle.move();
        particle.draw();

        particles.forEach(other => {
            mouse = createVector(mouseX, mouseY);
            if (particle !== other) {
                let mouseDist = other.pos.copy().dist(mouse);
                let limit = 1500;
                if (mouseDist < limit) {
                    let dir = mouse.copy().sub(other.pos);
                    if (mouseIsPressed) {
                        dir.mult(-1/repelMultiplier);
                    }
                    other.applyForce(dir.mult(1/attractionForce));
                }

                let dist = particle.pos.dist(other.pos);

                if (dist < minDist) {
                    let str = Math.pow(15 / dist, 2);
                    str = constrain(str, 0, 2);
                    stroke(255);
                    strokeWeight(str);
                    line(particle.pos.x, particle.pos.y, other.pos.x, other.pos.y);
                }
            }
        });
    });
}