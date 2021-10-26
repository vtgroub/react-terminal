/*
 * @description: 
 * @Date: 2021-10-26 12:35:00
 * @LastEditors: am
 * @LastEditTime: 2021-10-27 00:57:52
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Terminal from '../../src'

import dynamicList from './commands/dynamic'
import staticList from './commands/static'

const cmd = { dynamicList, staticList }
const config = {
  prompt: '➜  ~ ',
  version: '1.0.0',
  initialDirectory: 'V社-一级市场灰度基金社区',
  bootCmd: 'intro'
}

ReactDOM.render(
  <React.StrictMode>
    <Terminal className={'fade'} cmd={cmd} config={config} />
  </React.StrictMode>,
  document.querySelector('#demo')
)

const fadeEl = document.querySelectorAll('.fade')
window.addEventListener('load', function () {
  fadeEl.forEach(e => e.classList.add('in'))
})

window.addEventListener('beforeunload', function () {
  fadeEl.forEach(e => e.classList.remove('in'))
})
