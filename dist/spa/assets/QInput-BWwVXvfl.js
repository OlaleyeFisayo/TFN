import {
  v as Me,
  r as T,
  o as oe,
  w as D,
  c as k,
  R as Se,
  g as X,
  i as Re,
  S as qe,
  q as ae,
  U as Ve,
  V as xe,
  P as Fe,
  x as Y,
  W as Ae,
  X as _e,
  h as M,
  Y as G,
  Z as Ee,
  _ as Be,
  $ as $e,
  k as Oe,
  a0 as fe,
} from './index-croNHMG4.js'
import { b as ce, e as Te, h as J } from './QBtn-YVQo18uK.js'
import { b as Ie, u as Pe, a as De, d as je } from './private.use-form-DP1HiX6u.js'
let re,
  ee = 0
const O = new Array(256)
for (let e = 0; e < 256; e++) O[e] = (e + 256).toString(16).substring(1)
const ze = (() => {
    const e =
      typeof crypto < 'u' ? crypto : typeof window < 'u' ? window.crypto || window.msCrypto : void 0
    if (e !== void 0) {
      if (e.randomBytes !== void 0) return e.randomBytes
      if (e.getRandomValues !== void 0)
        return (t) => {
          const r = new Uint8Array(t)
          return e.getRandomValues(r), r
        }
    }
    return (t) => {
      const r = []
      for (let i = t; i > 0; i--) r.push(Math.floor(Math.random() * 256))
      return r
    }
  })(),
  ve = 4096
function ie() {
  ;(re === void 0 || ee + 16 > ve) && ((ee = 0), (re = ze(ve)))
  const e = Array.prototype.slice.call(re, ee, (ee += 16))
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    O[e[0]] +
      O[e[1]] +
      O[e[2]] +
      O[e[3]] +
      '-' +
      O[e[4]] +
      O[e[5]] +
      '-' +
      O[e[6]] +
      O[e[7]] +
      '-' +
      O[e[8]] +
      O[e[9]] +
      '-' +
      O[e[10]] +
      O[e[11]] +
      O[e[12]] +
      O[e[13]] +
      O[e[14]] +
      O[e[15]]
  )
}
function Ne(e) {
  return e ?? null
}
function ge(e, t) {
  return e ?? (t === !0 ? `f_${ie()}` : null)
}
function Ke({ getValue: e, required: t = !0 } = {}) {
  if (Me.value === !0) {
    const r = e !== void 0 ? T(Ne(e())) : T(null)
    return (
      t === !0 &&
        r.value === null &&
        oe(() => {
          r.value = `f_${ie()}`
        }),
      e !== void 0 &&
        D(e, (i) => {
          r.value = ge(i, t)
        }),
      r
    )
  }
  return e !== void 0 ? k(() => ge(e(), t)) : T(`f_${ie()}`)
}
const me = /^on[A-Z]/
function Le() {
  const { attrs: e, vnode: t } = X(),
    r = { listeners: T({}), attributes: T({}) }
  function i() {
    const f = {},
      d = {}
    for (const v in e) v !== 'class' && v !== 'style' && me.test(v) === !1 && (f[v] = e[v])
    for (const v in t.props) me.test(v) === !0 && (d[v] = t.props[v])
    ;(r.attributes.value = f), (r.listeners.value = d)
  }
  return Se(i), i(), r
}
function Ze({ validate: e, resetValidation: t, requiresQForm: r }) {
  const i = Re(qe, !1)
  if (i !== !1) {
    const { props: f, proxy: d } = X()
    Object.assign(d, { validate: e, resetValidation: t }),
      D(
        () => f.disable,
        (v) => {
          v === !0 ? (typeof t == 'function' && t(), i.unbindComponent(d)) : i.bindComponent(d)
        },
      ),
      oe(() => {
        f.disable !== !0 && i.bindComponent(d)
      }),
      ae(() => {
        f.disable !== !0 && i.unbindComponent(d)
      })
  } else r === !0 && console.error('Parent QForm not found on useFormChild()!')
}
const he = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  pe = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  be = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  te =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  ne =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  ue = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e,
      ),
    hexColor: (e) => he.test(e),
    hexaColor: (e) => pe.test(e),
    hexOrHexaColor: (e) => be.test(e),
    rgbColor: (e) => te.test(e),
    rgbaColor: (e) => ne.test(e),
    rgbOrRgbaColor: (e) => te.test(e) || ne.test(e),
    hexOrRgbColor: (e) => he.test(e) || te.test(e),
    hexaOrRgbaColor: (e) => pe.test(e) || ne.test(e),
    anyColor: (e) => be.test(e) || te.test(e) || ne.test(e),
  },
  Ue = [!0, !1, 'ondemand'],
  He = {
    modelValue: {},
    error: { type: Boolean, default: null },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: { type: [Boolean, String], default: !1, validator: (e) => Ue.includes(e) },
  }
function Qe(e, t) {
  const { props: r, proxy: i } = X(),
    f = T(!1),
    d = T(null),
    v = T(!1)
  Ze({ validate: z, resetValidation: j })
  let x = 0,
    E
  const R = k(() => r.rules !== void 0 && r.rules !== null && r.rules.length !== 0),
    C = k(() => r.disable !== !0 && R.value === !0 && t.value === !1),
    p = k(() => r.error === !0 || f.value === !0),
    H = k(() =>
      typeof r.errorMessage == 'string' && r.errorMessage.length !== 0 ? r.errorMessage : d.value,
    )
  D(
    () => r.modelValue,
    () => {
      ;(v.value = !0), C.value === !0 && r.lazyRules === !1 && I()
    },
  )
  function $() {
    r.lazyRules !== 'ondemand' && C.value === !0 && v.value === !0 && I()
  }
  D(
    () => r.reactiveRules,
    (K) => {
      K === !0
        ? E === void 0 && (E = D(() => r.rules, $, { immediate: !0, deep: !0 }))
        : E !== void 0 && (E(), (E = void 0))
    },
    { immediate: !0 },
  ),
    D(() => r.lazyRules, $),
    D(e, (K) => {
      K === !0 ? (v.value = !0) : C.value === !0 && r.lazyRules !== 'ondemand' && I()
    })
  function j() {
    x++, (t.value = !1), (v.value = !1), (f.value = !1), (d.value = null), I.cancel()
  }
  function z(K = r.modelValue) {
    if (r.disable === !0 || R.value === !1) return !0
    const A = ++x,
      Q =
        t.value !== !0
          ? () => {
              v.value = !0
            }
          : () => {},
      L = (S, w) => {
        S === !0 && Q(), (f.value = S), (d.value = w || null), (t.value = !1)
      },
      N = []
    for (let S = 0; S < r.rules.length; S++) {
      const w = r.rules[S]
      let B
      if (
        (typeof w == 'function'
          ? (B = w(K, ue))
          : typeof w == 'string' && ue[w] !== void 0 && (B = ue[w](K)),
        B === !1 || typeof B == 'string')
      )
        return L(!0, B), !1
      B !== !0 && B !== void 0 && N.push(B)
    }
    return N.length === 0
      ? (L(!1), !0)
      : ((t.value = !0),
        Promise.all(N).then(
          (S) => {
            if (S === void 0 || Array.isArray(S) === !1 || S.length === 0)
              return A === x && L(!1), !0
            const w = S.find((B) => B === !1 || typeof B == 'string')
            return A === x && L(w !== void 0, w), w === void 0
          },
          (S) => (A === x && (console.error(S), L(!0)), !1),
        ))
  }
  const I = Ve(z, 0)
  return (
    ae(() => {
      E !== void 0 && E(), I.cancel()
    }),
    Object.assign(i, { resetValidation: j, validate: z }),
    xe(i, 'hasError', () => p.value),
    { isDirtyModel: v, hasRules: R, hasError: p, errorMessage: H, validate: z, resetValidation: j }
  )
}
let se = [],
  Ye = []
function Ce(e) {
  Ye.length === 0 ? e() : se.push(e)
}
function We(e) {
  se = se.filter((t) => t !== e)
}
function de(e) {
  return e != null && ('' + e).length !== 0
}
const Xe = {
    ...Pe,
    ...He,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String,
  },
  Ge = { ...Xe, maxlength: [Number, String] },
  Je = ['update:modelValue', 'clear', 'focus', 'blur']
function et({ requiredForAttr: e = !0, tagProp: t, changeEvent: r = !1 } = {}) {
  const { props: i, proxy: f } = X(),
    d = Ie(i, f.$q),
    v = Ke({ required: e, getValue: () => i.for })
  return {
    requiredForAttr: e,
    changeEvent: r,
    tag: t === !0 ? k(() => i.tag) : { value: 'label' },
    isDark: d,
    editable: k(() => i.disable !== !0 && i.readonly !== !0),
    innerLoading: T(!1),
    focused: T(!1),
    hasPopupOpen: !1,
    splitAttrs: Le(),
    targetUid: v,
    rootRef: T(null),
    targetRef: T(null),
    controlRef: T(null),
  }
}
function tt(e) {
  const { props: t, emit: r, slots: i, attrs: f, proxy: d } = X(),
    { $q: v } = d
  let x = null
  e.hasValue === void 0 && (e.hasValue = k(() => de(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (u) => {
        r('update:modelValue', u)
      }),
    e.controlEvents === void 0 && (e.controlEvents = { onFocusin: o, onFocusout: l }),
    Object.assign(e, { clearValue: s, onControlFocusin: o, onControlFocusout: l, focus: w }),
    e.computedCounter === void 0 &&
      (e.computedCounter = k(() => {
        if (t.counter !== !1) {
          const u =
              typeof t.modelValue == 'string' || typeof t.modelValue == 'number'
                ? ('' + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                  ? t.modelValue.length
                  : 0,
            c = t.maxlength !== void 0 ? t.maxlength : t.maxValues
          return u + (c !== void 0 ? ' / ' + c : '')
        }
      }))
  const {
      isDirtyModel: E,
      hasRules: R,
      hasError: C,
      errorMessage: p,
      resetValidation: H,
    } = Qe(e.focused, e.innerLoading),
    $ =
      e.floatingLabel !== void 0
        ? k(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0)
        : k(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0),
    j = k(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        R.value === !0 ||
        t.counter === !0 ||
        t.error !== null,
    ),
    z = k(() =>
      t.filled === !0
        ? 'filled'
        : t.outlined === !0
          ? 'outlined'
          : t.borderless === !0
            ? 'borderless'
            : t.standout
              ? 'standout'
              : 'standard',
    ),
    I = k(
      () =>
        `q-field row no-wrap items-start q-field--${z.value}` +
        (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : '') +
        (t.rounded === !0 ? ' q-field--rounded' : '') +
        (t.square === !0 ? ' q-field--square' : '') +
        ($.value === !0 ? ' q-field--float' : '') +
        (A.value === !0 ? ' q-field--labeled' : '') +
        (t.dense === !0 ? ' q-field--dense' : '') +
        (t.itemAligned === !0 ? ' q-field--item-aligned q-item-type' : '') +
        (e.isDark.value === !0 ? ' q-field--dark' : '') +
        (e.getControl === void 0 ? ' q-field--auto-height' : '') +
        (e.focused.value === !0 ? ' q-field--focused' : '') +
        (C.value === !0 ? ' q-field--error' : '') +
        (C.value === !0 || e.focused.value === !0 ? ' q-field--highlighted' : '') +
        (t.hideBottomSpace !== !0 && j.value === !0 ? ' q-field--with-bottom' : '') +
        (t.disable === !0 ? ' q-field--disabled' : t.readonly === !0 ? ' q-field--readonly' : ''),
    ),
    K = k(
      () =>
        'q-field__control relative-position row no-wrap' +
        (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : '') +
        (C.value === !0
          ? ' text-negative'
          : typeof t.standout == 'string' && t.standout.length !== 0 && e.focused.value === !0
            ? ` ${t.standout}`
            : t.color !== void 0
              ? ` text-${t.color}`
              : ''),
    ),
    A = k(() => t.labelSlot === !0 || t.label !== void 0),
    Q = k(
      () =>
        'q-field__label no-pointer-events absolute ellipsis' +
        (t.labelColor !== void 0 && C.value !== !0 ? ` text-${t.labelColor}` : ''),
    ),
    L = k(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: $.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    N = k(() => {
      const u = {}
      return (
        e.targetUid.value && (u.for = e.targetUid.value),
        t.disable === !0 && (u['aria-disabled'] = 'true'),
        u
      )
    })
  function S() {
    const u = document.activeElement
    let c = e.targetRef !== void 0 && e.targetRef.value
    c &&
      (u === null || u.id !== e.targetUid.value) &&
      (c.hasAttribute('tabindex') === !0 || (c = c.querySelector('[tabindex]')),
      c && c !== u && c.focus({ preventScroll: !0 }))
  }
  function w() {
    Ce(S)
  }
  function B() {
    We(S)
    const u = document.activeElement
    u !== null && e.rootRef.value.contains(u) && u.blur()
  }
  function o(u) {
    x !== null && (clearTimeout(x), (x = null)),
      e.editable.value === !0 && e.focused.value === !1 && ((e.focused.value = !0), r('focus', u))
  }
  function l(u, c) {
    x !== null && clearTimeout(x),
      (x = setTimeout(() => {
        ;(x = null),
          !(
            document.hasFocus() === !0 &&
            (e.hasPopupOpen === !0 ||
              e.controlRef === void 0 ||
              e.controlRef.value === null ||
              e.controlRef.value.contains(document.activeElement) !== !1)
          ) &&
            (e.focused.value === !0 && ((e.focused.value = !1), r('blur', u)), c !== void 0 && c())
      }))
  }
  function s(u) {
    Fe(u),
      v.platform.is.mobile !== !0
        ? ((e.targetRef !== void 0 && e.targetRef.value) || e.rootRef.value).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(),
      t.type === 'file' && (e.inputRef.value.value = null),
      r('update:modelValue', null),
      e.changeEvent === !0 && r('change', null),
      r('clear', t.modelValue),
      Y(() => {
        const c = E.value
        H(), (E.value = c)
      })
  }
  function a(u) {
    ;[13, 32].includes(u.keyCode) && s(u)
  }
  function h() {
    const u = []
    return (
      i.prepend !== void 0 &&
        u.push(
          M(
            'div',
            {
              class: 'q-field__prepend q-field__marginal row no-wrap items-center',
              key: 'prepend',
              onClick: G,
            },
            i.prepend(),
          ),
        ),
      u.push(
        M(
          'div',
          { class: 'q-field__control-container col relative-position row no-wrap q-anchor--skip' },
          g(),
        ),
      ),
      C.value === !0 &&
        t.noErrorIcon === !1 &&
        u.push(m('error', [M(ce, { name: v.iconSet.field.error, color: 'negative' })])),
      t.loading === !0 || e.innerLoading.value === !0
        ? u.push(
            m(
              'inner-loading-append',
              i.loading !== void 0 ? i.loading() : [M(Te, { color: t.color })],
            ),
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          u.push(
            m('inner-clearable-append', [
              M(ce, {
                class: 'q-field__focusable-action',
                name: t.clearIcon || v.iconSet.field.clear,
                tabindex: 0,
                role: 'button',
                'aria-hidden': 'false',
                'aria-label': v.lang.label.clear,
                onKeyup: a,
                onClick: s,
              }),
            ]),
          ),
      i.append !== void 0 &&
        u.push(
          M(
            'div',
            {
              class: 'q-field__append q-field__marginal row no-wrap items-center',
              key: 'append',
              onClick: G,
            },
            i.append(),
          ),
        ),
      e.getInnerAppend !== void 0 && u.push(m('inner-append', e.getInnerAppend())),
      e.getControlChild !== void 0 && u.push(e.getControlChild()),
      u
    )
  }
  function g() {
    const u = []
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        u.push(M('div', { class: 'q-field__prefix no-pointer-events row items-center' }, t.prefix)),
      e.getShadowControl !== void 0 && e.hasShadow.value === !0 && u.push(e.getShadowControl()),
      e.getControl !== void 0
        ? u.push(e.getControl())
        : i.rawControl !== void 0
          ? u.push(i.rawControl())
          : i.control !== void 0 &&
            u.push(
              M(
                'div',
                {
                  ref: e.targetRef,
                  class: 'q-field__native row',
                  tabindex: -1,
                  ...e.splitAttrs.attributes.value,
                  'data-autofocus': t.autofocus === !0 || void 0,
                },
                i.control(L.value),
              ),
            ),
      A.value === !0 && u.push(M('div', { class: Q.value }, J(i.label, t.label))),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        u.push(M('div', { class: 'q-field__suffix no-pointer-events row items-center' }, t.suffix)),
      u.concat(J(i.default))
    )
  }
  function q() {
    let u, c
    C.value === !0
      ? p.value !== null
        ? ((u = [M('div', { role: 'alert' }, p.value)]), (c = `q--slot-error-${p.value}`))
        : ((u = J(i.error)), (c = 'q--slot-error'))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((u = [M('div', t.hint)]), (c = `q--slot-hint-${t.hint}`))
          : ((u = J(i.hint)), (c = 'q--slot-hint')))
    const y = t.counter === !0 || i.counter !== void 0
    if (t.hideBottomSpace === !0 && y === !1 && u === void 0) return
    const V = M('div', { key: c, class: 'q-field__messages col' }, u)
    return M(
      'div',
      {
        class:
          'q-field__bottom row items-start q-field__bottom--' +
          (t.hideBottomSpace !== !0 ? 'animated' : 'stale'),
        onClick: G,
      },
      [
        t.hideBottomSpace === !0 ? V : M(Ee, { name: 'q-transition--field-message' }, () => V),
        y === !0
          ? M(
              'div',
              { class: 'q-field__counter' },
              i.counter !== void 0 ? i.counter() : e.computedCounter.value,
            )
          : null,
      ],
    )
  }
  function m(u, c) {
    return c === null
      ? null
      : M(
          'div',
          {
            key: u,
            class: 'q-field__append q-field__marginal row no-wrap items-center q-anchor--skip',
          },
          c,
        )
  }
  let b = !1
  return (
    Ae(() => {
      b = !0
    }),
    _e(() => {
      b === !0 && t.autofocus === !0 && d.focus()
    }),
    t.autofocus === !0 &&
      oe(() => {
        d.focus()
      }),
    ae(() => {
      x !== null && clearTimeout(x)
    }),
    Object.assign(d, { focus: w, blur: B }),
    function () {
      const c =
        e.getControl === void 0 && i.control === void 0
          ? {
              ...e.splitAttrs.attributes.value,
              'data-autofocus': t.autofocus === !0 || void 0,
              ...N.value,
            }
          : N.value
      return M(e.tag.value, { ref: e.rootRef, class: [I.value, f.class], style: f.style, ...c }, [
        i.before !== void 0
          ? M(
              'div',
              { class: 'q-field__before q-field__marginal row no-wrap items-center', onClick: G },
              i.before(),
            )
          : null,
        M('div', { class: 'q-field__inner relative-position col self-stretch' }, [
          M('div', { ref: e.controlRef, class: K.value, tabindex: -1, ...e.controlEvents }, h()),
          j.value === !0 ? q() : null,
        ]),
        i.after !== void 0
          ? M(
              'div',
              { class: 'q-field__after q-field__marginal row no-wrap items-center', onClick: G },
              i.after(),
            )
          : null,
      ])
    }
  )
}
const ye = {
    date: '####/##/##',
    datetime: '####/##/## ##:##',
    time: '##:##',
    fulltime: '##:##:##',
    phone: '(###) ### - ####',
    card: '#### #### #### ####',
  },
  le = {
    '#': { pattern: '[\\d]', negate: '[^\\d]' },
    S: { pattern: '[a-zA-Z]', negate: '[^a-zA-Z]' },
    N: { pattern: '[0-9a-zA-Z]', negate: '[^0-9a-zA-Z]' },
    A: { pattern: '[a-zA-Z]', negate: '[^a-zA-Z]', transform: (e) => e.toLocaleUpperCase() },
    a: { pattern: '[a-zA-Z]', negate: '[^a-zA-Z]', transform: (e) => e.toLocaleLowerCase() },
    X: { pattern: '[0-9a-zA-Z]', negate: '[^0-9a-zA-Z]', transform: (e) => e.toLocaleUpperCase() },
    x: { pattern: '[0-9a-zA-Z]', negate: '[^0-9a-zA-Z]', transform: (e) => e.toLocaleLowerCase() },
  },
  we = Object.keys(le)
we.forEach((e) => {
  le[e].regex = new RegExp(le[e].pattern)
})
const nt = new RegExp(
    '\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([' + we.join('') + '])|(.)',
    'g',
  ),
  ke = /[.*+?^${}()|[\]\\]/g,
  _ = '',
  lt = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  }
function ot(e, t, r, i) {
  let f, d, v, x, E, R
  const C = T(null),
    p = T($())
  function H() {
    return (
      e.autogrow === !0 || ['textarea', 'text', 'search', 'url', 'tel', 'password'].includes(e.type)
    )
  }
  D(() => e.type + e.autogrow, z),
    D(
      () => e.mask,
      (o) => {
        if (o !== void 0) I(p.value, !0)
        else {
          const l = w(p.value)
          z(), e.modelValue !== l && t('update:modelValue', l)
        }
      },
    ),
    D(
      () => e.fillMask + e.reverseFillMask,
      () => {
        C.value === !0 && I(p.value, !0)
      },
    ),
    D(
      () => e.unmaskedValue,
      () => {
        C.value === !0 && I(p.value)
      },
    )
  function $() {
    if ((z(), C.value === !0)) {
      const o = N(w(e.modelValue))
      return e.fillMask !== !1 ? B(o) : o
    }
    return e.modelValue
  }
  function j(o) {
    if (o < f.length) return f.slice(-o)
    let l = '',
      s = f
    const a = s.indexOf(_)
    if (a !== -1) {
      for (let h = o - s.length; h > 0; h--) l += _
      s = s.slice(0, a) + l + s.slice(a)
    }
    return s
  }
  function z() {
    if (((C.value = e.mask !== void 0 && e.mask.length !== 0 && H()), C.value === !1)) {
      ;(x = void 0), (f = ''), (d = '')
      return
    }
    const o = ye[e.mask] === void 0 ? e.mask : ye[e.mask],
      l = typeof e.fillMask == 'string' && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : '_',
      s = l.replace(ke, '\\$&'),
      a = [],
      h = [],
      g = []
    let q = e.reverseFillMask === !0,
      m = '',
      b = ''
    o.replace(nt, (V, n, F, U, Z) => {
      if (U !== void 0) {
        const P = le[U]
        g.push(P),
          (b = P.negate),
          q === !0 &&
            (h.push('(?:' + b + '+)?(' + P.pattern + '+)?(?:' + b + '+)?(' + P.pattern + '+)?'),
            (q = !1)),
          h.push('(?:' + b + '+)?(' + P.pattern + ')?')
      } else if (F !== void 0)
        (m = '\\' + (F === '\\' ? '' : F)), g.push(F), a.push('([^' + m + ']+)?' + m + '?')
      else {
        const P = n !== void 0 ? n : Z
        ;(m = P === '\\' ? '\\\\\\\\' : P.replace(ke, '\\\\$&')),
          g.push(P),
          a.push('([^' + m + ']+)?' + m + '?')
      }
    })
    const u = new RegExp(
        '^' +
          a.join('') +
          '(' +
          (m === '' ? '.' : '[^' + m + ']') +
          '+)?' +
          (m === '' ? '' : '[' + m + ']*') +
          '$',
      ),
      c = h.length - 1,
      y = h.map((V, n) =>
        n === 0 && e.reverseFillMask === !0
          ? new RegExp('^' + s + '*' + V)
          : n === c
            ? new RegExp(
                '^' +
                  V +
                  '(' +
                  (b === '' ? '.' : b) +
                  '+)?' +
                  (e.reverseFillMask === !0 ? '$' : s + '*'),
              )
            : new RegExp('^' + V),
      )
    ;(v = g),
      (x = (V) => {
        const n = u.exec(e.reverseFillMask === !0 ? V : V.slice(0, g.length + 1))
        n !== null && (V = n.slice(1).join(''))
        const F = [],
          U = y.length
        for (let Z = 0, P = V; Z < U; Z++) {
          const W = y[Z].exec(P)
          if (W === null) break
          ;(P = P.slice(W.shift().length)), F.push(...W)
        }
        return F.length !== 0 ? F.join('') : V
      }),
      (f = g.map((V) => (typeof V == 'string' ? V : _)).join('')),
      (d = f.split(_).join(l))
  }
  function I(o, l, s) {
    const a = i.value,
      h = a.selectionEnd,
      g = a.value.length - h,
      q = w(o)
    l === !0 && z()
    const m = N(q),
      b = e.fillMask !== !1 ? B(m) : m,
      u = p.value !== b
    a.value !== b && (a.value = b),
      u === !0 && (p.value = b),
      document.activeElement === a &&
        Y(() => {
          if (b === d) {
            const y = e.reverseFillMask === !0 ? d.length : 0
            a.setSelectionRange(y, y, 'forward')
            return
          }
          if (s === 'insertFromPaste' && e.reverseFillMask !== !0) {
            const y = a.selectionEnd
            let V = h - 1
            for (let n = E; n <= V && n < y; n++) f[n] !== _ && V++
            A.right(a, V)
            return
          }
          if (['deleteContentBackward', 'deleteContentForward'].indexOf(s) !== -1) {
            const y =
              e.reverseFillMask === !0
                ? h === 0
                  ? b.length > m.length
                    ? 1
                    : 0
                  : Math.max(0, b.length - (b === d ? 0 : Math.min(m.length, g) + 1)) + 1
                : h
            a.setSelectionRange(y, y, 'forward')
            return
          }
          if (e.reverseFillMask === !0)
            if (u === !0) {
              const y = Math.max(0, b.length - (b === d ? 0 : Math.min(m.length, g + 1)))
              y === 1 && h === 1 ? a.setSelectionRange(y, y, 'forward') : A.rightReverse(a, y)
            } else {
              const y = b.length - g
              a.setSelectionRange(y, y, 'backward')
            }
          else if (u === !0) {
            const y = Math.max(0, f.indexOf(_), Math.min(m.length, h) - 1)
            A.right(a, y)
          } else {
            const y = h - 1
            A.right(a, y)
          }
        })
    const c = e.unmaskedValue === !0 ? w(b) : b
    String(e.modelValue) !== c && (e.modelValue !== null || c !== '') && r(c, !0)
  }
  function K(o, l, s) {
    const a = N(w(o.value))
    ;(l = Math.max(0, f.indexOf(_), Math.min(a.length, l))),
      (E = l),
      o.setSelectionRange(l, s, 'forward')
  }
  const A = {
    left(o, l) {
      const s = f.slice(l - 1).indexOf(_) === -1
      let a = Math.max(0, l - 1)
      for (; a >= 0; a--)
        if (f[a] === _) {
          ;(l = a), s === !0 && l++
          break
        }
      if (a < 0 && f[l] !== void 0 && f[l] !== _) return A.right(o, 0)
      l >= 0 && o.setSelectionRange(l, l, 'backward')
    },
    right(o, l) {
      const s = o.value.length
      let a = Math.min(s, l + 1)
      for (; a <= s; a++)
        if (f[a] === _) {
          l = a
          break
        } else f[a - 1] === _ && (l = a)
      if (a > s && f[l - 1] !== void 0 && f[l - 1] !== _) return A.left(o, s)
      o.setSelectionRange(l, l, 'forward')
    },
    leftReverse(o, l) {
      const s = j(o.value.length)
      let a = Math.max(0, l - 1)
      for (; a >= 0; a--)
        if (s[a - 1] === _) {
          l = a
          break
        } else if (s[a] === _ && ((l = a), a === 0)) break
      if (a < 0 && s[l] !== void 0 && s[l] !== _) return A.rightReverse(o, 0)
      l >= 0 && o.setSelectionRange(l, l, 'backward')
    },
    rightReverse(o, l) {
      const s = o.value.length,
        a = j(s),
        h = a.slice(0, l + 1).indexOf(_) === -1
      let g = Math.min(s, l + 1)
      for (; g <= s; g++)
        if (a[g - 1] === _) {
          ;(l = g), l > 0 && h === !0 && l--
          break
        }
      if (g > s && a[l - 1] !== void 0 && a[l - 1] !== _) return A.leftReverse(o, s)
      o.setSelectionRange(l, l, 'forward')
    },
  }
  function Q(o) {
    t('click', o), (R = void 0)
  }
  function L(o) {
    if ((t('keydown', o), Be(o) === !0 || o.altKey === !0)) return
    const l = i.value,
      s = l.selectionStart,
      a = l.selectionEnd
    if ((o.shiftKey || (R = void 0), o.keyCode === 37 || o.keyCode === 39)) {
      o.shiftKey && R === void 0 && (R = l.selectionDirection === 'forward' ? s : a)
      const h =
        A[(o.keyCode === 39 ? 'right' : 'left') + (e.reverseFillMask === !0 ? 'Reverse' : '')]
      if ((o.preventDefault(), h(l, R === s ? a : s), o.shiftKey)) {
        const g = l.selectionStart
        l.setSelectionRange(Math.min(R, g), Math.max(R, g), 'forward')
      }
    } else
      o.keyCode === 8 && e.reverseFillMask !== !0 && s === a
        ? (A.left(l, s), l.setSelectionRange(l.selectionStart, a, 'backward'))
        : o.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          s === a &&
          (A.rightReverse(l, a), l.setSelectionRange(s, l.selectionEnd, 'forward'))
  }
  function N(o) {
    if (o == null || o === '') return ''
    if (e.reverseFillMask === !0) return S(o)
    const l = v
    let s = 0,
      a = ''
    for (let h = 0; h < l.length; h++) {
      const g = o[s],
        q = l[h]
      if (typeof q == 'string') (a += q), g === q && s++
      else if (g !== void 0 && q.regex.test(g))
        (a += q.transform !== void 0 ? q.transform(g) : g), s++
      else return a
    }
    return a
  }
  function S(o) {
    const l = v,
      s = f.indexOf(_)
    let a = o.length - 1,
      h = ''
    for (let g = l.length - 1; g >= 0 && a !== -1; g--) {
      const q = l[g]
      let m = o[a]
      if (typeof q == 'string') (h = q + h), m === q && a--
      else if (m !== void 0 && q.regex.test(m))
        do (h = (q.transform !== void 0 ? q.transform(m) : m) + h), a--, (m = o[a])
        while (s === g && m !== void 0 && q.regex.test(m))
      else return h
    }
    return h
  }
  function w(o) {
    return typeof o != 'string' || x === void 0 ? (typeof o == 'number' ? x('' + o) : o) : x(o)
  }
  function B(o) {
    return d.length - o.length <= 0
      ? o
      : e.reverseFillMask === !0 && o.length !== 0
        ? d.slice(0, -o.length) + o
        : o + d.slice(o.length)
  }
  return {
    innerValue: p,
    hasMask: C,
    moveCursorForPaste: K,
    updateMaskValue: I,
    onMaskedKeydown: L,
    onMaskedClick: Q,
  }
}
function at(e, t) {
  function r() {
    const i = e.modelValue
    try {
      const f =
        'DataTransfer' in window
          ? new DataTransfer()
          : 'ClipboardEvent' in window
            ? new ClipboardEvent('').clipboardData
            : void 0
      return (
        Object(i) === i &&
          ('length' in i ? Array.from(i) : [i]).forEach((d) => {
            f.items.add(d)
          }),
        { files: f.files }
      )
    } catch {
      return { files: void 0 }
    }
  }
  return k(() => {
    if (e.type === 'file') return r()
  })
}
const rt = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  ut =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  it = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  st = /[a-z0-9_ -]$/i
function dt(e) {
  return function (r) {
    if (r.type === 'compositionend' || r.type === 'change') {
      if (r.target.qComposing !== !0) return
      ;(r.target.qComposing = !1), e(r)
    } else
      r.type === 'compositionupdate' &&
        r.target.qComposing !== !0 &&
        typeof r.data == 'string' &&
        ($e.is.firefox === !0
          ? st.test(r.data) === !1
          : rt.test(r.data) === !0 || ut.test(r.data) === !0 || it.test(r.data) === !0) === !0 &&
        (r.target.qComposing = !0)
  }
}
const gt = Oe({
  name: 'QInput',
  inheritAttrs: !1,
  props: {
    ...Ge,
    ...lt,
    ...De,
    modelValue: [String, Number, FileList],
    shadowText: String,
    type: { type: String, default: 'text' },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
  },
  emits: [...Je, 'paste', 'change', 'keydown', 'click', 'animationend'],
  setup(e, { emit: t, attrs: r }) {
    const { proxy: i } = X(),
      { $q: f } = i,
      d = {}
    let v = NaN,
      x,
      E,
      R = null,
      C
    const p = T(null),
      H = je(e),
      {
        innerValue: $,
        hasMask: j,
        moveCursorForPaste: z,
        updateMaskValue: I,
        onMaskedKeydown: K,
        onMaskedClick: A,
      } = ot(e, t, m, p),
      Q = at(e),
      L = k(() => de($.value)),
      N = dt(g),
      S = et({ changeEvent: !0 }),
      w = k(() => e.type === 'textarea' || e.autogrow === !0),
      B = k(() => w.value === !0 || ['text', 'search', 'url', 'tel', 'password'].includes(e.type)),
      o = k(() => {
        const n = {
          ...S.splitAttrs.listeners.value,
          onInput: g,
          onPaste: h,
          onChange: u,
          onBlur: c,
          onFocus: fe,
        }
        return (
          (n.onCompositionstart = n.onCompositionupdate = n.onCompositionend = N),
          j.value === !0 && ((n.onKeydown = K), (n.onClick = A)),
          e.autogrow === !0 && (n.onAnimationend = q),
          n
        )
      }),
      l = k(() => {
        const n = {
          tabindex: 0,
          'data-autofocus': e.autofocus === !0 || void 0,
          rows: e.type === 'textarea' ? 6 : void 0,
          'aria-label': e.label,
          name: H.value,
          ...S.splitAttrs.attributes.value,
          id: S.targetUid.value,
          maxlength: e.maxlength,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
        }
        return w.value === !1 && (n.type = e.type), e.autogrow === !0 && (n.rows = 1), n
      })
    D(
      () => e.type,
      () => {
        p.value && (p.value.value = e.modelValue)
      },
    ),
      D(
        () => e.modelValue,
        (n) => {
          if (j.value === !0) {
            if (E === !0 && ((E = !1), String(n) === v)) return
            I(n)
          } else
            $.value !== n &&
              (($.value = n),
              e.type === 'number' &&
                d.hasOwnProperty('value') === !0 &&
                (x === !0 ? (x = !1) : delete d.value))
          e.autogrow === !0 && Y(b)
        },
      ),
      D(
        () => e.autogrow,
        (n) => {
          n === !0 ? Y(b) : p.value !== null && r.rows > 0 && (p.value.style.height = 'auto')
        },
      ),
      D(
        () => e.dense,
        () => {
          e.autogrow === !0 && Y(b)
        },
      )
    function s() {
      Ce(() => {
        const n = document.activeElement
        p.value !== null &&
          p.value !== n &&
          (n === null || n.id !== S.targetUid.value) &&
          p.value.focus({ preventScroll: !0 })
      })
    }
    function a() {
      p.value !== null && p.value.select()
    }
    function h(n) {
      if (j.value === !0 && e.reverseFillMask !== !0) {
        const F = n.target
        z(F, F.selectionStart, F.selectionEnd)
      }
      t('paste', n)
    }
    function g(n) {
      if (!n || !n.target) return
      if (e.type === 'file') {
        t('update:modelValue', n.target.files)
        return
      }
      const F = n.target.value
      if (n.target.qComposing === !0) {
        d.value = F
        return
      }
      if (j.value === !0) I(F, !1, n.inputType)
      else if ((m(F), B.value === !0 && n.target === document.activeElement)) {
        const { selectionStart: U, selectionEnd: Z } = n.target
        U !== void 0 &&
          Z !== void 0 &&
          Y(() => {
            n.target === document.activeElement &&
              F.indexOf(n.target.value) === 0 &&
              n.target.setSelectionRange(U, Z)
          })
      }
      e.autogrow === !0 && b()
    }
    function q(n) {
      t('animationend', n), b()
    }
    function m(n, F) {
      ;(C = () => {
        ;(R = null),
          e.type !== 'number' && d.hasOwnProperty('value') === !0 && delete d.value,
          e.modelValue !== n &&
            v !== n &&
            ((v = n),
            F === !0 && (E = !0),
            t('update:modelValue', n),
            Y(() => {
              v === n && (v = NaN)
            })),
          (C = void 0)
      }),
        e.type === 'number' && ((x = !0), (d.value = n)),
        e.debounce !== void 0
          ? (R !== null && clearTimeout(R), (d.value = n), (R = setTimeout(C, e.debounce)))
          : C()
    }
    function b() {
      requestAnimationFrame(() => {
        const n = p.value
        if (n !== null) {
          const F = n.parentNode.style,
            { scrollTop: U } = n,
            { overflowY: Z, maxHeight: P } =
              f.platform.is.firefox === !0 ? {} : window.getComputedStyle(n),
            W = Z !== void 0 && Z !== 'scroll'
          W === !0 && (n.style.overflowY = 'hidden'),
            (F.marginBottom = n.scrollHeight - 1 + 'px'),
            (n.style.height = '1px'),
            (n.style.height = n.scrollHeight + 'px'),
            W === !0 && (n.style.overflowY = parseInt(P, 10) < n.scrollHeight ? 'auto' : 'hidden'),
            (F.marginBottom = ''),
            (n.scrollTop = U)
        }
      })
    }
    function u(n) {
      N(n),
        R !== null && (clearTimeout(R), (R = null)),
        C !== void 0 && C(),
        t('change', n.target.value)
    }
    function c(n) {
      n !== void 0 && fe(n),
        R !== null && (clearTimeout(R), (R = null)),
        C !== void 0 && C(),
        (x = !1),
        (E = !1),
        delete d.value,
        e.type !== 'file' &&
          setTimeout(() => {
            p.value !== null && (p.value.value = $.value !== void 0 ? $.value : '')
          })
    }
    function y() {
      return d.hasOwnProperty('value') === !0 ? d.value : $.value !== void 0 ? $.value : ''
    }
    ae(() => {
      c()
    }),
      oe(() => {
        e.autogrow === !0 && b()
      }),
      Object.assign(S, {
        innerValue: $,
        fieldClass: k(
          () =>
            `q-${w.value === !0 ? 'textarea' : 'input'}` +
            (e.autogrow === !0 ? ' q-textarea--autogrow' : ''),
        ),
        hasShadow: k(
          () => e.type !== 'file' && typeof e.shadowText == 'string' && e.shadowText.length !== 0,
        ),
        inputRef: p,
        emitValue: m,
        hasValue: L,
        floatingLabel: k(
          () =>
            (L.value === !0 && (e.type !== 'number' || isNaN($.value) === !1)) ||
            de(e.displayValue),
        ),
        getControl: () =>
          M(w.value === !0 ? 'textarea' : 'input', {
            ref: p,
            class: ['q-field__native q-placeholder', e.inputClass],
            style: e.inputStyle,
            ...l.value,
            ...o.value,
            ...(e.type !== 'file' ? { value: y() } : Q.value),
          }),
        getShadowControl: () =>
          M(
            'div',
            {
              class:
                'q-field__native q-field__shadow absolute-bottom no-pointer-events' +
                (w.value === !0 ? '' : ' text-no-wrap'),
            },
            [M('span', { class: 'invisible' }, y()), M('span', e.shadowText)],
          ),
      })
    const V = tt(S)
    return (
      Object.assign(i, { focus: s, select: a, getNativeElement: () => p.value }),
      xe(i, 'nativeEl', () => p.value),
      V
    )
  },
})
export { gt as Q }
