const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const money=n=>"₹"+n.toLocaleString("en-IN");
const get=k=>{try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const cart=()=>get("vx_cart")||{};
const find=id=>P.find(p=>p.id==id);
const art=p=>`<div class="art" style="--c:${p.color}" role="img" aria-label="${p.name}">${I[p.icon]}${p.tag?`<span class="tag">${p.tag}</span>`:""}</div>`;
const stars=r=>"★".repeat(Math.round(r))+"☆".repeat(5-Math.round(r));
const SVG={cart:'<svg viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H6"/></svg>',moon:'<svg viewBox="0 0 24 24"><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg>',menu:'<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'};
function toast(m){let t=$(".toast");if(!t){t=document.createElement("div");t.className="toast";t.setAttribute("role","status");document.body.appendChild(t)}t.textContent=m;t.classList.add("show");clearTimeout(t.t);t.t=setTimeout(()=>t.classList.remove("show"),2200)}
function count(){const n=Object.values(cart()).reduce((a,b)=>a+b,0);$$(".cnt").forEach(e=>{e.textContent=n;e.hidden=!n})}
function add(id,q=1){const c=cart();c[id]=(c[id]||0)+q;set("vx_cart",c);count();toast(find(id).name+" added to cart")}
/* layout */
const pg=document.body.dataset.page;
const links=[["index","Home"],["shop","Shop"],["compare","Compare"],["about","About"],["contact","Contact"]];
$("#hdr").innerHTML=`<a class="skip" href="#main">Skip to content</a><div class="wrap"><a class="logo" href="index.html"><i></i>Voltix</a>
<nav id="nav" aria-label="Main"><ul>${links.map(l=>`<li><a href="${l[0]}.html" class="${pg==l[0]?"on":""}">${l[1]}</a></li>`).join("")}</ul></nav>
<div class="tools"><button class="ibtn" id="theme" aria-label="Toggle dark mode">${SVG.moon}</button><a class="ibtn" href="cart.html" aria-label="Cart">${SVG.cart}<span class="badge cnt" hidden>0</span></a><button class="ibtn menu-btn" id="mb" aria-label="Open menu" aria-expanded="false">${SVG.menu}</button></div></div>`;
$("#ftr").innerHTML=`<div class="wrap"><div class="cols"><div><a class="logo" href="index.html"><i></i>Voltix</a><p>Carefully chosen gadgets for people who care how their tech feels and lasts.</p></div>
<div><h4>Shop</h4><ul>${CATS.slice(0,4).map(c=>`<li><a href="shop.html?cat=${encodeURIComponent(c.n)}">${c.n}</a></li>`).join("")}</ul></div>
<div><h4>Company</h4><ul><li><a href="about.html">About us</a></li><li><a href="compare.html">Compare</a></li><li><a href="contact.html">Contact</a></li></ul></div>
<div><h4>Help</h4><ul><li><a href="cart.html">Your cart</a></li><li><a href="about.html#faq">FAQs</a></li><li><a href="contact.html">Support</a></li></ul></div></div>
<div class="copy"><span>© 2026 Voltix. Demo store for academic purposes.</span><span>Free shipping over ₹5,000</span></div></div>`;
const th=get("vx_theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");document.documentElement.dataset.theme=th;
$("#theme").onclick=()=>{const n=document.documentElement.dataset.theme=="dark"?"light":"dark";document.documentElement.dataset.theme=n;set("vx_theme",n)};
$("#mb").onclick=e=>{const o=$("#nav").classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",o)};
count();
/* cards */
const card=p=>`<article class="card rv">${art(p)}<div class="meta"><span>${p.cat}</span><span class="stars" aria-label="${p.rating} out of 5">${stars(p.rating)} <small>${p.rating}</small></span></div>
<h3><a href="product.html?id=${p.id}">${p.name}</a></h3><div class="row"><div class="price">${money(p.price)} <s>${money(p.old)}</s></div><button class="btn sm acc" data-add="${p.id}" aria-label="Add ${p.name} to cart">Add</button></div></article>`;
document.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b)add(b.dataset.add)});
function reveal(){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.1});$$(".rv:not(.in)").forEach(e=>io.observe(e))}
/* email forms */
$$("[data-news]").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();const i=$("input",f);if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.value)){toast("Subscribed! Welcome to Voltix.");f.reset()}else{toast("Please enter a valid email");i.focus()}}));
/* pages */
if(pg=="index"){
$("#cats").innerHTML=CATS.map(c=>`<a class="cat rv" href="shop.html?cat=${encodeURIComponent(c.n)}"><div class="ico"><svg viewBox="0 0 100 100">${I[c.i].replace(/<\/?svg[^>]*>/g,"")}</svg></div><h3>${c.n}</h3><p>${c.d}</p></a>`).join("");
$("#featured").innerHTML=[...P].sort((a,b)=>b.rating-a.rating).slice(0,8).map(card).join("");
$("#hstack").innerHTML=[P[0],P[2],P[1]].map(p=>`<div class="art" style="--c:${p.color}">${I[p.icon]}</div>`).join("");}
if(pg=="shop"){
const q=new URLSearchParams(location.search),st={cat:q.get("cat")||"All",q:"",max:100000,sort:"pop"};
$("#chips").innerHTML=["All",...CATS.map(c=>c.n)].map(c=>`<button class="chip" data-c="${c}">${c}</button>`).join("");
const draw=()=>{$$(".chip").forEach(c=>c.classList.toggle("on",c.dataset.c==st.cat));$("#pv").textContent=money(st.max);
let r=P.filter(p=>(st.cat=="All"||p.cat==st.cat)&&p.price<=st.max&&(p.name+p.desc+p.cat).toLowerCase().includes(st.q));
const s={pop:(a,b)=>b.rev-a.rev,lo:(a,b)=>a.price-b.price,hi:(a,b)=>b.price-a.price,rt:(a,b)=>b.rating-a.rating};r.sort(s[st.sort]);
$("#count").textContent=r.length+" product"+(r.length==1?"":"s");
$("#list").innerHTML=r.length?r.map(card).join(""):`<div class="empty" style="grid-column:1/-1">No products match your filters. Try clearing them.</div>`;reveal()};
$("#chips").onclick=e=>{if(e.target.dataset.c){st.cat=e.target.dataset.c;draw()}};
$("#q").oninput=e=>{st.q=e.target.value.toLowerCase().trim();draw()};
$("#max").oninput=e=>{st.max=+e.target.value;draw()};
$("#sort").onchange=e=>{st.sort=e.target.value;draw()};
$("#reset").onclick=()=>{st.cat="All";st.q="";st.max=100000;$("#q").value="";$("#max").value=100000;draw()};draw();}
if(pg=="product"){
const p=find(new URLSearchParams(location.search).get("id"))||P[0];document.title=p.name+" | Voltix";let q=1;
$("#pd").innerHTML=`${art(p)}<div><span class="eyebrow">${p.cat}</span><h1>${p.name}</h1><div class="stars" aria-label="${p.rating} out of 5">${stars(p.rating)} <span style="color:var(--mute)">${p.rating} · ${p.rev.toLocaleString("en-IN")} reviews</span></div>
<div class="price" style="font-size:2rem;margin:18px 0">${money(p.price)} <s>${money(p.old)}</s> <span class="eyebrow">Save ${Math.round((1-p.price/p.old)*100)}%</span></div><p class="lead">${p.desc}</p>
<div class="cta" style="margin:28px 0"><div class="qty"><button id="m" aria-label="Decrease quantity">−</button><span id="n">1</span><button id="pl" aria-label="Increase quantity">+</button></div><button class="btn acc" id="addb">Add to cart</button><a class="btn ghost" href="compare.html?a=${p.id}">Compare</a></div>
<table><tbody>${Object.entries(p.specs).map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join("")}</tbody></table></div>`;
$("#m").onclick=()=>{q=Math.max(1,q-1);$("#n").textContent=q};$("#pl").onclick=()=>{q=Math.min(10,q+1);$("#n").textContent=q};$("#addb").onclick=()=>add(p.id,q);
$("#rel").innerHTML=P.filter(x=>x.cat==p.cat&&x.id!=p.id).concat(P.filter(x=>x.cat!=p.cat)).slice(0,4).map(card).join("");}
if(pg=="compare"){
const a=new URLSearchParams(location.search).get("a"),sel=[a||1,3,7].map(Number);
$("#sels").innerHTML=sel.map((v,i)=>`<select class="field" data-i="${i}" aria-label="Product ${i+1}">${P.map(p=>`<option value="${p.id}" ${p.id==v?"selected":""}>${p.name}</option>`).join("")}</select>`).join("");
const draw=()=>{const ps=sel.map(find);$("#cmp").innerHTML=`<thead><tr><td></td>${ps.map(p=>`<td><div class="art" style="--c:${p.color};max-width:140px;margin-bottom:10px">${I[p.icon]}</div><b>${p.name}</b><div class="price">${money(p.price)}</div><button class="btn sm acc" data-add="${p.id}" style="margin-top:10px">Add to cart</button></td>`).join("")}</tr></thead><tbody>
<tr><th>Category</th>${ps.map(p=>`<td>${p.cat}</td>`).join("")}</tr><tr><th>Rating</th>${ps.map(p=>`<td class="stars">${stars(p.rating)} ${p.rating}</td>`).join("")}</tr>
${Object.keys(ps[0].specs).map(k=>`<tr><th>${k}</th>${ps.map(p=>`<td>${p.specs[k]}</td>`).join("")}</tr>`).join("")}</tbody>`};
$("#sels").onchange=e=>{sel[e.target.dataset.i]=+e.target.value;draw()};draw();}
if(pg=="cart"){
const draw=()=>{const c=cart(),ids=Object.keys(c);let sub=0;
$("#lines").innerHTML=ids.length?ids.map(id=>{const p=find(id),q=c[id];sub+=p.price*q;return `<div class="line">${art({...p,tag:""})}<div><h3><a href="product.html?id=${p.id}">${p.name}</a></h3><small style="color:var(--mute)">${p.cat} · ${money(p.price)} each</small><br><button class="rm" data-rm="${p.id}">Remove</button></div>
<div style="display:grid;gap:8px;justify-items:end"><div class="qty"><button data-d="-1" data-id="${p.id}" aria-label="Decrease">−</button><span>${q}</span><button data-d="1" data-id="${p.id}" aria-label="Increase">+</button></div><b>${money(p.price*q)}</b></div></div>`}).join(""):`<div class="empty">Your cart is empty. <br><br><a class="btn acc" href="shop.html">Start shopping</a></div>`;
const ship=!sub||sub>=5000?0:199;$("#sub").textContent=money(sub);$("#ship").textContent=ship?money(ship):"Free";$("#tot").textContent=money(sub+ship);$("#co").disabled=!ids.length;count()};
$("#lines").onclick=e=>{const c=cart(),b=e.target.closest("button");if(!b)return;if(b.dataset.rm){delete c[b.dataset.rm]}else if(b.dataset.d){const id=b.dataset.id;c[id]=Math.min(10,c[id]+ +b.dataset.d);if(c[id]<1)delete c[id]}set("vx_cart",c);draw()};
$("#co").onclick=()=>{set("vx_cart",{});draw();toast("Order placed! (demo checkout)")};draw();}
if(pg=="contact"){
const f=$("#cf"),rules={name:v=>v.trim().length>=2||"Please enter your name",email:v=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)||"Enter a valid email address",phone:v=>!v||/^[0-9+\-\s]{10,14}$/.test(v)||"Enter a valid phone number",msg:v=>v.trim().length>=10||"Message must be at least 10 characters"};
const chk=i=>{const r=rules[i.name](i.value);i.classList.toggle("bad",r!==true);i.setAttribute("aria-invalid",r!==true);$("#e-"+i.name).textContent=r===true?"":r;return r===true};
$$("input,textarea",f).forEach(i=>i.addEventListener("blur",()=>chk(i)));
f.addEventListener("submit",e=>{e.preventDefault();const ok=$$("input,textarea",f).map(chk).every(Boolean);if(ok){f.reset();$("#ok").hidden=false;toast("Message sent")}else $("#ok").hidden=true});}
reveal();
