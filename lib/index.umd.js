(function(c,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("@emotion/react/jsx-runtime"),require("@emotion/react"),require("@emotion/styled"),require("react"),require("react-dom/client"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","@emotion/react/jsx-runtime","@emotion/react","@emotion/styled","react","react-dom/client","react-dom"],n):(c=typeof globalThis<"u"?globalThis:c||self,n(c["cure-ui"]={},c.jsxRuntime,c["@emotion/react"],c["@emotion/styled"],c.React,c.client,c["react-dom"]))})(this,function(c,n,u,f,d,T,S){"use strict";function w(e){return u.css(e)}const k=(e,t)=>{Object.entries(e).forEach(([o,s])=>{s&&(t.style[o]=s)})};function b(e,t,o){return t[e]||o}const E=e=>u.css`
    border-radius: ${b(e,{default:"4px",circle:"50%",round:"8px"},"0px")};
  `,M=e=>u.css`
    height: ${b(e,{large:"40px",middle:"32px",small:"24px"},"32px")};
    padding: ${b(e,{large:"6px 15px",middle:"4px 15px",small:"0px 7px"},"4px 15px")};
  `,z=e=>{const t=e;return u.css`
    ${M(t.size)}
    ${E(t.shape)}
  `},B=f.button`
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

  ${e=>z(e.theme)}
`;function I(e){return n.jsx(u.ThemeProvider,{theme:e.theme,children:e.children})}function q(e){const{sx:t,shape:o="default",size:s="middle",type:r="default",...l}=e,i={shape:o,size:s,type:r};return n.jsx(I,{theme:i,children:n.jsx(B,{css:w(e.sx),...l,children:e.children})})}const F=f.input`
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
`;function L(e){const{defaultValue:t,onChange:o,sx:s,...r}=e;return n.jsx(F,{css:w(s),value:t,onChange:o,...r})}let W=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,o)=>(o&=63,o<36?t+=o.toString(36):o<62?t+=(o-26).toString(36).toUpperCase():o>62?t+="-":t+="_",t),"");const Y=u.keyframes`
     from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,j=u.keyframes`
    0% {
            opacity: 1;
            transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`,O=(e=3,t=.1)=>{if(e<t)throw new Error("You can't let the animation transition time exceed the total duration!");return u.css`
    animation: ${Y} ${t} linear,
      ${j} ${t} linear
        ${e-t} forwards;
  `},N=f.p`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  padding: 12px 24px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  ${O(3,.1)}
`,A=e=>{const{text:t,type:o}=e;return n.jsx(N,{children:n.jsx("span",{children:t})})};let v;const C="container_message";function D(){let e=document.querySelector(C);return e||(e=document.createElement("div"),e.id=C,k({position:"fixed",top:"10px",left:"50%",transform:"translate(-50%, 0)",zIndex:"9999"},e),document.body.appendChild(e)),e}const H=()=>{const[e,t]=d.useState([]),o=3e3,s=r=>t(l=>l.filter(i=>r.key!==i.key));return v=r=>{t(l=>[...l,r]),setTimeout(()=>{s(r)},o)},n.jsx(n.Fragment,{children:e.map(r=>n.jsx(A,{...r}))})},_=(()=>(T.createRoot(D()).render(n.jsx(H,{})),{info:(t=>o=>v({text:o,type:t,key:W(3)}))("info")}))();function m(e){const{children:t,...o}=e;return S.createPortal(n.jsx("div",{...o,children:t}),document.body)}const U=f.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;let g=null;function V(){if(typeof g=="number")return g;const e=document.createElement("div");e.style.width="100%",e.style.height="200px";const t=document.createElement("div"),o=t.style;o.position="absolute",o.top="0",o.left="0",o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",t.appendChild(e),document.body.appendChild(t);const s=e.offsetWidth;t.style.overflow="scroll";let r=e.offsetWidth;return s===r&&(r=t.clientWidth),document.body.removeChild(t),g=s-r,g}const x=e=>{const[t,o]=d.useState(null),s=d.useCallback(()=>{o(e.current.getBoundingClientRect())},[]);return d.useLayoutEffect(()=>{e.current&&s()},[]),t},P=({triggerRect:e,contentRect:t})=>{const[o,s]=d.useState({transform:""});return d.useEffect(()=>{if(!t||!e)return;const{left:r,width:l,top:i,height:a}=t,p=r,h=i;console.log({transFormX:p,transFormY:h}),s(y=>({transform:`translate(${p}px,${h}px)`}))},[t,e]),o},R=e=>{d.useEffect(()=>{const t=V(),o=document.body.style;return e&&(o.overflow="hidden",o.paddingRight=`${t}px`),()=>{o.overflow="",o.paddingRight=""}},[e])};function X(e){const{visible:t=!0,children:o,closeModal:s,...r}=e,l=i=>{i.stopPropagation(),i.target===i.currentTarget&&s()};return R(t),n.jsx(n.Fragment,{children:t&&n.jsx(m,{children:n.jsx(U,{onClick:l,...r,children:o})})})}function G(e){const{defaultOpen:t,children:o,content:s,...r}=e,[l,i]=d.useState(t),a=d.useRef(null);return n.jsxs(n.Fragment,{children:[d.cloneElement(o,{onClick:()=>i(p=>!p),ref:a}),l&&n.jsx(m,{children:n.jsx(J,{anchorRef:a,onClose:()=>{i(p=>!p)},children:s})})]})}const J=e=>{const{children:t,anchorRef:o,onClose:s}=e,r=d.useRef(null),l=x(o),i=x(r);d.useEffect(()=>{const p=[o.current,r.current],h=y=>{const $=y==null?void 0:y.target;!p.some(ee=>ee===$)&&s()};return window.addEventListener("click",h),()=>window.removeEventListener("click",h)},[]);const a=P({triggerRect:i,contentRect:l});return n.jsx("div",{ref:r,style:{visibility:a.transform?"visible":"hidden",...a,display:"inline-block"},children:t})};function K(e){const{children:t,title:o,...s}=e,[r,l]=d.useState(!1),i=d.useRef(null);return n.jsxs(n.Fragment,{children:[d.cloneElement(t,{onMouseEnter:l.bind(null,!0),onMouseLeave:l.bind(null,!1),ref:i,...s}),r&&n.jsx(m,{children:n.jsx(Q,{childrenRef:i,title:o})})]})}const Q=e=>{const{childrenRef:t,title:o,...s}=e,r=d.useRef(null),l=x(r),i=x(t),a=P({triggerRect:l,contentRect:i});return n.jsx(n.Fragment,{children:n.jsx(Z,{ref:r,style:{...a,visibility:a.transform?"visible":"hidden"},...s,children:o})})},Z=f("p")`
  display: inline-block;
  padding: 5px 8px;

  position: absolute;
  z-index: 1000;
  word-wrap: break-word;
  border-radius: 8px;
`;c.Button=q,c.Input=L,c.Modal=X,c.Popover=G,c.Portal=m,c.ToolTip=K,c.message=_,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
