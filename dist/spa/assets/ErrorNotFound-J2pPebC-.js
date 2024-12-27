import { Q as o } from './QBtn-YVQo18uK.js'
import { c as r } from './stylesheet-tJbRLR7r.js'
import { _ as s } from './_plugin-vue_export-helper-DlAUqK2U.js'
import { z as l, A as n, B as e, f as a, M as c } from './index-croNHMG4.js'
const d = { class: 'not-found fullscreen text-white text-center q-pa-md flex flex-center' },
  f = {
    __name: 'ErrorNotFound',
    setup(i) {
      return (p, t) => (
        l(),
        n('div', d, [
          e('div', null, [
            t[0] || (t[0] = e('div', { style: { 'font-size': '30vh' } }, '404', -1)),
            t[1] ||
              (t[1] = e(
                'div',
                { class: 'text-h2', style: { opacity: '0.4' } },
                'Oops. Nothing here...',
                -1,
              )),
            a(
              o,
              {
                class: 'q-mt-xl',
                color: 'white',
                'text-color': c(r).wine,
                unelevated: '',
                to: '/',
                label: 'Go Home',
                'no-caps': '',
              },
              null,
              8,
              ['text-color'],
            ),
          ]),
        ])
      )
    },
  },
  v = s(f, [['__scopeId', 'data-v-4ff3450d']])
export { v as default }
