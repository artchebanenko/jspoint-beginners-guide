// Warning: ReactDOM.render is no longer supported in React 18.
// Use createRoot instead. Until you switch to the new API,
// your app will behave as if it's running React 17.
// Learn more: https://reactjs.org/link/switch-to-createroot

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import { App } from './App'

beforeEach(() => {
  const el = document.createElement('div')
  el.setAttribute('id', 'app')
  document.body.appendChild(el)
})

afterEach(() => {
  const el = document.getElementById('app')
  unmountComponentAtNode(el)
  el.remove()
})

test('App component with name', () => {
  const el = document.getElementById('app')
  act(() => {
    render(<App name="Custom Name" />, el)
  })
  // console.log('HTML ->', document.body.innerHTML)

  const h1el = document.querySelector('h1')
  expect(h1el).toHaveTextContent('Custom Name')
})

test('Mouse click events', () => {
  const el = document.getElementById('app')
  act(() => {
    render(<App name="Custom Name" />, el)
  })

  const pEl = el.querySelector('p')
  const btnEl = el.querySelector('button')

  expect(pEl).toHaveTextContent('count: 0')
  expect(btnEl).not.toBeDisabled()

  btnEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  expect(pEl).toHaveTextContent('count: 1')
  expect(btnEl).not.toBeDisabled()

  btnEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  btnEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  expect(pEl).toHaveTextContent('count: 3')
  expect(btnEl).toBeDisabled()
})
