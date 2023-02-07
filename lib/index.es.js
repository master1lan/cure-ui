import { jsx as g, Fragment as ee } from "@emotion/react/jsx-runtime";
import { css as q, withEmotionCache as te, ThemeContext as ne, ThemeProvider as re, keyframes as B } from "@emotion/react";
import * as D from "react";
import { useContext as oe, createElement as k, Fragment as ae, useState as ie } from "react";
import { createRoot as se } from "react-dom/client";
function le(n) {
  return q(n);
}
function P() {
  return P = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, P.apply(this, arguments);
}
function W(n) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return e[t] === void 0 && (e[t] = n(t)), e[t];
  };
}
var ce = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, de = /* @__PURE__ */ W(
  function(n) {
    return ce.test(n) || n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ue = !0;
function fe(n, e, t) {
  var r = "";
  return t.split(" ").forEach(function(o) {
    n[o] !== void 0 ? e.push(n[o] + ";") : r += o + " ";
  }), r;
}
var G = function(e, t, r) {
  var o = e.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ue === !1) && e.registered[o] === void 0 && (e.registered[o] = t.styles);
}, pe = function(e, t, r) {
  G(e, t, r);
  var o = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var a = t;
    do
      e.insert(t === a ? "." + o : "", a, e.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function me(n) {
  for (var e = 0, t, r = 0, o = n.length; o >= 4; ++r, o -= 4)
    t = n.charCodeAt(r) & 255 | (n.charCodeAt(++r) & 255) << 8 | (n.charCodeAt(++r) & 255) << 16 | (n.charCodeAt(++r) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, e = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      e ^= (n.charCodeAt(r + 2) & 255) << 16;
    case 2:
      e ^= (n.charCodeAt(r + 1) & 255) << 8;
    case 1:
      e ^= n.charCodeAt(r) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var he = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, V = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ge = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", ye = /[A-Z]|^ms/g, H = /_EMO_([^_]+?)_([^]*?)_EMO_/g, A = function(e) {
  return e.charCodeAt(1) === 45;
}, L = function(e) {
  return e != null && typeof e != "boolean";
}, N = /* @__PURE__ */ W(function(n) {
  return A(n) ? n : n.replace(ye, "-$&").toLowerCase();
}), C = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(H, function(r, o, a) {
          return p = {
            name: o,
            styles: a,
            next: p
          }, o;
        });
  }
  return he[e] !== 1 && !A(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var ve = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, xe = ["normal", "none", "initial", "inherit", "unset"], be = C, Se = /^-ms-/, we = /-(.)/g, M = {};
  C = function(e, t) {
    if (e === "content" && (typeof t != "string" || xe.indexOf(t) === -1 && !ve.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var r = be(e, t);
    return r !== "" && !A(e) && e.indexOf("-") !== -1 && M[e] === void 0 && (M[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(Se, "ms-").replace(we, function(o, a) {
      return a.toUpperCase();
    }) + "?")), r;
  };
}
var $ = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function b(n, e, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error($);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return p = {
          name: t.name,
          styles: t.styles,
          next: p
        }, t.name;
      if (t.styles !== void 0) {
        var r = t.next;
        if (r !== void 0)
          for (; r !== void 0; )
            p = {
              name: r.name,
              styles: r.styles,
              next: p
            }, r = r.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return Ee(n, e, t);
    }
    case "function": {
      if (n !== void 0) {
        var a = p, i = t(n);
        return p = a, b(n, e, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], u = t.replace(H, function(c, d, v) {
          var h = "animation" + s.length;
          return s.push("const " + h + " = keyframes`" + v.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + h + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (e == null)
    return t;
  var m = e[t];
  return m !== void 0 ? m : t;
}
function Ee(n, e, t) {
  var r = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      r += b(n, e, t[o]) + ";";
  else
    for (var a in t) {
      var i = t[a];
      if (typeof i != "object")
        e != null && e[i] !== void 0 ? r += a + "{" + e[i] + "}" : L(i) && (r += N(a) + ":" + C(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error($);
        if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            L(i[s]) && (r += N(a) + ":" + C(a, i[s]) + ";");
        else {
          var u = b(n, e, i);
          switch (a) {
            case "animation":
            case "animationName": {
              r += N(a) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(ge), r += a + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var F = /label:\s*([^\s;\n{]+)\s*(;|$)/g, X;
process.env.NODE_ENV !== "production" && (X = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var p, Ce = function(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, a = "";
  p = void 0;
  var i = e[0];
  i == null || i.raw === void 0 ? (o = !1, a += b(r, t, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(V), a += i[0]);
  for (var s = 1; s < e.length; s++)
    a += b(r, t, e[s]), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(V), a += i[s]);
  var u;
  process.env.NODE_ENV !== "production" && (a = a.replace(X, function(v) {
    return u = v, "";
  })), F.lastIndex = 0;
  for (var m = "", c; (c = F.exec(a)) !== null; )
    m += "-" + // $FlowFixMe we know it's not null
    c[1];
  var d = me(a) + m;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: u,
    next: p,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: p
  };
}, _e = function(e) {
  return e();
}, Oe = D["useInsertionEffect"] ? D["useInsertionEffect"] : !1, ke = Oe || _e, Ne = de, Pe = function(e) {
  return e !== "theme";
}, U = function(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96 ? Ne : Pe;
}, z = function(e, t, r) {
  var o;
  if (t) {
    var a = t.shouldForwardProp;
    o = e.__emotion_forwardProp && a ? function(i) {
      return e.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && r && (o = e.__emotion_forwardProp), o;
}, Y = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ae = function(e) {
  var t = e.cache, r = e.serialized, o = e.isStringTag;
  return G(t, r, o), ke(function() {
    return pe(t, r, o);
  }), null;
}, Re = function n(e, t) {
  if (process.env.NODE_ENV !== "production" && e === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = e.__emotion_real === e, o = r && e.__emotion_base || e, a, i;
  t !== void 0 && (a = t.label, i = t.target);
  var s = z(e, t, r), u = s || U(o), m = !u("as");
  return function() {
    var c = arguments, d = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      process.env.NODE_ENV !== "production" && c[0][0] === void 0 && console.error(Y), d.push(c[0][0]);
      for (var v = c.length, h = 1; h < v; h++)
        process.env.NODE_ENV !== "production" && c[0][h] === void 0 && console.error(Y), d.push(c[h], c[0][h]);
    }
    var f = te(function(l, y, Q) {
      var O = m && l.as || o, x = "", R = [], S = l;
      if (l.theme == null) {
        S = {};
        for (var T in l)
          S[T] = l[T];
        S.theme = oe(ne);
      }
      typeof l.className == "string" ? x = fe(y.registered, R, l.className) : l.className != null && (x = l.className + " ");
      var I = Ce(d.concat(R), y.registered, S);
      x += y.key + "-" + I.name, i !== void 0 && (x += " " + i);
      var Z = m && s === void 0 ? U(O) : u, w = {};
      for (var E in l)
        m && E === "as" || // $FlowFixMe
        Z(E) && (w[E] = l[E]);
      return w.className = x, w.ref = Q, /* @__PURE__ */ k(ae, null, /* @__PURE__ */ k(Ae, {
        cache: y,
        serialized: I,
        isStringTag: typeof O == "string"
      }), /* @__PURE__ */ k(O, w));
    });
    return f.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", f.defaultProps = e.defaultProps, f.__emotion_real = f, f.__emotion_base = o, f.__emotion_styles = d, f.__emotion_forwardProp = s, Object.defineProperty(f, "toString", {
      value: function() {
        return i === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), f.withComponent = function(l, y) {
      return n(l, P({}, t, y, {
        shouldForwardProp: z(f, y, !0)
      })).apply(void 0, d);
    }, f;
  };
}, Te = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], _ = Re.bind();
Te.forEach(function(n) {
  _[n] = _(n);
});
function Ie(n, e, t) {
  return e[n] || t;
}
const De = (n) => Ie(
  n,
  { default: "4px", circle: "50%", round: "8px" },
  "0px"
), Ve = _.button`
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: ${(n) => De(n.theme.shape)};
`;
function Le(n) {
  return /* @__PURE__ */ g(re, { theme: n.theme, children: n.children });
}
function $e(n) {
  const {
    sx: e,
    shape: t = "default",
    size: r = "middle",
    type: o = "default",
    ...a
  } = n;
  return /* @__PURE__ */ g(Le, { theme: {
    shape: t,
    size: r,
    type: o
  }, children: /* @__PURE__ */ g(Ve, { css: le(n.sx), ...a, children: n.children }) });
}
let J = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
const Me = B`
  from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`, Fe = B`
0% {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`, Ue = _.p`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  padding: 12px 24px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  animation: ${Me} 0.1s linear, ${Fe} 0.1s linear 2.9s forwards;
`, ze = (n) => {
  const { text: e, type: t } = n;
  return /* @__PURE__ */ g(Ue, { children: /* @__PURE__ */ g("span", { children: e }) });
};
let K;
const j = `container_${J(4)}`, Ye = q({
  position: "fixed",
  top: "10px",
  left: "50%",
  transform: "translate(-50%, 0)",
  zIndex: "9999"
});
function je() {
  let n = document.querySelector(j);
  return n || (n = document.createElement("div"), n.id = j, n.className = Ye.name, document.body.appendChild(n)), n;
}
const qe = () => {
  const [n, e] = ie([]), t = 3e3, r = (o) => e((a) => a.filter((i) => o.key !== i.key));
  return K = (o) => {
    e((a) => [...a, o]), setTimeout(() => {
      r(o);
    }, t);
  }, /* @__PURE__ */ g(ee, { children: n.map((o) => /* @__PURE__ */ g(ze, { ...o })) });
}, Xe = (() => (se(je()).render(/* @__PURE__ */ g(qe, {})), {
  info: ((e) => (t) => K({ text: t, type: e, key: J(3) }))("info")
}))();
export {
  $e as Button,
  Xe as message
};
//# sourceMappingURL=index.es.js.map
