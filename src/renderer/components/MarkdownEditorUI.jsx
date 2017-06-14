import { ipcRenderer } from 'electron'
import React from 'react'
import Editor from './Editor'
import Previewer from './Previewer'
import style from './MarkdownEditorUI.css'

export default class MarkdownEditorUI extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeText (e) {
    this.setState({ text: e.target.value })
  }

  componentDidMount () {
    ipcRenderer.on('REQUEST_TEXT', () => {
      ipcRenderer.send('REPLY_TEXT', this.state.text)
    })
    ipcRenderer.on('SEND_TEXT', (_e, text) => {
      this.setState({ text })
    })
  }

  componentWillUnmount () {
    ipcRenderer.removeAllListener()
  }

  render () {
    return (
      <div className={style.markdownEditor}>
        <Editor className={style.editorArea} value={this.state.text} onChange={this.onChangeText} />
        <Previewer className={style.previewerArea} value={this.state.text} />
      </div>
    )
  }
}
