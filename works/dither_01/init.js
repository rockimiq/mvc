export default async () => {
  await window.load_script('https://rawgit.com/patriciogonzalezvivo/glslCanvas/master/dist/GlslCanvas.js')

  const shader = await fetch('works/dithered/shader.frag').then((response) => response.text())

  const canvas = document.createElement('canvas')
  canvas.width = 480
  canvas.height = 160

  const sandbox = new GlslCanvas(canvas)

  const texts =
    {
      name: "withering dithering.",
      desc: "stuff here"
    }

  const start = () => {
    sandbox.setUniform('u_tex_1', 'works/dithered/assets/1.png')
    sandbox.setUniform('u_tex_2', 'works/dithered/assets/2.png')
    sandbox.setUniform('u_tex_3', 'works/dithered/assets/3.png')
    sandbox.setUniform('u_tex_4', 'works/dithered/assets/4.png')
    sandbox.setUniform('u_tex_5', 'works/dithered/assets/5.png')
    sandbox.setUniform('u_tex_6', 'works/dithered/assets/6.png')
    sandbox.load(shader)
  }

  return [canvas, texts, start]
}
