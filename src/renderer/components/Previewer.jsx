import PropTypes from 'prop-types'
import React from 'react'
import emojione from 'emojione'
import marked from 'marked'

import style from './Previewer.css'

marked.setOptions({ sanitize: true })

/* eslint-disable react/no-danger */
const renderer = new marked.Renderer()
renderer.text = (text) => {
  return emojione.shortnameToImage(text)
}
export default function Preview (props) {
  return (
    <div id='previewer' className={`${props.className} ${style.previewer}`}>
      <span dangerouslySetInnerHTML={{ __html: marked(props.value, { renderer }) }} />
    </div>
  )
}

Preview.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}
