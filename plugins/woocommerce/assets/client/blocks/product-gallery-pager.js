(()=>{var e,t={2747:(e,t,r)=>{"use strict";r.d(t,{e:()=>o});let o=function(e){return e.DIGITS="digits",e.DOTS="dots",e.OFF="off",e}({})},1019:(e,t,r)=>{"use strict";r.d(t,{$_:()=>a,j5:()=>i,jW:()=>s,oc:()=>c,xT:()=>n});var o=r(9196),l=r(444);const c=()=>(0,o.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.00018 11L7.00018 11L7.00018 13H5.00018V11ZM11.0002 11L13.0002 11V13H11.0002V11ZM17.0002 11L19.0002 11V13H17.0002V11Z",fill:"currentColor"})),n=(0,o.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12"},(0,o.createElement)("circle",{cx:"6",cy:"6",r:"6",fill:"black",fillOpacity:"0.2"})),a=(0,o.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12"},(0,o.createElement)("circle",{cx:"6",cy:"6",r:"6",fill:"black"})),s=()=>(0,o.createElement)(l.SVG,{width:"80",height:"36",viewBox:"0 0 80 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("circle",{cx:"32.6665",cy:"18",r:"3",fill:"currentColor"}),(0,o.createElement)("circle",{cx:"40.6665",cy:"18",r:"2.25",stroke:"currentColor",strokeWidth:"1.5"}),(0,o.createElement)("circle",{cx:"48.6665",cy:"18",r:"2.25",stroke:"currentColor",strokeWidth:"1.5"})),i=()=>(0,o.createElement)(l.SVG,{width:"80",height:"36",viewBox:"0 0 80 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{d:"M30.1417 22H31.9288V14.9541H30.1417L28.3497 16.1748V17.7178L30.0489 16.5703H30.1417V22ZM36.9771 22H41.7231V21.0674H38.4663V20.9697L39.9604 19.4805C41.2397 18.2109 41.6108 17.5957 41.6108 16.7949V16.7803C41.6108 15.6182 40.644 14.7832 39.3306 14.7832C37.9146 14.7832 36.9185 15.6914 36.9136 16.9805L36.9233 16.9902H37.9487L37.9536 16.9756C37.9536 16.2041 38.481 15.6865 39.272 15.6865C40.0435 15.6865 40.5171 16.1943 40.5171 16.8828V16.8975C40.5171 17.4688 40.2485 17.8301 39.3159 18.8018L36.9771 21.2578V22ZM48.7392 22.1318C50.2333 22.1318 51.2929 21.2627 51.2929 20.0518V20.042C51.2929 19.0557 50.5995 18.4307 49.5644 18.3379V18.3135C50.4237 18.1328 51.0487 17.5469 51.0487 16.6729V16.6631C51.0487 15.5742 50.1308 14.8223 48.7294 14.8223C47.3524 14.8223 46.4149 15.6084 46.3075 16.7949L46.3026 16.8486H47.328L47.3329 16.7998C47.4013 16.1357 47.9481 15.7207 48.7294 15.7207C49.5253 15.7207 49.9843 16.1211 49.9843 16.8047V16.8145C49.9843 17.4688 49.4374 17.9424 48.6317 17.9424H47.8065V18.792H48.6659C49.6034 18.792 50.1796 19.2363 50.1796 20.0322V20.042C50.1796 20.7354 49.5985 21.2188 48.7392 21.2188C47.8651 21.2188 47.2743 20.7695 47.206 20.1299L47.2011 20.0811H46.1562L46.161 20.1396C46.2538 21.3066 47.2353 22.1318 48.7392 22.1318Z",fill:"currentColor"}))},531:(e,t,r)=>{"use strict";r.r(t);var o=r(4981),l=r(1019),c=r(9196),n=r(2911),a=r(2175),s=r(5609),i=r(3849),p=r.n(i),u=r(5532),m=r(2747);const w=()=>{const e=Array.from({length:4},((e,t)=>{const r=0===t;return(0,c.createElement)("li",{className:"wc-block-editor-product-gallery-pager__item "+(r?"is-active":""),key:t},t+1)}));return(0,c.createElement)("ul",{className:"wc-block-editor-product-gallery-pager__pager"},e)},d=e=>{const{iconClass:t}=e,r=Array.from({length:3},((e,r)=>{const o=0===r?l.$_:l.xT;return(0,c.createElement)("li",{key:r},(0,c.createElement)(n.Z,{className:t,icon:o,size:12}))}));return(0,c.createElement)("ul",{className:"wc-block-editor-product-gallery-pager__pager"},r)},g=e=>{const{pagerDisplayMode:t}=e;switch(t){case m.e.DOTS:return(0,c.createElement)(d,null);case m.e.DIGITS:return(0,c.createElement)(w,null);case m.e.OFF:return null;default:return(0,c.createElement)(d,null)}},h=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery-pager","version":"1.0.0","title":"Pager","description":"Display the gallery pager.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","ancestor":["woocommerce/product-gallery"],"usesContext":["pagerDisplayMode","productGalleryClientId","thumbnailsNumberOfThumbnails","postId"]}');r(3369),(0,o.registerBlockType)(h,{icon:l.oc,edit:e=>{const{context:t}=e,r=(0,a.useBlockProps)({className:p()("wc-block-editor-product-gallery-pager","wc-block-product-gallery-pager")});return(0,c.createElement)("div",{...r},(0,c.createElement)(a.InspectorControls,null,(0,c.createElement)(s.PanelBody,null,(0,c.createElement)(u.y,{context:t}))),(0,c.createElement)(g,{pagerDisplayMode:t.pagerDisplayMode}))},save:()=>null})},5532:(e,t,r)=>{"use strict";r.d(t,{y:()=>u});var o=r(9196),l=r(2175),c=r(9818),n=r(5736),a=r(5609),s=r(2747),i=r(1019);const p=e=>{switch(e){case s.e.DIGITS:return(0,n.__)("A list of numbers will show to indicate the number of items.","woocommerce");case s.e.DOTS:return(0,n.__)("A series of dots will show to indicate the number of items.","woocommerce");default:return(0,n.__)("No pager will be displayed.","woocommerce")}},u=({context:e})=>{const{productGalleryClientId:t,pagerDisplayMode:r}=e,{updateBlockAttributes:u}=(0,c.useDispatch)(l.store);return(0,o.createElement)(a.__experimentalToggleGroupControl,{label:(0,n.__)("Pager","woocommerce"),style:{width:"100%"},onChange:e=>{u(t,{pagerDisplayMode:e})},help:p(r),value:r},(0,o.createElement)(a.__experimentalToggleGroupControlOption,{value:s.e.OFF,label:(0,n.__)("Off","woocommerce")}),(0,o.createElement)(a.__experimentalToggleGroupControlOption,{value:s.e.DOTS,label:(0,o.createElement)(i.jW,null)}),(0,o.createElement)(a.__experimentalToggleGroupControlOption,{value:s.e.DIGITS,label:(0,o.createElement)(i.j5,null)}))}},3369:()=>{},9196:e=>{"use strict";e.exports=window.React},2175:e=>{"use strict";e.exports=window.wp.blockEditor},4981:e=>{"use strict";e.exports=window.wp.blocks},5609:e=>{"use strict";e.exports=window.wp.components},9818:e=>{"use strict";e.exports=window.wp.data},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},444:e=>{"use strict";e.exports=window.wp.primitives}},r={};function o(e){var l=r[e];if(void 0!==l)return l.exports;var c=r[e]={exports:{}};return t[e].call(c.exports,c,c.exports,o),c.exports}o.m=t,e=[],o.O=(t,r,l,c)=>{if(!r){var n=1/0;for(p=0;p<e.length;p++){for(var[r,l,c]=e[p],a=!0,s=0;s<r.length;s++)(!1&c||n>=c)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(a=!1,c<n&&(n=c));if(a){e.splice(p--,1);var i=l();void 0!==i&&(t=i)}}return t}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[r,l,c]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=5609,(()=>{var e={5609:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var l,c,[n,a,s]=r,i=0;if(n.some((t=>0!==e[t]))){for(l in a)o.o(a,l)&&(o.m[l]=a[l]);if(s)var p=s(o)}for(t&&t(r);i<n.length;i++)c=n[i],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(p)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=o.O(void 0,[2869],(()=>o(531)));l=o.O(l),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-gallery-pager"]=l})();