(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{3474:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/release",function(){return n(1735)}])},1735:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return release}});var s=n(5893),r=n(7294),i=n(1163),a=n.n(i),l=n(7066),o=n(9008),c=n.n(o),d=n(7747),u=n(4225),x=n(2757),h=n(1293),g=n(3804),p=n(2923),releaseCard=e=>{let{title:t,tracks:n,ownedBy:r}=e;return(0,s.jsxs)(d.xu,{padding:"10",maxWidth:"800px",paddingTop:"20",margin:"auto",bg:"white",boxShadow:"xl",borderRadius:"lg",children:[(0,s.jsx)(u.z,{colorScheme:"teal",size:"sm",onClick:()=>a().back(),margin:"4",leftIcon:(0,s.jsx)(p.R,{})}),(0,s.jsx)(x.X,{as:"h1",size:"xl",textAlign:"center",marginTop:"4",children:t}),(0,s.jsxs)(h.x,{fontSize:"lg",textAlign:"center",color:"gray.600",my:"2",children:["Owned by ",r," people on Discogs"]}),n&&n.length>0&&(0,s.jsxs)(d.xu,{children:[(0,s.jsx)(x.X,{as:"h2",size:"lg",textAlign:"center",mt:"5",mb:"2",children:"Track listing"}),(0,s.jsx)(g.aV,{spacing:3,children:n.map((e,t)=>(0,s.jsxs)(g.HC,{paddingX:"6",paddingY:"2",borderBottom:"1px",borderColor:"gray.200",children:[(0,s.jsxs)(h.x,{fontSize:"md",fontWeight:"bold",children:[e.title," - ",e.duration]}),(0,s.jsxs)(h.x,{fontSize:"sm",color:"gray.500",children:["Artists: ",e.artists.map(e=>e.name).join(", ")]})]},t))})]})]})},release=()=>{let e=(0,i.useRouter)(),{releaseId:t}=e.query,[n,a]=(0,r.useState)(null),[o,d]=(0,r.useState)(!1),[u,x]=(0,r.useState)(null);return((0,r.useEffect)(()=>{t&&(d(!0),l.Z.get("https://api.discogs.com/releases/".concat(t)).then(e=>{a(e.data),d(!1)}).catch(e=>{x(e.message),d(!1)}))},[t]),o)?(0,s.jsx)("p",{children:"Loading..."}):u?(0,s.jsxs)("p",{children:["Error: ",u]}):n?(0,s.jsxs)("div",{children:[(0,s.jsx)(c(),{children:(0,s.jsx)("title",{children:n?n.title:"Loading..."})}),n&&(0,s.jsx)(releaseCard,{title:n.title,tracks:n.tracklist,ownedBy:n.community.have})]}):(0,s.jsx)("p",{children:"No release data available."})}}},function(e){e.O(0,[508,774,888,179],function(){return e(e.s=3474)}),_N_E=e.O()}]);