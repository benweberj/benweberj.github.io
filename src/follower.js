export default function follower(p) {
  let win = { x: window.innerWidth, y: window.innerHeight }
  let cnv
  let bg
  let follower

  p.setup = () => {
    cnv = p.createCanvas(win.x, win.y)
    cnv.position(0,0)
    cnv.style('z-index', -100)
    follower = new Follower(p.createVector(p.random(p.width), p.random(p.height)))
  }

  p.draw = () => {
    p.background(bg)
    follower.follow(p.createVector(p.mouseX, p.mouseY))
    follower.draw()
  }

  p.myCustomRedrawAccordingToNewPropsHandler = props => {
    bg = props.theme.base
  }

  window.onresize = () => {
    win = { x: window.innerWidth, y: window.innerHeight }
    p.resizeCanvas(win.x, win.y)
  }

  class Follower {
    constructor(pos) {
      this.pos = pos
      this.vel = p.createVector()
      this.size = 20
    }

    follow(mouse) {
      let dir = this.sub(mouse, this.pos).mult(.000001)
      // if (dir.mag() > 5) dir.setMag(5)
      let d = p.dist(this.pos, mouse)
      dir.mult(.01/(d*d))
      // dir.mult(1/(1000))
      // if (this.vel.mag() > 10) this.vel.setMag(10)
      this.vel.add(dir)
    }

    draw() {
      p.fill('green')
      this.pos.add(this.vel)
      this.checkBounds()
      p.ellipse(this.pos.x, this.pos.y, this.size)
    }

    // a vector pointing from v1 to v2
    sub(v1, v2) {
      return p.createVector(v1.x - v2.x, v1.y - v2.y)
    }

    checkBounds() {
      if (this.pos.x < this.size/2 || this.pos.x > p.width - this.size/2) {
        this.vel = p.createVector(-this.vel.x, this.vel.y)
      } else if (this.pos.y < this.size / 2 || this.pos.y > p.height - this.size / 2) {
        this.vel = p.createVector(this.vel.x, -this.vel.y)
      }
    }
  }
}
