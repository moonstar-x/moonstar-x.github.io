(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160,404,534],{250:function(e,t,o){Promise.resolve().then(o.t.bind(o,1749,23)),Promise.resolve().then(o.t.bind(o,5250,23)),Promise.resolve().then(o.bind(o,8238))},2938:function(e,t,o){"use strict";o.d(t,{L:function(){return s}});var r=o(2265);let s=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];(0,r.useEffect)(()=>{e?document.body.style.overflowY="hidden":document.body.style.overflowY="unset"},[e])}},7220:function(e,t,o){"use strict";o.d(t,{J:function(){return n}});var r=o(7437);o(2265);var s=o(7042);let i={sm:20,md:40,lg:60,"1x":"1em","1.5x":"1.5em","2x":"2em","3x":"3em"},a={primary:"fill-primary",black:"fill-black",white:"fill-white"},n=e=>{let{icon:t,className:o,size:n="sm",color:l="black",...u}=e,d=i[n],c=a[l];return(0,r.jsx)(t,{className:(0,s.Z)(c,o),width:d,height:d,...u})}},8238:function(e,t,o){"use strict";o.r(t),o.d(t,{ExpandableImage:function(){return h}});var r=o(7437),s=o(2265),i=o(2167),a=o(5251),n=o(7042),l=o(4915),u=o(7220);let d=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em",...e,children:(0,r.jsx)("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z"})});var c=o(2938);let k=e=>{(0,s.useEffect)(()=>{let t=t=>{"Escape"===t.key&&e()};return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[e])},h=e=>{let{className:t,initialOpen:o=!1,...h}=e,[m,p]=(0,s.useState)(()=>o);(0,c.L)(m),k(()=>p(!1));let b=()=>{p(!1)};return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(l.E,{className:(0,n.Z)("cursor-pointer",t),onClick:()=>{p(!0)},...h}),(0,r.jsx)(i.M,{children:m&&(0,r.jsx)(a.E.div,{className:"fixed top-0 right-0 bottom-0 left-0 bg-transparent-80 z-10",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeInOut",duration:.2},onClick:b,children:(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-[1rem] px-[1rem] py-[2rem]",children:[(0,r.jsx)(u.J,{icon:d,size:"2x",role:"button",className:"self-end justify-self-center fill-white opacity-50 hover:opacity-100",onClick:b}),(0,r.jsx)("div",{className:"flex-1 h-0 relative",children:(0,r.jsx)(l.E,{className:(0,n.Z)("!rounded-none h-auto w-auto max-w-full max-h-full m-auto absolute top-0 right-0 bottom-0 left-0",t),onClick:e=>{e.stopPropagation()},...h})})]})})})]})}},4915:function(e,t,o){"use strict";o.d(t,{E:function(){return l}});var r=o(7437);o(2265);var s=o(6691),i=o.n(s),a=o(7042),n=o(5591);let l=e=>{let{alt:t=(0,n.B)("ui.image.default_alt"),width:o=2e3,height:s=9/16*2e3,loading:l="lazy",className:u,...d}=e;return(0,r.jsx)(i(),{className:(0,a.Z)("rounded-[6px] bg-gray-300 object-cover",u),alt:t,width:o,height:s,loading:l,...d})}},5591:function(e,t,o){"use strict";o.d(t,{B:function(){return a}});var r=o(5839),s=JSON.parse('{"ui.header.links.about":"About","ui.header.links.blog":"Blog","ui.header.links.work":"Work","ui.header.links.contact":"Contact","ui.footer.copyright":"\xa9 {year}","ui.footer.signature":"Developed by {name}","ui.footer.contact.title":"Let\'s Connect","ui.footer.contact.links.email":"Send me an Email","ui.image.default_alt":"Image with no description.","ui.share_card.title":"Like this content?","ui.share_card.subtitle":"Consider sharing this page with you friends.","ui.share_card.buttons.clipboard":"Copy to Clipboard","ui.share_card.buttons.twitter":"Share on X","ui.share_card.buttons.facebook":"Share on Facebook","ui.share_card.buttons.linkedin":"Share on LinkedIn","ui.page_not_found_error.title":"Page Not Found","ui.page_not_found_error.description":"The page that you were looking for does not exist. Did you get lost? Don\'t fret, here\'s an image of a random cat to make you company.","ui.page_not_found_error.back_button":"Go Back","blog.head.reading_time":"{time} min read","blog.head.null_reading_time":"Quick read","blog.more_like_this.title":"More Posts Like This","blog.card.buttons.read":"Read Article","blog.grid.no_posts.title":"No Posts Available \uD83D\uDE3F","blog.grid.no_posts.description":"Looks like I haven\'t added any posts here yet. Sorry about that! Be sure to check this page out soon.","blog.grid.no_posts.back_button":"Go Back","work.head.status":"Status:","work.head.technologies":"Technologies:","work.head.links":"Links:","work.more_like_this.title":"More Work Like This","work.grid.no_posts.title":"No Work Available \uD83D\uDE3F","work.grid.no_posts.description":"Looks like I haven\'t added any work articles here yet. Sorry about that! Be sure to check this page out soon.","work.grid.no_posts.back_button":"Go Back","work.grid.title":"{type} Work:","work.status.completed":"Completed","work.status.maintained":"Maintained","work.status.in_development":"In Development","work.status.on_hold":"On Hold","work.status.deprecated":"Deprecated","work.status.abandoned":"Abandoned","work.type.hobby":"Hobby","work.type.art":"Art","work.type.research":"Research","work.links.github":"See it on GitHub","work.links.dockerhub":"See it on DockerHub","work.links.website":"Visit the Website","work.links.discord":"Invite it to your Discord Server","work.links.npm":"See it on NPM","work.links.steam":"See it on Steam","work.stats.github":"Stats from GitHub:","work.stats.dockerhub":"Stats from DockerHub:","work.stats.npm":"Stats from NPM:","work.stats.github.stars":"Stars","work.stats.github.forks":"Forks","work.stats.github.watchers":"Watchers","work.stats.github.open_issues":"Open Issues","work.stats.dockerhub.stars":"Stars","work.stats.dockerhub.pulls":"Pulls","work.stats.npm.downloads.last_week":"Downloads Last Week","work.stats.npm.downloads.last_month":"Downloads Last Month","work.stats.npm.downloads.last_year":"Downloads Last Year","variations.experience_timeline.position":"{title} at {company}","variations.experience_timeline.present":"Present","variations.education_timeline.degree":"{degree} by {university}","pages.titles.about":"About","pages.titles.blog":"Blog","pages.titles.work":"Work","pages.titles.not_found":"Page Not Found :(","services.markdown.fallback_description":"No description available.","misc.humanize_duration.conjunction":" and "}');let i=e=>{let t=s[e];if(!t)throw Error("No string resource with key ".concat(e," exists."));return new r.ZP(t)},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(e).format(t)}}},function(e){e.O(0,[366,250,971,938,744],function(){return e(e.s=250)}),_N_E=e.O()}]);