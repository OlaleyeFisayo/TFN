import { d as K, a as G, h as J, u as W, b as S, Q as w } from './QBtn-YVQo18uK.js'
import { Q as X } from './QInput-BWwVXvfl.js'
import {
  r as $,
  c as i,
  h as r,
  g as Y,
  O as g,
  P as N,
  k as ee,
  z as c,
  A as b,
  B as a,
  N as te,
  C as le,
  f as o,
  E as m,
  F as ae,
  H as se,
  M as A,
  G as x,
  I as ne,
  D as I,
  J as M,
  Q as oe,
} from './index-croNHMG4.js'
import { b as ie, u as re, a as ue, c as de } from './private.use-form-DP1HiX6u.js'
import { u as ce, o as pe, _ as me } from './navigate-next-C7X7Ct9M.js'
import { _ as ve, a as fe, i as ge, c as he } from './index-DLpykedm.js'
import { _ as Ce } from './arrow-back-CWJ3tfhi.js'
import { c as F } from './stylesheet-tJbRLR7r.js'
import { _ as be } from './_plugin-vue_export-helper-DlAUqK2U.js'
const _e = {
    ...re,
    ...W,
    ...ue,
    modelValue: { required: !0, default: null },
    val: {},
    trueValue: { default: !0 },
    falseValue: { default: !1 },
    indeterminateValue: { default: null },
    checkedIcon: String,
    uncheckedIcon: String,
    indeterminateIcon: String,
    toggleOrder: { type: String, validator: (s) => s === 'tf' || s === 'ft' },
    toggleIndeterminate: Boolean,
    label: String,
    leftLabel: Boolean,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number],
  },
  ke = ['update:modelValue']
function xe(s, u) {
  const { props: e, slots: v, emit: _, proxy: t } = Y(),
    { $q: h } = t,
    n = ie(e, h),
    f = $(null),
    { refocusTargetEl: L, refocusTarget: P } = ce(e, f),
    O = K(e, pe),
    C = i(() => e.val !== void 0 && Array.isArray(e.modelValue)),
    y = i(() => {
      const l = g(e.val)
      return C.value === !0 ? e.modelValue.findIndex((p) => g(p) === l) : -1
    }),
    d = i(() => (C.value === !0 ? y.value !== -1 : g(e.modelValue) === g(e.trueValue))),
    k = i(() => (C.value === !0 ? y.value === -1 : g(e.modelValue) === g(e.falseValue))),
    q = i(() => d.value === !1 && k.value === !1),
    Q = i(() => (e.disable === !0 ? -1 : e.tabindex || 0)),
    D = i(
      () =>
        `q-${s} cursor-pointer no-outline row inline no-wrap items-center` +
        (e.disable === !0 ? ' disabled' : '') +
        (n.value === !0 ? ` q-${s}--dark` : '') +
        (e.dense === !0 ? ` q-${s}--dense` : '') +
        (e.leftLabel === !0 ? ' reverse' : ''),
    ),
    E = i(() => {
      const l = d.value === !0 ? 'truthy' : k.value === !0 ? 'falsy' : 'indet',
        p = e.color !== void 0 && (e.keepColor === !0 || k.value !== !0) ? ` text-${e.color}` : ''
      return `q-${s}__inner relative-position non-selectable q-${s}__inner--${l}${p}`
    }),
    R = i(() => {
      const l = { type: 'checkbox' }
      return (
        e.name !== void 0 &&
          Object.assign(l, {
            '.checked': d.value,
            '^checked': d.value === !0 ? 'checked' : void 0,
            name: e.name,
            value: C.value === !0 ? e.val : e.trueValue,
          }),
        l
      )
    }),
    T = de(R),
    U = i(() => {
      const l = {
        tabindex: Q.value,
        role: 'checkbox',
        'aria-label': e.label,
        'aria-checked': q.value === !0 ? 'mixed' : d.value === !0 ? 'true' : 'false',
      }
      return e.disable === !0 && (l['aria-disabled'] = 'true'), l
    })
  function V(l) {
    l !== void 0 && (N(l), P(l)), e.disable !== !0 && _('update:modelValue', Z(), l)
  }
  function Z() {
    if (C.value === !0) {
      if (d.value === !0) {
        const l = e.modelValue.slice()
        return l.splice(y.value, 1), l
      }
      return e.modelValue.concat([e.val])
    }
    if (d.value === !0) {
      if (e.toggleOrder !== 'ft' || e.toggleIndeterminate === !1) return e.falseValue
    } else if (k.value === !0) {
      if (e.toggleOrder === 'ft' || e.toggleIndeterminate === !1) return e.trueValue
    } else return e.toggleOrder !== 'ft' ? e.trueValue : e.falseValue
    return e.indeterminateValue
  }
  function j(l) {
    ;(l.keyCode === 13 || l.keyCode === 32) && N(l)
  }
  function z(l) {
    ;(l.keyCode === 13 || l.keyCode === 32) && V(l)
  }
  const H = u(d, q)
  return (
    Object.assign(t, { toggle: V }),
    () => {
      const l = H()
      e.disable !== !0 && T(l, 'unshift', ` q-${s}__native absolute q-ma-none q-pa-none`)
      const p = [r('div', { class: E.value, style: O.value, 'aria-hidden': 'true' }, l)]
      L.value !== null && p.push(L.value)
      const B = e.label !== void 0 ? G(v.default, [e.label]) : J(v.default)
      return (
        B !== void 0 && p.push(r('div', { class: `q-${s}__label q-anchor--skip` }, B)),
        r('div', { ref: f, class: D.value, ...U.value, onClick: V, onKeydown: j, onKeyup: z }, p)
      )
    }
  )
}
const ye = () =>
    r('div', { key: 'svg', class: 'q-checkbox__bg absolute' }, [
      r('svg', { class: 'q-checkbox__svg fit absolute-full', viewBox: '0 0 24 24' }, [
        r('path', {
          class: 'q-checkbox__truthy',
          fill: 'none',
          d: 'M1.73,12.91 8.1,19.28 22.79,4.59',
        }),
        r('path', { class: 'q-checkbox__indet', d: 'M4,14H20V10H4' }),
      ]),
    ]),
  Ve = ee({
    name: 'QCheckbox',
    props: _e,
    emits: ke,
    setup(s) {
      const u = ye()
      function e(v, _) {
        const t = i(
          () =>
            (v.value === !0
              ? s.checkedIcon
              : _.value === !0
                ? s.indeterminateIcon
                : s.uncheckedIcon) || null,
        )
        return () =>
          t.value !== null
            ? [
                r(
                  'div',
                  {
                    key: 'icon',
                    class: 'q-checkbox__icon-container absolute-full flex flex-center no-wrap',
                  },
                  [r(S, { class: 'q-checkbox__icon', name: t.value })],
                ),
              ]
            : [u]
      }
      return xe('checkbox', e)
    },
  }),
  we = ['width', 'height'],
  Ie = {
    __name: 'apple-icon',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(s) {
      return (u, e) => (
        c(),
        b(
          'svg',
          { width: s.width, height: s.height, fill: 'none' },
          e[0] ||
            (e[0] = [
              a(
                'path',
                {
                  d: 'M22.0599 18.7033C21.6828 19.5418 21.2366 20.3136 20.7195 21.0232C20.0147 21.9906 19.4376 22.6602 18.9928 23.032C18.3034 23.6424 17.5647 23.955 16.7737 23.9728C16.2058 23.9728 15.521 23.8172 14.7239 23.5017C13.9241 23.1876 13.1891 23.032 12.5171 23.032C11.8123 23.032 11.0563 23.1876 10.2478 23.5017C9.43802 23.8172 8.78567 23.9816 8.28691 23.9979C7.52838 24.029 6.77231 23.7076 6.01763 23.032C5.53595 22.6276 4.93347 21.9343 4.21172 20.9521C3.43734 19.9032 2.80069 18.687 2.30193 17.3004C1.76777 15.8026 1.5 14.3523 1.5 12.9482C1.5 11.3398 1.86103 9.95259 2.58416 8.7901C3.15248 7.85636 3.90855 7.11979 4.85483 6.57906C5.80111 6.03834 6.82356 5.76279 7.92465 5.74516C8.52714 5.74516 9.31721 5.92456 10.299 6.27714C11.2781 6.63091 11.9067 6.81031 12.1824 6.81031C12.3884 6.81031 13.0868 6.60054 14.2707 6.18233C15.3902 5.79449 16.3351 5.6339 17.1092 5.69716C19.2067 5.86012 20.7826 6.6561 21.8306 8.09013C19.9546 9.18432 19.0267 10.7169 19.0451 12.6829C19.0621 14.2142 19.6392 15.4886 20.7733 16.5004C21.2873 16.97 21.8614 17.333 22.5 17.5907C22.3615 17.9774 22.2153 18.3477 22.0599 18.7033ZM17.2492 0.480137C17.2492 1.68041 16.7937 2.8011 15.8858 3.8384C14.79 5.07155 13.4647 5.78412 12.0275 5.67168C12.0092 5.52769 11.9986 5.37613 11.9986 5.21688C11.9986 4.06462 12.5197 2.83147 13.445 1.82321C13.907 1.3127 14.4946 0.888228 15.2071 0.549615C15.9181 0.216055 16.5906 0.031589 17.2231 0C17.2415 0.160458 17.2492 0.320926 17.2492 0.480121V0.480137Z',
                  fill: 'black',
                },
                null,
                -1,
              ),
            ]),
          8,
          we,
        )
      )
    },
  },
  Se = ['width', 'height'],
  $e = {
    __name: 'google-icon',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(s) {
      return (u, e) => (
        c(),
        b(
          'svg',
          { width: s.width, height: s.height, fill: 'none' },
          e[0] ||
            (e[0] = [
              te(
                '<g clip-path="url(#clip0_54878_1714)"><path d="M23.7148 12.2245C23.7148 11.2413 23.635 10.5237 23.4623 9.77963H12.2344V14.2176H18.8249C18.6921 15.3205 17.9746 16.9815 16.3801 18.0976L16.3577 18.2461L19.9078 20.9963L20.1537 21.0209C22.4126 18.9347 23.7148 15.8653 23.7148 12.2245Z" fill="#4285F4"></path><path d="M12.234 23.9176C15.4628 23.9176 18.1734 22.8545 20.1533 21.0209L16.3797 18.0976C15.3698 18.8018 14.0145 19.2934 12.234 19.2934C9.07157 19.2934 6.38751 17.2074 5.43072 14.324L5.29048 14.3359L1.59906 17.1927L1.55078 17.3269C3.51732 21.2334 7.55674 23.9176 12.234 23.9176Z" fill="#34A853"></path><path d="M5.4309 14.324C5.17844 13.5799 5.03234 12.7826 5.03234 11.9588C5.03234 11.1349 5.17844 10.3377 5.41762 9.5936L5.41093 9.43513L1.67325 6.53241L1.55096 6.59058C0.740459 8.21168 0.275391 10.0321 0.275391 11.9588C0.275391 13.8855 0.740459 15.7058 1.55096 17.3269L5.4309 14.324Z" fill="#FBBC05"></path><path d="M12.234 4.62403C14.4795 4.62403 15.9943 5.59402 16.858 6.40461L20.233 3.10928C18.1602 1.1826 15.4628 0 12.234 0C7.55674 0 3.51732 2.68406 1.55078 6.59056L5.41744 9.59359C6.38751 6.7102 9.07157 4.62403 12.234 4.62403Z" fill="#EB4335"></path></g><defs><clipPath id="clip0_54878_1714"><rect width="23.456" height="24" fill="white" transform="translate(0.272461)"></rect></clipPath></defs>',
                2,
              ),
            ]),
          8,
          Se,
        )
      )
    },
  },
  Le = { class: 'signin-section' },
  qe = { class: 'signin-topbar' },
  Be = { class: 'signin-main' },
  Ne = { class: 'signin-details' },
  Ae = { class: 'signin-details-body' },
  Me = { class: 'item' },
  Fe = { class: 'label' },
  Pe = { class: 'right-icon' },
  Oe = { class: 'signin-details-footer' },
  Qe = { class: 'serviceAuth' },
  De = { class: 'serviceAuth-list' },
  Ee = {
    __name: 'SignInIndex',
    setup(s) {
      const u = $([
          {
            label: 'Email or Username',
            placeholder: 'Email or Username',
            tag: 'email',
            value: null,
            img: ve,
          },
          {
            label: 'Password',
            placeholder: 'password',
            tag: 'password',
            type: 'password',
            value: null,
            img: fe,
            prev: 'password',
          },
        ]),
        e = $(!1),
        v = i(() => ge(he(u.value)))
      return (_, t) => {
        const h = le('RouterLink')
        return (
          c(),
          b('section', Le, [
            a('nav', qe, [
              o(h, { to: '/', class: 'backarrow-button' }, { default: m(() => [o(Ce)]), _: 1 }),
              t[1] || (t[1] = a('h3', null, 'Sign In', -1)),
              t[2] || (t[2] = a('div', null, null, -1)),
            ]),
            a('main', Be, [
              a('div', Ne, [
                t[7] ||
                  (t[7] = a(
                    'div',
                    { class: 'signin-details-header' },
                    [a('h3', null, 'Sign in to your account')],
                    -1,
                  )),
                a('div', Ae, [
                  (c(!0),
                  b(
                    ae,
                    null,
                    se(
                      u.value,
                      (n) => (
                        c(),
                        b('div', { class: 'form', key: n.tag }, [
                          a('div', Me, [
                            a('p', Fe, ne(n.label), 1),
                            o(
                              X,
                              {
                                dense: '',
                                outlined: '',
                                placeholder: n.placeholder,
                                color: A(F).wine,
                                modelValue: n.value,
                                'onUpdate:modelValue': (f) => (n.value = f),
                                type: n.type,
                              },
                              {
                                append: m(() => [
                                  n.type === 'password'
                                    ? (c(),
                                      I(
                                        S,
                                        {
                                          key: 0,
                                          name: 'visibility_off',
                                          class: 'cursor-pointer mr-2',
                                          onClick: (f) => (n.type = 'text'),
                                        },
                                        null,
                                        8,
                                        ['onClick'],
                                      ))
                                    : M('', !0),
                                  n.prev === 'password' && n.type === 'text'
                                    ? (c(),
                                      I(
                                        S,
                                        {
                                          key: 1,
                                          name: 'visibility',
                                          class: 'cursor-pointer mr-2',
                                          onClick: (f) => (n.type = 'password'),
                                        },
                                        null,
                                        8,
                                        ['onClick'],
                                      ))
                                    : M('', !0),
                                  (c(), I(oe(n.img), { width: 37, height: 24, color: 'black' })),
                                ]),
                                _: 2,
                              },
                              1032,
                              ['placeholder', 'color', 'modelValue', 'onUpdate:modelValue', 'type'],
                            ),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                  o(
                    Ve,
                    {
                      label: 'Keep me Signed In',
                      modelValue: e.value,
                      'onUpdate:modelValue': t[0] || (t[0] = (n) => (e.value = n)),
                      color: A(F).wine,
                    },
                    null,
                    8,
                    ['modelValue', 'color'],
                  ),
                  o(
                    w,
                    { label: 'Sign In', class: 'app-button primary mt-2', disable: v.value },
                    { default: m(() => [a('div', Pe, [o(me, { width: 34, height: 36 })])]), _: 1 },
                    8,
                    ['disable'],
                  ),
                ]),
                a('div', Oe, [
                  a('span', null, [
                    t[4] || (t[4] = x(' Lost your password? ')),
                    o(
                      h,
                      { to: '/forgotpassword', class: 'login-link' },
                      { default: m(() => t[3] || (t[3] = [x('Click here to Recover')])), _: 1 },
                    ),
                  ]),
                  a('span', null, [
                    t[6] || (t[6] = x(" Don't have an account? ")),
                    o(
                      h,
                      { to: '/signup', class: 'login-link' },
                      { default: m(() => t[5] || (t[5] = [x('Sign Up now!')])), _: 1 },
                    ),
                  ]),
                ]),
              ]),
              a('div', Qe, [
                t[10] ||
                  (t[10] = a(
                    'div',
                    { class: 'serviceAuth-header' },
                    [
                      a('div', { class: 'line' }),
                      a('span', null, 'or sign up with'),
                      a('div', { class: 'line' }),
                    ],
                    -1,
                  )),
                a('div', De, [
                  o(
                    w,
                    { class: 'app-button', padding: '0.8rem' },
                    {
                      default: m(() => [
                        o($e),
                        t[8] || (t[8] = a('span', { class: 'ml-2' }, 'Google', -1)),
                      ]),
                      _: 1,
                    },
                  ),
                  o(
                    w,
                    { class: 'app-button', padding: '0.8rem' },
                    {
                      default: m(() => [
                        o(Ie),
                        t[9] || (t[9] = a('span', { class: 'ml-2' }, 'Apple', -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  },
  Je = be(Ee, [['__scopeId', 'data-v-ce7bd0e4']])
export { Je as default }
