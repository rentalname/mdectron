import React from 'react';
import { render } from 'react-dom';
import MarkdownEditorUI from './components/MarkdownEditorUI';

/* global document:true */
render(<MarkdownEditorUI />, document.getElementById('app'));
