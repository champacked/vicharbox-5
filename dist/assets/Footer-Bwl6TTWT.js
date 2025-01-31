import{h as B,r as f,R as p,j as t}from"./index-DnAP2V4g.js";import{c as I}from"./utils-w7soFv3E.js";import{u as S,M as T,a as H,b as E,c as P,f as z,i as k,d as X,e as q,g as G,h as w,m as F}from"./proxy-BiyE_pyU.js";import{c as K}from"./createLucideIcon-C5J-et0N.js";/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=K("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),V=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,A=B,J=(e,s)=>n=>{var a;if((s==null?void 0:s.variants)==null)return A(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:i}=s,l=Object.keys(r).map(o=>{const c=n==null?void 0:n[o],x=i==null?void 0:i[o];if(c===null)return null;const m=V(c)||V(x);return r[o][m]}),u=n&&Object.entries(n).reduce((o,c)=>{let[x,m]=c;return m===void 0||(o[x]=m),o},{}),d=s==null||(a=s.compoundVariants)===null||a===void 0?void 0:a.reduce((o,c)=>{let{class:x,className:m,...y}=c;return Object.entries(y).every(v=>{let[g,N]=v;return Array.isArray(N)?N.includes({...i,...u}[g]):{...i,...u}[g]===N})?[...o,x,m]:o},[]);return A(e,l,d,n==null?void 0:n.class,n==null?void 0:n.className)};function j(e){const s=S(()=>H(e)),{isStatic:n}=f.useContext(T);if(n){const[,a]=f.useState(e);f.useEffect(()=>s.on("change",a),[])}return s}function _(e,s){const n=j(s()),a=()=>n.set(s());return a(),E(()=>{const r=()=>z.preRender(a,!1,!0),i=e.map(l=>l.on("change",r));return()=>{i.forEach(l=>l()),P(a)}}),n}function C(e){return typeof e=="number"?e:parseFloat(e)}function W(e,s={}){const{isStatic:n}=f.useContext(T),a=f.useRef(null),r=j(k(e)?C(e.get()):e),i=f.useRef(r.get()),l=f.useRef(()=>{}),u=()=>{const o=a.current;o&&o.time===0&&o.sample(X.delta),d(),a.current=q({keyframes:[r.get(),i.current],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...s,onUpdate:l.current})},d=()=>{a.current&&a.current.stop()};return f.useInsertionEffect(()=>r.attach((o,c)=>n?c(o):(i.current=o,l.current=c,z.update(u),r.get()),d),[JSON.stringify(s)]),E(()=>{if(k(e))return e.on("change",o=>r.set(C(o)))},[r]),r}const Y=e=>e&&typeof e=="object"&&e.mix,Z=e=>Y(e)?e.mix:void 0;function Q(...e){const s=!Array.isArray(e[0]),n=s?0:-1,a=e[0+n],r=e[1+n],i=e[2+n],l=e[3+n],u=G(r,i,{mixer:Z(i[0]),...l});return s?u(a):u}function ee(e){w.current=[],e();const s=_(w.current,e);return w.current=void 0,s}function M(e,s,n,a){if(typeof e=="function")return ee(e);const r=typeof s=="function"?s:Q(s,n,a);return Array.isArray(e)?D(e,r):D([e],([i])=>r(i))}function D(e,s){const n=S(()=>[]);return _(e,()=>{n.length=0;const a=e.length;for(let r=0;r<a;r++)n[r]=e[r].get();return s(n)})}const L=40,R=60,O=140,te=J("supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md"),U=p.forwardRef(({className:e,children:s,iconSize:n=L,iconMagnification:a=R,iconDistance:r=O,direction:i="middle",...l},u)=>{const d=j(1/0),o=()=>p.Children.map(s,c=>p.isValidElement(c)&&c.type===h?p.cloneElement(c,{...c.props,mouseX:d,size:n,magnification:a,distance:r}):c);return t.jsx(F.div,{ref:u,onMouseMove:c=>d.set(c.pageX),onMouseLeave:()=>d.set(1/0),...l,className:I(te({className:e}),{"items-start":i==="top","items-center":i==="middle","items-end":i==="bottom"}),children:o()})});U.displayName="Dock";const h=({size:e=L,magnification:s=R,distance:n=O,mouseX:a,className:r,children:i,...l})=>{const u=f.useRef(null),d=Math.max(6,e*.2),o=j(1/0),c=M(a??o,y=>{var g;const v=((g=u.current)==null?void 0:g.getBoundingClientRect())??{x:0,width:0};return y-v.x-v.width/2}),x=M(c,[-n,0,n],[e,s,e]),m=W(x,{mass:.1,stiffness:150,damping:12});return t.jsx(F.div,{ref:u,style:{width:m,height:m,padding:d},className:I("flex aspect-square cursor-pointer items-center justify-center rounded-full",r),...l,children:i})};h.displayName="DockIcon";function ne(){return t.jsx("div",{className:"relative ",children:t.jsxs(U,{iconMagnification:60,iconDistance:400,children:[t.jsx(h,{className:"bg-black/10 dark:bg-white/10",children:t.jsx("a",{href:"https://github.com/tanviirsinghh",target:"_blank",rel:"noopener noreferrer",className:"",children:t.jsx(b.gitHub,{className:"size-full"})})}),t.jsx(h,{className:"bg-black/10 dark:bg-white/10",children:t.jsxs("a",{href:"https://www.linkedin.com/in/tanvir-singh-0b6a121b6/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-indigo-400 transition-colors duration-300",children:[t.jsx(b.linkedin,{className:"size-full"})," "]})}),t.jsx(h,{className:"bg-black/10 dark:bg-white/10",children:t.jsx("a",{href:"https://twitter.com/tanviirsinghh",target:"_blank",rel:"noopener noreferrer",className:"hover:text-indigo-400 transition-colors duration-300",children:t.jsx(b.twitter,{className:"size-full"})})}),t.jsx(h,{className:"bg-black/10 dark:bg-white/10",children:t.jsx("a",{href:"mailto:tanviirsinghh@gmail.com?subject=Hello&body=Hi%20Tanvir",className:"hover:text-indigo-400 transition-colors duration-300",children:t.jsx(b.email,{className:"size-full"})})})]})})}const b={gitHub:e=>t.jsx("svg",{viewBox:"0 0 438.549 438.549",...e,children:t.jsx("path",{fill:"currentColor",d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"})}),linkedin:e=>t.jsxs("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",...e,children:[t.jsx("circle",{cx:"32",cy:"32",r:"31",fill:"#0077b5"}),t.jsx("path",{d:"M20.4 44h-5.101v-16.4h5.1V44zm-2.55-18.635c-1.634 0-2.95-1.355-2.95-3.022 0-1.667 1.316-3.022 2.95-3.022 1.634 0 2.95 1.355 2.95 3.022 0 1.667-1.316 3.022-2.95 3.022zM44 44h-5.083v-8.011c0-2.31-.83-3.89-2.907-3.89-1.586 0-2.531 1.068-2.945 2.098-.152.37-.19.887-.19 1.405V44h-5.086v-16.4h5.086v2.355s1.53-2.89 5.167-2.89C41.91 27.065 44 29.935 44 34.528V44z",fill:"#fff"})]}),twitter:e=>t.jsxs("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",...e,children:[t.jsx("circle",{cx:"32",cy:"32",r:"31",fill:"#1DA1F2"}),t.jsx("path",{d:"M48.7 20.3c-1.2.5-2.4.9-3.8 1-1.4-.9-3.3-1.5-5.4-1.5-4.1 0-7.4 3.3-7.4 7.4 0 .6.1 1.1.2 1.7-6.1-.3-11.6-3.2-15.2-7.7-.6 1.1-1 2.3-1 3.7 0 2.6 1.3 4.8 3.3 6.1-1.2 0-2.3-.4-3.3-1v.1c0 3.6 2.5 6.6 5.9 7.2-.6.2-1.3.3-1.9.3-.5 0-.9 0-1.4-.1.9 2.9 3.6 5.1 6.8 5.1-2.5 1.9-5.6 3.1-9 3.1-.6 0-1.2 0-1.7-.1 3.2 2.1 7 3.3 11.2 3.3 13.4 0 20.7-11.1 20.7-20.7v-.9c1.4-1 2.7-2.3 3.7-3.8-1.3.6-2.7 1-4.2 1.1 1.5-.9 2.6-2.3 3.2-4z",fill:"#fff"})]}),email:e=>t.jsxs("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",...e,children:[t.jsx("circle",{cx:"32",cy:"32",r:"31",fill:"#EA4335"}),t.jsx("path",{d:"M46 20H18c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V22c0-1.1-.9-2-2-2zm0 4L32 35 18 24v-2l14 11 14-11v2z",fill:"#fff"})]})};function se(){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return t.jsxs("footer",{className:"bg-black text-gray-300",children:[t.jsxs("div",{className:"container mx-auto px-4 py-8",children:[t.jsx("div",{className:"relative",children:t.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 -top-14",children:t.jsx("button",{onClick:e,className:"bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg transition-colors duration-300","aria-label":"Scroll to top",children:t.jsx($,{size:24})})})}),t.jsx("div",{className:"flex justify-center h-24  items-center pb-9",children:t.jsx(ne,{})}),t.jsxs("div",{className:"text-center",children:[t.jsxs("p",{className:"text-sm mb-2 ",children:["© 2024"," ",t.jsx("span",{className:" font-bold text text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500",children:"Large."})," ","All rights reserved."]}),t.jsxs("p",{className:"text-xs text-gray-500",children:["Designed with ",t.jsx("span",{className:"text-red-500",children:"♥ "})," by"," ",t.jsx("a",{href:"www.instagram.com/tanviirsinghh",target:"_blank",className:"text-indigo-400 hover:underline",children:"Tanvir Singh"})]})]})]}),t.jsx("div",{className:"bg-black ",children:t.jsx("div",{className:"text-xs font-bold font-mono text-center text text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-800",children:t.jsx("p",{children:"FUCK OFF, GO TO HELL. MAI INDUSTRY DA BANDA NI !!"})})})]})}const ce=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{se as F,j as a,ce as b,J as c,_ as u};
