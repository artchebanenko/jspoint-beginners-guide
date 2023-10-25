import React from 'react'
import { createRoot } from 'react-dom/client'
import { act } from '@testing-library/react'
import '@testing-library/jest-dom'

import { App } from './App'

let root

beforeEach(() => {
  const el = document.createElement('div')
  el.setAttribute('id', 'app')
  document.body.appendChild(el)
})

afterEach(() => {
  const el = document.getElementById('app')
  act(() => {
    root.unmount()
  })
  el.remove()
})

test('App component with name', () => {
  const el = document.getElementById('app')
  act(() => {
    root = createRoot(el)
    root.render(<App name="Custom Name" />)
  })

  const h1El = document.querySelector('h1')
  expect(h1El).toHaveTextContent('Custom Name')
})

test('Mouse click events', () => {
  const el = document.getElementById('app')
  act(() => {
    root = createRoot(el)
    root.render(<App name="Custom Name" />)
  })

  const pEl = el.querySelector('p')
  const btnEl = el.querySelector('button')

  expect(pEl).toHaveTextContent('count: 0')
  expect(btnEl).not.toBeDisabled()

  act(() => {
    // The {bubbles: true} argument to the MouseEvent constructor makes the event bubble up the DOM tree.
    // This is necessary as React attaches all the event handlers to the document or root of the component.
    btnEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })
  expect(pEl).toHaveTextContent('count: 1')
  expect(btnEl).not.toBeDisabled()

  act(() => {
    btnEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })
  act(() => {
    btnEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })
  expect(pEl).toHaveTextContent('count: 3')
  expect(btnEl).toBeDisabled()
})
