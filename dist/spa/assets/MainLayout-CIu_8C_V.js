import {
  k as T,
  c as q,
  h as R,
  i as c1,
  l as K,
  m as t1,
  p as i1,
  n as d1,
  g as M,
  w as W,
  o as v,
  q as G,
  t as l1,
  u as B,
  r as k,
  v as o1,
  x as L,
  y as J,
  a as A1,
  z as A,
  A as C,
  B as t,
  C as O,
  D as V,
  E as Z,
  f as p,
  G as g,
  H as Y,
  F as w,
  I as z,
  J as h1,
  K as u1,
} from './index-croNHMG4.js'
import { h as n1, c as x, g as C1, a as I1, Q as p1, b as f1 } from './QBtn-YVQo18uK.js'
import { _ as m1 } from './_plugin-vue_export-helper-DlAUqK2U.js'
const y1 = T({
    name: 'QToolbarTitle',
    props: { shrink: Boolean },
    setup(e, { slots: n }) {
      const i = q(() => 'q-toolbar__title ellipsis' + (e.shrink === !0 ? ' col-shrink' : ''))
      return () => R('div', { class: i.value }, n1(n.default))
    },
  }),
  E1 = T({
    name: 'QPageContainer',
    setup(e, { slots: n }) {
      const {
          proxy: { $q: i },
        } = M(),
        l = c1(t1, K)
      if (l === K) return console.error('QPageContainer needs to be child of QLayout'), K
      i1(d1, !0)
      const d = q(() => {
        const c = {}
        return (
          l.header.space === !0 && (c.paddingTop = `${l.header.size}px`),
          l.right.space === !0 &&
            (c[`padding${i.lang.rtl === !0 ? 'Left' : 'Right'}`] = `${l.right.size}px`),
          l.footer.space === !0 && (c.paddingBottom = `${l.footer.size}px`),
          l.left.space === !0 &&
            (c[`padding${i.lang.rtl === !0 ? 'Right' : 'Left'}`] = `${l.left.size}px`),
          c
        )
      })
      return () => R('div', { class: 'q-page-container', style: d.value }, n1(n.default))
    },
  }),
  g1 = [Element, String],
  q1 = [null, document, document.body, document.scrollingElement, document.documentElement]
function R1(e, n) {
  let i = C1(n)
  if (i === void 0) {
    if (e == null) return window
    i = e.closest('.scroll,.scroll-y,.overflow-auto')
  }
  return q1.includes(i) ? window : i
}
function Z1(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop
}
function k1(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft
}
let U
function H() {
  if (U !== void 0) return U
  const e = document.createElement('p'),
    n = document.createElement('div')
  x(e, { width: '100%', height: '200px' }),
    x(n, {
      position: 'absolute',
      top: '0px',
      left: '0px',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden',
    }),
    n.appendChild(e),
    document.body.appendChild(n)
  const i = e.offsetWidth
  n.style.overflow = 'scroll'
  let l = e.offsetWidth
  return i === l && (l = n.clientWidth), n.remove(), (U = i - l), U
}
const { passive: X } = B,
  S1 = ['both', 'horizontal', 'vertical'],
  T1 = T({
    name: 'QScrollObserver',
    props: {
      axis: { type: String, validator: (e) => S1.includes(e), default: 'vertical' },
      debounce: [String, Number],
      scrollTarget: g1,
    },
    emits: ['scroll'],
    setup(e, { emit: n }) {
      const i = {
        position: { top: 0, left: 0 },
        direction: 'down',
        directionChanged: !1,
        delta: { top: 0, left: 0 },
        inflectionPoint: { top: 0, left: 0 },
      }
      let l = null,
        d,
        c
      W(
        () => e.scrollTarget,
        () => {
          a(), f()
        },
      )
      function o() {
        l !== null && l()
        const u = Math.max(0, Z1(d)),
          m = k1(d),
          y = { top: u - i.position.top, left: m - i.position.left }
        if ((e.axis === 'vertical' && y.top === 0) || (e.axis === 'horizontal' && y.left === 0))
          return
        const b =
          Math.abs(y.top) >= Math.abs(y.left)
            ? y.top < 0
              ? 'up'
              : 'down'
            : y.left < 0
              ? 'left'
              : 'right'
        ;(i.position = { top: u, left: m }),
          (i.directionChanged = i.direction !== b),
          (i.delta = y),
          i.directionChanged === !0 && ((i.direction = b), (i.inflectionPoint = i.position)),
          n('scroll', { ...i })
      }
      function f() {
        ;(d = R1(c, e.scrollTarget)), d.addEventListener('scroll', r, X), r(!0)
      }
      function a() {
        d !== void 0 && (d.removeEventListener('scroll', r, X), (d = void 0))
      }
      function r(u) {
        if (u === !0 || e.debounce === 0 || e.debounce === '0') o()
        else if (l === null) {
          const [m, y] = e.debounce
            ? [setTimeout(o, e.debounce), clearTimeout]
            : [requestAnimationFrame(o), cancelAnimationFrame]
          l = () => {
            y(m), (l = null)
          }
        }
      }
      const { proxy: h } = M()
      return (
        W(() => h.$q.lang.rtl, o),
        v(() => {
          ;(c = h.$el.parentNode), f()
        }),
        G(() => {
          l !== null && l(), a()
        }),
        Object.assign(h, { trigger: r, getPosition: () => i }),
        l1
      )
    },
  })
function b1() {
  const e = k(!o1.value)
  return (
    e.value === !1 &&
      v(() => {
        e.value = !0
      }),
    { isHydrated: e }
  )
}
const a1 = typeof ResizeObserver < 'u',
  _ =
    a1 === !0
      ? {}
      : {
          style:
            'display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;',
          url: 'about:blank',
        },
  $ = T({
    name: 'QResizeObserver',
    props: { debounce: { type: [String, Number], default: 100 } },
    emits: ['resize'],
    setup(e, { emit: n }) {
      let i = null,
        l,
        d = { width: -1, height: -1 }
      function c(a) {
        a === !0 || e.debounce === 0 || e.debounce === '0'
          ? o()
          : i === null && (i = setTimeout(o, e.debounce))
      }
      function o() {
        if ((i !== null && (clearTimeout(i), (i = null)), l)) {
          const { offsetWidth: a, offsetHeight: r } = l
          ;(a !== d.width || r !== d.height) && ((d = { width: a, height: r }), n('resize', d))
        }
      }
      const { proxy: f } = M()
      if (((f.trigger = c), a1 === !0)) {
        let a
        const r = (h) => {
          ;(l = f.$el.parentNode),
            l
              ? ((a = new ResizeObserver(c)), a.observe(l), o())
              : h !== !0 &&
                L(() => {
                  r(!0)
                })
        }
        return (
          v(() => {
            r()
          }),
          G(() => {
            i !== null && clearTimeout(i),
              a !== void 0 && (a.disconnect !== void 0 ? a.disconnect() : l && a.unobserve(l))
          }),
          l1
        )
      } else {
        let a = function () {
            i !== null && (clearTimeout(i), (i = null)),
              u !== void 0 &&
                (u.removeEventListener !== void 0 && u.removeEventListener('resize', c, B.passive),
                (u = void 0))
          },
          r = function () {
            a(),
              l &&
                l.contentDocument &&
                ((u = l.contentDocument.defaultView),
                u.addEventListener('resize', c, B.passive),
                o())
          }
        const { isHydrated: h } = b1()
        let u
        return (
          v(() => {
            L(() => {
              ;(l = f.$el), l && r()
            })
          }),
          G(a),
          () => {
            if (h.value === !0)
              return R('object', {
                class: 'q--avoid-card-border',
                style: _.style,
                tabindex: -1,
                type: 'text/html',
                data: _.url,
                'aria-hidden': 'true',
                onLoad: r,
              })
          }
        )
      }
    },
  }),
  Q1 = T({
    name: 'QLayout',
    props: {
      container: Boolean,
      view: {
        type: String,
        default: 'hhh lpr fff',
        validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()),
      },
      onScroll: Function,
      onScrollHeight: Function,
      onResize: Function,
    },
    setup(e, { slots: n, emit: i }) {
      const {
          proxy: { $q: l },
        } = M(),
        d = k(null),
        c = k(l.screen.height),
        o = k(e.container === !0 ? 0 : l.screen.width),
        f = k({ position: 0, direction: 'down', inflectionPoint: 0 }),
        a = k(0),
        r = k(o1.value === !0 ? 0 : H()),
        h = q(() => 'q-layout q-layout--' + (e.container === !0 ? 'containerized' : 'standard')),
        u = q(() => (e.container === !1 ? { minHeight: l.screen.height + 'px' } : null)),
        m = q(() =>
          r.value !== 0 ? { [l.lang.rtl === !0 ? 'left' : 'right']: `${r.value}px` } : null,
        ),
        y = q(() =>
          r.value !== 0
            ? {
                [l.lang.rtl === !0 ? 'right' : 'left']: 0,
                [l.lang.rtl === !0 ? 'left' : 'right']: `-${r.value}px`,
                width: `calc(100% + ${r.value}px)`,
              }
            : null,
        )
      function b(s) {
        if (e.container === !0 || document.qScrollPrevented !== !0) {
          const I = {
            position: s.position.top,
            direction: s.direction,
            directionChanged: s.directionChanged,
            inflectionPoint: s.inflectionPoint.top,
            delta: s.delta.top,
          }
          ;(f.value = I), e.onScroll !== void 0 && i('scroll', I)
        }
      }
      function r1(s) {
        const { height: I, width: S } = s
        let E = !1
        c.value !== I &&
          ((E = !0), (c.value = I), e.onScrollHeight !== void 0 && i('scrollHeight', I), P()),
          o.value !== S && ((E = !0), (o.value = S)),
          E === !0 && e.onResize !== void 0 && i('resize', s)
      }
      function s1({ height: s }) {
        a.value !== s && ((a.value = s), P())
      }
      function P() {
        if (e.container === !0) {
          const s = c.value > a.value ? H() : 0
          r.value !== s && (r.value = s)
        }
      }
      let Q = null
      const F = {
        instances: {},
        view: q(() => e.view),
        isContainer: q(() => e.container),
        rootRef: d,
        height: c,
        containerHeight: a,
        scrollbarWidth: r,
        totalWidth: q(() => o.value + r.value),
        rows: q(() => {
          const s = e.view.toLowerCase().split(' ')
          return { top: s[0].split(''), middle: s[1].split(''), bottom: s[2].split('') }
        }),
        header: J({ size: 0, offset: 0, space: !1 }),
        right: J({ size: 300, offset: 0, space: !1 }),
        footer: J({ size: 0, offset: 0, space: !1 }),
        left: J({ size: 300, offset: 0, space: !1 }),
        scroll: f,
        animate() {
          Q !== null ? clearTimeout(Q) : document.body.classList.add('q-body--layout-animate'),
            (Q = setTimeout(() => {
              ;(Q = null), document.body.classList.remove('q-body--layout-animate')
            }, 155))
        },
        update(s, I, S) {
          F[s][I] = S
        },
      }
      if ((i1(t1, F), H() > 0)) {
        let s = function () {
            ;(E = null), N.classList.remove('hide-scrollbar')
          },
          I = function () {
            if (E === null) {
              if (N.scrollHeight > l.screen.height) return
              N.classList.add('hide-scrollbar')
            } else clearTimeout(E)
            E = setTimeout(s, 300)
          },
          S = function (D) {
            E !== null && D === 'remove' && (clearTimeout(E), s()),
              window[`${D}EventListener`]('resize', I)
          },
          E = null
        const N = document.body
        W(() => (e.container !== !0 ? 'add' : 'remove'), S),
          e.container !== !0 && S('add'),
          A1(() => {
            S('remove')
          })
      }
      return () => {
        const s = I1(n.default, [R(T1, { onScroll: b }), R($, { onResize: r1 })]),
          I = R(
            'div',
            { class: h.value, style: u.value, ref: e.container === !0 ? void 0 : d, tabindex: -1 },
            s,
          )
        return e.container === !0
          ? R('div', { class: 'q-layout-container overflow-hidden', ref: d }, [
              R($, { onResize: s1 }),
              R('div', { class: 'absolute-full', style: m.value }, [
                R('div', { class: 'scroll', style: y.value }, [I]),
              ]),
            ])
          : I
      }
    },
  }),
  J1 = ['width', 'height'],
  e1 = {
    __name: 'tfn-white-logo',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(e) {
      return (n, i) => (
        A(),
        C(
          'svg',
          { width: e.width, height: e.height, fill: 'none' },
          i[0] ||
            (i[0] = [
              t(
                'rect',
                { width: '32.8571', height: '30', fill: 'url(#pattern0_55320_4346)' },
                null,
                -1,
              ),
              t(
                'defs',
                null,
                [
                  t(
                    'pattern',
                    {
                      id: 'pattern0_55320_4346',
                      patternContentUnits: 'objectBoundingBox',
                      width: '1',
                      height: '1',
                    },
                    [
                      t('use', {
                        'xlink:href': '#image0_55320_4346',
                        transform: 'matrix(0.00277998 0 0 0.00304474 -0.332154 -0.130122)',
                      }),
                    ],
                  ),
                  t('image', {
                    id: 'image0_55320_4346',
                    width: '595',
                    height: '419',
                    'xlink:href':
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlMAAAGjCAYAAAAIO5BsAAAgAElEQVR4XuydB9gkRbX+2f1299tdMiIqgoiKAUQxX66AeM0Cgoj+RVGQnIPkvIRdgmQEl6CC4vUarzmBgDlgukZMKAIKCIqEzeH/O0PVZ21vd0/3dPdMh3eep5/umalw6j2n67x9qrpq0ir6CAEhIASEgBAQAkJACAyMwKSBcyqjEBACQkAICAEhIASEwCoiUzICISAEhIAQEAJCQAgUQEBkqgB4yioEhIAQEAJCQAgIAZEp2YAQEAJCQAgIASEgBAogIDJVADxlFQJCQAgIASEgBISAyJRsQAgIASEgBISAEBACBRAQmSoAnrIKASEgBISAEBACQkBkSjYgBISAEBACQkAICIECCIhMFQBPWYWAEBACQkAICAEhIDIlGxACQkAICAEhIASEQAEERKYKgKesQkAICAEhIASEgBAQmZINCAEhIASEgBAQAkKgAAIiUwXAU1YhIASEgBAQAkJACIhMyQaEgBAQAkJACAgBIVAAAZGpAuApqxAQAkJACAgBISAERKZkA0JACAgBISAEhIAQKICAyFQB8JRVCAgBISAEhIAQEAIiU7IBISAEhIAQEAJCQAgUQEBkqgB4yioEhIAQEAJCQAgIAZEp2YAQEAJCQAgIASEgBAogIDJVADxlFQJCQAgIASEgBISAyJRsQAgIASEgBISAEBACBRAQmSoAnrIKASEgBISAEBACQkBkSjYgBISAEBACQkAICIECCIhMFQBPWYWAEBACQkAICAEhIDIlGxACQkAICAEhIASEQAEERKYKgKesQkAICAEhIASEgBAQmZINCAEhIASEgBAQAkKgAAIiUwXAU1YhIASEgBAQAkJACIhMyQaEgBAQAkJACAgBIVAAAZGpAuApqxAQAkJACAgBISAERKZkA0JACAgBISAEhIAQKICAyFQB8JRVCAgBISAEhIAQEAIiU7IBISAEhIAQEAJCQAgUQEBkqgB4yioEhIAQEAJCQAgIAZEp2YAQEAJCQAgIASEgBAogIDJVADxlFQJCQAgIASEgBISAyJRsQAgIASEgBISAEBACBRAQmSoAnrIKASEgBISAEBACQkBkSjYgBISAEBACQkAICIECCIhMFQBPWYWAEBACQkAICAEhIDIlGxACQkAICAEhIASEQAEERKYKgKes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qeuQ7c8IiA7gbDizZWwKfBt12B3HKsVppjfmPZxij9Onwz//Qz7n1k2vSp56SqZqXotyzeJV1ddT+S95Lmo/u5kjF6pY/7TqD6r0K63K3ExH5vx+AkfqcBypaehq+38zaJW+w9dOAnam1s56X6tL/X4bqlUFP41ukF5fpkWW4aCciQG5Mo5etfw/+VZVPrWzSuukyJ8Og+xg2mV23RGZVZX3OumsLe2wDqOeigtrTbNq6len6uuQ1PPRrQXnbY989lSerGfNImBnas2qT5fGBBoENGrFj210JARv4lqo+yTGRP9lyeP5iNb7jYy1N3uTh4kYOJ0rtKS7qcL3O69Of/UkQHvXoZz6T9K1Pu7HbmOrZz1+kHNtZ+qDXDvOmwnUJJBNtYQ1Uq2mWWomt1LRk2PnkZqVwudIFQikqT9Ew9pAt7UK0CzSFgE7U23hsrAJmIAJmIAJmIAJdCZgZ8otwgRMwARMwARMwARqELAzVQOeo5qACZiACZiACZiAnSm3ARMwARMwARMwAROoQcDOVA14jmoCJmACJmACJmACdqbcBkzABEzABEzABEygBgE7UzXgOaoJmIAJmIAJmIAJ2JlyGzABEzABEzABEzCBGgTsTNWA56gmYAImYAImYAImYGfKbcAETMAETMAETMAEahCwM1UDnqOagAmYgAmYgAmYgJ0ptwETMAETMAETMAETqEHAzlQNeI5qAiZgAiZgAiZgAnam3AZMwARMwARMwARMoAYBO1M14DmqCZiACZiACZiACdiZchswARMwARMwARMwgRoE7EzVgOeoJmACJmACJmACJmBnym3ABEzABEzABEzABGoQsDNVA56jmoAJmIAJmIAJmICdKbcBEzABEzABEzABE6hBwM5UDXiOagImYAImYAImYAJ2ptwGTMAETMAETMAETKAGATtTNeA5qgmYgAmYgAmYgAnYmXIbMAETMAETMAETMIEaBOxM1YDnqCZgAiZgAiZgAiZgZ8ptwARMwARMwARMwARqEPgv6VTFCOFhRiUAAAAASUVORK5CYII=',
                  }),
                ],
                -1,
              ),
            ]),
          8,
          J1,
        )
      )
    },
  },
  V1 = ['width', 'height'],
  U1 = ['fill'],
  v1 = {
    __name: 'down-caret',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(e) {
      return (n, i) => (
        A(),
        C(
          'svg',
          { width: e.width, height: e.height, fill: 'none' },
          [
            t(
              'path',
              {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M13.06 16.06C12.7788 16.3409 12.3975 16.4987 12 16.4987C11.6025 16.4987 11.2213 16.3409 10.94 16.06L5.28202 10.404C5.00076 10.1226 4.8428 9.741 4.8429 9.34315C4.84299 8.94529 5.00113 8.56376 5.28252 8.2825C5.56392 8.00124 5.94552 7.84328 6.34338 7.84337C6.74123 7.84347 7.12276 8.0016 7.40402 8.283L12 12.879L16.596 8.283C16.8788 8.00963 17.2576 7.85825 17.6509 7.86148C18.0442 7.86472 18.4205 8.02229 18.6988 8.30027C18.977 8.57826 19.1349 8.9544 19.1385 9.3477C19.1421 9.74099 18.9911 10.12 18.718 10.403L13.061 16.061L13.06 16.06Z',
                fill: e.color,
              },
              null,
              8,
              U1,
            ),
          ],
          8,
          V1,
        )
      )
    },
  },
  M1 = ['width', 'height'],
  N1 = ['fill'],
  K1 = {
    __name: 'real-estate-agent',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(e) {
      return (n, i) => (
        A(),
        C(
          'svg',
          { width: e.width, height: e.height, fill: 'none' },
          [
            t(
              'path',
              {
                d: 'M3 22.0001C4.1 22.0001 5 21.1001 5 20.0001V13.0001C5 11.9001 4.1 11.0001 3 11.0001C1.9 11.0001 1 11.9001 1 13.0001V20.0001C1 21.1001 1.9 22.0001 3 22.0001ZM11.37 16.4301L12.84 16.9401C12.95 16.9801 13.06 17.0001 13.17 17.0001H20C21.11 17.0001 22 17.8901 22.01 19.0001L14.62 21.7701C14.22 21.9201 13.78 21.9401 13.37 21.8201L7 20.0201V11.0001H8.6C8.84 11.0001 9.08 11.0401 9.3 11.1301L16.23 13.7201C16.4897 13.8166 16.7073 14.0012 16.8447 14.2418C16.9821 14.4824 17.0307 14.7637 16.9818 15.0364C16.933 15.3091 16.7899 15.556 16.5776 15.734C16.3652 15.912 16.0971 16.0097 15.82 16.0101H13.19C13.07 16.0101 12.95 15.9901 12.83 15.9401L11.71 15.5101C11.45 15.4101 11.16 15.5501 11.07 15.8101C10.98 16.0601 11.11 16.3401 11.37 16.4301ZM20.16 5.90008L15.16 2.33008C14.46 1.83008 13.53 1.83008 12.84 2.33008L7.84 5.90008C7.31 6.28008 7 6.88008 7 7.53008V9.00008H8.61C8.86 9.00008 9.12 9.05008 9.35 9.14008L17.14 12.2501C18.26 12.7101 19 13.7901 19 15.0001H21V7.53008C21 6.88008 20.69 6.28008 20.16 5.90008ZM13 10.0001C12.72 10.0001 12.5 9.78008 12.5 9.50008C12.5 9.22008 12.72 9.00008 13 9.00008C13.28 9.00008 13.5 9.22008 13.5 9.50008C13.5 9.78008 13.28 10.0001 13 10.0001ZM13 8.00008C12.72 8.00008 12.5 7.78008 12.5 7.50008C12.5 7.22008 12.72 7.00008 13 7.00008C13.28 7.00008 13.5 7.22008 13.5 7.50008C13.5 7.78008 13.28 8.00008 13 8.00008ZM15 10.0001C14.72 10.0001 14.5 9.78008 14.5 9.50008C14.5 9.22008 14.72 9.00008 15 9.00008C15.28 9.00008 15.5 9.22008 15.5 9.50008C15.5 9.78008 15.28 10.0001 15 10.0001ZM15 8.00008C14.72 8.00008 14.5 7.78008 14.5 7.50008C14.5 7.22008 14.72 7.00008 15 7.00008C15.28 7.00008 15.5 7.22008 15.5 7.50008C15.5 7.78008 15.28 8.00008 15 8.00008Z',
                fill: e.color,
              },
              null,
              8,
              N1,
            ),
          ],
          8,
          M1,
        )
      )
    },
  },
  O1 = ['width', 'height'],
  w1 = ['fill'],
  z1 = {
    __name: 'add-home',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(e) {
      return (n, i) => (
        A(),
        C(
          'svg',
          { width: e.width, height: e.height },
          [
            t(
              'path',
              {
                d: 'M13.5 15.25V17.25C13.5 17.3833 13.55 17.5 13.65 17.6C13.75 17.7 13.8667 17.75 14 17.75C14.1333 17.75 14.25 17.7 14.35 17.6C14.45 17.5 14.5 17.3833 14.5 17.25V15.25H16.5C16.6333 15.25 16.75 15.2 16.85 15.1C16.95 15 17 14.8833 17 14.75C17 14.6167 16.95 14.5 16.85 14.4C16.75 14.3 16.6333 14.25 16.5 14.25H14.5V12.25C14.5 12.1167 14.45 12 14.35 11.9C14.25 11.8 14.1333 11.75 14 11.75C13.8667 11.75 13.75 11.8 13.65 11.9C13.55 12 13.5 12.1167 13.5 12.25V14.25H11.5C11.3667 14.25 11.25 14.3 11.15 14.4C11.05 14.5 11 14.6167 11 14.75C11 14.8833 11.05 15 11.15 15.1C11.25 15.2 11.3667 15.25 11.5 15.25H13.5ZM14 19.75C12.6167 19.75 11.4377 19.2623 10.463 18.287C9.48833 17.3117 9.00067 16.1327 9 14.75C9 13.3667 9.48767 12.1877 10.463 11.213C11.4383 10.2383 12.6173 9.75067 14 9.75C15.3833 9.75 16.5627 10.2377 17.538 11.213C18.5133 12.1883 19.0007 13.3673 19 14.75C19 16.1333 18.5123 17.3127 17.537 18.288C16.5617 19.2633 15.3827 19.7507 14 19.75ZM0 15.75V6.75C0 6.43333 0.0709998 6.13333 0.213 5.85C0.355 5.56667 0.550667 5.33333 0.8 5.15L6.8 0.65C7.15 0.383333 7.55 0.25 8 0.25C8.45 0.25 8.85 0.383333 9.2 0.65L15.2 5.15C15.45 5.33333 15.646 5.56667 15.788 5.85C15.93 6.13333 16.0007 6.43333 16 6.75V8.05C15.6667 7.95 15.3333 7.875 15 7.825C14.6667 7.775 14.3333 7.75 14 7.75C12.05 7.75 10.3957 8.42933 9.037 9.788C7.67833 11.1467 6.99933 12.8007 7 14.75C7 15.2833 7.05433 15.8 7.163 16.3C7.27167 16.8 7.44233 17.2833 7.675 17.75H2C1.45 17.75 0.979333 17.5543 0.588 17.163C0.196666 16.7717 0.000666667 16.3007 0 15.75Z',
                fill: e.color,
              },
              null,
              8,
              w1,
            ),
          ],
          8,
          O1,
        )
      )
    },
  },
  H1 = ['width', 'height'],
  j1 = ['fill'],
  W1 = {
    __name: 'property-tag',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(e) {
      return (n, i) => (
        A(),
        C(
          'svg',
          { width: e.width, height: e.height, fill: 'none' },
          [
            t(
              'path',
              {
                d: 'M14 5V4C14 2.9 13.1 2 12 2H8C6.9 2 6 2.9 6 4V5C3.8 5 2 6.8 2 9V20C2 21.1 2.9 22 4 22H15.2L12.8 19.6C12.2 19.1 11.9 18.3 11.9 17.6V16H7V18H6V16H4V15H12V14.8C12 13.3 13.2 12 14.8 12H18V9C18 6.8 16.2 5 14 5ZM10 13L8 11L10 9L12 11L10 13ZM12 5H8V4H12V5ZM21.8 17.8L18.2 14.2C18 14.1 17.8 14 17.6 14H14.8C14.4 14 14 14.4 14 14.8V17.6C14 17.8 14.1 18 14.2 18.2L17.8 21.8C17.9 21.9 18.1 22 18.4 22C18.6 22 18.8 21.9 19 21.8L21.8 19C21.9 18.9 22 18.7 22 18.4C22 18.2 21.9 18 21.8 17.8ZM15.4 16C15.1 16 14.8 15.7 14.8 15.4C14.8 15.1 15.1 14.8 15.4 14.8C15.7 14.8 16 15.1 16 15.4C16 15.7 15.7 16 15.4 16Z',
                fill: e.color,
              },
              null,
              8,
              j1,
            ),
          ],
          8,
          H1,
        )
      )
    },
  },
  G1 = ['width', 'height'],
  B1 = { 'clip-path': 'url(#clip0_54716_490)' },
  P1 = ['fill'],
  F1 = ['fill'],
  D1 = {
    __name: 'sign-in-solid',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(e) {
      return (n, i) => (
        A(),
        C(
          'svg',
          { width: e.width, height: e.height, fill: 'none' },
          [
            t('g', B1, [
              t(
                'path',
                {
                  d: 'M18.6667 2.66675H8.00008C7.64646 2.66675 7.30732 2.80722 7.05727 3.05727C6.80722 3.30732 6.66675 3.64646 6.66675 4.00008V8.66675H12.3334L10.0801 6.47341C9.97086 6.34588 9.91379 6.18183 9.92027 6.01405C9.92675 5.84626 9.99631 5.6871 10.115 5.56837C10.2338 5.44964 10.3929 5.38009 10.5607 5.37361C10.7285 5.36713 10.8925 5.4242 11.0201 5.53341L14.8801 9.39341L11.0201 13.2534C10.8925 13.3626 10.7285 13.4197 10.5607 13.4132C10.3929 13.4067 10.2338 13.3372 10.115 13.2185C9.99631 13.0997 9.92675 12.9406 9.92027 12.7728C9.91379 12.605 9.97086 12.4409 10.0801 12.3134L12.3334 10.0001H6.66675V20.0001C6.66675 20.3537 6.80722 20.6928 7.05727 20.9429C7.30732 21.1929 7.64646 21.3334 8.00008 21.3334H18.6667C19.0204 21.3334 19.3595 21.1929 19.6096 20.9429C19.8596 20.6928 20.0001 20.3537 20.0001 20.0001V4.00008C20.0001 3.64646 19.8596 3.30732 19.6096 3.05727C19.3595 2.80722 19.0204 2.66675 18.6667 2.66675Z',
                  fill: e.color,
                },
                null,
                8,
                P1,
              ),
              t(
                'path',
                {
                  d: 'M6.66667 8.66675H2.66667C2.48986 8.66675 2.32029 8.73699 2.19526 8.86201C2.07024 8.98703 2 9.1566 2 9.33341C2 9.51023 2.07024 9.67979 2.19526 9.80482C2.32029 9.92984 2.48986 10.0001 2.66667 10.0001H6.66667V8.66675Z',
                  fill: e.color,
                },
                null,
                8,
                F1,
              ),
            ]),
            i[0] ||
              (i[0] = t(
                'defs',
                null,
                [
                  t('clipPath', { id: 'clip0_54716_490' }, [
                    t('rect', { width: '24', height: '24', fill: 'white' }),
                  ]),
                ],
                -1,
              )),
          ],
          8,
          G1,
        )
      )
    },
  },
  L1 = ['width', 'height'],
  Y1 = ['fill'],
  x1 = {
    __name: 'login-bold',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(e) {
      return (n, i) => (
        A(),
        C(
          'svg',
          { width: e.width, height: e.height, fill: 'none' },
          [
            t(
              'path',
              {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M3.5 9.568V14.432C3.5 16.726 3.5 17.872 4.222 18.585C4.877 19.232 5.896 19.291 7.818 19.297C7.81276 19.262 7.80776 19.227 7.803 19.192C7.688 18.348 7.688 17.276 7.688 15.945V15.892C7.688 15.489 8.019 15.162 8.428 15.162C8.836 15.162 9.167 15.489 9.167 15.892C9.167 17.288 9.168 18.262 9.268 18.997C9.366 19.711 9.543 20.09 9.816 20.359C10.089 20.629 10.472 20.804 11.195 20.899C11.939 20.999 12.926 21 14.341 21H15.326C16.741 21 17.727 20.998 18.472 20.9C19.195 20.804 19.578 20.628 19.85 20.359C20.123 20.089 20.301 19.711 20.398 18.997C20.498 18.263 20.5 17.288 20.5 15.892V8.108C20.5 6.711 20.498 5.738 20.398 5.003C20.301 4.289 20.123 3.91 19.851 3.641C19.578 3.371 19.195 3.196 18.471 3.101C17.728 3 16.742 3 15.327 3H14.342C12.927 3 11.94 3.002 11.196 3.1C10.473 3.196 10.09 3.372 9.817 3.641C9.544 3.911 9.367 4.289 9.269 5.003C9.169 5.737 9.168 6.711 9.168 8.108C9.168 8.511 8.837 8.838 8.428 8.838C8.33153 8.83866 8.23587 8.82029 8.1465 8.78395C8.05713 8.74761 7.9758 8.694 7.90716 8.6262C7.83853 8.5584 7.78393 8.47774 7.7465 8.38882C7.70906 8.2999 7.68952 8.20447 7.689 8.108V8.055C7.689 6.725 7.689 5.652 7.804 4.808L7.819 4.703C5.897 4.709 4.879 4.768 4.223 5.415C3.501 6.128 3.5 7.275 3.5 9.568ZM13.386 14.948L15.85 12.516C15.9186 12.4487 15.973 12.3684 16.0102 12.2798C16.0474 12.1912 16.0666 12.0961 16.0666 12C16.0666 11.9039 16.0474 11.8088 16.0102 11.7202C15.973 11.6316 15.9186 11.5513 15.85 11.484L13.386 9.052C13.2465 8.91513 13.0589 8.83846 12.8635 8.83846C12.6681 8.83846 12.4805 8.91513 12.341 9.052C12.2724 9.1193 12.218 9.1996 12.1808 9.2882C12.1436 9.37679 12.1244 9.47192 12.1244 9.568C12.1244 9.66408 12.1436 9.7592 12.1808 9.8478C12.218 9.9364 12.2724 10.0167 12.341 10.084L13.543 11.27H6.457C6.36044 11.2692 6.26468 11.2875 6.17519 11.3238C6.0857 11.36 6.00426 11.4136 5.93552 11.4814C5.86677 11.5493 5.81209 11.63 5.77459 11.7189C5.73709 11.8079 5.71752 11.9034 5.717 12C5.717 12.403 6.048 12.73 6.457 12.73H13.542L12.34 13.916C12.2714 13.9833 12.217 14.0636 12.1798 14.1522C12.1426 14.2408 12.1234 14.3359 12.1234 14.432C12.1234 14.5281 12.1426 14.6232 12.1798 14.7118C12.217 14.8004 12.2714 14.8807 12.34 14.948C12.4795 15.0849 12.6671 15.1615 12.8625 15.1615C13.0579 15.1615 13.2465 15.0849 13.386 14.948Z',
                fill: e.color,
              },
              null,
              8,
              Y1,
            ),
          ],
          8,
          L1,
        )
      )
    },
  },
  X1 = ['width', 'height'],
  _1 = ['fill'],
  j = {
    __name: 'question-filled',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(e) {
      return (n, i) => (
        A(),
        C(
          'svg',
          { width: e.width, height: e.height, fill: 'none' },
          [
            t(
              'path',
              {
                d: 'M12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5ZM12.5565 5.988C11.3355 5.988 10.3785 6.3345 9.669 7.0275C8.943 7.7205 8.5965 8.6775 8.5965 9.8985H10.4775C10.4775 9.2055 10.6095 8.661 10.89 8.2815C11.2035 7.8195 11.715 7.605 12.441 7.605C13.002 7.605 13.4475 7.7535 13.761 8.067C14.058 8.3805 14.223 8.8095 14.223 9.354C14.223 9.7665 14.0745 10.1625 13.7775 10.5255L13.5795 10.7565C12.507 11.7135 11.8635 12.4065 11.649 12.852C11.418 13.2975 11.319 13.842 11.319 14.469V14.7H13.2165V14.469C13.2165 14.073 13.299 13.7265 13.464 13.3965C13.6125 13.0995 13.827 12.819 14.124 12.5715C14.916 11.8785 15.3945 11.433 15.543 11.268C15.939 10.74 16.1535 10.0635 16.1535 9.2385C16.1535 8.232 15.8235 7.44 15.1635 6.8625C14.5035 6.2685 13.629 5.988 12.5565 5.988ZM12.2595 15.5085C11.9231 15.4994 11.5967 15.624 11.352 15.855C11.2312 15.9688 11.1362 16.1073 11.0736 16.261C11.011 16.4147 10.9821 16.5801 10.989 16.746C10.989 17.109 11.1045 17.406 11.352 17.637C11.5949 17.8728 11.921 18.0032 12.2595 18C12.6225 18 12.9195 17.8845 13.167 17.6535C13.2904 17.5373 13.388 17.3965 13.4533 17.2401C13.5187 17.0838 13.5505 16.9154 13.5465 16.746C13.5497 16.5806 13.5191 16.4163 13.4567 16.2631C13.3943 16.11 13.3013 15.9711 13.1835 15.855C12.9324 15.6236 12.6009 15.4992 12.2595 15.5085Z',
                fill: e.color,
              },
              null,
              8,
              _1,
            ),
          ],
          8,
          X1,
        )
      )
    },
  },
  $1 = ['width', 'height'],
  ee = { 'clip-path': 'url(#clip0_54716_466)' },
  te = ['fill'],
  ie = {
    __name: 'up-caret',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(e) {
      return (n, i) => (
        A(),
        C(
          'svg',
          { width: e.width, height: e.height, fill: 'none' },
          [
            t('g', ee, [
              t(
                'path',
                {
                  'fill-rule': 'evenodd',
                  'clip-rule': 'evenodd',
                  d: 'M13.0599 7.94011C12.7787 7.65921 12.3974 7.50143 11.9999 7.50143C11.6024 7.50143 11.2212 7.65921 10.9399 7.94011L5.2819 13.5961C5.00064 13.8775 4.84268 14.2591 4.84277 14.657C4.84287 15.0548 5.00101 15.4363 5.2824 15.7176C5.56379 15.9989 5.9454 16.1568 6.34325 16.1567C6.74111 16.1566 7.12264 15.9985 7.4039 15.7171L11.9999 11.1211L16.5959 15.7171C16.8787 15.9905 17.2575 16.1419 17.6508 16.1386C18.0441 16.1354 18.4204 15.9778 18.6986 15.6998C18.9769 15.4219 19.1348 15.0457 19.1384 14.6524C19.142 14.2591 18.991 13.8801 18.7179 13.5971L13.0609 7.93911L13.0599 7.94011Z',
                  fill: e.color,
                },
                null,
                8,
                te,
              ),
            ]),
            i[0] ||
              (i[0] = t(
                'defs',
                null,
                [
                  t('clipPath', { id: 'clip0_54716_466' }, [
                    t('rect', {
                      width: '24',
                      height: '24',
                      fill: 'white',
                      transform: 'matrix(1 0 0 -1 0 24)',
                    }),
                  ]),
                ],
                -1,
              )),
          ],
          8,
          $1,
        )
      )
    },
  },
  le = { elevated: '', class: 'header' },
  oe = { class: 'header-nav' },
  ne = { class: 'sidebar-content' },
  ae = { class: 'nav-list' },
  re = { class: 'toggle' },
  se = { class: 'title' },
  ce = ['onClick'],
  de = { key: 0, class: 'child' },
  Ae = { class: 'top-footer' },
  he = { class: 'footer-content' },
  ue = { class: 'logo' },
  Ce = { class: 'footer-link' },
  Ie = { class: 'socials' },
  pe = {
    __name: 'MainLayout',
    setup(e) {
      const n = k(!1)
      function i() {
        n.value = !n.value
      }
      const l = k([
          { label: 'Home', to: '/' },
          {
            label: 'Agent Finder',
            dropdown: !0,
            mobileDropdown: !1,
            list: [
              { label: 'Agent', img: K1, to: '/agent' },
              { label: 'Home Improvement', img: z1, to: '/home-improvement' },
              { label: 'Property Manager', img: W1, to: '/property-manager' },
            ],
          },
          { label: 'Calender', to: '/calender' },
          { label: 'Buy a Property', to: '/buy-property' },
          { label: 'Rent a Property', to: '/sell-property' },
          {
            label: 'Profile',
            dropdown: !0,
            mobileDropdown: !1,
            list: [
              { label: 'Sign In', img: D1, to: '/login' },
              { label: 'Sign Up', img: x1, to: '/signup' },
            ],
          },
          {
            label: 'Contact Us',
            dropdown: !0,
            mobileDropdown: !1,
            list: [
              { label: '+2348029992888, +2348034934952', img: j },
              { label: 'tfnowandassociates@gmail.com', img: j },
              { label: '15, Ben Bright Street, Green Field Estste, Okota, Isolo, Lagos', img: j },
            ],
          },
          { label: 'FAQs', to: '/faqs' },
          { label: 'TFN Yearly Report', to: '/yearly-report' },
        ]),
        d = (c) => {
          l.value[c].mobileDropdown = !l.value[c].mobileDropdown
        }
      return (c, o) => {
        const f = O('router-link'),
          a = O('RouterLink'),
          r = O('router-view')
        return (
          A(),
          V(
            Q1,
            { view: 'hHh ppp lFf' },
            {
              default: Z(() => [
                t('header', le, [
                  t('div', oe, [
                    p(
                      f,
                      { to: '/home', class: 'logo' },
                      { default: Z(() => [p(e1, { width: 32, height: 30 })]), _: 1 },
                    ),
                    p(
                      y1,
                      { class: 'company-name' },
                      { default: Z(() => o[0] || (o[0] = [g(' TFN Properties ')])), _: 1 },
                    ),
                    p(p1, {
                      flat: '',
                      dense: '',
                      round: '',
                      icon: 'menu',
                      'aria-label': 'Menu',
                      onClick: i,
                      color: 'white',
                    }),
                  ]),
                ]),
                t(
                  'div',
                  { class: u1(`mobile-nav-list ${n.value ? 'show' : ''}`) },
                  [
                    t('div', ne, [
                      t('div', { class: 'action' }, [
                        t('button', { class: 'close-btn', onClick: i }, '×'),
                      ]),
                      o[1] ||
                        (o[1] = t(
                          'div',
                          { class: 'logo-and-name' },
                          [
                            t('div', { class: 'logo-container' }, [
                              t('img', {
                                src: 'assets/image/69bc49ac256503346b5e0f315585faa7.png',
                                alt: 'TFN logo',
                              }),
                            ]),
                            t('h5', null, [g(' TFN '), t('br'), g(' Properties ')]),
                          ],
                          -1,
                        )),
                      t('ul', ae, [
                        (A(!0),
                        C(
                          w,
                          null,
                          Y(
                            l.value,
                            (h, u) => (
                              A(),
                              C('li', { key: u }, [
                                h.dropdown
                                  ? (A(),
                                    C(
                                      w,
                                      { key: 0 },
                                      [
                                        t('div', re, [
                                          t('span', se, z(h.label), 1),
                                          t(
                                            'button',
                                            { class: 'toggle-button', onClick: (m) => d(u) },
                                            [
                                              h.mobileDropdown
                                                ? (A(),
                                                  V(ie, {
                                                    key: 0,
                                                    color: 'black',
                                                    width: 20,
                                                    height: 20,
                                                  }))
                                                : (A(), V(v1, { key: 1, color: 'black' })),
                                            ],
                                            8,
                                            ce,
                                          ),
                                        ]),
                                        h.mobileDropdown
                                          ? (A(),
                                            C('ul', de, [
                                              (A(!0),
                                              C(
                                                w,
                                                null,
                                                Y(
                                                  h.list,
                                                  (m) => (
                                                    A(),
                                                    C('li', { key: m.label }, [
                                                      p(
                                                        a,
                                                        { to: m.to, class: 'title' },
                                                        {
                                                          default: Z(() => [g(z(m.label), 1)]),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        ['to'],
                                                      ),
                                                    ])
                                                  ),
                                                ),
                                                128,
                                              )),
                                            ]))
                                          : h1('', !0),
                                      ],
                                      64,
                                    ))
                                  : (A(),
                                    V(
                                      a,
                                      { key: 1, class: 'title', to: h.to },
                                      { default: Z(() => [g(z(h.label), 1)]), _: 2 },
                                      1032,
                                      ['to'],
                                    )),
                              ])
                            ),
                          ),
                          128,
                        )),
                      ]),
                    ]),
                    t('div', { class: 'darkside', onClick: i }),
                  ],
                  2,
                ),
                p(E1, null, { default: Z(() => [p(r)]), _: 1 }),
                t('footer', Ae, [
                  t('div', he, [
                    t('div', ue, [
                      p(e1, { width: 30, height: 30 }),
                      o[2] || (o[2] = t('h5', null, [g(' TFN '), t('br'), g(' Properties ')], -1)),
                    ]),
                    t('ul', Ce, [
                      o[6] || (o[6] = t('h5', null, 'Useful Links:', -1)),
                      o[7] || (o[7] = t('li', null, 'About Us', -1)),
                      o[8] || (o[8] = t('li', null, 'Contact Us', -1)),
                      t('li', null, [
                        p(
                          a,
                          { to: '/policy' },
                          { default: Z(() => o[3] || (o[3] = [g('Privacy Policy')])), _: 1 },
                        ),
                      ]),
                      t('li', null, [
                        p(
                          a,
                          { to: '/termsofuse' },
                          { default: Z(() => o[4] || (o[4] = [g('Terms of Use')])), _: 1 },
                        ),
                      ]),
                      t('li', null, [
                        p(
                          a,
                          { to: '/faqs' },
                          { default: Z(() => o[5] || (o[5] = [g('FAQs')])), _: 1 },
                        ),
                      ]),
                    ]),
                    t('div', Ie, [p(f1, { name: 'facebook', size: 'lg' })]),
                  ]),
                ]),
                o[9] ||
                  (o[9] = t(
                    'footer',
                    { class: 'bottom-footer' },
                    [
                      t('div', { class: 'footer-content' }, [
                        t('h5', null, 'Popular Property'),
                        t('ul', null, [
                          t('li', null, 'Flats for rent in Abuja'),
                          t('li', null, 'Houses for rent in Abuja'),
                          t('li', null, 'Houses for sale in Abuja'),
                          t('li', null, 'Land for sale in Abuja'),
                          t('li', null, 'Mini Flats for rent in Abuja'),
                          t('li', null, 'Self contain for rent in Abuja'),
                          t('li', null, 'Flats for rent in Lagos'),
                          t('li', null, 'Houses for rent in Lagos'),
                          t('li', null, 'Houses for sale in Lagos'),
                          t('li', null, 'Land for sale in Lagos'),
                          t('li', null, 'Mini Flats for rent in Lagos'),
                          t('li', null, 'Self contain for rent in Lagos'),
                        ]),
                      ]),
                    ],
                    -1,
                  )),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  },
  Ee = m1(pe, [['__scopeId', 'data-v-49a3d9d0']])
export { Ee as default }
