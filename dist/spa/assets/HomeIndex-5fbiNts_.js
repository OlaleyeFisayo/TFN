import { Q as S } from './QInput-BWwVXvfl.js'
import { Q as b } from './QBtn-YVQo18uK.js'
import {
  z as a,
  A as r,
  B as e,
  L as A,
  I as u,
  r as n,
  f as c,
  E as y,
  M as x,
  F as m,
  H as f,
  N as C,
  J as w,
  K as I,
  D as R,
} from './index-croNHMG4.js'
import { _ } from './_plugin-vue_export-helper-DlAUqK2U.js'
import { c as B } from './stylesheet-tJbRLR7r.js'
import './private.use-form-DP1HiX6u.js'
const V = ['width', 'height'],
  k = ['fill'],
  F = {
    __name: 'search-icon',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(i) {
      return (d, l) => (
        a(),
        r(
          'svg',
          { width: i.width, height: i.height, fill: 'none' },
          [
            e(
              'path',
              {
                d: 'M15.5 14H14.71L14.43 13.73C15.0549 13.004 15.5117 12.1488 15.7675 11.2256C16.0234 10.3025 16.072 9.33416 15.91 8.39001C15.44 5.61001 13.12 3.39001 10.32 3.05001C9.33559 2.92547 8.33576 3.02778 7.397 3.34909C6.45824 3.67041 5.60542 4.20222 4.90381 4.90384C4.20219 5.60545 3.67038 6.45827 3.34906 7.39703C3.02775 8.33579 2.92544 9.33562 3.04997 10.32C3.38997 13.12 5.60998 15.44 8.38998 15.91C9.33413 16.0721 10.3024 16.0234 11.2256 15.7676C12.1487 15.5117 13.0039 15.055 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.49997 14C7.00997 14 4.99997 11.99 4.99997 9.50001C4.99997 7.01 7.00997 5.00001 9.49997 5.00001C11.99 5.00001 14 7.01 14 9.50001C14 11.99 11.99 14 9.49997 14Z',
                fill: i.color,
              },
              null,
              8,
              k,
            ),
          ],
          8,
          V,
        )
      )
    },
  },
  L = {},
  N = { class: 'grid' }
function E(i, d) {
  return a(), r('div', N, [A(i.$slots, 'default', {}, void 0)])
}
const j = _(L, [
    ['render', E],
    ['__scopeId', 'data-v-7695ddf2'],
  ]),
  M = { class: 'box-container' },
  H = { class: 'img-side' },
  O = ['src'],
  Q = { class: 'text-side' },
  z = { class: 'building-name' },
  D = { class: 'min-description' },
  G = { class: 'price' },
  Y = {
    __name: 'AppItems',
    props: { name: String, rooms: String, image: String, price: String },
    setup(i) {
      return (d, l) => (
        a(),
        r('div', M, [
          e('div', H, [e('img', { src: i.image, alt: 'testing' }, null, 8, O)]),
          e('div', Q, [e('h1', z, u(i.name), 1), e('p', D, u(i.rooms), 1)]),
          e('div', G, [e('span', null, '₦' + u(i.price), 1)]),
        ])
      )
    },
  },
  T = _(Y, [['__scopeId', 'data-v-b86c5d94']]),
  U = { class: 'home-section' },
  Z = { class: 'search-section section' },
  J = { class: 'img-slider mt-4 section' },
  K = { class: 'img' },
  W = ['src', 'alt'],
  q = { key: 0, class: 'title' },
  X = { class: 'subtitle' },
  ee = { class: 'slider-toggler' },
  se = { class: 'nearby-places section' },
  te = { class: 'about-us section' },
  ae = { class: 'content' },
  ie = { class: 'right-side' },
  oe = {
    __name: 'HomeIndex',
    setup(i) {
      const d = n(''),
        l = n([
          {
            id: 0,
            img: 'assets/image/slider-1.jpg',
            title: 'Simplify, Optimize, Succeed:',
            subtitle: 'Your Property Management Solution',
            isActive: !0,
            toggleFromRight: !1,
          },
          {
            id: 1,
            img: 'assets/image/slider-2.jpg',
            subtitle: 'Your Gateway to Seamless Property Management',
            isActive: !1,
            toggleFromRight: !1,
          },
          {
            id: 2,
            img: 'assets/image/slider-3.jpg',
            subtitle: 'Effortless Property Management, Elevated.',
            isActive: !1,
            toggleFromRight: !1,
          },
          {
            id: 3,
            img: 'assets/image/slider-4.jpg',
            subtitle: 'Your Partner in Property Success.',
            isActive: !1,
            toggleFromRight: !1,
          },
        ]),
        P = (h) => {
          const t = h - 1
          l.value.forEach((s, o) => {
            ;(s.isActive = o === h), (s.toggleFromRight = t === o)
          })
        },
        p = n(!1),
        v = n(!1),
        g = n(0)
      setInterval(() => {
        ;(g.value += 1),
          g.value === l.value.length
            ? ((g.value = 0), (v.value = !0), (p.value = !0))
            : ((v.value = !1), (p.value = !1)),
          P(g.value)
      }, 3e3)
      const $ = n([
        {
          img: 'assets/image/nearbyPlaces1.jpg',
          name: 'Chimney Villa',
          rooms: '3 Bedrooms, 1 Parlour',
          price: '800,000',
        },
        {
          img: 'assets/image/nearbyPlaces2.jpg',
          name: 'Coast Villa',
          rooms: '2 Bedrooms, 2 Parlour',
          price: '500,000',
        },
        {
          img: 'assets/image/nearbyPlaces3.jpg',
          name: 'Mayson house',
          rooms: '3 Bedrooms, 2 Parlour',
          price: '900,000',
        },
        {
          img: 'assets/image/nearbyPlaces4.jpg',
          name: 'Chimney Villa',
          rooms: '3 Bedrooms, 1 Parlour',
          price: '400,000',
        },
      ])
      return (h, t) => (
        a(),
        r('section', U, [
          e('div', Z, [
            c(
              S,
              {
                placeholder: 'Search',
                color: x(B).wine,
                outlined: '',
                dense: '',
                modelValue: d.value,
                'onUpdate:modelValue': t[0] || (t[0] = (s) => (d.value = s)),
              },
              { append: y(() => [c(F, { color: '#898989', width: 30 })]), _: 1 },
              8,
              ['color', 'modelValue'],
            ),
          ]),
          e('div', J, [
            t[1] || (t[1] = e('div', { class: 'black-background' }, null, -1)),
            (a(!0),
            r(
              m,
              null,
              f(
                l.value,
                (s, o) => (
                  a(),
                  r(
                    m,
                    { key: o },
                    [
                      s.isActive
                        ? (a(),
                          r(
                            m,
                            { key: 0 },
                            [
                              e('div', K, [e('img', { src: s.img, alt: s.title }, null, 8, W)]),
                              s.title ? (a(), r('h1', q, u(s.title), 1)) : w('', !0),
                              e('p', X, u(s.subtitle), 1),
                            ],
                            64,
                          ))
                        : w('', !0),
                    ],
                    64,
                  )
                ),
              ),
              128,
            )),
            c(b, { class: 'app-button whiteWithRed', label: 'Get Started' }),
            e('div', ee, [
              (a(!0),
              r(
                m,
                null,
                f(
                  l.value,
                  (s, o) => (
                    a(),
                    r(
                      'div',
                      {
                        key: o,
                        class: I(
                          `toggler ${s.isActive ? 'active' : ''} ${o - 1 !== -1 ? 'left' : ''} ${s.toggleFromRight ? 'right' : ''} ${o === l.value.length - 1 && p.value ? 'ultimateRight' : ''} ${o === 0 && v.value ? 'ultimateLeft' : ''}`,
                        ),
                        role: 'button',
                      },
                      null,
                      2,
                    )
                  ),
                ),
                128,
              )),
            ]),
          ]),
          e('div', se, [
            t[2] || (t[2] = e('h1', null, 'Nearby Places', -1)),
            c(j, null, {
              default: y(() => [
                (a(!0),
                r(
                  m,
                  null,
                  f(
                    $.value,
                    (s, o) => (
                      a(),
                      R(
                        T,
                        { key: o, name: s.name, image: s.img, rooms: s.rooms, price: s.price },
                        null,
                        8,
                        ['name', 'image', 'rooms', 'price'],
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              _: 1,
            }),
          ]),
          e('div', te, [
            t[5] || (t[5] = e('h1', { class: 'header' }, 'About Us', -1)),
            e('div', ae, [
              t[4] ||
                (t[4] = e(
                  'div',
                  { class: 'left-side' },
                  [
                    e(
                      'p',
                      { class: 'paragraph' },
                      ' Our area of focus is the TFN Properties which has existed fromtime immemorial. Overtime, the Buinsess has grown into amass of wealth across nations with evolving business models. For instance, in sub-sahara africa, the Real Estate business is fast developing and becoming the main stream of income to many. ',
                    ),
                    e(
                      'p',
                      { class: 'paragraph' },
                      ' The Real Estate business with its innumerable opportunities leaves an assurance of wealth, in as much as human must always NEED a shelter to reside. ',
                    ),
                    e(
                      'p',
                      { class: 'paragraph' },
                      ' As it continues to develop in Africa, we deem it wise to tap into this wealth by easing the burden of rent payments as well as property management via out web and mobile application ',
                    ),
                  ],
                  -1,
                )),
              e('div', ie, [
                c(b, { class: 'app-button primary', label: 'Learn more' }),
                t[3] ||
                  (t[3] = C(
                    '<div class="info-box" data-v-dd21e9c2><h3 class="stat" data-v-dd21e9c2>1200+</h3><p data-v-dd21e9c2>Agent/Property Manager/Renovator</p></div><div class="info-box-wrap" data-v-dd21e9c2><div class="info-box" data-v-dd21e9c2><h3 class="stat" data-v-dd21e9c2>8000+</h3><p data-v-dd21e9c2>Property Listing</p></div><div class="info-box" data-v-dd21e9c2><h3 class="stat" data-v-dd21e9c2>120</h3><p data-v-dd21e9c2>Areas Covered</p></div></div>',
                    2,
                  )),
              ]),
            ]),
          ]),
          t[6] ||
            (t[6] = C(
              '<div class="partners section" data-v-dd21e9c2><h1 class="header" data-v-dd21e9c2>Our Partners</h1><div class="content" data-v-dd21e9c2><div class="img-container" data-v-dd21e9c2><img src="assets/image/partners-3.png" alt="partners-3" data-v-dd21e9c2></div><div class="img-container" data-v-dd21e9c2><img src="assets/image/partners-1.png" alt="partners-3" data-v-dd21e9c2></div><div class="img-container" data-v-dd21e9c2><img src="assets/image/partners-2.png" alt="partners-3" data-v-dd21e9c2></div></div></div>',
              1,
            )),
        ])
      )
    },
  },
  ue = _(oe, [['__scopeId', 'data-v-dd21e9c2']])
export { ue as default }
