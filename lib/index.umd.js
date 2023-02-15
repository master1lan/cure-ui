(function(l,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("@emotion/react/jsx-runtime"),require("@emotion/react"),require("@emotion/styled"),require("react"),require("react-dom/client"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","@emotion/react/jsx-runtime","@emotion/react","@emotion/styled","react","react-dom/client","react-dom"],r):(l=typeof globalThis<"u"?globalThis:l||self,r(l["cure-ui"]={},l.jsxRuntime,l["@emotion/react"],l["@emotion/styled"],l.React,l.client,l["react-dom"]))})(this,function(l,r,f,m,c,E,M){"use strict";function h(e){return f.css(e)}const g=(e,t)=>{Object.entries(e).forEach(([n,o])=>{o&&(t.style[n]=o)})};function w(e,t,n){return t[e]||n}const B=(e,...t)=>{const n=window.getComputedStyle(e);return t.map(o=>n.getPropertyValue(o))},z=()=>{const e=B(document.body,"margin","padding");return{margin:C(e[0]),padding:C(e[1])}};function C(e){const[t="0px",n=t,o=t,s=n]=e.split(" ");return{top:t,right:n,bottom:o,left:s}}const I=e=>({borderRadius:w(e,{default:"4px",circle:"50%",round:"8px"},"4px")}),W=e=>({height:w(e,{large:"40px",middle:"32px",small:"24px"},"32px"),padding:w(e,{large:"6px 15px",middle:"4px 15px",small:"0px 7px"},"4px 15px")}),q=e=>{const t=e;return f.css({...W(t.size),...I(t.shape)})},F=m.button`
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
`;function L(e){return r.jsx(f.ThemeProvider,{theme:e.theme,children:e.children})}const N=c.forwardRef(function(t,n){const{sx:o,shape:s="default",size:i="middle",type:d="default",...a}=t,p={shape:s,size:i,type:d};return r.jsx(L,{theme:p,children:r.jsx(F,{css:h(t.sx),...a,ref:n,children:t.children})})}),Y=m.input`
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
`,j=c.forwardRef(function(t,n){const{defaultValue:o,onChange:s,sx:i,...d}=t;return r.jsx(Y,{css:h(i),defaultValue:o,onChange:s,...d,ref:n})});let A=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const O=f.keyframes`
     from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,R=f.keyframes`
    0% {
            opacity: 1;
            transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`,H=(e=3,t=.1)=>{if(e<t)throw new Error("You can't let the animation transition time exceed the total duration!");return f.css`
    animation: ${O} ${t} linear,
      ${R} ${t} linear
        ${e-t} forwards;
  `},V=m.p`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  padding: 12px 24px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  ${H(3,.1)}
`,_=e=>{const{text:t,type:n}=e;return r.jsx(V,{children:r.jsx("span",{children:t})})};let T;const S="container_message";function D(){let e=document.querySelector(S);return e||(e=document.createElement("div"),e.id=S,g({position:"fixed",top:"10px",left:"50%",transform:"translate(-50%, 0)",zIndex:"9999"},e),document.body.appendChild(e)),e}const U=()=>{const[e,t]=c.useState([]),n=3e3,o=s=>t(i=>i.filter(d=>s.key!==d.key));return T=s=>{t(i=>[...i,s]),setTimeout(()=>{o(s)},n)},r.jsx(r.Fragment,{children:e.map(s=>r.jsx(_,{...s}))})},X=(()=>(E.createRoot(D()).render(r.jsx(U,{})),{info:(t=>n=>T({text:n,type:t,key:A(3)}))("info")}))(),x=c.forwardRef(function(t,n){const{children:o,sx:s,...i}=t;return M.createPortal(r.jsx("div",{...i,css:h(s),ref:n,children:o}),document.body)}),G=m.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;let y=null;function J(){if(typeof y=="number")return y;const e=document.createElement("div");g({width:"100%",height:"200px"},e);const t=document.createElement("div");g({position:"absolute",top:"0",left:"0",pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"},t),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;g({overflow:"scroll"},t);let o=e.offsetWidth;return n===o&&(o=t.clientWidth),document.body.removeChild(t),y=n-o,y}const b=e=>{const[t,n]=c.useState(null),o=c.useCallback(()=>{n(e.current.getBoundingClientRect())},[]);return c.useLayoutEffect(()=>{e.current&&o()},[]),t},k=({triggerRect:e,contentRect:t})=>{const[n,o]=c.useState({transform:""});return c.useEffect(()=>{if(!t||!e)return;const{left:s,width:i,top:d,height:a}=t,{width:p,height:u}=e,{margin:P,padding:v}=z(),oe=s-(parseInt(P.left)+parseInt(v.left))+(i>>1)-(p>>1),re=d+a,se=oe,ie=re;o(ce=>({transform:`translate(${se}px,${ie}px)`}))},[t,e]),n},K=e=>{c.useEffect(()=>{const t=J(),n=document.body.style;return e&&(n.overflow="hidden",n.paddingRight=`${t}px`),()=>{n.overflow="",n.paddingRight=""}},[e])},Q=c.forwardRef(function(t,n){const{visible:o=!0,children:s,closeModal:i,sx:d,...a}=t,p=u=>{u.stopPropagation(),u.target===u.currentTarget&&i()};return K(o),r.jsx(r.Fragment,{children:o&&r.jsx(x,{children:r.jsx(G,{onClick:p,...a,css:h(d),ref:n,children:s})})})});function Z(e){const{defaultOpen:t,children:n,content:o,sx:s,...i}=e,[d,a]=c.useState(t),p=c.useRef(null);return r.jsxs(r.Fragment,{children:[c.cloneElement(n,{onClick:()=>a(u=>!u),ref:p}),d&&r.jsx(x,{sx:{position:"fixed",left:"0",top:"0"},children:r.jsx($,{anchorRef:p,onClose:()=>{a(u=>!u)},css:h(s),...i,children:o})})]})}const $=e=>{const{children:t,anchorRef:n,onClose:o}=e,s=c.useRef(null),i=b(n),d=b(s);c.useEffect(()=>{const p=[n.current,s.current],u=P=>{const v=P.target;!p.includes(v)&&o()};return window.addEventListener("click",u),()=>window.removeEventListener("click",u)},[]);const a=k({triggerRect:d,contentRect:i});return r.jsx("div",{style:{visibility:a.transform?"visible":"hidden",...a,display:"inline-block",position:"absolute"},children:c.cloneElement(t,{ref:s})})};function ee(e){const{children:t,title:n,sx:o,...s}=e,[i,d]=c.useState(!1),a=c.useRef(null);return r.jsxs(r.Fragment,{children:[c.cloneElement(t,{onMouseEnter:d.bind(null,!0),onMouseLeave:d.bind(null,!1),ref:a,...s}),i&&r.jsx(x,{sx:{position:"fixed",left:"0",top:"0"},children:r.jsx(te,{childrenRef:a,title:n,sx:o})})]})}const te=e=>{const{childrenRef:t,title:n,sx:o,...s}=e,i=c.useRef(null),d=b(i),a=b(t),p=k({triggerRect:d,contentRect:a});return r.jsx(r.Fragment,{children:r.jsx(ne,{ref:i,style:{...p,visibility:p.transform?"visible":"hidden"},...s,css:h(o),children:n})})},ne=m("p")`
  display: inline-block;
  padding: 5px 8px;

  position: absolute;
  z-index: 1000;
  word-wrap: break-word;
  border-radius: 8px;
`;l.Button=N,l.Input=j,l.Modal=Q,l.Popover=Z,l.Portal=x,l.ToolTip=ee,l.message=X,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
