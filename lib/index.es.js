import { jsx as s, Fragment as u, jsxs as M } from "@emotion/react/jsx-runtime";
import { css as P, ThemeProvider as Y, keyframes as B } from "@emotion/react";
import f from "@emotion/styled";
import { forwardRef as b, useState as m, useEffect as R, useCallback as j, useLayoutEffect as A, useRef as y, cloneElement as T } from "react";
import { createRoot as H } from "react-dom/client";
import { createPortal as O } from "react-dom";
function p(e) {
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
const V = (e, ...t) => {
  const n = window.getComputedStyle(e);
  return t.map((o) => n.getPropertyValue(o));
}, _ = () => {
  const e = V(document.body, "margin", "padding");
  return {
    margin: S(e[0]),
    padding: S(e[1])
  };
};
function S(e) {
  const [t = "0px", n = t, o = t, r = n] = e.split(" ");
  return {
    top: t,
    right: n,
    bottom: o,
    left: r
  };
}
const D = (e) => ({
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
    ...D(t.shape)
  });
}, X = f.button`
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
const ge = b(function(t, n) {
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
  }, children: /* @__PURE__ */ s(X, { css: p(t.sx), ...l, ref: n, children: t.children }) });
}), G = f.input`
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
`, be = b(function(t, n) {
  const { defaultValue: o, onChange: r, sx: i, ...c } = t;
  return /* @__PURE__ */ s(
    G,
    {
      css: p(i),
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
}, ee = f.p`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  padding: 12px 24px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  ${Z(3, 0.1)}
`, te = (e) => {
  const { text: t, type: n } = e;
  return /* @__PURE__ */ s(ee, { children: /* @__PURE__ */ s("span", { children: t }) });
};
let z;
const E = "container_message";
function ne() {
  let e = document.querySelector(E);
  return e || (e = document.createElement("div"), e.id = E, x(
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
  const [e, t] = m([]), n = 3e3, o = (r) => t((i) => i.filter((c) => r.key !== c.key));
  return z = (r) => {
    t((i) => [...i, r]), setTimeout(() => {
      o(r);
    }, n);
  }, /* @__PURE__ */ s(u, { children: e.map((r) => /* @__PURE__ */ s(te, { ...r })) });
}, ye = (() => (H(ne()).render(/* @__PURE__ */ s(oe, {})), {
  info: ((t) => (n) => z({ text: n, type: t, key: J(3) }))("info")
}))(), k = b(function(t, n) {
  const { children: o, sx: r, ...i } = t;
  return O(
    /* @__PURE__ */ s("div", { ...i, css: p(r), ref: n, children: o }),
    document.body
  );
}), re = f.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;
let h = null;
function ie() {
  if (typeof h == "number")
    return h;
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
  return n === o && (o = t.clientWidth), document.body.removeChild(t), h = n - o, h;
}
const g = (e) => {
  const [t, n] = m(null), o = j(() => {
    n(e.current.getBoundingClientRect());
  }, []);
  return A(() => {
    e.current && o();
  }, []), t;
}, I = ({
  triggerRect: e,
  contentRect: t
}) => {
  const [n, o] = m({ transform: "" });
  return R(() => {
    if (!t || !e)
      return;
    const {
      left: r,
      width: i,
      top: c,
      height: l
    } = t, { width: d, height: a } = e, { margin: w, padding: C } = _(), $ = r - (parseInt(w.left) + parseInt(C.left)) + (i >> 1) - (d >> 1), W = c + l, L = $, N = W;
    o((ae) => ({
      transform: `translate(${L}px,${N}px)`
    }));
  }, [t, e]), n;
}, se = (e) => {
  R(() => {
    const t = ie(), n = document.body.style;
    return e && (n.overflow = "hidden", n.paddingRight = `${t}px`), () => {
      n.overflow = "", n.paddingRight = "";
    };
  }, [e]);
}, we = b(function(t, n) {
  const { visible: o = !0, children: r, closeModal: i, sx: c, ...l } = t, d = (a) => {
    a.stopPropagation(), a.target === a.currentTarget && i();
  };
  return se(o), /* @__PURE__ */ s(u, { children: o && /* @__PURE__ */ s(k, { children: /* @__PURE__ */ s(
    re,
    {
      onClick: d,
      ...l,
      css: p(c),
      ref: n,
      children: r
    }
  ) }) });
});
function Ce(e) {
  const { defaultOpen: t, children: n, content: o, sx: r, ...i } = e, [c, l] = m(t), d = y(null);
  return /* @__PURE__ */ M(u, { children: [
    T(n, {
      onClick: () => l((a) => !a),
      ref: d
    }),
    c && /* @__PURE__ */ s(
      k,
      {
        sx: {
          position: "fixed",
          left: "0",
          top: "0"
        },
        children: /* @__PURE__ */ s(
          ce,
          {
            anchorRef: d,
            onClose: () => {
              l((a) => !a);
            },
            css: p(r),
            ...i,
            children: o
          }
        )
      }
    )
  ] });
}
const ce = (e) => {
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
      children: T(t, {
        ref: r
      })
    }
  );
};
function ve(e) {
  const { children: t, title: n, sx: o, ...r } = e, [i, c] = m(!1), l = y(null);
  return /* @__PURE__ */ M(u, { children: [
    T(t, {
      onMouseEnter: c.bind(null, !0),
      onMouseLeave: c.bind(null, !1),
      ref: l,
      ...r
    }),
    i && /* @__PURE__ */ s(
      k,
      {
        sx: {
          position: "fixed",
          left: "0",
          top: "0"
        },
        children: /* @__PURE__ */ s(le, { childrenRef: l, title: n, sx: o })
      }
    )
  ] });
}
const le = (e) => {
  const { childrenRef: t, title: n, sx: o, ...r } = e, i = y(null), c = g(i), l = g(t), d = I({
    triggerRect: c,
    contentRect: l
  });
  return /* @__PURE__ */ s(u, { children: /* @__PURE__ */ s(
    de,
    {
      ref: i,
      style: {
        ...d,
        visibility: d.transform ? "visible" : "hidden"
      },
      ...r,
      css: p(o),
      children: n
    }
  ) });
}, de = f("p")`
  display: inline-block;
  padding: 5px 8px;

  position: absolute;
  z-index: 1000;
  word-wrap: break-word;
  border-radius: 8px;
`;
export {
  ge as Button,
  be as Input,
  we as Modal,
  Ce as Popover,
  k as Portal,
  ve as ToolTip,
  ye as message
};
//# sourceMappingURL=index.es.js.map
