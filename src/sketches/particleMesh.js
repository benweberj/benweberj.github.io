// import Particle from './Particle'

export default p => {
  let canvas
  let bg
  let color

  let particles
  let birds
  let particleCount
  let connectionDist
  let attraction
  let attractionDist
  let repulseMultiplier

  p.preload = _ => {
    // birds = p.loadSound('birds.mp3')
  }

  p.setup = _ => {
    // canvas = p.createCanvas(p.windowWidth * .8, p.windowHeight * .8)
    canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    // canvas.style('z-index', -10000)
    canvas.style('position', 'absolute')
    canvas.style('top', '0px')
    canvas.style('left','0px')
    canvas.style('opacity', '.3')
    canvas.style('z-index', '-101')
    bg = '#111'
    color= '#fff'
    particles = []
    particleCount = 50
    connectionDist = 200
    attraction = 3
    attractionDist = 200
    repulseMultiplier = 5
    // birds.play()

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(p));
    }
  }

  p.draw = _ => {
    p.background(bg)

    let mouse = p.createVector(p.mouseX, p.mouseY)
    particles.forEach(particle => {
      particle.update(color)

      particles.forEach(other => {
        if (particle !== other) {
          let dist = particle.pos.dist(other.pos);

          let mouseDist = particle.pos.dist(mouse)
          if (mouseDist < attractionDist) {
            let dir = mouse.copy().sub(particle.pos)
            if (p.mouseIsPressed) {
              dir.mult(-repulseMultiplier)
            }
            particle.applyForce(dir.mult(.01 * attraction / Math.pow(mouseDist, 2)))
          }

          if (dist < connectionDist) {
            let stroke = Math.pow(15 / dist, 2);
            stroke = p.constrain(stroke, 0, 2);
            p.stroke(color)
            p.strokeWeight(stroke)
            p.line(particle.pos.x, particle.pos.y, other.pos.x, other.pos.y);
          }
        }
      })
    })
  }

  p.windowResized = _ => p.resizeCanvas(p.windowWidth * .8, p.windowHeight * .8)

  p.myCustomRedrawAccordingToNewPropsHandler = newProps => {
    // bg = newProps.theme.complement
    // color = newProps.theme.base
    bg = newProps.theme.base
    color = newProps.theme.complement
  }
}

class Particle {
  constructor(p) {
    this.p = p
    this.respawn()
    this.pos = p.createVector(p.random(-100, p.width+100), p.random(-100, p.height+100))
  }

  update(color) {
    this.pos.add(this.vel)
    this.checkPos()

    this.p.strokeWeight(this.size)
    this.p.stroke(color)
    this.p.point(this.pos.x, this.pos.y)
  }

  applyForce(force) {
    // let dist = force.mag()
    // let strength = .3 / Math.pow(dist, 2)
    // strength = this.p.constrain(strength, 0, .0005)
    // force.setMag(strength)
    this.vel.add(force)
  }

  checkPos() {
    let x = this.pos.x
    let y = this.pos.y
    let s = 100

    if ((x < 0 - s) ||
        (x > this.p.width + s) ||
        (y < 0 - s) ||
        (y > this.p.height + s))
    {
        this.respawn();
    }
  }

  respawn() {
    let rate = this.p.random(.2, 1)
    this.pos = this.p.createVector(this.p.random(-100, this.p.width + 100), -100)
    this.vel = this.p.createVector(this.p.random(-rate, rate), this.p.random(0, rate))
    this.size = this.p.random(2, 7)
  }
}