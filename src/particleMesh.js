export default function sketch(p, poop) {
  let canvas  
  let grid
  let cellSize
  let bg
  let color
  let start

  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    
    // these will be hardcoded until I fond a way to pass props to setup, or force a refresh
    bg = '#fff'
    color= '#111'
    
    start = false
    p.noStroke()
    p.background(bg)
    cellSize = p.width / 50
    canvas.position(0, 0)
    
    grid = new Grid(cellSize)
  }

  p.draw = () => {
    if (start) {
      p.background(bg)
      grid.update()
    }
  }

  class Grid {
    constructor(cellSize) {
      this.cellSize = cellSize
      this.grid = []
      for (let x = 0; x < p.width; x += cellSize) {
        let col = []
        for (let y = 0; y < p.height; y += cellSize) {
          col.push(new Cell(p.createVector(x + cellSize/2, y + cellSize/2), cellSize))
        }
        this.grid.push(col)
      }
    }

    update() {
      this.grid.forEach(col => {
        col.forEach(cell => {
          cell.draw()
        })
      })
    }
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    // if (canvas) {
      bg = newProps.theme.base
      color = newProps.theme.complement
      start = true
    // }
    
  }

  class Cell {
    constructor(pos, cellSize, color) {
      this.pos = pos
      this.cellSize = cellSize
    }

    draw() {
      let mouse = p.createVector(p.mouseX, p.mouseY) 
      let mDist = mouse.dist(this.pos)
      let scaledSize = this.cellSize * (5 / mDist)
      
      if (scaledSize > this.cellSize/4) scaledSize = cellSize/4
      p.fill(color)
      p.ellipse(this.pos.x, this.pos.y, scaledSize)
    }
  }
}