import { c as a, h as u } from './index-croNHMG4.js'
const o = { dark: { type: Boolean, default: null } }
function m(e, n) {
  return a(() => (e.dark === null ? n.dark.isActive : e.dark))
}
const c = { name: String }
function d(e) {
  return a(() => ({ type: 'hidden', name: e.name, value: e.modelValue }))
}
function i(e = {}) {
  return (n, t, r) => {
    n[t](u('input', { class: 'hidden' + (r || ''), ...e.value }))
  }
}
function l(e) {
  return a(() => e.name || e.for)
}
export { c as a, m as b, i as c, l as d, d as e, o as u }
