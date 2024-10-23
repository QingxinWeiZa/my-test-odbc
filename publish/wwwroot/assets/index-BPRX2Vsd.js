import{r as Uo,f as Ro,S as Vo,M as Ho,C as n,K as Ko,aS as so,ai as Xo,ad as Yo,ax as Qo,cg as qo,al as Jo,au as Zo,ah as ko,ch as oe,d as $,e as P,aT as K,Y as co,l as p,D as W,P as F,bL as no,aY as So,E as uo,ci as Wo,bc as ee,I as O,o as mo,B as Co,R as po,bK as Do,b_ as lo,w as Lo,c as te,n as Oo,c8 as re,bd as xo,a8 as Io,aQ as go,bg as ne,b0 as le,bk as Ao,U as ae,aU as ie,a1 as se,c0 as ce}from"./index-BtU2wmtS.js";function H(o){const e=typeof o=="function"?o():o,t=Uo(e);function r(l){t.value=l}return[t,r]}function No(o){const e=Symbol("contextKey");return{useProvide:(l,s)=>{const i=Ro({});return Vo(e,i),Ho(()=>{n(i,l,s||{})}),i},useInject:()=>Ko(e,o)||{}}}const de=o=>{const{componentCls:e}=o;return{[e]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},ue=o=>{const{componentCls:e}=o;return{[e]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${e}-item`]:{"&:empty":{display:"none"}}}}},me=so("Space",o=>[ue(o),de(o)]);var pe="[object Map]",ge="[object Set]",fe=Object.prototype,ve=fe.hasOwnProperty;function jo(o){if(o==null)return!0;if(Xo(o)&&(Yo(o)||typeof o=="string"||typeof o.splice=="function"||Qo(o)||qo(o)||Jo(o)))return!o.length;var e=Zo(o);if(e==pe||e==ge)return!o.size;if(ko(o))return!oe(o).length;for(var t in o)if(ve.call(o,t))return!1;return!0}const be=()=>({compactSize:String,compactDirection:F.oneOf(no("horizontal","vertical")).def("horizontal"),isFirstItem:So(),isLastItem:So()}),X=No(null),ye=(o,e)=>{const t=X.useInject(),r=$(()=>{if(!t||jo(t))return"";const{compactDirection:l,isFirstItem:s,isLastItem:i}=t,d=l==="vertical"?"-vertical-":"-";return uo({[`${o.value}-compact${d}item`]:!0,[`${o.value}-compact${d}first-item`]:s,[`${o.value}-compact${d}last-item`]:i,[`${o.value}-compact${d}item-rtl`]:e.value==="rtl"})});return{compactSize:$(()=>t==null?void 0:t.compactSize),compactDirection:$(()=>t==null?void 0:t.compactDirection),compactItemClassnames:r}},ot=P({name:"NoCompactStyle",setup(o,e){let{slots:t}=e;return X.useProvide(null),()=>{var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}}),he=()=>({prefixCls:String,size:{type:String},direction:F.oneOf(no("horizontal","vertical")).def("horizontal"),align:F.oneOf(no("start","end","center","baseline")),block:{type:Boolean,default:void 0}}),$e=P({name:"CompactItem",props:be(),setup(o,e){let{slots:t}=e;return X.useProvide(o),()=>{var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}}),et=P({name:"ASpaceCompact",inheritAttrs:!1,props:he(),setup(o,e){let{attrs:t,slots:r}=e;const{prefixCls:l,direction:s}=K("space-compact",o),i=X.useInject(),[d,m]=me(l),S=$(()=>uo(l.value,m.value,{[`${l.value}-rtl`]:s.value==="rtl",[`${l.value}-block`]:o.block,[`${l.value}-vertical`]:o.direction==="vertical"}));return()=>{var c;const g=co(((c=r.default)===null||c===void 0?void 0:c.call(r))||[]);return g.length===0?null:d(p("div",W(W({},t),{},{class:[S.value,t.class]}),[g.map((b,R)=>{var I;const E=b&&b.key||`${l.value}-item-${R}`,C=!i||jo(i);return p($e,{key:E,compactSize:(I=o.size)!==null&&I!==void 0?I:"middle",compactDirection:o.direction,isFirstItem:R===0&&(C||(i==null?void 0:i.isFirstItem)),isLastItem:R===g.length-1&&(C||(i==null?void 0:i.isLastItem))},{default:()=>[b]})})]))}}});function Se(o,e,t){const{focusElCls:r,focus:l,borderElCls:s}=t,i=s?"> *":"",d=["hover",l?"focus":null,"active"].filter(Boolean).map(m=>`&:${m} ${i}`).join(",");return{[`&-item:not(${e}-last-item)`]:{marginInlineEnd:-o.lineWidth},"&-item":n(n({[d]:{zIndex:2}},r?{[`&${r}`]:{zIndex:2}}:{}),{[`&[disabled] ${i}`]:{zIndex:0}})}}function Ce(o,e,t){const{borderElCls:r}=t,l=r?`> ${r}`:"";return{[`&-item:not(${e}-first-item):not(${e}-last-item) ${l}`]:{borderRadius:0},[`&-item:not(${e}-last-item)${e}-first-item`]:{[`& ${l}, &${o}-sm ${l}, &${o}-lg ${l}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${e}-first-item)${e}-last-item`]:{[`& ${l}, &${o}-sm ${l}, &${o}-lg ${l}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function xe(o){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:t}=o,r=`${t}-compact`;return{[r]:n(n({},Se(o,r,e)),Ce(t,r,e))}}const Ie=o=>{const{componentCls:e,colorPrimary:t}=o;return{[e]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${t})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${o.motionEaseOutCirc}`,`opacity 2s ${o.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0}}}}},Ee=so("Wave",o=>[Ie(o)]);function Be(o){const e=(o||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return e&&e[1]&&e[2]&&e[3]?!(e[1]===e[2]&&e[2]===e[3]):!0}function to(o){return o&&o!=="#fff"&&o!=="#ffffff"&&o!=="rgb(255, 255, 255)"&&o!=="rgba(255, 255, 255, 1)"&&Be(o)&&!/rgba\((?:\d*, ){3}0\)/.test(o)&&o!=="transparent"}function Te(o){const{borderTopColor:e,borderColor:t,backgroundColor:r}=getComputedStyle(o);return to(e)?e:to(t)?t:to(r)?r:null}function ro(o){return Number.isNaN(o)?0:o}const we=P({props:{target:ee(),className:String},setup(o){const e=O(null),[t,r]=H(null),[l,s]=H([]),[i,d]=H(0),[m,S]=H(0),[c,g]=H(0),[b,R]=H(0),[I,E]=H(!1);function C(){const{target:u}=o,f=getComputedStyle(u);r(Te(u));const L=f.position==="static",{borderLeftWidth:Q,borderTopWidth:q}=f;d(L?u.offsetLeft:ro(-parseFloat(Q))),S(L?u.offsetTop:ro(-parseFloat(q))),g(u.offsetWidth),R(u.offsetHeight);const{borderTopLeftRadius:J,borderTopRightRadius:bo,borderBottomLeftRadius:yo,borderBottomRightRadius:a}=f;s([J,bo,a,yo].map(v=>ro(parseFloat(v))))}let B,h,z;const D=()=>{clearTimeout(z),Co.cancel(h),B==null||B.disconnect()},A=()=>{var u;const f=(u=e.value)===null||u===void 0?void 0:u.parentElement;f&&(Wo(null,f),f.parentElement&&f.parentElement.removeChild(f))};mo(()=>{D(),z=setTimeout(()=>{A()},5e3);const{target:u}=o;u&&(h=Co(()=>{C(),E(!0)}),typeof ResizeObserver<"u"&&(B=new ResizeObserver(C),B.observe(u)))}),po(()=>{D()});const Y=u=>{u.propertyName==="opacity"&&A()};return()=>{if(!I.value)return null;const u={left:`${i.value}px`,top:`${m.value}px`,width:`${c.value}px`,height:`${b.value}px`,borderRadius:l.value.map(f=>`${f}px`).join(" ")};return t&&(u["--wave-color"]=t.value),p(Do,{appear:!0,name:"wave-motion",appearFromClass:"wave-motion-appear",appearActiveClass:"wave-motion-appear",appearToClass:"wave-motion-appear wave-motion-appear-active"},{default:()=>[p("div",{ref:e,class:o.className,style:u,onTransitionend:Y},null)]})}}});function ze(o,e){const t=document.createElement("div");t.style.position="absolute",t.style.left="0px",t.style.top="0px",o==null||o.insertBefore(t,o==null?void 0:o.firstChild),Wo(p(we,{target:o,className:e},null),t)}function Pe(o,e,t){function r(){var l;const s=lo(o);!((l=t==null?void 0:t.value)===null||l===void 0)&&l.disabled||!s||ze(s,e.value)}return r}const Re=P({compatConfig:{MODE:3},name:"Wave",props:{disabled:Boolean},setup(o,e){let{slots:t}=e;const r=te(),{prefixCls:l,wave:s}=K("wave",o),[,i]=Ee(l),d=Pe(r,$(()=>uo(l.value,i.value)),s);let m;const S=()=>{lo(r).removeEventListener("click",m,!0)};return mo(()=>{Lo(()=>o.disabled,()=>{S(),Oo(()=>{const c=lo(r);c==null||c.removeEventListener("click",m,!0),!(!c||c.nodeType!==1||o.disabled)&&(m=g=>{g.target.tagName==="INPUT"||!re(g.target)||!c.getAttribute||c.getAttribute("disabled")||c.disabled||c.className.includes("disabled")||c.className.includes("-leave")||d()},c.addEventListener("click",m,!0))})},{immediate:!0,flush:"post"})}),po(()=>{S()}),()=>{var c;return(c=t.default)===null||c===void 0?void 0:c.call(t)[0]}}});function tt(o){return o==="danger"?{danger:!0}:{type:o}}const He=()=>({prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:()=>!1},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:F.any,href:String,target:String,title:String,onClick:xo(),onMousedown:xo()}),Eo=o=>{o&&(o.style.width="0px",o.style.opacity="0",o.style.transform="scale(0)")},Bo=o=>{Oo(()=>{o&&(o.style.width=`${o.scrollWidth}px`,o.style.opacity="1",o.style.transform="scale(1)")})},To=o=>{o&&o.style&&(o.style.width=null,o.style.opacity=null,o.style.transform=null)},We=P({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup(o){return()=>{const{existIcon:e,prefixCls:t,loading:r}=o;if(e)return p("span",{class:`${t}-loading-icon`},[p(Io,null,null)]);const l=!!r;return p(Do,{name:`${t}-loading-icon-motion`,onBeforeEnter:Eo,onEnter:Bo,onAfterEnter:To,onBeforeLeave:Bo,onLeave:s=>{setTimeout(()=>{Eo(s)})},onAfterLeave:To},{default:()=>[l?p("span",{class:`${t}-loading-icon`},[p(Io,null,null)]):null]})}}}),wo=(o,e)=>({[`> span, > ${o}`]:{"&:not(:last-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineEndColor:e}}},"&:not(:first-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineStartColor:e}}}}}),De=o=>{const{componentCls:e,fontSize:t,lineWidth:r,colorPrimaryHover:l,colorErrorHover:s}=o;return{[`${e}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:-r,[`&, & > ${e}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[e]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${e}-icon-only`]:{fontSize:t}},wo(`${e}-primary`,l),wo(`${e}-danger`,s)]}};function Le(o,e){return{[`&-item:not(${e}-last-item)`]:{marginBottom:-o.lineWidth},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function Oe(o,e){return{[`&-item:not(${e}-first-item):not(${e}-last-item)`]:{borderRadius:0},[`&-item${e}-first-item:not(${e}-last-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${e}-last-item:not(${e}-first-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function Ae(o){const e=`${o.componentCls}-compact-vertical`;return{[e]:n(n({},Le(o,e)),Oe(o.componentCls,e))}}const Ne=o=>{const{componentCls:e,iconCls:t}=o;return{[e]:{outline:"none",position:"relative",display:"inline-block",fontWeight:400,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",backgroundColor:"transparent",border:`${o.lineWidth}px ${o.lineType} transparent`,cursor:"pointer",transition:`all ${o.motionDurationMid} ${o.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",lineHeight:o.lineHeight,color:o.colorText,"> span":{display:"inline-block"},[`> ${t} + span, > span + ${t}`]:{marginInlineStart:o.marginXS},"> a":{color:"currentColor"},"&:not(:disabled)":n({},ne(o)),[`&-icon-only${e}-compact-item`]:{flex:"none"},[`&-compact-item${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-o.lineWidth,insetInlineStart:-o.lineWidth,display:"inline-block",width:o.lineWidth,height:`calc(100% + ${o.lineWidth*2}px)`,backgroundColor:o.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-vertical-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-o.lineWidth,insetInlineStart:-o.lineWidth,display:"inline-block",width:`calc(100% + ${o.lineWidth*2}px)`,height:o.lineWidth,backgroundColor:o.colorPrimaryHover,content:'""'}}}}}}},w=(o,e)=>({"&:not(:disabled)":{"&:hover":o,"&:active":e}}),je=o=>({minWidth:o.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),_e=o=>({borderRadius:o.controlHeight,paddingInlineStart:o.controlHeight/2,paddingInlineEnd:o.controlHeight/2}),ao=o=>({cursor:"not-allowed",borderColor:o.colorBorder,color:o.colorTextDisabled,backgroundColor:o.colorBgContainerDisabled,boxShadow:"none"}),U=(o,e,t,r,l,s,i)=>({[`&${o}-background-ghost`]:n(n({color:e||void 0,backgroundColor:"transparent",borderColor:t||void 0,boxShadow:"none"},w(n({backgroundColor:"transparent"},s),n({backgroundColor:"transparent"},i))),{"&:disabled":{cursor:"not-allowed",color:r||void 0,borderColor:l||void 0}})}),fo=o=>({"&:disabled":n({},ao(o))}),_o=o=>n({},fo(o)),V=o=>({"&:disabled":{cursor:"not-allowed",color:o.colorTextDisabled}}),Mo=o=>n(n(n(n(n({},_o(o)),{backgroundColor:o.colorBgContainer,borderColor:o.colorBorder,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlTmpOutline}`}),w({color:o.colorPrimaryHover,borderColor:o.colorPrimaryHover},{color:o.colorPrimaryActive,borderColor:o.colorPrimaryActive})),U(o.componentCls,o.colorBgContainer,o.colorBgContainer,o.colorTextDisabled,o.colorBorder)),{[`&${o.componentCls}-dangerous`]:n(n(n({color:o.colorError,borderColor:o.colorError},w({color:o.colorErrorHover,borderColor:o.colorErrorBorderHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),U(o.componentCls,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder)),fo(o))}),Me=o=>n(n(n(n(n({},_o(o)),{color:o.colorTextLightSolid,backgroundColor:o.colorPrimary,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlOutline}`}),w({color:o.colorTextLightSolid,backgroundColor:o.colorPrimaryHover},{color:o.colorTextLightSolid,backgroundColor:o.colorPrimaryActive})),U(o.componentCls,o.colorPrimary,o.colorPrimary,o.colorTextDisabled,o.colorBorder,{color:o.colorPrimaryHover,borderColor:o.colorPrimaryHover},{color:o.colorPrimaryActive,borderColor:o.colorPrimaryActive})),{[`&${o.componentCls}-dangerous`]:n(n(n({backgroundColor:o.colorError,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.colorErrorOutline}`},w({backgroundColor:o.colorErrorHover},{backgroundColor:o.colorErrorActive})),U(o.componentCls,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder,{color:o.colorErrorHover,borderColor:o.colorErrorHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),fo(o))}),Ge=o=>n(n({},Mo(o)),{borderStyle:"dashed"}),Fe=o=>n(n(n({color:o.colorLink},w({color:o.colorLinkHover},{color:o.colorLinkActive})),V(o)),{[`&${o.componentCls}-dangerous`]:n(n({color:o.colorError},w({color:o.colorErrorHover},{color:o.colorErrorActive})),V(o))}),Ue=o=>n(n(n({},w({color:o.colorText,backgroundColor:o.colorBgTextHover},{color:o.colorText,backgroundColor:o.colorBgTextActive})),V(o)),{[`&${o.componentCls}-dangerous`]:n(n({color:o.colorError},V(o)),w({color:o.colorErrorHover,backgroundColor:o.colorErrorBg},{color:o.colorErrorHover,backgroundColor:o.colorErrorBg}))}),Ve=o=>n(n({},ao(o)),{[`&${o.componentCls}:hover`]:n({},ao(o))}),Ke=o=>{const{componentCls:e}=o;return{[`${e}-default`]:Mo(o),[`${e}-primary`]:Me(o),[`${e}-dashed`]:Ge(o),[`${e}-link`]:Fe(o),[`${e}-text`]:Ue(o),[`${e}-disabled`]:Ve(o)}},vo=function(o){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:t,iconCls:r,controlHeight:l,fontSize:s,lineHeight:i,lineWidth:d,borderRadius:m,buttonPaddingHorizontal:S}=o,c=Math.max(0,(l-s*i)/2-d),g=S-d,b=`${t}-icon-only`;return[{[`${t}${e}`]:{fontSize:s,height:l,padding:`${c}px ${g}px`,borderRadius:m,[`&${b}`]:{width:l,paddingInlineStart:0,paddingInlineEnd:0,[`&${t}-round`]:{width:"auto"},"> span":{transform:"scale(1.143)"}},[`&${t}-loading`]:{opacity:o.opacityLoading,cursor:"default"},[`${t}-loading-icon`]:{transition:`width ${o.motionDurationSlow} ${o.motionEaseInOut}, opacity ${o.motionDurationSlow} ${o.motionEaseInOut}`},[`&:not(${b}) ${t}-loading-icon > ${r}`]:{marginInlineEnd:o.marginXS}}},{[`${t}${t}-circle${e}`]:je(o)},{[`${t}${t}-round${e}`]:_e(o)}]},Xe=o=>vo(o),Ye=o=>{const e=go(o,{controlHeight:o.controlHeightSM,padding:o.paddingXS,buttonPaddingHorizontal:8,borderRadius:o.borderRadiusSM});return vo(e,`${o.componentCls}-sm`)},Qe=o=>{const e=go(o,{controlHeight:o.controlHeightLG,fontSize:o.fontSizeLG,borderRadius:o.borderRadiusLG});return vo(e,`${o.componentCls}-lg`)},qe=o=>{const{componentCls:e}=o;return{[e]:{[`&${e}-block`]:{width:"100%"}}}},Je=so("Button",o=>{const{controlTmpOutline:e,paddingContentHorizontal:t}=o,r=go(o,{colorOutlineDefault:e,buttonPaddingHorizontal:t});return[Ne(r),Ye(r),Xe(r),Qe(r),qe(r),Ke(r),De(r),xe(o,{focus:!1}),Ae(o)]}),Ze=()=>({prefixCls:String,size:{type:String}}),Go=No(),io=P({compatConfig:{MODE:3},name:"AButtonGroup",props:Ze(),setup(o,e){let{slots:t}=e;const{prefixCls:r,direction:l}=K("btn-group",o),[,,s]=le();Go.useProvide(Ro({size:$(()=>o.size)}));const i=$(()=>{const{size:d}=o;let m="";switch(d){case"large":m="lg";break;case"small":m="sm";break;case"middle":case void 0:break;default:Ao(!d,"Button.Group","Invalid prop `size`.")}return{[`${r.value}`]:!0,[`${r.value}-${m}`]:m,[`${r.value}-rtl`]:l.value==="rtl",[s.value]:!0}});return()=>{var d;return p("div",{class:i.value},[co((d=t.default)===null||d===void 0?void 0:d.call(t))])}}}),zo=/^[\u4e00-\u9fa5]{2}$/,Po=zo.test.bind(zo);function M(o){return o==="text"||o==="link"}const G=P({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:ae(He(),{type:"default"}),slots:Object,setup(o,e){let{slots:t,attrs:r,emit:l,expose:s}=e;const{prefixCls:i,autoInsertSpaceInButton:d,direction:m,size:S}=K("btn",o),[c,g]=Je(i),b=Go.useInject(),R=ie(),I=$(()=>{var a;return(a=o.disabled)!==null&&a!==void 0?a:R.value}),E=O(null),C=O(void 0);let B=!1;const h=O(!1),z=O(!1),D=$(()=>d.value!==!1),{compactSize:A,compactItemClassnames:Y}=ye(i,m),u=$(()=>typeof o.loading=="object"&&o.loading.delay?o.loading.delay||!0:!!o.loading);Lo(u,a=>{clearTimeout(C.value),typeof u.value=="number"?C.value=setTimeout(()=>{h.value=a},u.value):h.value=a},{immediate:!0});const f=$(()=>{const{type:a,shape:v="default",ghost:T,block:x,danger:Z}=o,y=i.value,N={large:"lg",small:"sm",middle:void 0},j=A.value||(b==null?void 0:b.size)||S.value,_=j&&N[j]||"";return[Y.value,{[g.value]:!0,[`${y}`]:!0,[`${y}-${v}`]:v!=="default"&&v,[`${y}-${a}`]:a,[`${y}-${_}`]:_,[`${y}-loading`]:h.value,[`${y}-background-ghost`]:T&&!M(a),[`${y}-two-chinese-chars`]:z.value&&D.value,[`${y}-block`]:x,[`${y}-dangerous`]:!!Z,[`${y}-rtl`]:m.value==="rtl"}]}),L=()=>{const a=E.value;if(!a||d.value===!1)return;const v=a.textContent;B&&Po(v)?z.value||(z.value=!0):z.value&&(z.value=!1)},Q=a=>{if(h.value||I.value){a.preventDefault();return}l("click",a)},q=a=>{l("mousedown",a)},J=(a,v)=>{const T=v?" ":"";if(a.type===ce){let x=a.children.trim();return Po(x)&&(x=x.split("").join(T)),p("span",null,[x])}return a};return Ho(()=>{Ao(!(o.ghost&&M(o.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),mo(L),se(L),po(()=>{C.value&&clearTimeout(C.value)}),s({focus:()=>{var a;(a=E.value)===null||a===void 0||a.focus()},blur:()=>{var a;(a=E.value)===null||a===void 0||a.blur()}}),()=>{var a,v;const{icon:T=(a=t.icon)===null||a===void 0?void 0:a.call(t)}=o,x=co((v=t.default)===null||v===void 0?void 0:v.call(t));B=x.length===1&&!T&&!M(o.type);const{type:Z,htmlType:y,href:N,title:j,target:_}=o,Fo=h.value?"loading":T,k=n(n({},r),{title:j,disabled:I.value,class:[f.value,r.class,{[`${i.value}-icon-only`]:x.length===0&&!!Fo}],onClick:Q,onMousedown:q});I.value||delete k.disabled;const ho=T&&!h.value?T:p(We,{existIcon:!!T,prefixCls:i.value,loading:!!h.value},null),$o=x.map(eo=>J(eo,B&&D.value));if(N!==void 0)return c(p("a",W(W({},k),{},{href:N,target:_,ref:E}),[ho,$o]));let oo=p("button",W(W({},k),{},{ref:E,type:y}),[ho,$o]);if(!M(Z)){const eo=function(){return oo}();oo=p(Re,{ref:"wave",disabled:!!h.value},{default:()=>[eo]})}return c(oo)}}});G.Group=io;G.install=function(o){return o.component(G.name,G),o.component(io.name,io),o};export{G as B,et as C,ot as N,ye as a,He as b,No as c,tt as d,me as e,xe as g,H as u};