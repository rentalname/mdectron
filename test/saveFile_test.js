const assert = require('assert')
const createApplication = require('./createApplication')
const fs = require('fs')
const EditorPage = require('./editor.page')

describe('新規保存', function () {
  this.timeout(10000)
  let app
  beforeEach(function () {
    app = createApplication()
    return app.start()
  })

  afterEach(function () {
    fs.unlink('sandbox/test.md')
    return app.stop()
  })

  it('新しくファイルが作られ, エディタの内容が記録されること', function () {
    const page = new EditorPage(app.client)
    return page.inputText('test test').then(() => {
      app.electron.ipcRenderer.send('SAVE_AS_NEW_FILE_TEST')
      return new Promise((resolve, reject) => {
        const timer = setInterval(() => {
          if (fs.existsSync('./sandbox/test.md')) {
            const text = fs.readFileSync('./sandbox/test.md', 'utf8')
            resolve(text)
            clearInterval(timer)
          }
        }, 1000)
      })
    }).then((text) => {
      assert.equal('test test', text)
    })
  })
})
