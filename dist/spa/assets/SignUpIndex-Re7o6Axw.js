import { u as A, d as D, b as V, a as j, h as z, Q as O } from './QBtn-YVQo18uK.js'
import { u as K, a as G, b as J, c as W } from './private.use-form-DP1HiX6u.js'
import { o as X, u as Y, _ as ee } from './navigate-next-C7X7Ct9M.js'
import {
  k as ae,
  r as N,
  c as m,
  h as v,
  g as te,
  O as q,
  P as L,
  z as n,
  A as s,
  B as t,
  C as le,
  f as d,
  E as g,
  F as _,
  H as I,
  G as h,
  I as oe,
  M as P,
  D as w,
  J as b,
  Q as ne,
} from './index-croNHMG4.js'
import { Q as se } from './QInput-BWwVXvfl.js'
import { _ as H, a as M, i as ie, c as re, b as de } from './index-DLpykedm.js'
import { _ as ue } from './arrow-back-CWJ3tfhi.js'
import { c as B } from './stylesheet-tJbRLR7r.js'
import { _ as ce } from './_plugin-vue_export-helper-DlAUqK2U.js'
const me = () =>
    v('svg', { key: 'svg', class: 'q-radio__bg absolute non-selectable', viewBox: '0 0 24 24' }, [
      v('path', {
        d: 'M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12',
      }),
      v('path', {
        class: 'q-radio__check',
        d: 'M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6',
      }),
    ]),
  ve = ae({
    name: 'QRadio',
    props: {
      ...K,
      ...A,
      ...G,
      modelValue: { required: !0 },
      val: { required: !0 },
      label: String,
      leftLabel: Boolean,
      checkedIcon: String,
      uncheckedIcon: String,
      color: String,
      keepColor: Boolean,
      dense: Boolean,
      disable: Boolean,
      tabindex: [String, Number],
    },
    emits: ['update:modelValue'],
    setup(e, { slots: u, emit: i }) {
      const { proxy: f } = te(),
        S = J(e, f.$q),
        a = D(e, X),
        p = N(null),
        { refocusTargetEl: l, refocusTarget: c } = Y(e, p),
        r = m(() => q(e.modelValue) === q(e.val)),
        C = m(
          () =>
            'q-radio cursor-pointer no-outline row inline no-wrap items-center' +
            (e.disable === !0 ? ' disabled' : '') +
            (S.value === !0 ? ' q-radio--dark' : '') +
            (e.dense === !0 ? ' q-radio--dense' : '') +
            (e.leftLabel === !0 ? ' reverse' : ''),
        ),
        U = m(() => {
          const o =
            e.color !== void 0 && (e.keepColor === !0 || r.value === !0) ? ` text-${e.color}` : ''
          return `q-radio__inner relative-position q-radio__inner--${r.value === !0 ? 'truthy' : 'falsy'}${o}`
        }),
        x = m(() => (r.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null),
        E = m(() => (e.disable === !0 ? -1 : e.tabindex || 0)),
        T = m(() => {
          const o = { type: 'radio' }
          return (
            e.name !== void 0 &&
              Object.assign(o, {
                '.checked': r.value === !0,
                '^checked': r.value === !0 ? 'checked' : void 0,
                name: e.name,
                value: e.val,
              }),
            o
          )
        }),
        Q = W(T)
      function y(o) {
        o !== void 0 && (L(o), c(o)),
          e.disable !== !0 && r.value !== !0 && i('update:modelValue', e.val, o)
      }
      function Z(o) {
        ;(o.keyCode === 13 || o.keyCode === 32) && L(o)
      }
      function F(o) {
        ;(o.keyCode === 13 || o.keyCode === 32) && y(o)
      }
      Object.assign(f, { set: y })
      const R = me()
      return () => {
        const o =
          x.value !== null
            ? [
                v(
                  'div',
                  {
                    key: 'icon',
                    class: 'q-radio__icon-container absolute-full flex flex-center no-wrap',
                  },
                  [v(V, { class: 'q-radio__icon', name: x.value })],
                ),
              ]
            : [R]
        e.disable !== !0 && Q(o, 'unshift', ' q-radio__native q-ma-none q-pa-none')
        const k = [v('div', { class: U.value, style: a.value, 'aria-hidden': 'true' }, o)]
        l.value !== null && k.push(l.value)
        const $ = e.label !== void 0 ? j(u.default, [e.label]) : z(u.default)
        return (
          $ !== void 0 && k.push(v('div', { class: 'q-radio__label q-anchor--skip' }, $)),
          v(
            'div',
            {
              ref: p,
              class: C.value,
              tabindex: E.value,
              role: 'radio',
              'aria-label': e.label,
              'aria-checked': r.value === !0 ? 'true' : 'false',
              'aria-disabled': e.disable === !0 ? 'true' : void 0,
              onClick: y,
              onKeydown: Z,
              onKeyup: F,
            },
            k,
          )
        )
      }
    },
  }),
  pe = ['width', 'height'],
  he = ['fill'],
  ge = ['fill'],
  fe = {
    __name: 'email-rounded',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(e) {
      return (u, i) => (
        n(),
        s(
          'svg',
          { width: e.width, height: e.height, fill: 'none' },
          [
            i[0] ||
              (i[0] = t(
                'mask',
                { id: 'path-1-inside-1_54878_2259', fill: 'white' },
                [t('path', { d: 'M0 0H37V24H0V0Z' })],
                -1,
              )),
            t(
              'path',
              { d: 'M1 24V0H-1V24H1Z', fill: e.color, mask: 'url(#path-1-inside-1_54878_2259)' },
              null,
              8,
              he,
            ),
            t(
              'path',
              {
                d: 'M19.521 11.4005C19.6657 11.5072 19.8253 11.5605 20 11.5605C20.1747 11.5605 20.3343 11.5072 20.479 11.4005L27.5 6.1735C27.5 6.00417 27.4777 5.81817 27.433 5.6155C27.3877 5.41217 27.346 5.24517 27.308 5.1145L20 10.5425L12.654 5.1535C12.6153 5.28417 12.58 5.44783 12.548 5.6445C12.516 5.84117 12.5 6.01783 12.5 6.1745L19.521 11.4005ZM10.115 20.0005C9.655 20.0005 9.271 19.8462 8.963 19.5375C8.65433 19.2288 8.5 18.8445 8.5 18.3845V9.3845C8.5 9.24183 8.54767 9.12283 8.643 9.0275C8.739 8.93217 8.858 8.8845 9 8.8845C9.142 8.8845 9.261 8.93217 9.357 9.0275C9.453 9.12283 9.50067 9.24183 9.5 9.3845V18.3845C9.5 18.5645 9.55767 18.7118 9.673 18.8265C9.78833 18.9412 9.93567 18.9988 10.115 18.9995H24.385C24.527 18.9995 24.6457 19.0475 24.741 19.1435C24.8363 19.2395 24.8843 19.3582 24.885 19.4995C24.885 19.6422 24.837 19.7612 24.741 19.8565C24.645 19.9518 24.5263 19.9995 24.385 19.9995L10.115 20.0005ZM13.115 17.0005C12.655 17.0005 12.271 16.8462 11.963 16.5375C11.6543 16.2288 11.5 15.8445 11.5 15.3845V5.6145C11.5 5.1545 11.6543 4.7705 11.963 4.4625C12.2717 4.1545 12.6557 4.00017 13.115 3.9995H26.885C27.345 3.9995 27.729 4.15383 28.037 4.4625C28.3457 4.7705 28.5 5.15483 28.5 5.6155V15.3845C28.5 15.8445 28.346 16.2288 28.038 16.5375C27.7293 16.8455 27.345 16.9995 26.885 16.9995L13.115 17.0005Z',
                fill: e.color,
              },
              null,
              8,
              ge,
            ),
          ],
          8,
          pe,
        )
      )
    },
  },
  _e = ['width', 'height'],
  be = ['fill'],
  Ce = ['fill'],
  ye = {
    __name: 'round-phone',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(e) {
      return (u, i) => (
        n(),
        s(
          'svg',
          { width: e.width, height: e.height, fill: 'none' },
          [
            i[0] ||
              (i[0] = t(
                'mask',
                { id: 'path-1-inside-1_54885_2426', fill: 'white' },
                [t('path', { d: 'M0 0H37V24H0V0Z' })],
                -1,
              )),
            t(
              'path',
              { d: 'M1 24V0H-1V24H1Z', fill: e.color, mask: 'url(#path-1-inside-1_54885_2426)' },
              null,
              8,
              be,
            ),
            t(
              'path',
              {
                d: 'M24.9324 14.9109L22.67 14.6526C22.404 14.6214 22.1344 14.6508 21.8814 14.7388C21.6284 14.8267 21.3986 14.9708 21.2093 15.1603L19.5705 16.7992C17.042 15.5132 14.9868 13.458 13.7008 10.9295L15.3486 9.28177C15.7316 8.89878 15.9186 8.36436 15.8563 7.82105L15.598 5.57652C15.5475 5.14202 15.339 4.74126 15.0121 4.45055C14.6853 4.15984 14.263 3.99948 13.8255 4H12.2846C11.2782 4 10.4409 4.83725 10.5033 5.84372C10.9753 13.4502 17.0587 19.5247 24.6563 19.9967C25.6628 20.0591 26.5 19.2218 26.5 18.2154V16.6745C26.5089 15.7749 25.832 15.0178 24.9324 14.9109Z',
                fill: e.color,
              },
              null,
              8,
              Ce,
            ),
          ],
          8,
          _e,
        )
      )
    },
  },
  ke = { class: 'signup-section' },
  we = { class: 'signup-topbar' },
  Ve = { class: 'signup-main' },
  Se = { class: 'signup-details' },
  xe = { class: 'signup-details-body' },
  $e = { class: 'item' },
  qe = { class: 'label' },
  Le = { key: 0, class: 'error-message' },
  Ie = { class: 'right-icon' },
  Pe = { class: 'signup-details-footer' },
  He = {
    __name: 'SignUpIndex',
    setup(e) {
      const u = N([
          { label: 'Name', placeholder: 'Enter name', tag: 'name', value: null, img: H },
          {
            label: 'Username',
            placeholder: 'Enter username',
            tag: 'username',
            value: null,
            img: H,
          },
          { label: 'Email', placeholder: 'Enter email', tag: 'email', value: null, img: fe },
          {
            label: 'Phone Number',
            placeholder: 'Enter phone number',
            tag: 'phoneNumber',
            value: null,
            img: ye,
          },
          {
            label: 'Password',
            placeholder: 'Enter password',
            tag: 'password',
            type: 'password',
            value: null,
            img: M,
            prev: 'password',
          },
          {
            label: 'Confirm Password',
            placeholder: 'Confirm password',
            tag: 'confirmPassword',
            type: 'password',
            value: null,
            img: M,
            prev: 'password',
          },
          {
            label: 'Account Type',
            tag: 'accountType',
            type: 'radio',
            options: ['Individual', 'Property Manager', 'Home Improvement', 'Agent/Landlord'],
            value: null,
          },
        ]),
        i = m(() => ie(re(u.value))),
        f = m(() => de(u.value))
      return (S, a) => {
        const p = le('RouterLink')
        return (
          n(),
          s('section', ke, [
            t('nav', we, [
              d(p, { to: '/', class: 'backarrow-button' }, { default: g(() => [d(ue)]), _: 1 }),
              a[0] || (a[0] = t('h3', null, 'Sign Up', -1)),
              a[1] || (a[1] = t('div', null, null, -1)),
            ]),
            t('main', Ve, [
              t('div', Se, [
                a[9] ||
                  (a[9] = t(
                    'div',
                    { class: 'signup-details-header' },
                    [t('h3', null, 'Create your own account')],
                    -1,
                  )),
                t('div', xe, [
                  (n(!0),
                  s(
                    _,
                    null,
                    I(
                      u.value,
                      (l) => (
                        n(),
                        s('div', { class: 'form', key: l.tag }, [
                          t('div', $e, [
                            t('p', qe, oe(l.label), 1),
                            l.type === 'radio'
                              ? (n(!0),
                                s(
                                  _,
                                  { key: 0 },
                                  I(
                                    l.options,
                                    (c, r) => (
                                      n(),
                                      s('div', { key: r }, [
                                        d(
                                          ve,
                                          {
                                            dense: '',
                                            val: c,
                                            label: c,
                                            modelValue: l.value,
                                            'onUpdate:modelValue': (C) => (l.value = C),
                                            color: P(B).wine,
                                          },
                                          null,
                                          8,
                                          [
                                            'val',
                                            'label',
                                            'modelValue',
                                            'onUpdate:modelValue',
                                            'color',
                                          ],
                                        ),
                                      ])
                                    ),
                                  ),
                                  128,
                                ))
                              : (n(),
                                s(
                                  _,
                                  { key: 1 },
                                  [
                                    d(
                                      se,
                                      {
                                        dense: '',
                                        outlined: '',
                                        placeholder: l.placeholder,
                                        color: P(B).wine,
                                        modelValue: l.value,
                                        'onUpdate:modelValue': (c) => (l.value = c),
                                        type: l.type,
                                      },
                                      {
                                        append: g(() => [
                                          l.type === 'password'
                                            ? (n(),
                                              w(
                                                V,
                                                {
                                                  key: 0,
                                                  name: 'visibility_off',
                                                  class: 'cursor-pointer mr-2',
                                                  onClick: (c) => (l.type = 'text'),
                                                },
                                                null,
                                                8,
                                                ['onClick'],
                                              ))
                                            : b('', !0),
                                          l.prev === 'password' && l.type === 'text'
                                            ? (n(),
                                              w(
                                                V,
                                                {
                                                  key: 1,
                                                  name: 'visibility',
                                                  class: 'cursor-pointer mr-2',
                                                  onClick: (c) => (l.type = 'password'),
                                                },
                                                null,
                                                8,
                                                ['onClick'],
                                              ))
                                            : b('', !0),
                                          (n(),
                                          w(ne(l.img), { width: 37, height: 24, color: 'black' })),
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
                                    l.tag === 'confirmPassword'
                                      ? (n(),
                                        s(
                                          _,
                                          { key: 0 },
                                          [
                                            l.value && !f.value
                                              ? (n(), s('span', Le, "Password doesn't match"))
                                              : b('', !0),
                                          ],
                                          64,
                                        ))
                                      : b('', !0),
                                  ],
                                  64,
                                )),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                  d(
                    O,
                    {
                      label: 'Sign up',
                      class: 'app-button primary mt-2',
                      disable: i.value || !f.value,
                    },
                    { default: g(() => [t('div', Ie, [d(ee, { width: 34, height: 36 })])]), _: 1 },
                    8,
                    ['disable'],
                  ),
                  t('p', null, [
                    a[4] || (a[4] = h(' By registering you accept our ')),
                    d(
                      p,
                      { to: '/termsofuse' },
                      { default: g(() => a[2] || (a[2] = [h('Terms of Use')])), _: 1 },
                    ),
                    a[5] || (a[5] = h(' and ')),
                    d(
                      p,
                      { to: '/policy' },
                      { default: g(() => a[3] || (a[3] = [h('Privacy')])), _: 1 },
                    ),
                    a[6] ||
                      (a[6] = h(
                        ' and agree that we and our selected partners may contact you with relevant offers and services ',
                      )),
                  ]),
                ]),
                t('div', Pe, [
                  t('span', null, [
                    a[8] || (a[8] = h(' Already have an account ')),
                    d(
                      p,
                      { to: '/login', class: 'login-link' },
                      { default: g(() => a[7] || (a[7] = [h('Click here to sign in')])), _: 1 },
                    ),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  },
  Re = ce(He, [['__scopeId', 'data-v-fd032bb1']])
export { Re as default }