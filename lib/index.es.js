import { jsx as i, Fragment as p, jsxs as P } from "@emotion/react/jsx-runtime";
import { css as u, ThemeProvider as M, keyframes as R } from "@emotion/react";
import f from "@emotion/styled";
import { useState as m, useEffect as w, useCallback as B, useLayoutEffect as I, useRef as b, cloneElement as T } from "react";
import { createRoot as L } from "react-dom/client";
import { createPortal as j } from "react-dom";
function k(e) {
  return u(e);
}
const W = (e, t) => {
  Object.entries(e).forEach(([o, r]) => {
    r && (t.style[o] = r);
  });
};
function y(e, t, o) {
  return t[e] || o;
}
const Y = (e) => u`
    border-radius: ${y(
  e,
  { default: "4px", circle: "50%", round: "8px" },
  "0px"
)};
  `, N = (e) => u`
    height: ${y(
  e,
  { large: "40px", middle: "32px", small: "24px" },
  "32px"
)};
    padding: ${y(
  e,
  { large: "6px 15px", middle: "4px 15px", small: "0px 7px" },
  "4px 15px"
)};
  `, O = (e) => {
  const t = e;
  return u`
    ${N(t.size)}
    ${Y(t.shape)}
  `;
}, A = f.button`
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-color: #d9d9d9;
  border-style: solid;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.88);
  outline: none;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  :hover,
  :active {
    color: #0958d9;
    border-color: #0958d9;
  }
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  white-space: nowrap;
  cursor: pointer;

  ${(e) => O(e.theme)}
`;
function D(e) {
  return /* @__PURE__ */ i(M, { theme: e.theme, children: e.children });
}
function ae(e) {
  const {
    sx: t,
    shape: o = "default",
    size: r = "middle",
    type: n = "default",
    ...l
  } = e;
  return /* @__PURE__ */ i(D, { theme: {
    shape: o,
    size: r,
    type: n
  }, children: /* @__PURE__ */ i(A, { css: k(e.sx), ...l, children: e.children }) });
}
const F = f.input`
  padding: 4px 11px;
  box-sizing: border-box;
  margin: 0px;
  position: relative;
  font-size: 14px;
  text-overflow: ellipsis;
  cursor: text;
  color: rgba(0, 0, 0, 0.88);
  background-color: #fff;
  background-image: none;
  border: 0.8px solid rgb(217, 217, 217);
  border-radius: 6px;
`;
function de(e) {
  const { defaultValue: t, onChange: o, sx: r, ...n } = e;
  return /* @__PURE__ */ i(
    F,
    {
      css: k(r),
      value: t,
      onChange: o,
      ...n
    }
  );
}
let H = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, o) => (o &= 63, o < 36 ? t += o.toString(36) : o < 62 ? t += (o - 26).toString(36).toUpperCase() : o > 62 ? t += "-" : t += "_", t), "");
const _ = R`
     from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`, U = R`
    0% {
            opacity: 1;
            transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`, V = (e = 3, t = 0.1) => {
  if (e < t)
    throw new Error(
      "You can't let the animation transition time exceed the total duration!"
    );
  return u`
    animation: ${_} ${t} linear,
      ${U} ${t} linear
        ${e - t} forwards;
  `;
}, q = f.p`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  padding: 12px 24px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  ${V(3, 0.1)}
`, X = (e) => {
  const { text: t, type: o } = e;
  return /* @__PURE__ */ i(q, { children: /* @__PURE__ */ i("span", { children: t }) });
};
let S;
const v = "container_message";
function G() {
  let e = document.querySelector(v);
  return e || (e = document.createElement("div"), e.id = v, W(
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
const J = () => {
  const [e, t] = m([]), o = 3e3, r = (n) => t((l) => l.filter((s) => n.key !== s.key));
  return S = (n) => {
    t((l) => [...l, n]), setTimeout(() => {
      r(n);
    }, o);
  }, /* @__PURE__ */ i(p, { children: e.map((n) => /* @__PURE__ */ i(X, { ...n })) });
}, pe = (() => (L(G()).render(/* @__PURE__ */ i(J, {})), {
  info: ((t) => (o) => S({ text: o, type: t, key: H(3) }))("info")
}))();
function C(e) {
  const { children: t, ...o } = e;
  return j(/* @__PURE__ */ i("div", { ...o, children: t }), document.body);
}
const K = f.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;
let x = null;
function Q() {
  if (typeof x == "number")
    return x;
  const e = document.createElement("div");
  e.style.width = "100%", e.style.height = "200px";
  const t = document.createElement("div"), o = t.style;
  o.position = "absolute", o.top = "0", o.left = "0", o.pointerEvents = "none", o.visibility = "hidden", o.width = "200px", o.height = "150px", o.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
  const r = e.offsetWidth;
  t.style.overflow = "scroll";
  let n = e.offsetWidth;
  return r === n && (n = t.clientWidth), document.body.removeChild(t), x = r - n, x;
}
const g = (e) => {
  const [t, o] = m(null), r = B(() => {
    o(e.current.getBoundingClientRect());
  }, []);
  return I(() => {
    e.current && r();
  }, []), t;
}, $ = ({
  triggerRect: e,
  contentRect: t
}) => {
  const [o, r] = m({ transform: "" });
  return w(() => {
    if (!t || !e)
      return;
    const {
      left: n,
      width: l,
      top: s,
      height: c
    } = t, a = n, d = s;
    console.log({ transFormX: a, transFormY: d }), r((h) => ({
      transform: `translate(${a}px,${d}px)`
    }));
  }, [t, e]), o;
}, Z = (e) => {
  w(() => {
    const t = Q(), o = document.body.style;
    return e && (o.overflow = "hidden", o.paddingRight = `${t}px`), () => {
      o.overflow = "", o.paddingRight = "";
    };
  }, [e]);
};
function ue(e) {
  const { visible: t = !0, children: o, closeModal: r, ...n } = e, l = (s) => {
    s.stopPropagation(), s.target === s.currentTarget && r();
  };
  return Z(t), /* @__PURE__ */ i(p, { children: t && /* @__PURE__ */ i(C, { children: /* @__PURE__ */ i(K, { onClick: l, ...n, children: o }) }) });
}
function fe(e) {
  const { defaultOpen: t, children: o, content: r, ...n } = e, [l, s] = m(t), c = b(null);
  return /* @__PURE__ */ P(p, { children: [
    T(o, {
      onClick: () => s((a) => !a),
      ref: c
    }),
    l && /* @__PURE__ */ i(C, { children: /* @__PURE__ */ i(
      ee,
      {
        anchorRef: c,
        onClose: () => {
          s((a) => !a);
        },
        children: r
      }
    ) })
  ] });
}
const ee = (e) => {
  const { children: t, anchorRef: o, onClose: r } = e, n = b(null), l = g(o), s = g(n);
  w(() => {
    const a = [o.current, n.current], d = (h) => {
      const E = h == null ? void 0 : h.target;
      !a.some((z) => z === E) && r();
    };
    return window.addEventListener("click", d), () => window.removeEventListener("click", d);
  }, []);
  const c = $({
    triggerRect: s,
    contentRect: l
  });
  return /* @__PURE__ */ i(
    "div",
    {
      ref: n,
      style: {
        visibility: c.transform ? "visible" : "hidden",
        ...c,
        display: "inline-block"
      },
      children: t
    }
  );
};
function me(e) {
  const { children: t, title: o, ...r } = e, [n, l] = m(!1), s = b(null);
  return /* @__PURE__ */ P(p, { children: [
    T(t, {
      onMouseEnter: l.bind(null, !0),
      onMouseLeave: l.bind(null, !1),
      ref: s,
      ...r
    }),
    n && /* @__PURE__ */ i(C, { children: /* @__PURE__ */ i(te, { childrenRef: s, title: o }) })
  ] });
}
const te = (e) => {
  const { childrenRef: t, title: o, ...r } = e, n = b(null), l = g(n), s = g(t), c = $({
    triggerRect: l,
    contentRect: s
  });
  return /* @__PURE__ */ i(p, { children: /* @__PURE__ */ i(
    oe,
    {
      ref: n,
      style: {
        ...c,
        visibility: c.transform ? "visible" : "hidden"
      },
      ...r,
      children: o
    }
  ) });
}, oe = f("p")`
  display: inline-block;
  padding: 5px 8px;

  position: absolute;
  z-index: 1000;
  word-wrap: break-word;
  border-radius: 8px;
`;
export {
  ae as Button,
  de as Input,
  ue as Modal,
  fe as Popover,
  C as Portal,
  me as ToolTip,
  pe as message
};
//# sourceMappingURL=index.es.js.map
