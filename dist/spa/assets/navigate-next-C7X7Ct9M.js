import { r, c as a, h as c, z as f, A as d, B as u } from './index-croNHMG4.js'
function p(n, o) {
  const e = r(null),
    i = a(() =>
      n.disable === !0 ? null : c('span', { ref: e, class: 'no-outline', tabindex: -1 }),
    )
  function s(l) {
    const t = o.value
    l !== void 0 && l.type.indexOf('key') === 0
      ? t !== null &&
        document.activeElement !== t &&
        t.contains(document.activeElement) === !0 &&
        t.focus()
      : e.value !== null &&
        (l === void 0 || (t !== null && t.contains(l.target) === !0)) &&
        e.value.focus()
  }
  return { refocusTargetEl: i, refocusTarget: s }
}
const g = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 },
  h = ['width', 'height'],
  v = {
    __name: 'navigate-next',
    props: {
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
      color: { type: String, default: 'white' },
    },
    setup(n) {
      return (o, e) => (
        f(),
        d(
          'svg',
          { width: n.width, height: n.height, fill: 'none' },
          e[0] ||
            (e[0] = [
              u(
                'path',
                {
                  d: 'M0.400391 0H32.0004C33.105 0 34.0004 0.895431 34.0004 2V34C34.0004 35.1046 33.105 36 32.0004 36H0.400391V0Z',
                  fill: '#AC0A0D',
                },
                null,
                -1,
              ),
              u(
                'path',
                {
                  'fill-rule': 'evenodd',
                  'clip-rule': 'evenodd',
                  d: 'M19.8508 8.86521L16.7758 8.38187C14.0925 7.96021 12.7508 7.74854 11.8758 8.49771C11 9.24604 11 10.6044 11 13.321V15.8077H15.9333L13.6833 12.9952L14.9833 11.9535L18.3167 16.1202L18.7333 16.641L18.3167 17.1619L14.9833 21.3285L13.6833 20.2869L15.9333 17.4744H11V19.9602C11 22.6769 11 24.0352 11.875 24.7835C12.75 25.5319 14.0917 25.321 16.7758 24.9002L19.8508 24.4169C21.195 24.2052 21.8667 24.1002 22.2667 23.6319C22.6667 23.1644 22.6667 22.4844 22.6667 21.1235V12.1577C22.6667 10.7977 22.6667 10.1169 22.2667 9.64937C21.8667 9.18187 21.195 9.07604 19.8508 8.86521Z',
                  fill: 'white',
                },
                null,
                -1,
              ),
            ]),
          8,
          h,
        )
      )
    },
  }
export { v as _, g as o, p as u }
