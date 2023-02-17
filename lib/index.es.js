import { jsx as s, Fragment as m, jsxs as M } from "@emotion/react/jsx-runtime";
import { css as P, ThemeProvider as Y, keyframes as B, createElement as H } from "@emotion/react";
import p from "@emotion/styled";
import { forwardRef as b, useState as h, useEffect as R, useCallback as N, useLayoutEffect as j, useRef as y, cloneElement as k } from "react";
import { createRoot as A } from "react-dom/client";
import { createPortal as D } from "react-dom";
function u(e) {
  return P(e);
}
const x = (e, t) => {
  Object.entries(e).forEach(([n, o]) => {
    o && (t.style[n] = o);
  });
};
function v(e, t, n) {
  return t[e] || n;
}
const O = (e, ...t) => {
  const n = window.getComputedStyle(e);
  return t.map((o) => n.getPropertyValue(o));
}, V = () => {
  const e = O(document.body, "margin", "padding");
  return {
    margin: E(e[0]),
    padding: E(e[1])
  };
};
function E(e) {
  const [t = "0px", n = t, o = t, r = n] = e.split(" ");
  return {
    top: t,
    right: n,
    bottom: o,
    left: r
  };
}
const _ = (e) => ({
  borderRadius: v(
    e,
    { default: "4px", circle: "50%", round: "8px" },
    "4px"
  )
}), F = (e) => ({
  height: v(
    e,
    { large: "40px", middle: "32px", small: "24px" },
    "32px"
  ),
  padding: v(
    e,
    { large: "6px 15px", middle: "4px 15px", small: "0px 7px" },
    "4px 15px"
  )
}), U = (e) => {
  const t = e;
  return P({
    ...F(t.size),
    ..._(t.shape)
  });
}, X = p.button`
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

  ${(e) => U(e.theme)}
`;
function q(e) {
  return /* @__PURE__ */ s(Y, { theme: e.theme, children: e.children });
}
const be = b(function(t, n) {
  const {
    sx: o,
    shape: r = "default",
    size: i = "middle",
    type: c = "default",
    ...l
  } = t;
  return /* @__PURE__ */ s(q, { theme: {
    shape: r,
    size: i,
    type: c
  }, children: /* @__PURE__ */ s(X, { css: u(o), ...l, ref: n, children: t.children }) });
}), G = p.input`
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
`, ye = b(function(t, n) {
  const { defaultValue: o, onChange: r, sx: i, ...c } = t;
  return /* @__PURE__ */ s(
    G,
    {
      css: u(i),
      defaultValue: o,
      onChange: r,
      ...c,
      ref: n
    }
  );
});
let J = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const K = B`
     from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`, Q = B`
    0% {
            opacity: 1;
            transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`, Z = (e = 3, t = 0.1) => {
  if (e < t)
    throw new Error(
      "You can't let the animation transition time exceed the total duration!"
    );
  return P`
    animation: ${K} ${t} linear,
      ${Q} ${t} linear
        ${e - t} forwards;
  `;
}, ee = p.p`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  padding: 12px 24px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  ${Z(3, 0.1)}
`, te = (e) => {
  const { text: t } = e;
  return /* @__PURE__ */ s(ee, { children: /* @__PURE__ */ s("span", { children: t }) });
};
let z;
const S = "container_message";
function ne() {
  let e = document.querySelector(S);
  return e || (e = document.createElement("div"), e.id = S, x(
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
const oe = () => {
  const [e, t] = h([]), n = 3e3, o = (r) => t((i) => i.filter((c) => r.key !== c.key));
  return z = (r) => {
    t((i) => [...i, r]), setTimeout(() => {
      o(r);
    }, n);
  }, /* @__PURE__ */ s(m, { children: e.map((r) => /* @__PURE__ */ H(te, { ...r, key: r.key })) });
}, we = (() => (A(ne()).render(/* @__PURE__ */ s(oe, {})), {
  info: ((t) => (n) => z({ text: n, type: t, key: J(3) }))("info")
}))(), T = b(function(t, n) {
  const { children: o, sx: r, ...i } = t;
  return D(
    /* @__PURE__ */ s(re, { ...i, css: u(r), ref: n, children: o }),
    document.body
  );
}), re = p.div(), ie = p.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;
let f = null;
function se() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}
function ce() {
  if (se() || (f = 0), typeof f == "number")
    return f;
  const e = document.createElement("div");
  x(
    {
      width: "100%",
      height: "200px"
    },
    e
  );
  const t = document.createElement("div");
  x(
    {
      position: "absolute",
      top: "0",
      left: "0",
      pointerEvents: "none",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden"
    },
    t
  ), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  x(
    {
      overflow: "scroll"
    },
    t
  );
  let o = e.offsetWidth;
  return n === o && (o = t.clientWidth), document.body.removeChild(t), f = n - o, f;
}
const g = (e) => {
  const [t, n] = h(null), o = N(() => {
    n(e.current.getBoundingClientRect());
  }, []);
  return j(() => {
    e.current && o();
  }, []), t;
}, I = ({
  triggerRect: e,
  contentRect: t
}) => {
  const [n, o] = h({ transform: "" });
  return R(() => {
    if (!t || !e)
      return;
    const {
      left: r,
      width: i,
      top: c,
      height: l
    } = t, {
      width: d
      // height: TriggerHeightPxNum
    } = e, { margin: a, padding: w } = V(), C = r - (parseInt(a.left) + parseInt(w.left)) + (i >> 1) - (d >> 1), $ = c + l, W = C, L = $;
    o(() => ({
      transform: `translate(${W}px,${L}px)`
    }));
  }, [t, e]), n;
}, le = (e) => {
  R(() => {
    const t = ce(), n = document.body.style;
    return e && (n.overflow = "hidden", n.paddingRight = `${t}px`), () => {
      n.overflow = "", n.paddingRight = "";
    };
  }, [e]);
}, Ce = b(function(t, n) {
  const { visible: o = !0, children: r, closeModal: i, sx: c, ...l } = t, d = (a) => {
    a.stopPropagation(), a.target === a.currentTarget && i();
  };
  return le(o), /* @__PURE__ */ s(m, { children: o && /* @__PURE__ */ s(T, { children: /* @__PURE__ */ s(
    ie,
    {
      onClick: d,
      ...l,
      css: u(c),
      ref: n,
      children: r
    }
  ) }) });
});
function ve(e) {
  const { defaultOpen: t, children: n, content: o, sx: r, ...i } = e, [c, l] = h(t), d = y(null);
  return /* @__PURE__ */ M(m, { children: [
    k(n, {
      onClick: () => l((a) => !a),
      ref: d
    }),
    c && /* @__PURE__ */ s(
      T,
      {
        sx: {
          position: "fixed",
          left: "0",
          top: "0"
        },
        children: /* @__PURE__ */ s(
          de,
          {
            anchorRef: d,
            onClose: () => {
              l((a) => !a);
            },
            css: u(r),
            ...i,
            children: o
          }
        )
      }
    )
  ] });
}
const de = (e) => {
  const { children: t, anchorRef: n, onClose: o } = e, r = y(null), i = g(n), c = g(r);
  R(() => {
    const d = [n.current, r.current], a = (w) => {
      const C = w.target;
      !d.includes(C) && o();
    };
    return window.addEventListener("click", a), () => window.removeEventListener("click", a);
  }, []);
  const l = I({
    triggerRect: c,
    contentRect: i
  });
  return /* @__PURE__ */ s(
    "div",
    {
      style: {
        visibility: l.transform ? "visible" : "hidden",
        ...l,
        display: "inline-block",
        position: "absolute"
      },
      children: k(t, {
        ref: r
      })
    }
  );
};
function Pe(e) {
  const { children: t, title: n, sx: o, ...r } = e, [i, c] = h(!1), l = y(null);
  return /* @__PURE__ */ M(m, { children: [
    k(t, {
      onMouseEnter: c.bind(null, !0),
      onMouseLeave: c.bind(null, !1),
      ref: l,
      ...r
    }),
    i && /* @__PURE__ */ s(
      T,
      {
        sx: {
          position: "fixed",
          left: "0",
          top: "0"
        },
        children: /* @__PURE__ */ s(ae, { childrenRef: l, title: n, sx: o })
      }
    )
  ] });
}
const ae = (e) => {
  const { childrenRef: t, title: n, sx: o, ...r } = e, i = y(null), c = g(i), l = g(t), d = I({
    triggerRect: c,
    contentRect: l
  });
  return /* @__PURE__ */ s(m, { children: /* @__PURE__ */ s(
    pe,
    {
      ref: i,
      style: {
        ...d,
        visibility: d.transform ? "visible" : "hidden"
      },
      ...r,
      css: u(o),
      children: n
    }
  ) });
}, pe = p("p")`
  display: inline-block;
  padding: 5px 8px;

  position: absolute;
  z-index: 1000;
  word-wrap: break-word;
  border-radius: 8px;
`;
export {
  be as Button,
  ye as Input,
  Ce as Modal,
  ve as Popover,
  T as Portal,
  Pe as ToolTip,
  we as message
};
//# sourceMappingURL=index.es.js.map
