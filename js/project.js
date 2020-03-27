const modal=function(){const t=document.querySelector(".overlay");document.body.addEventListener("click",function(e){const n=e.target;if("modal"in n.dataset){const e=document.querySelector(`#${n.dataset.modal}`);"order"===n.dataset.modal&&(e.querySelector(".modal__descr").innerHTML=n.closest(".catalog-item").querySelector(".catalog-item__subtitle").innerHTML),fadeIn(t,20),fadeIn(e,20)}n.classList.contains("modal__close")&&(fadeOut(t,40),fadeOut(n.closest(".modal"),40))});modalValidation("form.feed-form",{rules:{name:{required:!0,minLength:5,maxLength:10},email:{required:!0,email:!0},phone:{required:!0,phone:!0}},messages:{name:{required:"Поле обязательно для заполнения",minLength:"Введите не менее {0} символов",maxLength:"Введите не более {0} символов"},email:{required:"Поле обязательно для заполнения",email:"Введите правильный адрес почты"},phone:{required:"Поле обязательно для заполнения",phone:"Введите правильный номер телефона"}}})},validationCheckMap={required:t=>""===t,minLength:(t,e)=>t.length<e,maxLength:(t,e)=>t.length>e,phone(t){const e=t.match(/\d/g);return null===e||e.length<11},email:t=>!1===/\S+?@\S+?\.\S+/.test(t)},validationCheckError=function(t,e){const n=t.nextElementSibling;let i=!1;const a=t.getAttribute("name"),o=e.rules[a];for(const r in o){const l=o[r],s=e.messages[a][r];if(i=validationCheckMap[r](t.value,l)){n&&n.classList.contains("error-msg")&&(n.remove(),t.classList.remove("error"));const e=document.createElement("div");e.className="error-msg",e.textContent=s.replace("{0}",l),t.classList.add("error"),t.after(e);break}}return!i&&n.classList.contains("error-msg")&&(n.remove(),t.classList.remove("error")),i},modalValidation=function(t,e){document.addEventListener("blur",function(n){n.target.matches&&n.target.matches("input")&&n.target.closest("form").matches(t)&&validationCheckError(n.target,e)},!0),document.addEventListener("submit",function(n){const i=n.target.closest("form");if(!i.matches(t))return;const a=i.querySelectorAll("input");for(const t of a){const i=t.getAttribute("name"),a=validationCheckError(t,e);e.rules[i].required&&a&&n.preventDefault()}},!0)};modal(),document.addEventListener("DOMContentLoaded",function(t){sliderTNS()});const sliderTNS=function(){const t=tns({container:".carousel__inner",items:1,slideBy:"page",autoplay:!1,controls:!1,nav:!1,navPosition:"bottom",center:!0,responsive:{992:{nav:!1},320:{touch:!0,nav:!0}}});document.querySelector(".carousel .prev").addEventListener("click",function(){t.goTo("prev")}),document.querySelector(".carousel .next").addEventListener("click",function(){t.goTo("next")})},tabs=document.querySelectorAll(".catalog .catalog__content");document.querySelector("ul.catalog__tabs").addEventListener("click",function(t){document.querySelector(".catalog .catalog__tab_active").classList.remove("catalog__tab_active");const e=t.target.closest("li");e.classList.add("catalog__tab_active"),document.querySelector(".catalog .catalog__content_active").classList.remove("catalog__content_active");const n=e.dataset.index;tabs[n].classList.add("catalog__content_active")}),document.querySelector(".catalog").addEventListener("click",function(t){if(t.target.matches("a.catalog-item__link")||t.target.matches("a.catalog-item__back")){t.preventDefault();const e=t.target.closest(".catalog-item__wrapper").children;e[0].classList.toggle("catalog-item__content_active"),e[1].classList.toggle("catalog-item__list_active")}});const fadeIn=function(t,e){if(e>0){const n=t.style.opacity||1;t.style.opacity=0,t.style.display="";const i=setInterval(function(){t.style.opacity<n?t.style.opacity=parseFloat(t.style.opacity)+.2:(t.style.opacity="",clearInterval(i))},e)}else t.style.display=""},fadeOut=function(t,e){if(e>0){const n=t.style.opacity;t.style.opacity=1;const i=setInterval(function(){t.style.opacity>0?t.style.opacity=parseFloat(t.style.opacity)-.2:(clearInterval(i),t.style.display="none",t.style.opacity=n)},e)}else t.style.display="none"};document.addEventListener("submit",async function(t){const e=t.target.closest("form");e.matches("form.feed-form")&&!t.defaultPrevented&&(t.preventDefault(),fadeOut(e.closest(".modal")),(await fetch("mailer/smart.php",{method:"POST",body:new FormData(e)})).ok?(e.reset(),fadeIn(document.querySelector("#thanks"),20)):(alert("Упс, попробуйте еще раз"),fadeIn(e.closest(".modal"),20)))},!0),document.addEventListener("scroll",function(){const t=100*window.pageYOffset/(document.documentElement.scrollHeight-document.documentElement.clientHeight),e=document.querySelector(".page-up");t>40?fadeIn(e):fadeOut(e)}),document.addEventListener("click",function(t){if(!t.target)return;const e=t.target.closest("a");if(!e)return;const n=e.getAttribute("href");if(n&&n.startsWith("#")&"#"!==n){t.preventDefault();let e=document.querySelector(n).getBoundingClientRect().top;const i=e<0;i||(e+=document.documentElement.clientHeight);let a,o=0;a=i?-50:50;const r=setInterval(function(){o>e&&i||o<e&&!i?(document.documentElement.scrollBy(0,a),o+=a):clearInterval(r)},10)}});var tns=function(){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function o(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function r(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function l(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var s=document.documentElement;function c(t){var e="";return t.fake&&(e=s.style.overflow,t.style.background="",t.style.overflow=s.style.overflow="hidden",s.appendChild(t)),e}function u(t,e){t.fake&&(t.remove(),s.style.overflow=e,s.offsetHeight)}function d(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function f(t){return("insertRule"in t?t.cssRules:t.rules).length}function m(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var v="classList"in document.createElement("_"),p=v?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},h=v?function(t,e){p(t,e)||t.classList.add(e)}:function(t,e){p(t,e)||(t.className+=" "+e)},g=v?function(t,e){p(t,e)&&t.classList.remove(e)}:function(t,e){p(t,e)&&(t.className=t.className.replace(e,""))};function y(t,e){return t.hasAttribute(e)}function x(t,e){return t.getAttribute(e)}function b(t){return void 0!==t.item}function C(t,e){if(t=b(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function w(t,e){t=b(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function M(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function L(t){return"none"!==window.getComputedStyle(t).display}function S(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach(function(i){"ms"===i&&"transform"!==t||e.push(i+n)}),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var o=t[a];if(void 0!==i.style[o])return o}return!1}function A(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var k=!1;try{var N=Object.defineProperty({},"passive",{get:function(){k=!0}});window.addEventListener("test",null,N)}catch(t){}var B=!!k&&{passive:!0};function O(t,e,n){for(var i in e){var a=0<=["touchstart","touchmove"].indexOf(i)&&!n&&B;t.addEventListener(i,e[i],a)}}function D(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&B;t.removeEventListener(n,e[n],i)}}function I(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach(function(n){n(e,t)})}}}var H=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},t||{});var n=document,s=window,v={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},b={},k=t.useLocalStorage;if(k){var N=navigator.userAgent,B=new Date;try{(b=s.localStorage)?(b.setItem(B,B),k=b.getItem(B)==B,b.removeItem(B)):k=!1,k||(b={})}catch(N){k=!1}k&&(b.tnsApp&&b.tnsApp!==N&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){b.removeItem(t)}),localStorage.tnsApp=N)}var _,q,P,R,W,z,F,j=b.tC?o(b.tC):r(b,"tC",function(){var t=document,e=l(),n=c(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var o,r="(10px * 10)",s=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],d=0;d<3;d++)if(o=s[d],i.style.width=o,100===i.offsetWidth){a=o.replace(r,"");break}}catch(t){}return e.fake?u(e,n):i.remove(),a}(),k),V=b.tPL?o(b.tPL):r(b,"tPL",function(){var t,e=document,n=l(),i=c(n),a=e.createElement("div"),o=e.createElement("div"),r="";a.className="tns-t-subp2",o.className="tns-t-ct";for(var s=0;s<70;s++)r+="<div></div>";return o.innerHTML=r,a.appendChild(o),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,n.fake?u(n,i):a.remove(),t}(),k),Y=b.tMQ?o(b.tMQ):r(b,"tMQ",(q=document,R=c(P=l()),W=q.createElement("div"),F="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",(z=q.createElement("style")).type="text/css",W.className="tns-mq-test",P.appendChild(z),P.appendChild(W),z.styleSheet?z.styleSheet.cssText=F:z.appendChild(q.createTextNode(F)),_=window.getComputedStyle?window.getComputedStyle(W).position:W.currentStyle.position,P.fake?u(P,R):W.remove(),"absolute"===_),k),G=b.tTf?o(b.tTf):r(b,"tTf",S("transform"),k),Q=b.t3D?o(b.t3D):r(b,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=l(),a=c(i),o=n.createElement("p"),r=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return r+="transform",i.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(r),i.fake?u(i,a):o.remove(),void 0!==e&&0<e.length&&"none"!==e}(G),k),X=b.tTDu?o(b.tTDu):r(b,"tTDu",S("transitionDuration"),k),K=b.tTDe?o(b.tTDe):r(b,"tTDe",S("transitionDelay"),k),J=b.tADu?o(b.tADu):r(b,"tADu",S("animationDuration"),k),U=b.tADe?o(b.tADe):r(b,"tADe",S("animationDelay"),k),$=b.tTE?o(b.tTE):r(b,"tTE",A(X,"Transition"),k),Z=b.tAE?o(b.tAE):r(b,"tAE",A(J,"Animation"),k),tt=s.console&&"function"==typeof s.console.warn,et=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],nt={};if(et.forEach(function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(nt[e]=i,!a||!a.nodeName)return void(tt&&console.warn("Can't find",t[e]));t[e]=a}}),!(t.container.children.length<1)){var it=t.responsive,at=t.nested,ot="carousel"===t.mode;if(it){0 in it&&(t=a(t,it[0]),delete it[0]);var rt={};for(var lt in it){var st=it[lt];st="number"==typeof st?{items:st}:st,rt[lt]=st}it=rt,rt=null}if(ot||function t(e){for(var n in e)ot||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!ot){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var ct=t.animateIn,ut=t.animateOut,dt=t.animateDelay,ft=t.animateNormal}var mt,vt,pt="horizontal"===t.axis,ht=n.createElement("div"),gt=n.createElement("div"),yt=t.container,xt=yt.parentNode,bt=yt.outerHTML,Ct=yt.children,wt=Ct.length,Mt=_n(),Tt=!1;it&&ni(),ot&&(yt.className+=" tns-vpfix");var Et,Lt,St,At,kt,Nt,Bt,Ot=t.autoWidth,Dt=Wn("fixedWidth"),It=Wn("edgePadding"),Ht=Wn("gutter"),_t=Pn(),qt=Wn("center"),Pt=Ot?1:Math.floor(Wn("items")),Rt=Wn("slideBy"),Wt=t.viewportMax||t.fixedWidthViewportWidth,zt=Wn("arrowKeys"),Ft=Wn("speed"),jt=t.rewind,Vt=!jt&&t.loop,Yt=Wn("autoHeight"),Gt=Wn("controls"),Qt=Wn("controlsText"),Xt=Wn("nav"),Kt=Wn("touch"),Jt=Wn("mouseDrag"),Ut=Wn("autoplay"),$t=Wn("autoplayTimeout"),Zt=Wn("autoplayText"),te=Wn("autoplayHoverPause"),ee=Wn("autoplayResetOnVisibility"),ne=(Bt=document.createElement("style"),document.querySelector("head").appendChild(Bt),Bt.sheet?Bt.sheet:Bt.styleSheet),ie=t.lazyload,ae=(t.lazyloadSelector,[]),oe=Vt?(kt=function(){if(Ot||Dt&&!Wt)return wt-1;var e=Dt?"fixedWidth":"items",n=[];if((Dt||t[e]<wt)&&n.push(t[e]),it)for(var i in it){var a=it[i][e];a&&(Dt||a<wt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Dt?Wt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Nt=ot?Math.ceil((5*kt-wt)/2):4*kt-wt,Nt=Math.max(kt,Nt),Rn("edgePadding")?Nt+1:Nt):0,re=ot?wt+2*oe:wt+oe,le=!(!Dt&&!Ot||Vt),se=Dt?ki():null,ce=!ot||!Vt,ue=pt?"left":"top",de="",fe="",me=Dt?function(){return qt&&!Vt?wt-1:Math.ceil(-se/(Dt+Ht))}:Ot?function(){for(var t=re;t--;)if(Et[t]>=-se)return t}:function(){return qt&&ot&&!Vt?wt-1:Vt||ot?Math.max(0,re-Math.ceil(Pt)):re-1},ve=Dn(Wn("startIndex")),pe=ve,he=(On(),0),ge=Ot?null:me(),ye=t.preventActionWhenRunning,xe=t.swipeAngle,be=!xe||"?",Ce=!1,we=t.onInit,Me=new I,Te=" tns-slider tns-"+t.mode,Ee=yt.id||(At=window.tnsId,window.tnsId=At?At+1:1,"tns"+window.tnsId),Le=Wn("disable"),Se=!1,Ae=t.freezable,ke=!(!Ae||Ot)&&ei(),Ne=!1,Be={click:Pi,keydown:function(t){t=Gi(t);var e=[v.LEFT,v.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?$e.disabled||Pi(t,-1):Ze.disabled||Pi(t,1))}},Oe={click:function(t){if(Ce){if(ye)return;_i()}for(var e=Qi(t=Gi(t));e!==an&&!y(e,"data-nav");)e=e.parentNode;if(y(e,"data-nav")){var n=sn=Number(x(e,"data-nav")),i=Dt||Ot?n*wt/rn:n*Pt;qi(We?n:Math.min(Math.ceil(i),wt-1),t),cn===n&&(pn&&ji(),sn=-1)}},keydown:function(t){t=Gi(t);var e=n.activeElement;if(y(e,"data-nav")){var i=[v.LEFT,v.RIGHT,v.ENTER,v.SPACE].indexOf(t.keyCode),a=Number(x(e,"data-nav"));0<=i&&(0===i?0<a&&Yi(nn[a-1]):1===i?a<rn-1&&Yi(nn[a+1]):qi(sn=a,t))}}},De={mouseover:function(){pn&&(Wi(),hn=!0)},mouseout:function(){hn&&(Ri(),hn=!1)}},Ie={visibilitychange:function(){n.hidden?pn&&(Wi(),yn=!0):yn&&(Ri(),yn=!1)}},He={keydown:function(t){t=Gi(t);var e=[v.LEFT,v.RIGHT].indexOf(t.keyCode);0<=e&&Pi(t,0===e?-1:1)}},_e={touchstart:Ui,touchmove:$i,touchend:Zi,touchcancel:Zi},qe={mousedown:Ui,mousemove:$i,mouseup:Zi,mouseleave:Zi},Pe=Rn("controls"),Re=Rn("nav"),We=!!Ot||t.navAsThumbnails,ze=Rn("autoplay"),Fe=Rn("touch"),je=Rn("mouseDrag"),Ve="tns-slide-active",Ye="tns-complete",Ge={load:function(t){di(Qi(t))},error:function(t){var e;e=Qi(t),h(e,"failed"),fi(e)}},Qe="force"===t.preventScrollOnTouch;if(Pe)var Xe,Ke,Je=t.controlsContainer,Ue=t.controlsContainer?t.controlsContainer.outerHTML:"",$e=t.prevButton,Ze=t.nextButton,tn=t.prevButton?t.prevButton.outerHTML:"",en=t.nextButton?t.nextButton.outerHTML:"";if(Re)var nn,an=t.navContainer,on=t.navContainer?t.navContainer.outerHTML:"",rn=Ot?wt:ea(),ln=0,sn=-1,cn=Hn(),un=cn,dn="tns-nav-active",fn="Carousel Page ",mn=" (Current Slide)";if(ze)var vn,pn,hn,gn,yn,xn="forward"===t.autoplayDirection?1:-1,bn=t.autoplayButton,Cn=t.autoplayButton?t.autoplayButton.outerHTML:"",wn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Fe||je)var Mn,Tn,En={},Ln={},Sn=!1,An=pt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Ot||Bn(Le||ke),G&&(ue=G,de="translate",Q?(de+=pt?"3d(":"3d(0px, ",fe=pt?", 0px, 0px)":", 0px)"):(de+=pt?"X(":"Y(",fe=")")),ot&&(yt.className=yt.className.replace("tns-vpfix","")),function(){(Rn("gutter"),ht.className="tns-outer",gt.className="tns-inner",ht.id=Ee+"-ow",gt.id=Ee+"-iw",""===yt.id&&(yt.id=Ee),Te+=V||Ot?" tns-subpixel":" tns-no-subpixel",Te+=j?" tns-calc":" tns-no-calc",Ot&&(Te+=" tns-autowidth"),Te+=" tns-"+t.axis,yt.className+=Te,ot?((mt=n.createElement("div")).id=Ee+"-mw",mt.className="tns-ovh",ht.appendChild(mt),mt.appendChild(gt)):ht.appendChild(gt),Yt)&&((mt||gt).className+=" tns-ah");if(xt.insertBefore(ht,yt),gt.appendChild(yt),m(Ct,function(t,e){h(t,"tns-item"),t.id||(t.id=Ee+"-item"+e),!ot&&ft&&h(t,ft),C(t,{"aria-hidden":"true",tabindex:"-1"})}),oe){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=oe;a--;){var o=a%wt,r=Ct[o].cloneNode(!0);if(w(r,"id"),i.insertBefore(r,i.firstChild),ot){var l=Ct[wt-1-o].cloneNode(!0);w(l,"id"),e.appendChild(l)}}yt.insertBefore(e,yt.firstChild),yt.appendChild(i),Ct=yt.children}}(),function(){if(!ot)for(var e=ve,n=ve+Math.min(wt,Pt);e<n;e++){var i=Ct[e];i.style.left=100*(e-ve)/Pt+"%",h(i,ct),g(i,ft)}if(pt&&(V||Ot?(d(ne,"#"+Ee+" > .tns-item","font-size:"+s.getComputedStyle(Ct[0]).fontSize+";",f(ne)),d(ne,"#"+Ee,"font-size:0;",f(ne))):ot&&m(Ct,function(t,e){var n;t.style.marginLeft=(n=e,j?j+"("+100*n+"% / "+re+")":100*n/re+"%")})),Y){if(X){var a=mt&&t.autoHeight?Gn(t.speed):"";d(ne,"#"+Ee+"-mw",a,f(ne))}a=zn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),d(ne,"#"+Ee+"-iw",a,f(ne)),ot&&(a=pt&&!Ot?"width:"+Fn(t.fixedWidth,t.gutter,t.items)+";":"",X&&(a+=Gn(Ft)),d(ne,"#"+Ee,a,f(ne))),a=pt&&!Ot?jn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=Vn(t.gutter)),ot||(X&&(a+=Gn(Ft)),J&&(a+=Qn(Ft))),a&&d(ne,"#"+Ee+" > .tns-item",a,f(ne))}else{gi(),gt.style.cssText=zn(It,Ht,Dt,Yt),ot&&pt&&!Ot&&(yt.style.width=Fn(Dt,Ht,Pt));a=pt&&!Ot?jn(Dt,Ht,Pt):"";Ht&&(a+=Vn(Ht)),a&&d(ne,"#"+Ee+" > .tns-item",a,f(ne))}if(it&&Y)for(var o in it){o=parseInt(o);var r=it[o],l=(a="",""),c="",u="",v="",p=Ot?null:Wn("items",o),y=Wn("fixedWidth",o),x=Wn("speed",o),b=Wn("edgePadding",o),C=Wn("autoHeight",o),w=Wn("gutter",o);X&&mt&&Wn("autoHeight",o)&&"speed"in r&&(l="#"+Ee+"-mw{"+Gn(x)+"}"),("edgePadding"in r||"gutter"in r)&&(c="#"+Ee+"-iw{"+zn(b,w,y,x,C)+"}"),ot&&pt&&!Ot&&("fixedWidth"in r||"items"in r||Dt&&"gutter"in r)&&(u="width:"+Fn(y,w,p)+";"),X&&"speed"in r&&(u+=Gn(x)),u&&(u="#"+Ee+"{"+u+"}"),("fixedWidth"in r||Dt&&"gutter"in r||!ot&&"items"in r)&&(v+=jn(y,w,p)),"gutter"in r&&(v+=Vn(w)),!ot&&"speed"in r&&(X&&(v+=Gn(x)),J&&(v+=Qn(x))),v&&(v="#"+Ee+" > .tns-item{"+v+"}"),(a=l+c+u+v)&&ne.insertRule("@media (min-width: "+o/16+"em) {"+a+"}",ne.cssRules.length)}}(),Xn();var kn=Vt?ot?function(){var t=he,e=ge;t+=Rt,e-=Rt,It?(t+=1,e-=1):Dt&&(_t+Ht)%(Dt+Ht)&&(e-=1),oe&&(e<ve?ve-=wt:ve<t&&(ve+=wt))}:function(){if(ge<ve)for(;he+wt<=ve;)ve-=wt;else if(ve<he)for(;ve<=ge-wt;)ve+=wt}:function(){ve=Math.max(he,Math.min(ge,ve))},Nn=ot?function(){var t,e,n,i,a,o,r,l,s,c,u;Si(yt,""),X||!Ft?(Oi(),Ft&&L(yt)||_i()):(t=yt,e=ue,n=de,i=fe,a=Ni(),o=Ft,r=_i,l=Math.min(o,10),s=0<=a.indexOf("%")?"%":"px",a=a.replace(s,""),c=Number(t.style[e].replace(n,"").replace(i,"").replace(s,"")),u=(a-c)/o*l,setTimeout(function a(){o-=l,c+=u,t.style[e]=n+c+s+i,0<o?setTimeout(a,l):r()},l)),pt||ta()}:function(){ae=[];var t={};t[$]=t[Z]=_i,D(Ct[pe],t),O(Ct[ve],t),Di(pe,ct,ut,!0),Di(ve,ft,ct),$&&Z&&Ft&&L(yt)||_i()};return{version:"2.9.2",getInfo:ia,events:Me,goTo:qi,play:function(){Ut&&!pn&&(Fi(),gn=!1)},pause:function(){pn&&(ji(),gn=!0)},isOn:Tt,updateSliderHeight:xi,refresh:Xn,destroy:function(){if(ne.disabled=!0,ne.ownerNode&&ne.ownerNode.remove(),D(s,{resize:Zn}),zt&&D(n,He),Je&&D(Je,Be),an&&D(an,Oe),D(yt,De),D(yt,Ie),bn&&D(bn,{click:Vi}),Ut&&clearInterval(vn),ot&&$){var e={};e[$]=_i,D(yt,e)}Kt&&D(yt,_e),Jt&&D(yt,qe);var i=[bt,Ue,tn,en,on,Cn];for(var a in et.forEach(function(e,n){var a="container"===e?ht:t[e];if("object"==typeof a){var o=!!a.previousElementSibling&&a.previousElementSibling,r=a.parentNode;a.outerHTML=i[n],t[e]=o?o.nextElementSibling:r.firstElementChild}}),et=ct=ut=dt=ft=pt=ht=gt=yt=xt=bt=Ct=wt=vt=Mt=Ot=Dt=It=Ht=_t=Pt=Rt=Wt=zt=Ft=jt=Vt=Yt=ne=ie=Et=ae=oe=re=le=se=ce=ue=de=fe=me=ve=pe=he=ge=xe=be=Ce=we=Me=Te=Ee=Le=Se=Ae=ke=Ne=Be=Oe=De=Ie=He=_e=qe=Pe=Re=We=ze=Fe=je=Ve=Ye=Ge=Lt=Gt=Qt=Je=Ue=$e=Ze=Xe=Ke=Xt=an=on=nn=rn=ln=sn=cn=un=dn=fn=mn=Ut=$t=xn=Zt=te=bn=Cn=ee=wn=vn=pn=hn=gn=yn=En=Ln=Mn=Sn=Tn=An=Kt=Jt=null,this)"rebuild"!==a&&(this[a]=null);Tt=!1},rebuild:function(){return H(a(t,nt))}}}function Bn(t){t&&(Gt=Xt=Kt=Jt=zt=Ut=te=ee=!1)}function On(){for(var t=ot?ve-oe:ve;t<0;)t+=wt;return t%wt+1}function Dn(t){return t=t?Math.max(0,Math.min(Vt?wt-1:wt-Pt,t)):0,ot?t+oe:t}function In(t){for(null==t&&(t=ve),ot&&(t-=oe);t<0;)t+=wt;return Math.floor(t%wt)}function Hn(){var t,e=In();return t=We?e:Dt||Ot?Math.ceil((e+1)*rn/wt-1):Math.floor(e/Pt),!Vt&&ot&&ve===ge&&(t=rn-1),t}function _n(){return s.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function qn(t){return"top"===t?"afterbegin":"beforeend"}function Pn(){var t=It?2*It-Ht:0;return function t(e){var i,a,o=n.createElement("div");return e.appendChild(o),a=(i=o.getBoundingClientRect()).right-i.left,o.remove(),a||t(e.parentNode)}(xt)-t}function Rn(e){if(t[e])return!0;if(it)for(var n in it)if(it[n][e])return!0;return!1}function Wn(e,n){if(null==n&&(n=Mt),"items"===e&&Dt)return Math.floor((_t+Ht)/(Dt+Ht))||1;var i=t[e];if(it)for(var a in it)n>=parseInt(a)&&e in it[a]&&(i=it[a][e]);return"slideBy"===e&&"page"===i&&(i=Wn("items")),ot||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function zn(t,e,n,i,a){var o="";if(void 0!==t){var r=t;e&&(r-=e),o=pt?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var l="-"+e+"px";o="margin: 0 "+(pt?l+" 0 0":"0 "+l+" 0")+";"}return!ot&&a&&X&&i&&(o+=Gn(i)),o}function Fn(t,e,n){return t?(t+e)*re+"px":j?j+"("+100*re+"% / "+n+")":100*re/n+"%"}function jn(t,e,n){var i;if(t)i=t+e+"px";else{ot||(n=Math.floor(n));var a=ot?re:n;i=j?j+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==at?i+";":i+" !important;"}function Vn(t){var e="";return!1!==t&&(e=(pt?"padding-":"margin-")+(pt?"right":"bottom")+": "+t+"px;"),e}function Yn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Gn(t){return Yn(X,18)+"transition-duration:"+t/1e3+"s;"}function Qn(t){return Yn(J,17)+"animation-duration:"+t/1e3+"s;"}function Xn(){if(Rn("autoHeight")||Ot||!pt){var t=yt.querySelectorAll("img");m(t,function(t){var e=t.src;e&&e.indexOf("data:image")<0?(O(t,Ge),t.src="",t.src=e,h(t,"loading")):ie||di(t)}),e(function(){pi(M(t),function(){Lt=!0})}),!Ot&&pt&&(t=mi(ve,Math.min(ve+Pt-1,re-1))),ie?Kn():e(function(){pi(M(t),Kn)})}else ot&&Bi(),Un(),$n()}function Kn(){if(Ot){var t=Vt?ve:wt-1;!function e(){Ct[t-1].getBoundingClientRect().right.toFixed(2)===Ct[t].getBoundingClientRect().left.toFixed(2)?Jn():setTimeout(function(){e()},16)}()}else Jn()}function Jn(){pt&&!Ot||(bi(),Ot?(se=ki(),Ae&&(ke=ei()),ge=me(),Bn(Le||ke)):ta()),ot&&Bi(),Un(),$n()}function Un(){if(Ci(),ht.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+si()+"</span>  of "+wt+"</div>"),St=ht.querySelector(".tns-liveregion .current"),ze){var e=Ut?"stop":"start";bn?C(bn,{"data-action":e}):t.autoplayButtonOutput&&(ht.insertAdjacentHTML(qn(t.autoplayPosition),'<button data-action="'+e+'">'+wn[0]+e+wn[1]+Zt[0]+"</button>"),bn=ht.querySelector("[data-action]")),bn&&O(bn,{click:Vi}),Ut&&(Fi(),te&&O(yt,De),ee&&O(yt,Ie))}if(Re){if(an)C(an,{"aria-label":"Carousel Pagination"}),m(nn=an.children,function(t,e){C(t,{"data-nav":e,tabindex:"-1","aria-label":fn+(e+1),"aria-controls":Ee})});else{for(var n="",i=We?"":'style="display:none"',a=0;a<wt;a++)n+='<button data-nav="'+a+'" tabindex="-1" aria-controls="'+Ee+'" '+i+' aria-label="'+fn+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ht.insertAdjacentHTML(qn(t.navPosition),n),an=ht.querySelector(".tns-nav"),nn=an.children}if(na(),X){var o=X.substring(0,X.length-18).toLowerCase(),r="transition: all "+Ft/1e3+"s";o&&(r="-"+o+"-"+r),d(ne,"[aria-controls^="+Ee+"-item]",r,f(ne))}C(nn[cn],{"aria-label":fn+(cn+1)+mn}),w(nn[cn],"tabindex"),h(nn[cn],dn),O(an,Oe)}Pe&&(Je||$e&&Ze||(ht.insertAdjacentHTML(qn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Ee+'">'+Qt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Ee+'">'+Qt[1]+"</button></div>"),Je=ht.querySelector(".tns-controls")),$e&&Ze||($e=Je.children[0],Ze=Je.children[1]),t.controlsContainer&&C(Je,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&C([$e,Ze],{"aria-controls":Ee,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(C($e,{"data-controls":"prev"}),C(Ze,{"data-controls":"next"})),Xe=Mi($e),Ke=Mi(Ze),Li(),Je?O(Je,Be):(O($e,Be),O(Ze,Be))),ii()}function $n(){if(ot&&$){var e={};e[$]=_i,O(yt,e)}Kt&&O(yt,_e,t.preventScrollOnTouch),Jt&&O(yt,qe),zt&&O(n,He),"inner"===at?Me.on("outerResized",function(){ti(),Me.emit("innerLoaded",ia())}):(it||Dt||Ot||Yt||!pt)&&O(s,{resize:Zn}),Yt&&("outer"===at?Me.on("innerLoaded",vi):Le||vi()),ui(),Le?ri():ke&&oi(),Me.on("indexChanged",hi),"inner"===at&&Me.emit("innerLoaded",ia()),"function"==typeof we&&we(ia()),Tt=!0}function Zn(t){e(function(){ti(Gi(t))})}function ti(e){if(Tt){"outer"===at&&Me.emit("outerResized",ia(e)),Mt=_n();var i,a=vt,o=!1;it&&(ni(),(i=a!==vt)&&Me.emit("newBreakpointStart",ia(e)));var r,l,s,c,u=Pt,v=Le,p=ke,y=zt,x=Gt,b=Xt,C=Kt,w=Jt,M=Ut,L=te,S=ee,A=ve;if(i){var k=Dt,N=Yt,B=Qt,I=qt,H=Zt;if(!Y)var _=Ht,q=It}if(zt=Wn("arrowKeys"),Gt=Wn("controls"),Xt=Wn("nav"),Kt=Wn("touch"),qt=Wn("center"),Jt=Wn("mouseDrag"),Ut=Wn("autoplay"),te=Wn("autoplayHoverPause"),ee=Wn("autoplayResetOnVisibility"),i&&(Le=Wn("disable"),Dt=Wn("fixedWidth"),Ft=Wn("speed"),Yt=Wn("autoHeight"),Qt=Wn("controlsText"),Zt=Wn("autoplayText"),$t=Wn("autoplayTimeout"),Y||(It=Wn("edgePadding"),Ht=Wn("gutter"))),Bn(Le),_t=Pn(),pt&&!Ot||Le||(bi(),pt||(ta(),o=!0)),(Dt||Ot)&&(se=ki(),ge=me()),(i||Dt)&&(Pt=Wn("items"),Rt=Wn("slideBy"),(l=Pt!==u)&&(Dt||Ot||(ge=me()),kn())),i&&Le!==v&&(Le?ri():function(){if(Se){if(ne.disabled=!1,yt.className+=Te,Bi(),Vt)for(var t=oe;t--;)ot&&E(Ct[t]),E(Ct[re-t-1]);if(!ot)for(var e=ve,n=ve+wt;e<n;e++){var i=Ct[e],a=e<ve+Pt?ct:ft;i.style.left=100*(e-ve)/Pt+"%",h(i,a)}ai(),Se=!1}}()),Ae&&(i||Dt||Ot)&&(ke=ei())!==p&&(ke?(Oi(Ni(Dn(0))),oi()):(function(){if(Ne){if(It&&Y&&(gt.style.margin=""),oe)for(var t="tns-transparent",e=oe;e--;)ot&&g(Ct[e],t),g(Ct[re-e-1],t);ai(),Ne=!1}}(),o=!0)),Bn(Le||ke),Ut||(te=ee=!1),zt!==y&&(zt?O(n,He):D(n,He)),Gt!==x&&(Gt?Je?E(Je):($e&&E($e),Ze&&E(Ze)):Je?T(Je):($e&&T($e),Ze&&T(Ze))),Xt!==b&&(Xt?E(an):T(an)),Kt!==C&&(Kt?O(yt,_e,t.preventScrollOnTouch):D(yt,_e)),Jt!==w&&(Jt?O(yt,qe):D(yt,qe)),Ut!==M&&(Ut?(bn&&E(bn),pn||gn||Fi()):(bn&&T(bn),pn&&ji())),te!==L&&(te?O(yt,De):D(yt,De)),ee!==S&&(ee?O(n,Ie):D(n,Ie)),i){if(Dt===k&&qt===I||(o=!0),Yt!==N&&(Yt||(gt.style.height="")),Gt&&Qt!==B&&($e.innerHTML=Qt[0],Ze.innerHTML=Qt[1]),bn&&Zt!==H){var P=Ut?1:0,R=bn.innerHTML,W=R.length-H[P].length;R.substring(W)===H[P]&&(bn.innerHTML=R.substring(0,W)+Zt[P])}}else qt&&(Dt||Ot)&&(o=!0);if((l||Dt&&!Ot)&&(rn=ea(),na()),(r=ve!==A)?(Me.emit("indexChanged",ia()),o=!0):l?r||hi():(Dt||Ot)&&(ui(),Ci(),li()),l&&!ot&&function(){for(var t=ve+Math.min(wt,Pt),e=re;e--;){var n=Ct[e];ve<=e&&e<t?(h(n,"tns-moving"),n.style.left=100*(e-ve)/Pt+"%",h(n,ct),g(n,ft)):n.style.left&&(n.style.left="",h(n,ft),g(n,ct)),g(n,ut)}setTimeout(function(){m(Ct,function(t){g(t,"tns-moving")})},300)}(),!Le&&!ke){if(i&&!Y&&(Yt===autoheightTem&&Ft===speedTem||gi(),It===q&&Ht===_||(gt.style.cssText=zn(It,Ht,Dt,Ft,Yt)),pt)){ot&&(yt.style.width=Fn(Dt,Ht,Pt));var z=jn(Dt,Ht,Pt)+Vn(Ht);c=f(s=ne)-1,"deleteRule"in s?s.deleteRule(c):s.removeRule(c),d(ne,"#"+Ee+" > .tns-item",z,f(ne))}Yt&&vi(),o&&(Bi(),pe=ve)}i&&Me.emit("newBreakpointEnd",ia(e))}}function ei(){if(!Dt&&!Ot)return wt<=(qt?Pt-(Pt-1)/2:Pt);var t=Dt?(Dt+Ht)*wt:Et[wt],e=It?_t+2*It:_t+Ht;return qt&&(e-=Dt?(_t-Dt)/2:(_t-(Et[ve+1]-Et[ve]-Ht))/2),t<=e}function ni(){for(var t in vt=0,it)(t=parseInt(t))<=Mt&&(vt=t)}function ii(){!Ut&&bn&&T(bn),!Xt&&an&&T(an),Gt||(Je?T(Je):($e&&T($e),Ze&&T(Ze)))}function ai(){Ut&&bn&&E(bn),Xt&&an&&E(an),Gt&&(Je?E(Je):($e&&E($e),Ze&&E(Ze)))}function oi(){if(!Ne){if(It&&(gt.style.margin="0px"),oe)for(var t="tns-transparent",e=oe;e--;)ot&&h(Ct[e],t),h(Ct[re-e-1],t);ii(),Ne=!0}}function ri(){if(!Se){if(ne.disabled=!0,yt.className=yt.className.replace(Te.substring(1),""),w(yt,["style"]),Vt)for(var t=oe;t--;)ot&&T(Ct[t]),T(Ct[re-t-1]);if(pt&&ot||w(gt,["style"]),!ot)for(var e=ve,n=ve+wt;e<n;e++){var i=Ct[e];w(i,["style"]),g(i,ct),g(i,ft)}ii(),Se=!0}}function li(){var t=si();St.innerHTML!==t&&(St.innerHTML=t)}function si(){var t=ci(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ci(t){null==t&&(t=Ni());var e,n,i,a=ve;if(qt||It?(Ot||Dt)&&(n=-(parseFloat(t)+It),i=n+_t+2*It):Ot&&(n=Et[ve],i=n+_t),Ot)Et.forEach(function(t,o){o<re&&((qt||It)&&t<=n+.5&&(a=o),.5<=i-t&&(e=o))});else{if(Dt){var o=Dt+Ht;qt||It?(a=Math.floor(n/o),e=Math.ceil(i/o-1)):e=a+Math.ceil(_t/o)-1}else if(qt||It){var r=Pt-1;if(qt?(a-=r/2,e=ve+r/2):e=ve+r,It){var l=It*Pt/_t;a-=l,e+=l}a=Math.floor(a),e=Math.ceil(e)}else e=a+Pt-1;a=Math.max(a,0),e=Math.min(e,re-1)}return[a,e]}function ui(){ie&&!Le&&mi.apply(null,ci()).forEach(function(t){if(!p(t,Ye)){var e={};e[$]=function(t){t.stopPropagation()},O(t,e),O(t,Ge),t.src=x(t,"data-src");var n=x(t,"data-srcset");n&&(t.srcset=n),h(t,"loading")}})}function di(t){h(t,"loaded"),fi(t)}function fi(t){h(t,"tns-complete"),g(t,"loading"),D(t,Ge)}function mi(t,e){for(var n=[];t<=e;)m(Ct[t].querySelectorAll("img"),function(t){n.push(t)}),t++;return n}function vi(){var t=mi.apply(null,ci());e(function(){pi(t,xi)})}function pi(t,n){return Lt?n():(t.forEach(function(e,n){p(e,Ye)&&t.splice(n,1)}),t.length?void e(function(){pi(t,n)}):n())}function hi(){ui(),Ci(),li(),Li(),function(){if(Xt&&(cn=0<=sn?sn:Hn(),sn=-1,cn!==un)){var t=nn[un],e=nn[cn];C(t,{tabindex:"-1","aria-label":fn+(un+1)}),g(t,dn),C(e,{"aria-label":fn+(cn+1)+mn}),w(e,"tabindex"),h(e,dn),un=cn}}()}function gi(){ot&&Yt&&(mt.style[X]=Ft/1e3+"s")}function yi(t,e){for(var n=[],i=t,a=Math.min(t+e,re);i<a;i++)n.push(Ct[i].offsetHeight);return Math.max.apply(null,n)}function xi(){var t=Yt?yi(ve,Pt):yi(oe,wt),e=mt||gt;e.style.height!==t&&(e.style.height=t+"px")}function bi(){Et=[0];var t=pt?"left":"top",e=pt?"right":"bottom",n=Ct[0].getBoundingClientRect()[t];m(Ct,function(i,a){a&&Et.push(i.getBoundingClientRect()[t]-n),a===re-1&&Et.push(i.getBoundingClientRect()[e]-n)})}function Ci(){var t=ci(),e=t[0],n=t[1];m(Ct,function(t,i){e<=i&&i<=n?y(t,"aria-hidden")&&(w(t,["aria-hidden","tabindex"]),h(t,Ve)):y(t,"aria-hidden")||(C(t,{"aria-hidden":"true",tabindex:"-1"}),g(t,Ve))})}function wi(t){return t.nodeName.toLowerCase()}function Mi(t){return"button"===wi(t)}function Ti(t){return"true"===t.getAttribute("aria-disabled")}function Ei(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Li(){if(Gt&&!jt&&!Vt){var t=Xe?$e.disabled:Ti($e),e=Ke?Ze.disabled:Ti(Ze),n=ve<=he,i=!jt&&ge<=ve;n&&!t&&Ei(Xe,$e,!0),!n&&t&&Ei(Xe,$e,!1),i&&!e&&Ei(Ke,Ze,!0),!i&&e&&Ei(Ke,Ze,!1)}}function Si(t,e){X&&(t.style[X]=e)}function Ai(t){return null==t&&(t=ve),Ot?(_t-(It?Ht:0)-(Et[t+1]-Et[t]-Ht))/2:Dt?(_t-Dt)/2:(Pt-1)/2}function ki(){var t=_t+(It?Ht:0)-(Dt?(Dt+Ht)*re:Et[re]);return qt&&!Vt&&(t=Dt?-(Dt+Ht)*(re-1)-Ai():Ai(re-1)-Et[re-1]),0<t&&(t=0),t}function Ni(t){var e;if(null==t&&(t=ve),pt&&!Ot)if(Dt)e=-(Dt+Ht)*t,qt&&(e+=Ai());else{var n=G?re:Pt;qt&&(t-=Ai()),e=100*-t/n}else e=-Et[t],qt&&Ot&&(e+=Ai());return le&&(e=Math.max(e,se)),e+(!pt||Ot||Dt?"px":"%")}function Bi(t){Si(yt,"0s"),Oi(t)}function Oi(t){null==t&&(t=Ni()),yt.style[ue]=de+t+fe}function Di(t,e,n,i){var a=t+Pt;Vt||(a=Math.min(a,re));for(var o=t;o<a;o++){var r=Ct[o];i||(r.style.left=100*(o-ve)/Pt+"%"),dt&&K&&(r.style[K]=r.style[U]=dt*(o-t)/1e3+"s"),g(r,e),h(r,n),i&&ae.push(r)}}function Ii(t,e){ce&&kn(),(ve!==pe||e)&&(Me.emit("indexChanged",ia()),Me.emit("transitionStart",ia()),Yt&&vi(),pn&&t&&0<=["click","keydown"].indexOf(t.type)&&ji(),Ce=!0,Nn())}function Hi(t){return t.toLowerCase().replace(/-/g,"")}function _i(t){if(ot||Ce){if(Me.emit("transitionEnd",ia(t)),!ot&&0<ae.length)for(var e=0;e<ae.length;e++){var n=ae[e];n.style.left="",U&&K&&(n.style[U]="",n.style[K]=""),g(n,ut),h(n,ft)}if(!t||!ot&&t.target.parentNode===yt||t.target===yt&&Hi(t.propertyName)===Hi(ue)){if(!ce){var i=ve;kn(),ve!==i&&(Me.emit("indexChanged",ia()),Bi())}"inner"===at&&Me.emit("innerLoaded",ia()),Ce=!1,pe=ve}}}function qi(t,e){if(!ke)if("prev"===t)Pi(e,-1);else if("next"===t)Pi(e,1);else{if(Ce){if(ye)return;_i()}var n=In(),i=0;if("first"===t?i=-n:"last"===t?i=ot?wt-Pt-n:wt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(wt-1,t))),i=t-n)),!ot&&i&&Math.abs(i)<Pt){var a=0<i?1:-1;i+=he<=ve+i-wt?wt*a:2*wt*a*-1}ve+=i,ot&&Vt&&(ve<he&&(ve+=wt),ge<ve&&(ve-=wt)),In(ve)!==In(pe)&&Ii(e)}}function Pi(t,e){if(Ce){if(ye)return;_i()}var n;if(!e){for(var i=Qi(t=Gi(t));i!==Je&&[$e,Ze].indexOf(i)<0;)i=i.parentNode;var a=[$e,Ze].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(jt){if(ve===he&&-1===e)return void qi("last",t);if(ve===ge&&1===e)return void qi("first",t)}e&&(ve+=Rt*e,Ot&&(ve=Math.floor(ve)),Ii(n||t&&"keydown"===t.type?t:null))}function Ri(){vn=setInterval(function(){Pi(null,xn)},$t),pn=!0}function Wi(){clearInterval(vn),pn=!1}function zi(t,e){C(bn,{"data-action":t}),bn.innerHTML=wn[0]+t+wn[1]+e}function Fi(){Ri(),bn&&zi("stop",Zt[1])}function ji(){Wi(),bn&&zi("start",Zt[0])}function Vi(){pn?(ji(),gn=!0):(Fi(),gn=!1)}function Yi(t){t.focus()}function Gi(t){return Xi(t=t||s.event)?t.changedTouches[0]:t}function Qi(t){return t.target||s.event.srcElement}function Xi(t){return 0<=t.type.indexOf("touch")}function Ki(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ji(){return o=Ln.y-En.y,r=Ln.x-En.x,e=Math.atan2(o,r)*(180/Math.PI),i=!1,90-(n=xe)<=(a=Math.abs(90-Math.abs(e)))?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,o,r}function Ui(t){if(Ce){if(ye)return;_i()}Ut&&pn&&Wi(),Sn=!0,Tn&&(i(Tn),Tn=null);var e=Gi(t);Me.emit(Xi(t)?"touchStart":"dragStart",ia(t)),!Xi(t)&&0<=["img","a"].indexOf(wi(Qi(t)))&&Ki(t),Ln.x=En.x=e.clientX,Ln.y=En.y=e.clientY,ot&&(Mn=parseFloat(yt.style[ue].replace(de,"")),Si(yt,"0s"))}function $i(t){if(Sn){var n=Gi(t);Ln.x=n.clientX,Ln.y=n.clientY,ot?Tn||(Tn=e(function(){!function t(n){if(be){if(i(Tn),Sn&&(Tn=e(function(){t(n)})),"?"===be&&(be=Ji()),be){!Qe&&Xi(n)&&(Qe=!0);try{n.type&&Me.emit(Xi(n)?"touchMove":"dragMove",ia(n))}catch(t){}var a=Mn,o=An(Ln,En);if(!pt||Dt||Ot)a+=o,a+="px";else a+=G?o*Pt*100/((_t+Ht)*re):100*o/(_t+Ht),a+="%";yt.style[ue]=de+a+fe}}else Sn=!1}(t)})):("?"===be&&(be=Ji()),be&&(Qe=!0)),Qe&&t.preventDefault()}}function Zi(n){if(Sn){Tn&&(i(Tn),Tn=null),ot&&Si(yt,""),Sn=!1;var a=Gi(n);Ln.x=a.clientX,Ln.y=a.clientY;var o=An(Ln,En);if(Math.abs(o)){if(!Xi(n)){var r=Qi(n);O(r,{click:function t(e){Ki(e),D(r,{click:t})}})}ot?Tn=e(function(){if(pt&&!Ot){var t=-o*Pt/(_t+Ht);t=0<o?Math.floor(t):Math.ceil(t),ve+=t}else{var e=-(Mn+o);if(e<=0)ve=he;else if(e>=Et[re-1])ve=ge;else for(var i=0;i<re&&e>=Et[i];)e>Et[ve=i]&&o<0&&(ve+=1),i++}Ii(n,o),Me.emit(Xi(n)?"touchEnd":"dragEnd",ia(n))}):be&&Pi(n,0<o?-1:1)}}"auto"===t.preventScrollOnTouch&&(Qe=!1),xe&&(be="?"),Ut&&!pn&&Ri()}function ta(){(mt||gt).style.height=Et[ve+Pt]-Et[ve]+"px"}function ea(){var t=Dt?(Dt+Ht)*wt/_t:wt/Pt;return Math.min(Math.ceil(t),wt)}function na(){if(Xt&&!We&&rn!==ln){var t=ln,e=rn,n=E;for(rn<ln&&(t=rn,e=ln,n=T);t<e;)n(nn[t]),t++;ln=rn}}function ia(t){return{container:yt,slideItems:Ct,navContainer:an,navItems:nn,controlsContainer:Je,hasControls:Pe,prevButton:$e,nextButton:Ze,items:Pt,slideBy:Rt,cloneCount:oe,slideCount:wt,slideCountNew:re,index:ve,indexCached:pe,displayIndex:On(),navCurrentIndex:cn,navCurrentIndexCached:un,pages:rn,pagesCached:ln,sheet:ne,isOn:Tt,event:t||{}}}tt&&console.warn("No slides found in",t.container)};return H}();