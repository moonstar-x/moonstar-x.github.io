(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{93:function(e,t,o){Promise.resolve().then(o.t.bind(o,1749,23)),Promise.resolve().then(o.t.bind(o,5250,23)),Promise.resolve().then(o.bind(o,447)),Promise.resolve().then(o.bind(o,9038)),Promise.resolve().then(o.bind(o,8238)),Promise.resolve().then(o.bind(o,9697))},2938:function(e,t,o){"use strict";o.d(t,{L:function(){return i}});var r=o(2265);let i=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];(0,r.useEffect)(()=>{e?document.body.style.overflowY="hidden":document.body.style.overflowY="unset"},[e])}},9366:function(e,t,o){"use strict";o.d(t,{u:function(){return i}});let r=(e,t)=>{switch(e){case"top":return[{x:0,y:-t},{x:0,y:0}];case"right":return[{x:t,y:0},{x:0,y:0}];case"bottom":return[{x:0,y:t},{x:0,y:0}];case"left":return[{x:-t,y:0},{x:0,y:0}];default:return[{x:0,y:0},{x:0,y:0}]}},i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.8,[i,s]=r(e,Math.abs(t));return{initial:{...i,opacity:0},animate:{...s,opacity:1},transition:{ease:"easeInOut",duration:o}}}},447:function(e,t,o){"use strict";o.r(t),o.d(t,{DoubleContainerSide:function(){return a}});var r=o(7437);o(2265);var i=o(5251),s=o(7042),n=o(9366);let a=e=>{let{className:t,children:o,origin:a,distance:l,duration:u,...c}=e,d=(0,n.u)(a,l,u);return(0,r.jsx)(i.E.div,{className:(0,s.Z)("basis-1/2 w-full tablet:w-[50%]",!o&&"hidden desktop:block",t),...d,...c,children:o})}},9038:function(e,t,o){"use strict";o.r(t),o.d(t,{SingleContainer:function(){return a}});var r=o(7437);o(2265);var i=o(5251),s=o(7042),n=o(9366);let a=e=>{let{className:t,origin:o,distance:a,duration:l,...u}=e,c=(0,n.u)(o,a,l);return(0,r.jsx)(i.E.div,{className:(0,s.Z)("page-container",t),...c,...u})}},7220:function(e,t,o){"use strict";o.d(t,{J:function(){return a}});var r=o(7437);o(2265);var i=o(7042);let s={sm:20,md:40,lg:60,"1x":"1em","1.5x":"1.5em","2x":"2em","3x":"3em"},n={primary:"fill-primary",black:"fill-black",white:"fill-white"},a=e=>{let{icon:t,className:o,size:a="sm",color:l="black",...u}=e,c=s[a],d=n[l];return(0,r.jsx)(t,{className:(0,i.Z)(d,o),width:c,height:c,...u})}},8238:function(e,t,o){"use strict";o.r(t),o.d(t,{ExpandableImage:function(){return k}});var r=o(7437),i=o(2265),s=o(2167),n=o(5251),a=o(7042),l=o(4915),u=o(7220);let c=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em",...e,children:(0,r.jsx)("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z"})});var d=o(2938);let h=e=>{(0,i.useEffect)(()=>{let t=t=>{"Escape"===t.key&&e()};return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[e])},k=e=>{let{className:t,initialOpen:o=!1,...k}=e,[p,m]=(0,i.useState)(()=>o);(0,d.L)(p),h(()=>m(!1));let b=()=>{m(!1)};return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(l.E,{className:(0,a.Z)("cursor-pointer",t),onClick:()=>{m(!0)},...k}),(0,r.jsx)(s.M,{children:p&&(0,r.jsx)(n.E.div,{className:"fixed top-0 right-0 bottom-0 left-0 bg-transparent-80 z-10 transition-none",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeInOut",duration:.2},onClick:b,children:(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-[1rem] px-[1rem] py-[2rem]",children:[(0,r.jsx)(u.J,{icon:c,size:"2x",role:"button",className:"self-end justify-self-center fill-white opacity-50 hover:opacity-100",onClick:b}),(0,r.jsx)("div",{className:"flex-1 h-0 relative",children:(0,r.jsx)(l.E,{className:(0,a.Z)("!rounded-none h-auto w-auto max-w-full max-h-full m-auto absolute top-0 right-0 bottom-0 left-0",t),onClick:e=>{e.stopPropagation()},...k})})]})})})]})}},4915:function(e,t,o){"use strict";o.d(t,{E:function(){return l}});var r=o(7437);o(2265);var i=o(6691),s=o.n(i),n=o(7042),a=o(5591);let l=e=>{let{alt:t=(0,a.B)("ui.image.default_alt"),width:o=2e3,height:i=9/16*2e3,loading:l="lazy",className:u,...c}=e;return(0,r.jsx)(s(),{className:(0,n.Z)("rounded-[6px] bg-gray-300 object-cover",u),alt:t,width:o,height:i,loading:l,...c})}},2679:function(e,t,o){"use strict";o.d(t,{E:function(){return r.E}});var r=o(4915);o(8238)},9697:function(e,t,o){"use strict";o.r(t),o.d(t,{ImageCarousel:function(){return a}});var r=o(7437);o(2265);var i=o(4741),s=o(7042),n=o(2679);o(5768),o(8694);let a=e=>{let{className:t,images:o,draggable:a=!0,autoplay:l=!0,autoplaySpeed:u=3e3,pauseOnHover:c=!1,dots:d=!1,aspectRatio:h="aspect-video",firstImagePriority:k=!1,...p}=e;return(0,r.jsx)("section",{className:(0,s.Z)("[&_*]:transition-none",t),...p,children:(0,r.jsx)(i.Z,{draggable:a,autoplay:l,autoplaySpeed:u,pauseOnHover:c,dots:d,lazyLoad:"progressive",centerMode:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,accessibility:!0,children:o.map((e,t)=>(0,r.jsx)("div",{className:(0,s.Z)("px-[5px]",h),children:(0,r.jsx)(n.E,{src:e,className:"w-full h-full",priority:k&&0===t,loading:k&&0===t?"eager":"lazy"})},t))})})}},5591:function(e,t,o){"use strict";o.d(t,{B:function(){return n}});var r=o(5839),i=JSON.parse('{"ui.header.links.about":"About","ui.header.links.blog":"Blog","ui.header.links.work":"Work","ui.header.links.contact":"Contact","ui.footer.copyright":"\xa9 {year}","ui.footer.signature":"Developed by {name}","ui.footer.contact.title":"Let\'s Connect","ui.footer.contact.links.email":"Send me an Email","ui.image.default_alt":"Image with no description.","ui.share_card.title":"Like this content?","ui.share_card.subtitle":"Consider sharing this page with you friends.","ui.share_card.buttons.clipboard":"Copy to Clipboard","ui.share_card.buttons.twitter":"Share on X","ui.share_card.buttons.facebook":"Share on Facebook","ui.share_card.buttons.linkedin":"Share on LinkedIn","ui.page_not_found_error.title":"Page Not Found","ui.page_not_found_error.description":"The page that you were looking for does not exist. Did you get lost? Don\'t fret, here\'s an image of a random cat to make you company.","ui.page_not_found_error.back_button":"Go Back","blog.head.reading_time":"{time} min read","blog.head.null_reading_time":"Quick read","blog.more_like_this.title":"More Posts Like This","blog.card.buttons.read":"Read Article","blog.grid.no_posts.title":"No Posts Available \uD83D\uDE3F","blog.grid.no_posts.description":"Looks like I haven\'t added any posts here yet. Sorry about that! Be sure to check this page out soon.","blog.grid.no_posts.back_button":"Go Back","work.head.status":"Status:","work.head.technologies":"Technologies:","work.head.links":"Links:","work.more_like_this.title":"More Work Like This","work.grid.no_posts.title":"No Work Available \uD83D\uDE3F","work.grid.no_posts.description":"Looks like I haven\'t added any work articles here yet. Sorry about that! Be sure to check this page out soon.","work.grid.no_posts.back_button":"Go Back","work.grid.title":"{type} Work:","work.status.completed":"Completed","work.status.maintained":"Maintained","work.status.in_development":"In Development","work.status.on_hold":"On Hold","work.status.deprecated":"Deprecated","work.status.abandoned":"Abandoned","work.type.hobby":"Hobby","work.type.art":"Art","work.type.research":"Research","work.links.github":"See it on GitHub","work.links.dockerhub":"See it on DockerHub","work.links.website":"Visit the Website","work.links.discord":"Invite it to your Discord Server","work.links.npm":"See it on NPM","work.links.steam":"See it on Steam","work.stats.github":"Stats from GitHub:","work.stats.dockerhub":"Stats from DockerHub:","work.stats.npm":"Stats from NPM:","work.stats.github.stars":"Stars","work.stats.github.forks":"Forks","work.stats.github.watchers":"Watchers","work.stats.github.open_issues":"Open Issues","work.stats.dockerhub.stars":"Stars","work.stats.dockerhub.pulls":"Pulls","work.stats.npm.downloads.last_week":"Downloads Last Week","work.stats.npm.downloads.last_month":"Downloads Last Month","work.stats.npm.downloads.last_year":"Downloads Last Year","variations.experience_timeline.position":"{title} at {company}","variations.experience_timeline.present":"Present","variations.education_timeline.degree":"{degree} by {university}","pages.titles.about":"About","pages.titles.blog":"Blog","pages.titles.work":"Work","pages.titles.not_found":"Page Not Found :(","services.markdown.fallback_description":"No description available.","misc.humanize_duration.conjunction":" and "}');let s=e=>{let t=i[e];if(!t)throw Error("No string resource with key ".concat(e," exists."));return new r.ZP(t)},n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s(e).format(t)}}},function(e){e.O(0,[366,250,263,971,938,744],function(){return e(e.s=93)}),_N_E=e.O()}]);