(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{4505:function(e,t,n){"use strict";n.d(t,{ZP:function(){return a}});var r=n(2265);let o=({color:e="currentColor",direction:t="left",distance:n="md",duration:o=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:a=!0,label:l,lines:s=3,onToggle:u,render:c,rounded:f=!1,size:d=32,toggle:p,toggled:m})=>{let[h,y]=(0,r.useState)(!1),g=Math.max(12,Math.min(48,d)),b=g/12,v=Math.round(b),E=g/(s*(("lg"===n?.25:"sm"===n?.75:.5)+(3===s?1:1.25))),x=Math.round(E),_=v*s+x*(s-1),M=(b-v+(E-x))/(3===s?1:2),w=parseFloat((g/(3===s?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-M/(4/3)).toFixed(2)),L=Math.max(0,o),S={cursor:"pointer",height:"48px",position:"relative",transition:`${L}s ${i}`,userSelect:"none",width:"48px"},O={background:e,height:`${v}px`,left:`${Math.round((48-g)/2)}px`,position:"absolute"};a&&(S.outline="none"),f&&(O.borderRadius="9em");let $=p||y,C=void 0!==m?m:h;return c({barHeight:v,barStyles:O,burgerStyles:S,easing:i,handler:()=>{$(!C),"function"==typeof u&&u(!C)},isLeft:"left"===t,isToggled:C,label:l,margin:x,move:w,time:L,topOffset:Math.round((48-_)/2),width:g})};function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=e=>r.createElement(o,i({},e,{render:e=>r.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:`${e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?"scaleX(0)":"none"}`}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none"}`}}))}))},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return i},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:a}=n;return a?o.innerHTML=a.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&l.push(n)}let u=t.map(o).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(i(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(a-l.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return y},default:function(){return b}});let r=n(1024),o=n(8533),i=r._(n(4887)),a=o._(n(2265)),l=n(3634),s=n(3313),u=n(2185),c=new Map,f=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:l="afterInteractive",onError:u,stylesheets:m}=e,h=n||t;if(h&&f.has(h))return;if(c.has(t)){f.add(h),c.get(t).then(r,u);return}let y=()=>{o&&o(),f.add(h)},g=document.createElement("script"),b=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(i?(g.innerHTML=i.__html||"",y()):a?(g.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",y()):t&&(g.src=t,c.set(t,b)),Object.entries(e))){if(void 0===r||d.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===l&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",l),m&&p(m),document.body.appendChild(g)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))}):m(e)}function y(e){e.forEach(h),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:c,stylesheets:d,...p}=e,{updateScripts:h,scripts:y,getIsSsr:g,appDir:b,nonce:v}=(0,a.useContext)(l.HeadManagerContext),E=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;E.current||(o&&e&&f.has(e)&&o(),E.current=!0)},[o,t,n]);let x=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!x.current&&("afterInteractive"===s?m(e):"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))})),x.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(h?(y[s]=(y[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:c,...p}]),h(y)):g&&g()?f.add(t||n):g&&!g()&&m(e)),b){if(d&&d.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),a.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===s&&n&&i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let b=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return s},default:function(){return u}});let r=n(1024),o=n(8630),i=n(6184),a=n(1749),l=r._(n(536)),s=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},u=a.Image},6303:function(){},6691:function(e,t,n){e.exports=n(7447)},1396:function(e,t,n){e.exports=n(5250)},2167:function(e,t,n){"use strict";n.d(t,{M:function(){return y}});var r=n(2265),o=n(538);function i(){let e=(0,r.useRef)(!1);return(0,o.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var a=n(2363),l=n(8243),s=n(961);class u extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let n=(0,r.useId)(),o=(0,r.useRef)(null),i=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:a,left:l}=i.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;let s=document.createElement("style");return document.head.appendChild(s),s.sheet&&s.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(s)}},[t]),r.createElement(u,{isPresent:t,childRef:o,sizeRef:i},r.cloneElement(e,{ref:o}))}let f=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:i,presenceAffectsLayout:a,mode:u})=>{let f=(0,s.h)(d),p=(0,r.useId)(),m=(0,r.useMemo)(()=>({id:p,initial:t,isPresent:n,custom:i,onExitComplete:e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;o&&o()},register:e=>(f.set(e,!1),()=>f.delete(e))}),a?void 0:[n]);return(0,r.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[n]),r.useEffect(()=>{n||f.size||!o||o()},[n]),"popLayout"===u&&(e=r.createElement(c,{isPresent:n},e)),r.createElement(l.O.Provider,{value:m},e)};function d(){return new Map}var p=n(781),m=n(6567);let h=e=>e.key||"",y=({children:e,custom:t,initial:n=!0,onExitComplete:l,exitBeforeEnter:s,presenceAffectsLayout:u=!0,mode:c="sync"})=>{var d;(0,m.k)(!s,"Replace exitBeforeEnter with mode='wait'");let y=(0,r.useContext)(p.p).forceRender||function(){let e=i(),[t,n]=(0,r.useState)(0),o=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]);return[(0,r.useCallback)(()=>a.Wi.postRender(o),[o]),t]}()[0],g=i(),b=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),v=b,E=(0,r.useRef)(new Map).current,x=(0,r.useRef)(v),_=(0,r.useRef)(new Map).current,M=(0,r.useRef)(!0);if((0,o.L)(()=>{M.current=!1,function(e,t){e.forEach(e=>{let n=h(e);t.set(n,e)})}(b,_),x.current=v}),d=()=>{M.current=!0,_.clear(),E.clear()},(0,r.useEffect)(()=>()=>d(),[]),M.current)return r.createElement(r.Fragment,null,v.map(e=>r.createElement(f,{key:h(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:u,mode:c},e)));v=[...v];let w=x.current.map(h),L=b.map(h),S=w.length;for(let e=0;e<S;e++){let t=w[e];-1!==L.indexOf(t)||E.has(t)||E.set(t,void 0)}return"wait"===c&&E.size&&(v=[]),E.forEach((e,n)=>{if(-1!==L.indexOf(n))return;let o=_.get(n);if(!o)return;let i=w.indexOf(n),a=e;a||(a=r.createElement(f,{key:h(o),isPresent:!1,onExitComplete:()=>{E.delete(n);let e=Array.from(_.keys()).filter(e=>!L.includes(e));if(e.forEach(e=>_.delete(e)),x.current=b.filter(t=>{let r=h(t);return r===n||e.includes(r)}),!E.size){if(!1===g.current)return;y(),l&&l()}},custom:t,presenceAffectsLayout:u,mode:c},o),E.set(n,a)),v.splice(i,0,a)}),v=v.map(e=>{let t=e.key;return E.has(t)?e:r.createElement(f,{key:h(e),isPresent:!0,presenceAffectsLayout:u,mode:c},e)}),r.createElement(r.Fragment,null,E.size?v:v.map(e=>(0,r.cloneElement)(e)))}}}]);