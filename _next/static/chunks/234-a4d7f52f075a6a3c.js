(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[234],{4505:function(e,t,n){"use strict";n.d(t,{ZP:function(){return i}});var r=n(2265);let a=({color:e="currentColor",direction:t="left",distance:n="md",duration:a=.4,easing:o="cubic-bezier(0, 0, 0, 1)",hideOutline:i=!0,label:l,lines:s=3,onToggle:u,render:d,rounded:c=!1,size:f=32,toggle:p,toggled:h})=>{let[y,m]=(0,r.useState)(!1),g=Math.max(12,Math.min(48,f)),b=g/12,v=Math.round(b),_=g/(s*(("lg"===n?.25:"sm"===n?.75:.5)+(3===s?1:1.25))),E=Math.round(_),x=v*s+E*(s-1),M=(b-v+(_-E))/(3===s?1:2),S=parseFloat((g/(3===s?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-M/(4/3)).toFixed(2)),L=Math.max(0,a),$={cursor:"pointer",height:"48px",position:"relative",transition:`${L}s ${o}`,userSelect:"none",width:"48px"},w={background:e,height:`${v}px`,left:`${Math.round((48-g)/2)}px`,position:"absolute"};i&&($.outline="none"),c&&(w.borderRadius="9em");let O=p||m,I=void 0!==h?h:y;return d({barHeight:v,barStyles:w,burgerStyles:$,easing:o,handler:()=>{O(!I),"function"==typeof u&&u(!I)},isLeft:"left"===t,isToggled:I,label:l,margin:E,move:S,time:L,topOffset:Math.round((48-x)/2),width:g})};function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=e=>r.createElement(a,o({},e,{render:e=>r.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:`${e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?"scaleX(0)":"none"}`}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none"}`}}))}))},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:i}=n;return i?a.innerHTML=i.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&l.push(n)}let u=t.map(a).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(o(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(i-l.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return m},default:function(){return b}});let r=n(1024),a=n(8533),o=r._(n(4887)),i=a._(n(2265)),l=n(3634),s=n(3313),u=n(2185),d=new Map,c=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:l="afterInteractive",onError:u,stylesheets:h}=e,y=n||t;if(y&&c.has(y))return;if(d.has(t)){c.add(y),d.get(t).then(r,u);return}let m=()=>{a&&a(),c.add(y)},g=document.createElement("script"),b=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(o?(g.innerHTML=o.__html||"",m()):i?(g.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(g.src=t,d.set(t,b)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===l&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",l),h&&p(h),document.body.appendChild(g)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function m(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");c.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:s="afterInteractive",onError:d,stylesheets:f,...p}=e,{updateScripts:y,scripts:m,getIsSsr:g,appDir:b,nonce:v}=(0,i.useContext)(l.HeadManagerContext),_=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;_.current||(a&&e&&c.has(e)&&a(),_.current=!0)},[a,t,n]);let E=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!E.current&&("afterInteractive"===s?h(e):"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),E.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(y?(m[s]=(m[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...p}]),y(m)):g&&g()?c.add(t||n):g&&!g()&&h(e)),b){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),i.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===s&&n&&o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let b=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6303:function(){},1396:function(e,t,n){e.exports=n(5250)}}]);