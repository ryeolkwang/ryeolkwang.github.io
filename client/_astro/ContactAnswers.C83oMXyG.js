import{a as l,j as n,u as d}from"./utils.KUeWt-uN.js";import{r as a}from"./index.BJfUAbRs.js";const h=()=>{const s=l(new URL(window.location.href)),t=d(s),[r,o]=a.useState([]),[c,i]=a.useState(!0);return a.useEffect(()=>{fetch(`/api/contact-me?lang=${s}`).then(e=>e.json()).then(e=>o(e)).finally(()=>i(!1))},[]),c?n.jsx("div",{className:"text-center my-8",children:t("contactMe.answer.loading")}):r.length?n.jsx("div",{className:"flex flex-wrap gap-6 justify-center my-8",children:r.map(e=>n.jsxs("div",{className:`
            bg-white/70
            backdrop-blur-md
            shadow-xl
            rounded-xl
            p-6
            max-w-xs
            min-w-[260px]
            relative
            border
            border-white/30
            float-card
            transition
            hover:scale-105
            hover:shadow-2xl
          `,style:{boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.15)"},children:[n.jsx("div",{className:"font-bold mb-1",children:e.name}),n.jsx("div",{className:"text-xs text-base-content/60 mb-2",children:new Date(e.createdAt).toLocaleString()}),n.jsx("div",{className:"mb-3",children:e.message}),e.answer&&n.jsx("div",{className:"mt-2 p-3 rounded bg-primary/10 border-l-4 border-primary text-primary",children:n.jsx("span",{children:e.answer})})]},e.id))}):n.jsx("div",{className:"text-center my-8",children:t("contactMe.answer.noMessages")})};export{h as ContactAnswers};
