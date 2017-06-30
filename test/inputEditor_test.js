const assert = require('assert')
const createApplication = require('./createApplication')
const EditorPage = require('./editor.page')
const { JSDOM } = require('jsdom')

describe('エディタ入力のテスト', function () {
  this.timeout(10000)
  let app
  beforeEach(() => {
    app = createApplication()
    return app.start()
  })
  afterEach(() => {
    return app.stop()
  })

  describe('エディタにMarkdownテキストを入力する', function () {
    it('HTMLがレンダリングされる', function () {
      const page = new EditorPage(app.client)
      return page.inputText('# h1見出し\n## h2見出し')
        .then(() => page.getRenderedHTML())
        .then((html) => {
          const dom = JSDOM.fragment(html)
          const h1 = dom.querySelector('h1')
          assert.equal(h1.textContent, 'h1見出し')
          const h2 = dom.querySelector('h2')
          assert.equal(h2.textContent, 'h2見出し')
        })
    })
  })
})
