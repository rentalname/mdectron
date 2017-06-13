import React from 'react';
import PropTypes from 'prop-types';
import style from './Editor.css';

export default function Editor(props) {
  return (
    <textarea id="editor" className={`${style.editor} ${props.className}`} value={props.value} onChange={props.onChange} />
  );
}

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
