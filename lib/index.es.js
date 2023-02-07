import { jsx as r, Fragment as p } from "@emotion/react/jsx-runtime";
import { css as u, ThemeProvider as x, keyframes as f } from "@emotion/react";
import l from "@emotion/styled";
import { useState as y, useEffect as g } from "react";
import { createRoot as w } from "react-dom/client";
import { createPortal as S } from "react-dom";
function b(e) {
  return u(e);
}
const C = (e, t) => {
  Object.entries(e).forEach(([o, n]) => {
    n && (t.style[o] = n);
  });
};
function v(e, t, o) {
  return t[e] || o;
}
const P = (e) => v(
  e,
  { default: "4px", circle: "50%", round: "8px" },
  "0px"
), M = l.button`
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: ${(e) => P(e.theme.shape)};
`;
function $(e) {
  return /* @__PURE__ */ r(x, { theme: e.theme, children: e.children });
}
function q(e) {
  const {
    sx: t,
    shape: o = "default",
    size: n = "middle",
    type: i = "default",
    ...a
  } = e;
  return /* @__PURE__ */ r($, { theme: {
    shape: o,
    size: n,
    type: i
  }, children: /* @__PURE__ */ r(M, { css: b(e.sx), ...a, children: e.children }) });
}
let m = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, o) => (o &= 63, o < 36 ? t += o.toString(36) : o < 62 ? t += (o - 26).toString(36).toUpperCase() : o > 62 ? t += "-" : t += "_", t), "");
const B = f`
     from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`, E = f`
    0% {
            opacity: 1;
            transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`, T = (e = 3, t = 0.1) => {
  if (e < t)
    throw new Error(
      "You can't let the animation transition time exceed the total duration!"
    );
  return u`
    animation: ${B} ${t} linear,
      ${E} ${t} linear
        ${e - t} forwards;
  `;
}, k = l.p`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  padding: 12px 24px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  /* ${T(3, 0.1)} */
`, z = (e) => {
  const { text: t, type: o } = e;
  return /* @__PURE__ */ r(k, { children: /* @__PURE__ */ r("span", { children: t }) });
};
let h;
const d = `container_${m(4)}`;
function Y() {
  let e = document.querySelector(d);
  return e || (e = document.createElement("div"), e.id = d, C(
    {
      position: "fixed",
      top: "10px",
      left: "50%",
      transform: "translate(-50%, 0)",
      zIndex: "9999"
    },
    e
  ), document.body.appendChild(e)), e;
}
const j = () => {
  const [e, t] = y([]), o = 3e3;
  return h = (n) => {
    t((i) => [...i, n]), setTimeout(() => {
    }, o);
  }, /* @__PURE__ */ r(p, { children: e.map((n) => /* @__PURE__ */ r(z, { ...n })) });
}, F = (() => (w(Y()).render(/* @__PURE__ */ r(j, {})), {
  info: ((t) => (o) => h({ text: o, type: t, key: m(3) }))("info")
}))();
function I(e) {
  const { children: t, ...o } = e;
  return S(/* @__PURE__ */ r("div", { ...o, children: t }), document.body);
}
const R = l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;
let c = null;
function W() {
  if (typeof c == "number")
    return c;
  const e = document.createElement("div");
  e.style.width = "100%", e.style.height = "200px";
  const t = document.createElement("div"), o = t.style;
  o.position = "absolute", o.top = "0", o.left = "0", o.pointerEvents = "none", o.visibility = "hidden", o.width = "200px", o.height = "150px", o.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let i = e.offsetWidth;
  return n === i && (i = t.clientWidth), document.body.removeChild(t), c = n - i, c;
}
const O = (e) => {
  g(() => {
    const t = W(), o = document.body.style;
    return e && (o.overflow = "hidden", o.paddingRight = `${t}px`), () => {
      o.overflow = "", o.paddingRight = "";
    };
  }, [e]);
};
function V(e) {
  const { visible: t = !0, children: o, closeModal: n, ...i } = e, a = (s) => {
    s.stopPropagation(), s.target === s.currentTarget && n();
  };
  return O(t), /* @__PURE__ */ r(p, { children: t && /* @__PURE__ */ r(I, { children: /* @__PURE__ */ r(R, { onClick: a, ...i, children: o }) }) });
}
export {
  q as Button,
  V as Modal,
  F as message
};
//# sourceMappingURL=index.es.js.map
