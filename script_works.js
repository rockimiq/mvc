import init_genesis from './works/genesis/init.js'
import init_dithered from './works/dithered/init.js'

window.load_script = (src) => {
  return new Promise(function (resolve, reject) {
    let s = document.createElement('script')
    s.src = src
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
}

window.onload = async () => {
  const works_wrapper = document.querySelector('.works_wrapper')
  const works_overlay = document.querySelector('.works_overlay')
  const works_overlay_back = document.querySelector('.works_overlay_back')
  const works_overlay_text = document.querySelector('.works_overlay_text')
  const works_overlay_content = document.querySelector('.works_overlay_content')

  const converter = new showdown.Converter()

  const works_init = [
    init_genesis,
    init_dithered
  ]

  const on_work_click = (content_div, text) => {
    works_overlay.classList.toggle('hidden')
    const html_text = converter.makeHtml(text)
    console.log(html_text)
    works_overlay_text.insertAdjacentHTML('afterbegin', html_text)
    works_overlay_content.replaceChildren(content_div)
  }

  // back click
  // also has to remove/stop the content
  // think about how to do this without being a js developer
  works_overlay_back.addEventListener('click', () => {
    works_overlay.classList.toggle('hidden')
  })

  // add work flex buttons
  for (const work_init of works_init) {
    let [div, texts, start] = await work_init()

    let work_flex_item = document.createElement('div')
    work_flex_item.classList.add('work_flex_item')
    work_flex_item.appendChild(document.createTextNode(texts.name))
    works_wrapper.appendChild(work_flex_item)
    work_flex_item.addEventListener('click', (e) => {
      on_work_click(div, texts.desc)
      start()
      console.log('click!')
    })

  }
}
