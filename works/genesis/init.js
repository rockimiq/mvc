import sketch from './sketch.js'

export default async () => {
  await window.load_script('https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.min.js')

  let div = document.createElement('div')

  div.classList.add('genesis_wrapper')

  const texts =
    {
      name: "genesis.",
      desc: `
*genesis*

1: "not the earth was formless and empty, darkness was over the surface of the
deep."  
eugen bracht

2: "and they become one flesh"  
h.r. giger

3: "for dust you are and to dust you will return"  
franz stuck

4: "driven from the ground, which opened its mouth to receive your brother's
blood from your hand"  
henry fuseli

5: "then he was no more, because god took him away"  
odilon redon

6: "every creature that has the breath of life in it. everything on earth will
perish"  
odilon redon

7: "on that day all the springs of the great deep burst forth, and the
floodgates of the heavens were opened"  
arnold böcklin

8: "the waters continued to reede until the tenth month, and on the first day of
the tenth month the tops of the mountains became visible."  
arnold böcklin

9: "just as i gave you the green plants, i now give you everything"  
francis goya

10: "the tables of nations"  
gustav klimt

11: "let us build ourselves a city, with a tower that reaches to the heavens"  
franz stuck
`
    }

  const start = () => {
    const genesis_p5 = new p5(sketch, div)
    genesis_p5.start()
  }

  return [div, texts, start]
}
