(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6949)}])},6949:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return pages}});var i=t(5893),r=t(7294),s=t(8767),l=t(5161),o=t(3717),c=t(6089),a=t(7747),d=t(1293),h=t(1664),x=t.n(h),genericCard=e=>{let{artist:n}=e,t=(0,l.ff)("white","gray.800"),r=(0,l.ff)("gray.600","gray.200");return(0,i.jsx)(x(),{href:"/release?releaseId=".concat(n.id),passHref:!0,children:(0,i.jsxs)(o.k,{as:"a",width:"250px",height:"350px",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",p:4,bg:t,boxShadow:"md",transition:"0.3s",_hover:{transform:"scale(1.05)",boxShadow:"lg"},direction:"column",cursor:"pointer",align:"center",justify:"center",children:[(0,i.jsx)(c.E,{src:n.cover_image||n.thumb||"https://via.placeholder.com/150",alt:"Image for ".concat(n.title),objectFit:"cover",width:"100%",height:"60%"}),(0,i.jsxs)(a.xu,{p:"4",width:"100%",height:"40%",children:[(0,i.jsx)(d.x,{fontSize:"lg",fontWeight:"bold",isTruncated:!0,children:n.title}),(0,i.jsx)(d.x,{fontSize:"md",color:r,isTruncated:!0,children:n.title||"Unknown Artist"})]})]})})},u=t(4608),g=t(1136),p=t(2177),f=t(4225),j=t(7219),m=t(3459),queryListComponent=()=>{let e=(0,r.useContext)(u.A);if(!e)return(0,i.jsx)(a.xu,{textAlign:"center",p:5,children:(0,i.jsx)(d.x,{fontSize:"lg",children:"Context not available"})});let{results:n,loading:t,type:s,pagination:l}=e,handleCardClick=e=>{console.log(e)};return t?(0,i.jsx)(a.xu,{textAlign:"center",p:5,children:(0,i.jsx)(g.$,{size:"xl"})}):"artist"!==s?(0,i.jsx)(a.xu,{textAlign:"center",p:5,children:(0,i.jsx)(d.x,{fontSize:"lg",children:"No artist data available"})}):(0,i.jsxs)(a.xu,{children:[(0,i.jsx)(p.M,{columns:{base:1,sm:2,md:3,lg:4},spacing:5,p:5,paddingTop:15,children:n.map(e=>(0,i.jsx)(a.xu,{onClick:()=>handleCardClick(e.id),cursor:"pointer",width:"250px",height:"350px",overflow:"hidden",children:(0,i.jsx)(genericCard,{artist:e})},e.id))}),(0,i.jsxs)(o.k,{justifyContent:"center",mt:"4",children:[(0,i.jsx)(f.z,{onClick:()=>{l&&l.page},disabled:l.page<=1,leftIcon:(0,i.jsx)(j.w,{}),mr:"2",children:"Prev"}),(0,i.jsx)(f.z,{onClick:()=>{l&&(l.page,l.pages)},disabled:l.page>=l.pages,rightIcon:(0,i.jsx)(m.X,{}),children:"Next"})]})]})},mainComponent=()=>{let e=new s.QueryClient;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.QueryClientProvider,{client:e,children:(0,i.jsx)(queryListComponent,{})})})},pages=()=>(0,i.jsx)(mainComponent,{})}},function(e){e.O(0,[924,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);