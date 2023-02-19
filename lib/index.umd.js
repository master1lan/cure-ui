(function(l,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("@emotion/react/jsx-runtime"),require("@emotion/react"),require("@emotion/styled"),require("react"),require("react-dom/client"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","@emotion/react/jsx-runtime","@emotion/react","@emotion/styled","react","react-dom/client","react-dom"],r):(l=typeof globalThis<"u"?globalThis:l||self,r(l["cure-ui"]={},l.jsxRuntime,l["@emotion/react"],l["@emotion/styled"],l.React,l.client,l["react-dom"]))})(this,function(l,r,f,h,c,E,M){"use strict";function m(e){return f.css(e)}const x=(e,t)=>{Object.entries(e).forEach(([n,o])=>{o&&(t.style[n]=o)})};function w(e,t,n){return t[e]||n}const B=(e,...t)=>{const n=window.getComputedStyle(e);return t.map(o=>n.getPropertyValue(o))},z=()=>{const e=B(document.body,"margin","padding");return{margin:P(e[0]),padding:P(e[1])}};function P(e){const[t="0px",n=t,o=t,i=n]=e.split(" ");return{top:t,right:n,bottom:o,left:i}}const I=e=>({borderRadius:w(e,{default:"4px",circle:"50%",round:"8px"},"4px")}),W=e=>({height:w(e,{large:"40px",middle:"32px",small:"24px"},"32px"),padding:w(e,{large:"6px 15px",middle:"4px 15px",small:"0px 7px"},"4px 15px")}),q=e=>{const t=e;return f.css({...W(t.size),...I(t.shape)})},F=h.button`
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

  ${e=>q(e.theme)}
`;function L(e){return r.jsx(f.ThemeProvider,{theme:e.theme,children:e.children})}const Y=c.forwardRef(function(t,n){const{sx:o,shape:i="default",size:s="middle",type:d="default",...a}=t,u={shape:i,size:s,type:d};return r.jsx(L,{theme:u,children:r.jsx(F,{css:m(o),...a,ref:n,children:t.children})})}),H=h.input`
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
`,N=c.forwardRef(function(t,n){const{defaultValue:o,onChange:i,sx:s,...d}=t;return r.jsx(H,{css:m(s),defaultValue:o,onChange:i,...d,ref:n})});let R=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const A=f.keyframes`
     from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,O=f.keyframes`
    0% {
            opacity: 1;
            transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`,j=(e=3,t=.1)=>{if(e<t)throw new Error("You can't let the animation transition time exceed the total duration!");return f.css`
    animation: ${A} ${t} linear,
      ${O} ${t} linear
        ${e-t} forwards;
  `},D=h.p`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  padding: 12px 24px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  background-color: white;
  color: black;
  ${j(3,.1)}
`,V=e=>{const{text:t}=e;return r.jsx(D,{children:r.jsx("span",{children:t})})};let T;const k="container_message";function _(){let e=document.querySelector(k);return e||(e=document.createElement("div"),e.id=k,x({position:"fixed",top:"10px",left:"50%",transform:"translate(-50%, 0)",zIndex:"9999"},e),document.body.appendChild(e)),e}const U=()=>{const[e,t]=c.useState([]),n=3e3,o=i=>t(s=>s.filter(d=>i.key!==d.key));return T=i=>{t(s=>[...s,i]),setTimeout(()=>{o(i)},n)},r.jsx(r.Fragment,{children:e.map(i=>f.createElement(V,{...i,key:i.key}))})},X=(()=>(E.createRoot(_()).render(r.jsx(U,{})),{info:(t=>n=>T({text:n,type:t,key:R(3)}))("info")}))(),y=c.forwardRef(function(t,n){const{children:o,sx:i,...s}=t;return M.createPortal(r.jsx(G,{...s,css:m(i),ref:n,children:o}),document.body)}),G=h.div(),J=h.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;let g=null;function K(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)}function Q(){if(K()||(g=0),typeof g=="number")return g;const e=document.createElement("div");x({width:"100%",height:"200px"},e);const t=document.createElement("div");x({position:"absolute",top:"0",left:"0",pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"},t),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;x({overflow:"scroll"},t);let o=e.offsetWidth;return n===o&&(o=t.clientWidth),document.body.removeChild(t),g=n-o,g}const b=e=>{const[t,n]=c.useState(null),o=c.useCallback(()=>{n(e.current.getBoundingClientRect())},[]);return c.useLayoutEffect(()=>{e.current&&o()},[]),t},S=({triggerRect:e,contentRect:t})=>{const[n,o]=c.useState({transform:""});return c.useEffect(()=>{if(!t||!e)return;const{left:i,width:s,top:d,height:a}=t,{width:u}=e,{margin:p,padding:v}=z(),C=i-(parseInt(p.left)+parseInt(v.left))+(s>>1)-(u>>1),ie=d+a,se=C,ce=ie;o(()=>({transform:`translate(${se}px,${ce}px)`}))},[t,e]),n},Z=e=>{c.useEffect(()=>{const t=Q(),n=document.body.style;return e&&(n.overflow="hidden",n.paddingRight=`${t}px`),()=>{n.overflow="",n.paddingRight=""}},[e])},$=c.forwardRef(function(t,n){const{visible:o=!0,children:i,closeModal:s,sx:d,...a}=t,u=p=>{p.stopPropagation(),p.target===p.currentTarget&&s()};return Z(o),r.jsx(r.Fragment,{children:o&&r.jsx(y,{children:r.jsx(J,{onClick:u,...a,css:m(d),ref:n,children:i})})})});function ee(e){const{defaultOpen:t,children:n,content:o,sx:i,...s}=e,[d,a]=c.useState(t),u=c.useRef(null);return r.jsxs(r.Fragment,{children:[c.cloneElement(n,{onClick:()=>a(p=>!p),ref:u}),d&&r.jsx(y,{sx:{position:"fixed",left:"0",top:"0"},children:r.jsx(te,{anchorRef:u,onClose:()=>{a(p=>!p)},css:m(i),...s,children:o})})]})}const te=e=>{const{children:t,anchorRef:n,onClose:o}=e,i=c.useRef(null),s=b(n),d=b(i);c.useEffect(()=>{const u=[n.current,i.current],p=v=>{const C=v.target;!u.includes(C)&&o()};return window.addEventListener("click",p),()=>window.removeEventListener("click",p)},[]);const a=S({triggerRect:d,contentRect:s});return r.jsx("div",{style:{visibility:a.transform?"visible":"hidden",...a,display:"inline-block",position:"absolute"},children:c.cloneElement(t,{ref:i})})};function ne(e){const{children:t,title:n,sx:o,...i}=e,[s,d]=c.useState(!1),a=c.useRef(null);return r.jsxs(r.Fragment,{children:[c.cloneElement(t,{onMouseEnter:d.bind(null,!0),onMouseLeave:d.bind(null,!1),ref:a,...i}),s&&r.jsx(y,{sx:{position:"fixed",left:"0",top:"0"},children:r.jsx(oe,{childrenRef:a,title:n,sx:o})})]})}const oe=e=>{const{childrenRef:t,title:n,sx:o,...i}=e,s=c.useRef(null),d=b(s),a=b(t),u=S({triggerRect:d,contentRect:a});return r.jsx(r.Fragment,{children:r.jsx(re,{ref:s,style:{...u,visibility:u.transform?"visible":"hidden"},...i,css:m(o),children:n})})},re=h("p")`
  display: inline-block;
  padding: 5px 8px;

  position: absolute;
  z-index: 1000;
  word-wrap: break-word;
  border-radius: 8px;
`;l.Button=Y,l.Input=N,l.Modal=$,l.Popover=ee,l.Portal=y,l.ToolTip=ne,l.message=X,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
