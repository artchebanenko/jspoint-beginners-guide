import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import { App } from './app/App'

// const root = document.getElementById('app')
// ReactDOM.render(<App name="My App" />, root)

const root = createRoot(document.getElementById('app'))
root.render(<App name="My App" />)
