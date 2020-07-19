export default function sketch(p, poop) {
  let canvas  
  let grid
  let cellSize
  let bg
  let color
  let start

  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth * .8, p.windowHeight * .8)
    
    // these will be hardcoded until I fond a way to pass props to setup, or force a refresh
    bg = '#111'
    color= '#fff'
    
    // start = false
    // p.noStroke()
    // p.background(bg)
    // cellSize = p.width / 50
    // canvas.position(0, 0)
    
    // grid = new Grid(cellSize)
  }

  p.draw = () => {
    p.background(bg)
    // if (start) {
    //   p.background(bg)
    //   grid.update()
    // }
  }

  p.windowResized = () => p.resizeCanvas(p.windowWidth * .8, p.windowHeight * .8)

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    bg = newProps.theme.complement
    color = newProps.theme.base
  }

  // class Grid {
  //   constructor(cellSize) {
  //     this.cellSize = cellSize
  //     this.grid = []
  //     for (let x = 0; x < p.width; x += cellSize) {
  //       let col = []
  //       for (let y = 0; y < p.height; y += cellSize) {
  //         col.push(new Cell(p.createVector(x + cellSize/2, y + cellSize/2), cellSize))
  //       }
  //       this.grid.push(col)
  //     }
  //   }

  //   update() {
  //     this.grid.forEach(col => {
  //       col.forEach(cell => {
  //         cell.draw()
  //       })
  //     })
  //   }
  // }

    
  // }

//   class Cell {
//     constructor(pos, cellSize, color) {
//       this.pos = pos
//       this.cellSize = cellSize
//     }

//     draw() {
//       let mouse = p.createVector(p.mouseX, p.mouseY) 
//       let mDist = mouse.dist(this.pos)
//       let scaledSize = this.cellSize * (5 / mDist)
      
//       if (scaledSize > this.cellSize/4) scaledSize = cellSize/4
//       p.fill(color)
//       p.ellipse(this.pos.x, this.pos.y, scaledSize)
//     }
//   }
}