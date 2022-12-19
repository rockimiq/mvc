let images2
let font
// let chars = "BS#&@$%*:. ".split('') //11chars
let chars = "@Q$86o?*:. ".split('')

let random_shifts = [
  0.03,
  0.86,
  0.67,
  0.59,
  0.17,
  0.42,
  0.98,
  0.62,
  0.87,
  0.69
]
let colors = [
  [0, 255, 255],
  [255, 0, 255],
  [255, 255, 0],
  [0, 0, 0]
]

preload = () => {
  images2 = loadJSON('assets/coloroutput77.json')
}

setup = () => {
  createCanvas(700, 700)
  textFont('monospace')
  textSize(14)
  textAlign(CENTER, CENTER)
}

const renderDebugTimes = (debugTime) => {
  fill(255,0,0)
  text("second="+debugTime.second,
          100,
          10
          )
  text("countdown="+debugTime.countdown,
          200,
          10
          )
}

const get_random = () => {
  return Math.round(Math.random()*1.1-0.55)
}

const renderPixel = (debugTime, pixel, x, y) => {
  const shift = random_shifts[(x*x+y*7)%10]
  const countdown = debugTime.countdown - shift
  const phase = Math.trunc((debugTime.second)/10)

  const pixelPhase = phase % pixel.length
  const nextPixelPhase = (phase + 1) % pixel.length
  const prod = (pixel[nextPixelPhase] - pixel[pixelPhase]) * 0.25
  const targetIndex = pixel[nextPixelPhase] - Math.trunc(prod*countdown) + get_random()

  if (countdown <= 4) {
    text(chars[targetIndex], x, y)
  } else {
    text(chars[pixel[pixelPhase] + get_random()], x, y)
  }
}

// // renders the sequence of images
const render = (image, debugTime) => {
  Object.values(image).forEach((row, y) => {
    row.forEach((pixel, x) => {
      pixel.forEach((channel, i) => {
        fill(...colors[i])
        renderPixel(debugTime,
                    channel,
                    3 + x*9 + i*2,
                    3 + y * 14 + i*2
                    )
      })
    })
  })
}

draw = () => {
  let ms = millis()
  let second = ms/1000
  const debugTime = {
    ms: ms,
    second: ms/1000,
    countdown: (10 - second%10)
  }
  background(230)
  render(images2, debugTime)
  // renderDebugTimes(debugTime)
}
