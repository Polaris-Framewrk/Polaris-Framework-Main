"use strict";(self.webpackChunkpromptmanager=self.webpackChunkpromptmanager||[]).push([[3796],{82400:function(e,t,n){n.d(t,{Z:function(){return h}});var o=n(1413),i=n(61889),r=n(94721),l=n(89673),a=n(55818),s=n(3721),u=n(81131),d=n(86482),c=n(80184);function p(e){var t=e.properties,n=e.disabled,o=e.readonly,r=e.uiSchema,l=e.schema,a=e.formData,s=e.onAddClick,u=e.registry,p=u.templates.AddButton;return(0,c.jsxs)(i.ZP,{container:!0,spacing:2,style:{marginTop:"10px"},children:[t.map((function(e,t){return e.hidden?e.content:(0,c.jsx)(i.ZP,{item:!0,xs:12,style:{marginBottom:"10px"},children:e.content},t)})),(0,d.Rc)(l,r,a)&&(0,c.jsx)(i.ZP,{container:!0,justifyContent:"flex-end",children:(0,c.jsx)(i.ZP,{item:!0,children:(0,c.jsx)(p,{className:"object-property-expand",onClick:s(l),disabled:n||o,uiSchema:r,registry:u})})})]})}function v(e){var t=e.properties,n=e.uiSchema,i=[],d=[];return t.forEach((function(e){n[e.name]&&"ui:advanced"in n[e.name]&&!n[e.name]["ui:advanced"]?i.push(e):d.push(e)})),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p,(0,o.Z)({},(0,o.Z)((0,o.Z)({},e),{},{properties:i}))),(0,c.jsx)(r.Z,{style:{margin:"16px 0"}}),d.length>0&&(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(a.Z,{expandIcon:(0,c.jsx)(u.Z,{}),children:(0,c.jsx)("strong",{style:{marginLeft:"5px"},children:"Advanced"})}),(0,c.jsx)(s.Z,{children:(0,c.jsx)(p,(0,o.Z)({},(0,o.Z)((0,o.Z)({},e),{},{properties:d})))})]})]})}function h(e){var t=e.idSchema;return"root"===(null===t||void 0===t?void 0:t.$id)?(0,c.jsx)(v,(0,o.Z)({},e)):(0,c.jsx)(p,(0,o.Z)({},e))}},41383:function(e,t,n){n.d(t,{D1:function(){return y},ZP:function(){return S}});var o=n(29439),i=n(1413),r=n(72791),l=(n(38399),n(90493)),a=n(15021),s=n(94070),u=n(64554),d=n(43896),c=n(13239),p=n(83449),v=n(47283),h=n(82851),m=(n(73905),n(92205),n(61979)),f=n(26577),x=n(57697),g=n(67438),Z=n(80184),j=(0,m.Z)({typography:{fontFamily:"Lato, sans-serif",fontSize:14,color:"#000"},components:{MuiFormControl:{styleOverrides:{root:{"& .Mui-disabled":{color:"#000"}}}},MuiImageList:{styleOverrides:{root:{width:"100% !important",height:"100% !important"}}},MuiListItemText:{styleOverrides:{root:{whiteSpace:"pre-wrap"}}},MuiImageListItem:{styleOverrides:{img:{width:"auto",height:"auto"}}}}});function y(e){var t,n=(null===(t=e.runError)||void 0===t?void 0:t.errors)||[];return(0,Z.jsx)(l.Z,{children:n.map((function(e){return(0,Z.jsx)(a.ZP,{children:(0,Z.jsx)(s.Z,{severity:"error",children:e})},e)}))})}function b(e){var t=(0,i.Z)({},e.formData||{});return null!==t&&void 0!==t&&t.api_response&&delete t.api_response,Object.keys((null===e||void 0===e?void 0:e.formData)||{}).length>0?(0,Z.jsx)(x.Z,{validator:f.Z,schema:e.schema,uiSchema:e.uiSchema,formData:t,readonly:!0,theme:j,className:"output-form"}):(0,Z.jsx)(g.H,{emptyMessage:"No output"})}function S(e){var t=r.useState("form"),n=(0,o.Z)(t,2),l=n[0],a=n[1];return(0,Z.jsx)(u.Z,{sx:{width:"100%"},children:(0,Z.jsxs)(p.ZP,{value:l,children:[(0,Z.jsx)(u.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,Z.jsx)(v.Z,{onChange:function(e,t){a(t)},"aria-label":"Output form tabs",children:(0,Z.jsx)(d.Z,{label:"Output",value:"form"})})}),(0,Z.jsx)(h.Z,{value:"form",sx:{padding:"4px"},children:e.loading?(0,Z.jsx)(c.Z,{}):(0,Z.jsxs)(u.Z,{children:[(0,Z.jsx)(b,(0,i.Z)({},e)),(0,Z.jsx)(y,(0,i.Z)({},e))]})})]})})}},67438:function(e,t,n){n.d(t,{H:function(){return s}});var o=n(45987),i=n(64554),r=n(20890),l=n(80184),a=["emptyImage","emptyMessage"];function s(e){var t=e.emptyImage,n=e.emptyMessage;(0,o.Z)(e,a);return(0,l.jsxs)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",color:"#838383",children:[t||null,(0,l.jsx)(r.Z,{variant:"h6",children:n||"No data available"})]})}},73796:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var o=n(29439),i=n(72791),r=n(24518),l=n(53767),a=n(94721),s=n(61889),u=n(64554),d=n(68096),c=n(30829),p=n(58406),v=n(23786),h=n(56030),m=n(12705),f=n(80184);function x(){var e=(0,h.sJ)(m.v),t=(0,h.sJ)(m.Hn),n=(0,h.sJ)(m.YL),r=(0,h.rb)(m.eH),l=(0,h.Zl)(m.K4),a=(0,h.rb)(m.$5),x=(0,h.rb)(m.K4),g=(0,h.FV)(m.jl),Z=(0,o.Z)(g,2),j=Z[0],y=Z[1],b=(0,h.FV)(m.gZ),S=(0,o.Z)(b,2),_=S[0],P=S[1];return(0,i.useEffect)((function(){_&&r()}),[_,r]),(0,i.useEffect)((function(){var e;!j&&n&&n.length>0?(y(null===(e=n.find((function(e){return"chat/completions"===e.api_endpoint})))||void 0===e?void 0:e.api_provider.name),P(n.find((function(e){return"chat/completions"===e.api_endpoint})))):!_&&j&&"Open AI"===j&&P(n.find((function(e){return"chat/completions"===e.api_endpoint})))}),[n,_,j,P,y]),(0,f.jsx)(s.ZP,{item:!0,id:"apibackendselector",children:(0,f.jsxs)(s.ZP,{container:!0,direction:"row",children:[(0,f.jsx)(u.Z,{sx:{minWidth:150},children:(0,f.jsxs)(d.Z,{fullWidth:!0,children:[(0,f.jsx)(c.Z,{id:"select-api-provider-label",children:"API Provider"}),(0,f.jsx)(p.Z,{style:{width:"auto"},onChange:function(e){y(e.target.value),P(null),l({}),a()},value:j||"",label:"Select API Provider",children:e.map((function(e,t){return(0,f.jsx)(v.Z,{value:e.value,children:e.label},t)}))})]})}),j&&(0,f.jsx)(u.Z,{sx:{minWidth:150},children:(0,f.jsxs)(d.Z,{fullWidth:!0,children:[(0,f.jsx)(c.Z,{id:"select-api-backend-label",children:"API Backend"}),(0,f.jsx)(p.Z,{style:{width:150},onChange:function(e){P(n.find((function(t){return t.id===e.target.value}))),l({}),x(),a()},value:_?_.id:"",label:"Select API Backend",children:t.filter((function(e){return e.provider===j})).map((function(e,t){return(0,f.jsx)(v.Z,{value:e.value,children:e.label},t)}))})]})})]})})}var g=n(7077),Z=n(41383),j=n(1413),y=n(26577),b=n(57697),S=n(61979),_=n(43896),P=n(83449),k=n(47283),C=n(82851),M=n(67438),F=(0,S.Z)({spacing:2,typography:{fontSize:12},components:{MuiTextField:{defaultProps:{variant:"standard"}},MuiPaper:{styleOverrides:{root:{overflow:"scroll",textAlign:"left","& .MuiTypography-root.MuiTypography-h5":{font:"inherit",fontSize:"1rem",fontWeight:"600",margin:"0.5rem 0.2rem",color:"#757575"},"& .MuiTypography-root.MuiTypography-subtitle2":{fontSize:"0.75rem"},"& .MuiBox-root .form-group .MuiFormControl-root .MuiBox-root":{display:"None"},"& .MuiBox-root .form-group .MuiFormControl-root .MuiFormHelperText-root":{display:"block"},"& .MuiBox-root .form-group .MuiFormControl-root .MuiFormHelperText-root.Mui-focused":{display:"block"}}}},MuiSelect:{styleOverrides:{select:{textTransform:"capitalize"}}},MuiFormControl:{styleOverrides:{root:{padding:"2px","& .MuiFormHelperText-root":{textAlign:"left",margin:"2px"},"& .MuiFormControl-root:has(.MuiSlider-root) label":{fontSize:"0.75rem",textAlign:"start"}}}}}});function O(e){var t=(0,h.FV)(m.$5),n=(0,o.Z)(t,2),i=n[0],r=n[1];return(0,f.jsx)(b.Z,{schema:e.schema,uiSchema:e.uiSchema,formData:i,validator:y.Z,onChange:function(e){var t=e.formData;r(t)},theme:F})}function w(e){var t,n,r,l=i.useState("form"),a=(0,o.Z)(l,2),s=a[0],d=a[1],c=e.schema?JSON.parse(JSON.stringify(e.schema)):{},p=e.uiSchema?JSON.parse(JSON.stringify(e.uiSchema)):{},v=null!==e&&void 0!==e&&null!==(t=e.schema)&&void 0!==t&&t.title?null===e||void 0===e||null===(n=e.schema)||void 0===n?void 0:n.title:"Input Form";return null!==e&&void 0!==e&&null!==(r=e.schema)&&void 0!==r&&r.title&&(c.title="",c.description=""),(0,f.jsx)(u.Z,{sx:{width:"100%"},children:(0,f.jsxs)(P.ZP,{value:s,children:[(0,f.jsx)(u.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,f.jsx)(k.Z,{onChange:function(e,t){d(t)},"aria-label":"Config form tabs",children:(0,f.jsx)(_.Z,{label:v||"Input Form",value:"form"})})}),(0,f.jsx)(C.Z,{value:"form",sx:{padding:"4px"},children:0===Object.keys(e.schema).length?(0,f.jsx)(M.H,(0,j.Z)({},e)):(0,f.jsx)(O,{schema:c,uiSchema:p,submitBtn:e.submitBtn})})]})})}var I=n(38399),R=(n(66027),n(3478),n(82400));function T(e){var t=(0,h.FV)(m.K4),n=(0,o.Z)(t,2),i=n[0],r=n[1];return(0,f.jsx)(b.Z,{schema:e.schema,uiSchema:e.uiSchema,formData:i,onChange:function(e){var t=e.formData;r(t)},validator:y.Z,templates:{ObjectFieldTemplate:R.Z},children:(0,f.jsx)("div",{})})}function N(){var e=(0,h.FV)(m.K4),t=(0,o.Z)(e,2),n=t[0],i=t[1];return(0,f.jsx)(I.ZP,{mode:"json",theme:"chrome",value:JSON.stringify(n,null,2),onChange:function(e){i(JSON.parse(e))},editorProps:{$blockScrolling:!0},setOptions:{useWorker:!1,showGutter:!1}})}function A(e){var t,n=i.useState("form"),r=(0,o.Z)(n,2),l=r[0],a=r[1],s=e.schema?JSON.parse(JSON.stringify(e.schema)):{};return null!==e&&void 0!==e&&null!==(t=e.schema)&&void 0!==t&&t.title&&(s.title=null,s.description=null),(0,f.jsx)(u.Z,{sx:{width:"100%"},children:(0,f.jsxs)(P.ZP,{value:l,children:[(0,f.jsx)(u.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,f.jsxs)(k.Z,{onChange:function(e,t){a(t)},"aria-label":"Config form tabs",children:[(0,f.jsx)(_.Z,{label:"Config Form",value:"form"}),(0,f.jsx)(_.Z,{label:"JSON",value:"json"})]})}),(0,f.jsx)(C.Z,{value:"form",sx:{padding:"4px"},children:0===Object.keys(e.schema).length?(0,f.jsx)(M.H,(0,j.Z)({},e)):(0,f.jsx)(T,{schema:s,uiSchema:e.uiSchema})}),(0,f.jsx)(C.Z,{value:"json",sx:{padding:"4px"},children:0===Object.keys(e.schema).length?(0,f.jsx)(M.H,(0,j.Z)({},e)):(0,f.jsx)(N,(0,j.Z)({},e))})]})})}var B=n(11600),D=n(84705);function J(e){var t=e.tourRef1,n=(e.tourRef2,e.tourRef3,e.tourRef4),r=e.tourRef5,l=e.tourRef6,a=[{title:"Welcome to Promptly",description:"Test, version and share your prompts with others. Create Endpoints and call from your application to invoke LLMs with saved prompts."},{title:"Pick your LLM Provider",description:"Use this toggle to use an existing endpoint or pick a new backend. Update model parameters to the right. Use Discover on left to find new Prompts",target:function(){return t.current}},{title:"Prompt Editor",description:"This is where you can write your prompt. Use {{}} to add variables and form in next tab to fill the values.",target:function(){return n.current}},{title:"Share Prompt",description:"Use this button to share your Prompt and output. API keys and Endpoints are NOT shared!",target:function(){return r.current}},{title:"Test Prompt",description:"Click this to Test Your Prompt. Add your API keys in the settings for better results. Go Click Now!",target:function(){return l.current}}],s=(0,B.Z)(["tour"]),u=(0,o.Z)(s,2),d=u[0],c=u[1],p=(0,i.useState)(void 0===d.tour),v=(0,o.Z)(p,2),h=v[0],m=v[1];return(0,f.jsx)(D.Z,{open:h,onClose:function(){m(!1),c("tour","1")},steps:a,style:{width:"100%"}})}function H(){var e=(0,h.sJ)(m.nC),t=(0,h.FV)(m.$5),n=(0,o.Z)(t,1)[0],u=(0,h.FV)(m.gZ),d=(0,o.Z)(u,2),c=d[0],p=d[1],v=(0,h.FV)(m.eH),j=(0,o.Z)(v,2),y=j[0],b=j[1],S=(0,h.FV)(m.K4),_=(0,o.Z)(S,2),P=_[0],k=_[1],C=(0,h.FV)(m.pQ),M=(0,o.Z)(C,2),F=M[0],O=M[1],I=(0,i.useState)(""),R=(0,o.Z)(I,2),T=R[0],N=R[1],B=(0,i.useState)(""),D=(0,o.Z)(B,2),H=D[0],L=D[1],E=(0,i.useState)(!1),V=(0,o.Z)(E,2),z=V[0],W=V[1],K=(0,i.useState)(null),U=(0,o.Z)(K,2),$=U[0],G=U[1],Y=(0,i.useState)(null),Q=(0,o.Z)(Y,2),q=Q[0],X=Q[1],ee=(0,i.useRef)(null),te=(0,i.useRef)(null),ne=(0,i.useRef)(null),oe=(0,i.useRef)(null),ie=(0,i.useRef)(null),re=(0,i.useRef)(null),le=function(e){e?(L(""),G(null),W(!0),(0,g.o)().post("/api/endpoints/invoke_api/".concat(e.parent_uuid,"/").concat(e.version),{input:n,template_values:F||{},config:P||{},bypass_cache:!0}).then((function(e){var t,n,o,i,r,l,a,s,u,d,c,p,v,h,m,f,x,g,Z,j,y,b,S,_,P,k,C,M,F,O,w,I,R,T,A,B,D;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.errors&&(N(""),L(JSON.stringify(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.errors)));if(X(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.output),null!==e&&void 0!==e&&null!==(o=e.data)&&void 0!==o&&null!==(i=o.output)&&void 0!==i&&i.generations)N(null===e||void 0===e||null===(p=e.data)||void 0===p||null===(v=p.output)||void 0===v?void 0:v.generations);else if(null!==e&&void 0!==e&&null!==(r=e.data)&&void 0!==r&&null!==(l=r.output)&&void 0!==l&&l.chat_completions){var J,H;N(null===e||void 0===e||null===(J=e.data)||void 0===J||null===(H=J.output)||void 0===H?void 0:H.chat_completions)}else{var E;N([null===e||void 0===e||null===(E=e.data)||void 0===E?void 0:E.output])}if(W(!1),void 0!==(null===e||void 0===e||null===(a=e.data)||void 0===a||null===(s=a.output)||void 0===s||null===(u=s._response)||void 0===u||null===(d=u.api_response)||void 0===d?void 0:d.usage))if(void 0!==(null===e||void 0===e||null===(h=e.data)||void 0===h||null===(m=h.output)||void 0===m||null===(f=m._response)||void 0===f||null===(x=f.api_response)||void 0===x?void 0:x.usage.prompt_tokens)&&void 0!==(null===e||void 0===e||null===(g=e.data)||void 0===g||null===(Z=g.output)||void 0===Z||null===(j=Z._response)||void 0===j||null===(y=j.api_response)||void 0===y?void 0:y.usage.completion_tokens))G("".concat(null===e||void 0===e||null===(k=e.data)||void 0===k||null===(C=k.output)||void 0===C||null===(M=C._response)||void 0===M||null===(F=M.api_response)||void 0===F?void 0:F.usage.total_tokens," (P").concat(null===e||void 0===e||null===(O=e.data)||void 0===O||null===(w=O.output)||void 0===w||null===(I=w._response)||void 0===I||null===(R=I.api_response)||void 0===R?void 0:R.usage.prompt_tokens," + C").concat(null===e||void 0===e||null===(T=e.data)||void 0===T||null===(A=T.output)||void 0===A||null===(B=A._response)||void 0===B||null===(D=B.api_response)||void 0===D?void 0:D.usage.completion_tokens,")"));else if(void 0!==(null===e||void 0===e||null===(b=e.data)||void 0===b||null===(S=b.output)||void 0===S||null===(_=S._response)||void 0===_||null===(P=_.api_response)||void 0===P?void 0:P.usage.total_tokens)){var V,z,K,U;G(null===e||void 0===e||null===(V=e.data)||void 0===V||null===(z=V.output)||void 0===z||null===(K=z._response)||void 0===K||null===(U=K.api_response)||void 0===U?void 0:U.usage.total_tokens)}})).catch((function(e){var t;console.error(e),L((null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)||"Failed to run given prompt"),W(!1)}))):L("No endpoint selected. Please select API Backend or an existing endpoint.")},ae=function(){return(0,f.jsx)(r.Z,{type:"primary",onClick:function(t){if(e)return function(){var e=y;!y&&c?(0,g.o)().post("/api/endpoints",{name:"Playground - ".concat((new Date).toLocaleString()),api_backend:c.id,draft:!0,input:n,param_values:P,config:P,prompt_values:F,post_processor:""}).then((function(t){e=t.data,b(t.data)})).catch((function(e){console.error(e)})).then((function(){le(e)})):le(e)}()},ref:re,variant:"contained",children:"Submit"})};return(0,i.useEffect)((function(){G(null),N("")}),[p,b,k,O]),(0,i.useEffect)((function(){}),[P,F]),(0,f.jsxs)("div",{id:"home-page",style:{height:"100%",overflow:"scroll",padding:"2px"},children:[(0,f.jsx)(J,{tourRef1:ee,tourRef2:te,tourRef3:ne,tourRef4:oe,tourRef5:ie,tourRef6:re}),(0,f.jsxs)(l.Z,{spacing:2,divider:(0,f.jsx)(a.Z,{orientation:"horizontal",flexItem:!0}),sx:{width:"100%",height:"100%",paddingTop:"5px"},children:[(0,f.jsx)(x,{innerRef:te}),(0,f.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,f.jsx)(s.ZP,{item:!0,xs:12,md:4,sx:{height:"100%"},children:(0,f.jsxs)(l.Z,{spacing:2,children:[(0,f.jsx)("div",{style:{height:"10%"},children:(0,f.jsx)(w,{schema:c?c.input_schema:{},uiSchema:c?c.input_ui_schema:{},emptyMessage:"Select your API Backend to see the parameters"})}),(0,f.jsx)("div",{children:c&&(0,f.jsx)(ae,{})})]})}),(0,f.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,f.jsx)(A,{schema:c?c.config_schema:{},uiSchema:c?c.config_ui_schema:{},formData:P,atomState:m.K4,emptyMessage:"Select your API Backend to see the parameters"})}),(0,f.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,f.jsx)(Z.ZP,{result:T,endpoint:y,loading:z,loadingTip:"Running the input...",runError:H,tokenCount:$,schema:(null===c||void 0===c?void 0:c.output_schema)||{},uiSchema:(null===c||void 0===c?void 0:c.output_ui_schema)||{},formData:q||{}})})]})]})]})}}}]);
//# sourceMappingURL=3796.91a8f333.chunk.js.map