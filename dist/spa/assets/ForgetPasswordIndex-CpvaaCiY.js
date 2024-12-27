import { Q as g } from './QInput-BWwVXvfl.js'
import { Q as b, b as C } from './QBtn-YVQo18uK.js'
import { _ as Q, a as y, i as f, c as V, b as E } from './index-DLpykedm.js'
import { _ as R } from './arrow-back-CWJ3tfhi.js'
import {
  z as t,
  A as l,
  B as s,
  r as v,
  c as _,
  C as D,
  f as i,
  E as u,
  F as w,
  H as k,
  J as d,
  I as H,
  D as p,
  Q as P,
  M as S,
} from './index-croNHMG4.js'
import { c as x } from './stylesheet-tJbRLR7r.js'
import { _ as L } from './_plugin-vue_export-helper-DlAUqK2U.js'
import './private.use-form-DP1HiX6u.js'
const M = ['width', 'height'],
  U = ['fill'],
  A = {
    __name: 'save-icon',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(r) {
      return (c, a) => (
        t(),
        l(
          'svg',
          { width: r.width, height: r.height, fill: 'none' },
          [
            a[0] ||
              (a[0] = s(
                'path',
                {
                  d: 'M0.400391 0H32.0004C33.105 0 34.0004 0.895431 34.0004 2V34C34.0004 35.1046 33.105 36 32.0004 36H0.400391V0Z',
                  fill: '#AC0A0D',
                },
                null,
                -1,
              )),
            a[1] || (a[1] = s('path', { d: 'M15 22H19V26H15V22Z', fill: 'white' }, null, -1)),
            s(
              'path',
              {
                d: 'M25.12 13.71L20.29 8.88C19.7279 8.31723 18.9654 8.0007 18.17 8H15V14H20C20.2652 14 20.5196 14.1054 20.7071 14.2929C20.8946 14.4804 21 14.7348 21 15C21 15.2652 20.8946 15.5196 20.7071 15.7071C20.5196 15.8946 20.2652 16 20 16H14C13.7348 16 13.4804 15.8946 13.2929 15.7071C13.1054 15.5196 13 15.2652 13 15V8H11C10.2044 8 9.44129 8.31607 8.87868 8.87868C8.31607 9.44129 8 10.2044 8 11V23C8 23.7956 8.31607 24.5587 8.87868 25.1213C9.44129 25.6839 10.2044 26 11 26H13V22C13 21.4696 13.2107 20.9609 13.5858 20.5858C13.9609 20.2107 14.4696 20 15 20H19C19.5304 20 20.0391 20.2107 20.4142 20.5858C20.7893 20.9609 21 21.4696 21 22V26H23C23.7956 26 24.5587 25.6839 25.1213 25.1213C25.6839 24.5587 26 23.7956 26 23V15.83C25.9993 15.0346 25.6828 14.2721 25.12 13.71Z',
                fill: r.color,
              },
              null,
              8,
              U,
            ),
          ],
          8,
          M,
        )
      )
    },
  },
  O = { class: 'forgotpassword-section' },
  T = { class: 'forgotpassword-topbar' },
  Z = { class: 'forgotpassword-main' },
  j = { key: 0, class: 'forgotpassword-details' },
  z = { class: 'forgotpassword-details-body' },
  J = { class: 'item' },
  q = { class: 'label' },
  G = { class: 'submit-button' },
  K = { key: 1, class: 'forgotpassword-details' },
  W = { class: 'forgotpassword-details-body' },
  X = { class: 'item' },
  Y = { class: 'label' },
  ee = { key: 0, class: 'error-message' },
  se = { class: 'submit-button' },
  te = { class: 'right-icon' },
  oe = {
    __name: 'ForgetPasswordIndex',
    setup(r) {
      const c = v([
          { label: 'Enter Email', placeholder: 'Email', tag: 'email', value: null, img: Q },
        ]),
        a = v([
          {
            type: 'password',
            label: 'New Password',
            placeholder: '********',
            tag: 'password',
            value: null,
            img: y,
            prev: 'password',
          },
          {
            type: 'password',
            label: 'Re-enter New Password',
            placeholder: '********',
            tag: 'confirmPassword',
            value: null,
            img: y,
            prev: 'password',
          },
        ]),
        m = v(1),
        $ = _(() => f(V(c.value))),
        N = _(() => f(V(a.value))),
        h = _(() => E(a.value))
      function B() {
        m.value = 2
      }
      function F() {}
      return (le, o) => {
        const I = D('RouterLink')
        return (
          t(),
          l('section', O, [
            s('nav', T, [
              i(I, { to: '/login', class: 'backarrow-button' }, { default: u(() => [i(R)]), _: 1 }),
              o[0] || (o[0] = s('h3', null, 'Reset Password', -1)),
              o[1] || (o[1] = s('div', null, null, -1)),
            ]),
            s('main', Z, [
              m.value === 1
                ? (t(),
                  l('div', j, [
                    o[3] ||
                      (o[3] = s(
                        'div',
                        { class: 'forgotpassword-details-header' },
                        [s('h3', null, 'Reset your Password')],
                        -1,
                      )),
                    s('div', z, [
                      (t(!0),
                      l(
                        w,
                        null,
                        k(
                          c.value,
                          (e) => (
                            t(),
                            l('div', { class: 'form', key: e.tag }, [
                              s('div', J, [
                                s('p', q, H(e.label), 1),
                                i(
                                  g,
                                  {
                                    dense: '',
                                    outlined: '',
                                    placeholder: e.placeholder,
                                    color: S(x).wine,
                                    modelValue: e.value,
                                    'onUpdate:modelValue': (n) => (e.value = n),
                                    type: e.type,
                                  },
                                  {
                                    append: u(() => [
                                      (t(), p(P(e.img), { width: 37, height: 24, color: 'black' })),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  [
                                    'placeholder',
                                    'color',
                                    'modelValue',
                                    'onUpdate:modelValue',
                                    'type',
                                  ],
                                ),
                              ]),
                            ])
                          ),
                        ),
                        128,
                      )),
                      s('div', G, [
                        o[2] || (o[2] = s('div', null, null, -1)),
                        i(
                          b,
                          {
                            label: 'Send',
                            class: 'app-button primary',
                            disable: $.value,
                            onClick: B,
                          },
                          null,
                          8,
                          ['disable'],
                        ),
                      ]),
                    ]),
                  ]))
                : m.value === 2
                  ? (t(),
                    l('div', K, [
                      o[5] ||
                        (o[5] = s(
                          'div',
                          { class: 'forgotpassword-details-header' },
                          [s('h3', null, 'Set new Password')],
                          -1,
                        )),
                      s('div', W, [
                        (t(!0),
                        l(
                          w,
                          null,
                          k(
                            a.value,
                            (e) => (
                              t(),
                              l('div', { class: 'form', key: e.tag }, [
                                s('div', X, [
                                  s('p', Y, H(e.label), 1),
                                  i(
                                    g,
                                    {
                                      dense: '',
                                      outlined: '',
                                      placeholder: e.placeholder,
                                      color: S(x).wine,
                                      modelValue: e.value,
                                      'onUpdate:modelValue': (n) => (e.value = n),
                                      type: e.type,
                                    },
                                    {
                                      append: u(() => [
                                        e.type === 'password'
                                          ? (t(),
                                            p(
                                              C,
                                              {
                                                key: 0,
                                                name: 'visibility_off',
                                                class: 'cursor-pointer mr-2',
                                                onClick: (n) => (e.type = 'text'),
                                              },
                                              null,
                                              8,
                                              ['onClick'],
                                            ))
                                          : d('', !0),
                                        e.prev === 'password' && e.type === 'text'
                                          ? (t(),
                                            p(
                                              C,
                                              {
                                                key: 1,
                                                name: 'visibility',
                                                class: 'cursor-pointer mr-2',
                                                onClick: (n) => (e.type = 'password'),
                                              },
                                              null,
                                              8,
                                              ['onClick'],
                                            ))
                                          : d('', !0),
                                        (t(),
                                        p(P(e.img), { width: 37, height: 24, color: 'black' })),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    [
                                      'placeholder',
                                      'color',
                                      'modelValue',
                                      'onUpdate:modelValue',
                                      'type',
                                    ],
                                  ),
                                  e.tag === 'confirmPassword'
                                    ? (t(),
                                      l(
                                        w,
                                        { key: 0 },
                                        [
                                          e.value && !h.value
                                            ? (t(), l('span', ee, "Password doesn't match"))
                                            : d('', !0),
                                        ],
                                        64,
                                      ))
                                    : d('', !0),
                                ]),
                              ])
                            ),
                          ),
                          128,
                        )),
                        s('div', se, [
                          o[4] || (o[4] = s('div', null, null, -1)),
                          i(
                            b,
                            {
                              class: 'app-button primary',
                              label: 'Save',
                              disable: N.value || !h.value,
                              onClick: F,
                            },
                            {
                              default: u(() => [s('div', te, [i(A, { width: 34, height: 36 })])]),
                              _: 1,
                            },
                            8,
                            ['disable'],
                          ),
                        ]),
                      ]),
                    ]))
                  : d('', !0),
            ]),
          ])
        )
      }
    },
  },
  me = L(oe, [['__scopeId', 'data-v-84b13ef2']])
export { me as default }