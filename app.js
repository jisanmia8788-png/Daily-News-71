const KEY="newsbangla24_v1";
const demo=[
{id:"1",title:"বাংলাদেশের অর্থনীতি ২০২৫ সালে আরও শক্তিশালী হবে: বিশ্বব্যাংক",titleEn:"Bangladesh economy expected to strengthen in 2025",category:"জাতীয়",image:"https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1000",summary:"উন্নয়ন, বিনিয়োগ ও সংস্কারের ধারাবাহিকতায় অর্থনীতিতে ইতিবাচক অগ্রগতির আশা করা হচ্ছে।",body:"বাংলাদেশের অর্থনীতি নিয়ে নতুন পূর্বাভাস প্রকাশ করা হয়েছে। উন্নয়ন, বিনিয়োগ ও সংস্কারের ধারাবাহিকতায় প্রবৃদ্ধির সম্ভাবনা দেখছেন বিশ্লেষকরা। এই প্রতিবেদনটি একটি ডেমো নিউজ।",breaking:true,featured:true,date:"2 hours ago",views:"45.2K"},
{id:"2",title:"নির্বাচন নিয়ে সরকারের কোনো গাফিলতি নেই: প্রধান উপদেষ্টা",category:"রাজনীতি",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=700",summary:"নির্বাচন ও প্রশাসনিক প্রস্তুতি নিয়ে বক্তব্য দিয়েছেন প্রধান উপদেষ্টা।",body:"নির্বাচন নিয়ে সরকারের অবস্থান তুলে ধরে তিনি বলেন, প্রয়োজনীয় প্রস্তুতি চলমান রয়েছে। এটি ডেমো কনটেন্ট।",date:"1 hour ago",views:"12.8K"},
{id:"3",title:"সিরিজ জয়ে ইতিহাস গড়লো বাংলাদেশ",category:"খেলাধুলা",image:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700",summary:"দারুণ পারফরম্যান্সে সিরিজ জয়ের আনন্দে বাংলাদেশ দল।",body:"দলের সম্মিলিত পারফরম্যান্সে এসেছে স্মরণীয় জয়। এটি একটি নমুনা সংবাদ।",date:"3 hours ago",views:"18.7K"},
{id:"4",title:"AI ব্যবহারে নতুন দিগন্তের দেখা পাচ্ছে বিশ্ব",category:"প্রযুক্তি",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=700",summary:"প্রযুক্তির নতুন উদ্ভাবন বদলে দিচ্ছে কাজের ধরন।",body:"কৃত্রিম বুদ্ধিমত্তার ব্যবহার শিক্ষা, স্বাস্থ্য ও ব্যবসায় নতুন সম্ভাবনা তৈরি করছে।",date:"4 hours ago",views:"11.5K"},
{id:"5",title:"দেশের বিভিন্ন স্থানে বৃষ্টি, বন্যার আশঙ্কা",category:"জাতীয়",image:"https://images.unsplash.com/photo-1547683905-f686c993aae5?w=700",summary:"কয়েকটি অঞ্চলে ভারী বৃষ্টির পূর্বাভাস দিয়েছে আবহাওয়া বিভাগ।",body:"আবহাওয়ার পূর্বাভাস অনুযায়ী কয়েকটি এলাকায় বৃষ্টি হতে পারে। স্থানীয় নির্দেশনা অনুসরণ করুন।",date:"15 min ago",views:"3.5K"},
{id:"6",title:"শেয়ারবাজারে উত্থান, লেনদেন বাড়ল ১২%",category:"অর্থনীতি",image:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700",summary:"বাজারে বিনিয়োগকারীদের অংশগ্রহণ বেড়েছে।",body:"লেনদেন ও সূচকে ইতিবাচক পরিবর্তন দেখা গেছে। এটি ডেমো কনটেন্ট।",date:"30 min ago",views:"4.1K"},
{id:"7",title:"হৃদরোগ প্রতিরোধে করণীয় কী?",category:"স্বাস্থ্য",image:"https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=700",summary:"সুস্থ জীবনযাপনে নিয়মিত ব্যায়াম ও সুষম খাবার গুরুত্বপূর্ণ।",body:"স্বাস্থ্যকর খাদ্যাভ্যাস, ব্যায়াম ও চিকিৎসকের পরামর্শ হৃদরোগের ঝুঁকি কমাতে সহায়ক।",date:"45 min ago",views:"2.6K"},
{id:"8",title:"নতুন সিনেমায় চমক দিচ্ছেন জনপ্রিয় অভিনেত্রী",category:"বিনোদন",image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=700",summary:"নতুন সিনেমা নিয়ে দর্শকদের আগ্রহ তৈরি হয়েছে।",body:"নতুন সিনেমার কাজ ও মুক্তির পরিকল্পনা নিয়ে বিনোদন অঙ্গনে আলোচনা চলছে।",date:"1 hour ago",views:"3.8K"}
];
const getNews=()=>{try{return JSON.parse(localStorage.getItem(KEY))||demo}catch(e){return demo}};
const saveNews=n=>{localStorage.setItem(KEY,JSON.stringify(n));if(window.NBCloud&&window.NBCloud.isAdmin())window.NBCloud.saveNews(n).catch(e=>console.error("Cloud save:",e));};
const esc=s=>String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const img=n=>n.image||"https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700";

function renderBreakingTicker(){
  const ticker=document.getElementById("breakingTicker");
  if(!ticker)return;
  const news=getNews().slice().sort((a,b)=>Number(!!b.breaking)-Number(!!a.breaking));
  const headlines=news.map(n=>n.titleEn&&document.documentElement.lang==="en"?n.titleEn:n.title).filter(Boolean);
  const items=headlines.length?headlines:["বাংলাদেশ ও বিশ্বের সর্বশেষ সংবাদ জানতে চোখ রাখুন NewsBangla24-এ"];
  const markup=items.map(t=>`<span class="ticker-item">${esc(t)}</span>`).join('<span class="ticker-separator">◆</span>');
  ticker.innerHTML=markup+`<span class="ticker-separator">◆</span>`+markup;
  ticker.style.setProperty("--ticker-duration",Math.max(22,items.length*8)+"s");
}
function updateTopDate(){
  const date=document.getElementById("today");
  if(!date)return;
  const now=new Date();
  const english=new Intl.DateTimeFormat("en-GB",{weekday:"short",day:"2-digit",month:"short",year:"numeric"}).format(now);
  let bangla="";
  try{
    bangla=new Intl.DateTimeFormat("bn-BD-u-ca-bengali",{day:"numeric",month:"long",year:"numeric"}).format(now)+" বঙ্গাব্দ";
  }catch(e){
    bangla=new Intl.DateTimeFormat("bn-BD",{day:"numeric",month:"long",year:"numeric"}).format(now);
  }
  date.innerHTML=`<span class="date-en">${esc(english)}</span><span class="date-bn">${esc(bangla)}</span>`;
}

function openArticle(n){const m=document.getElementById("articleModal");if(!m)return;document.getElementById("articleContent").innerHTML=`<img src="${esc(img(n))}" alt=""><span class="tag">${esc(n.category)}</span><h1>${esc(n.title)}</h1><p class="meta">${esc(n.date||"Just now")} · ${esc(n.views||"New")}</p><p><b>${esc(n.summary)}</b></p><p>${esc(n.body||n.summary)}</p>`;m.classList.add("show");m.setAttribute("aria-hidden","false")}
function renderHome(filter="",query=""){let all=getNews();if(filter&&filter!=="সব")all=all.filter(n=>n.category===filter);if(query)all=all.filter(n=>(n.title+n.summary+n.category).toLowerCase().includes(query.toLowerCase()));let original=getNews(),hero=all.find(n=>n.featured)||all[0]||original[0];const h=document.getElementById("hero");if(h){h.style.backgroundImage=`url("${img(hero)}")`;h.innerHTML=`<div class="hero-content"><span class="tag">${esc(hero.category)}</span><h1>${esc(hero.title)}</h1><p>${esc(hero.summary)}</p><div class="meta">◷ ${esc(hero.date||"Just now")}　 ◉ ${esc(hero.views||"New")}</div></div>`;h.onclick=()=>openArticle(hero)}
const side=all.filter(n=>n.id!==hero.id).slice(0,3);const s=document.getElementById("topStories");if(s)s.innerHTML=side.map(n=>`<article class="story-mini" data-id="${esc(n.id)}"><img src="${esc(img(n))}"><div><span class="tag">${esc(n.category)}</span><h3>${esc(n.title)}</h3><span class="meta">◷ ${esc(n.date||"Just now")}</span></div></article>`).join("");
const grid=document.getElementById("newsGrid");if(grid)grid.innerHTML=all.filter(n=>n.id!==hero.id).map(n=>`<article class="news-card" data-id="${esc(n.id)}"><img src="${esc(img(n))}"><div class="card-copy"><span class="tag">${esc(n.category)}</span><h3>${esc(n.title)}</h3><p>${esc(n.summary)}</p><div class="meta">◷ ${esc(n.date||"Just now")}　 ◉ ${esc(n.views||"New")}</div></div></article>`).join("")||"<p>কোনো খবর পাওয়া যায়নি।</p>";
const mr=document.getElementById("mostRead");if(mr)mr.innerHTML=original.slice(0,5).map(n=>`<li data-id="${esc(n.id)}">${esc(n.title)}</li>`).join("");
const cats=document.getElementById("categories");if(cats)cats.innerHTML=["সব","জাতীয়","রাজনীতি","অর্থনীতি","প্রযুক্তি","খেলাধুলা","বিনোদন","আন্তর্জাতিক","স্বাস্থ্য"].map(c=>`<button data-cat="${c}">${c}</button>`).join("");
document.querySelectorAll("[data-id]").forEach(el=>el.addEventListener("click",()=>{let n=getNews().find(x=>x.id===el.dataset.id);if(n)openArticle(n)}));}
document.addEventListener("DOMContentLoaded",()=>{
updateTopDate();const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
if(!localStorage.getItem(KEY))saveNews(demo);
renderBreakingTicker();renderHome();if(window.NBCloud)window.NBCloud.startNewsSync(()=>{renderBreakingTicker();renderHome()});
document.getElementById("themeToggle")?.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("nb24theme",document.body.classList.contains("dark")?"dark":"light")});if(localStorage.getItem("nb24theme")==="dark")document.body.classList.add("dark");
document.getElementById("langToggle")?.addEventListener("click",()=>alert("বাংলা / English content support is enabled. Add English headlines from Admin Dashboard."));
document.getElementById("menuToggle")?.addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
document.querySelectorAll("[data-cat]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();renderHome(a.dataset.cat)}));
document.getElementById("searchForm")?.addEventListener("submit",e=>{e.preventDefault();renderHome("",document.getElementById("searchInput").value)});
document.getElementById("closeModal")?.addEventListener("click",()=>document.getElementById("articleModal").classList.remove("show"));
document.getElementById("articleModal")?.addEventListener("click",e=>{if(e.target.id==="articleModal")e.currentTarget.classList.remove("show")});
document.getElementById("subscribeForm")?.addEventListener("submit",async e=>{e.preventDefault();const email=document.getElementById("subscribeEmail").value.trim();const status=document.getElementById("subscribeStatus");try{if(!window.NBCloud)throw new Error("Firebase config হয়নি");await window.NBCloud.subscribe(email);status.textContent="ধন্যবাদ! আপনার ইমেইল সাবস্ক্রাইব হয়েছে।";e.target.reset()}catch(err){status.textContent=err.message||"সাবস্ক্রিপশন হয়নি। Firebase সেটআপ পরীক্ষা করুন।"}});
if(document.getElementById("newsForm")&&(!window.NBCloud||window.NBCloud.isAdmin()))initAdmin();
});
function initAdmin(){const $=id=>document.getElementById(id),form=$("newsForm");function refresh(){let n=getNews();$("statTotal").textContent=n.length;$("statBreaking").textContent=n.filter(x=>x.breaking).length;$("statCats").textContent=new Set(n.map(x=>x.category)).size;let q=$("adminSearch").value.toLowerCase();$("adminList").innerHTML=n.filter(x=>x.title.toLowerCase().includes(q)).map(x=>`<div class="admin-item"><img src="${esc(img(x))}"><div class="item-info"><b>${esc(x.title)}</b><small>${esc(x.category)} · ${x.breaking?"Breaking · ":""}${esc(x.date||"Just now")}</small></div><button class="edit-btn" data-edit="${esc(x.id)}">Edit</button><button class="delete-btn" data-delete="${esc(x.id)}">Delete</button></div>`).join("")||"<p>কোনো খবর নেই।</p>";}
function clear(){form.reset();$("newsId").value="";$("formHeading").textContent="নতুন খবর যোগ করুন / Add News";$("saveButton").textContent="খবর প্রকাশ করুন"}
form.addEventListener("submit",e=>{e.preventDefault();let n=getNews(),id=$("newsId").value;let item={id:id||String(Date.now()),title:$("title").value.trim(),titleEn:$("titleEn").value.trim(),category:$("category").value,image:$("image").value.trim(),summary:$("summary").value.trim(),body:$("body").value.trim(),breaking:$("breakingCheck").checked,featured:$("featuredCheck").checked,date:"Just now",views:"New"};if(id)n=n.map(x=>x.id===id?{...x,...item}:x);else n.unshift(item);if(item.featured)n=n.map(x=>x.id===item.id?x:{...x,featured:false});saveNews(n);renderBreakingTicker();clear();refresh();alert("খবর সংরক্ষণ হয়েছে!");});
$("adminList").addEventListener("click",e=>{let id=e.target.dataset.edit||e.target.dataset.delete;if(!id)return;let n=getNews();if(e.target.dataset.delete){if(confirm("এই খবরটি মুছে ফেলবেন?")){saveNews(n.filter(x=>x.id!==id));renderBreakingTicker();refresh()}return}let x=n.find(x=>x.id===id);$("newsId").value=x.id;$("title").value=x.title;$("titleEn").value=x.titleEn||"";$("category").value=x.category;$("image").value=x.image||"";$("summary").value=x.summary||"";$("body").value=x.body||"";$("breakingCheck").checked=!!x.breaking;$("featuredCheck").checked=!!x.featured;$("formHeading").textContent="খবর সম্পাদনা করুন / Edit News";$("saveButton").textContent="পরিবর্তন সংরক্ষণ করুন";window.scrollTo({top:0,behavior:"smooth"})});
$("cancelEdit").addEventListener("click",clear);$("adminSearch").addEventListener("input",refresh);$("resetData").addEventListener("click",()=>{if(confirm("সব পরিবর্তন মুছে ডেমো খবর ফিরিয়ে আনবেন?")){saveNews(demo);renderBreakingTicker();clear();refresh()}});refresh();}
