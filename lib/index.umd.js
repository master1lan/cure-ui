(function(r,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("@emotion/react/jsx-runtime"),require("@emotion/react"),require("@emotion/styled"),require("react"),require("react-dom/client"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","@emotion/react/jsx-runtime","@emotion/react","@emotion/styled","react","react-dom/client","react-dom"],n):(r=typeof globalThis<"u"?globalThis:r||self,n(r["demo-ui"]={},r.jsxRuntime,r.react,r.styled,r.react$1,r.client,r.reactDom))})(this,function(r,n,c,l,f,y,x){"use strict";function g(e){return c.css(e)}const w=(e,t)=>{Object.entries(e).forEach(([o,i])=>{i&&(t.style[o]=i)})};function S(e,t,o){return t[e]||o}const v=e=>S(e,{default:"4px",circle:"50%",round:"8px"},"0px"),C=l.button`
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: ${e=>v(e.theme.shape)};
`;function b(e){return n.jsx(c.ThemeProvider,{theme:e.theme,children:e.children})}function M(e){const{sx:t,shape:o="default",size:i="middle",type:s="default",...u}=e,d={shape:o,size:i,type:s};return n.jsx(b,{theme:d,children:n.jsx(C,{css:g(e.sx),...u,children:e.children})})}let p=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,o)=>(o&=63,o<36?t+=o.toString(36):o<62?t+=(o-26).toString(36).toUpperCase():o>62?t+="-":t+="_",t),"");const P=c.keyframes`
     from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,T=c.keyframes`
    0% {
            opacity: 1;
            transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`,$=(e=3,t=.1)=>{if(e<t)throw new Error("You can't let the animation transition time exceed the total duration!");return c.css`
    animation: ${P} ${t} linear,
      ${T} ${t} linear
        ${e-t} forwards;
  `},j=l.p`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  padding: 12px 24px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  /* ${$(3,.1)} */
`,k=e=>{const{text:t,type:o}=e;return n.jsx(j,{children:n.jsx("span",{children:t})})};let m;const h=`container_${p(4)}`;function q(){let e=document.querySelector(h);return e||(e=document.createElement("div"),e.id=h,w({position:"fixed",top:"10px",left:"50%",transform:"translate(-50%, 0)",zIndex:"9999"},e),document.body.appendChild(e)),e}const B=()=>{const[e,t]=f.useState([]),o=3e3;return m=i=>{t(s=>[...s,i]),setTimeout(()=>{},o)},n.jsx(n.Fragment,{children:e.map(i=>n.jsx(k,{...i}))})},E=(()=>(y.createRoot(q()).render(n.jsx(B,{})),{info:(t=>o=>m({text:o,type:t,key:p(3)}))("info")}))();function z(e){const{children:t,...o}=e;return x.createPortal(n.jsx("div",{...o,children:t}),document.body)}const Y=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;let a=null;function I(){if(typeof a=="number")return a;const e=document.createElement("div");e.style.width="100%",e.style.height="200px";const t=document.createElement("div"),o=t.style;o.position="absolute",o.top="0",o.left="0",o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",t.appendChild(e),document.body.appendChild(t);const i=e.offsetWidth;t.style.overflow="scroll";let s=e.offsetWidth;return i===s&&(s=t.clientWidth),document.body.removeChild(t),a=i-s,a}const O=e=>{f.useEffect(()=>{const t=I(),o=document.body.style;return e&&(o.overflow="hidden",o.paddingRight=`${t}px`),()=>{o.overflow="",o.paddingRight=""}},[e])};function W(e){const{visible:t=!0,children:o,closeModal:i,...s}=e,u=d=>{d.stopPropagation(),d.target===d.currentTarget&&i()};return O(t),n.jsx(n.Fragment,{children:t&&n.jsx(z,{children:n.jsx(Y,{onClick:u,...s,children:o})})})}r.Button=M,r.Modal=W,r.message=E,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
