(function(){
  const config=window.NB_FIREBASE_CONFIG||{};
  const configured=config.apiKey&&config.apiKey!=="PASTE_API_KEY"&&config.projectId&&config.projectId!=="YOUR_PROJECT_ID";
  let auth=null,db=null,unsubscribe=null;
  if(configured&&window.firebase){
    try{if(!firebase.apps.length)firebase.initializeApp(config);auth=firebase.auth();db=firebase.firestore();}catch(e){console.error("Firebase init:",e)}
  }
  const admins=(window.NB_ADMIN_EMAILS||[]).map(x=>String(x).toLowerCase());
  const isAdmin=()=>!!(auth&&auth.currentUser&&admins.includes((auth.currentUser.email||"").toLowerCase()));
  async function googleLogin(){if(!auth)throw new Error("Firebase config.js-এ আপনার Project Config বসান");const provider=new firebase.auth.GoogleAuthProvider();provider.setCustomParameters({prompt:"select_account"});return auth.signInWithPopup(provider)}
  async function logout(){if(auth)await auth.signOut()}
  async function subscribe(email){if(!db)throw new Error("Firebase config এখনো সেটআপ করা হয়নি");if(!auth.currentUser)await googleLogin();const signed=(auth.currentUser.email||"").toLowerCase();if(email.toLowerCase()!==signed)throw new Error("যে Gmail দিয়ে Login করেছেন, সেই Gmail ঠিকানাটি দিন");await db.collection("subscribers").doc(signed).set({email:signed,createdAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true})}
  async function saveNews(items){localStorage.setItem("newsbangla24_v1",JSON.stringify(items));if(!db||!isAdmin())return;await db.collection("site").doc("news").set({items:items,updatedAt:firebase.firestore.FieldValue.serverTimestamp()})}
  async function saveSettings(settings){localStorage.setItem("nb24_settings",JSON.stringify(settings));if(!db||!isAdmin())throw new Error("Admin Firebase সংযোগ পাওয়া যায়নি");await db.collection("site").doc("settings").set({...settings,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true})}
  function getSettings(){try{return JSON.parse(localStorage.getItem("nb24_settings"))||{}}catch(e){return {}}}
  function watchSettings(callback){if(!db)return ()=>{};return db.collection("site").doc("settings").onSnapshot(s=>{if(s.exists){localStorage.setItem("nb24_settings",JSON.stringify(s.data()));callback&&callback(s.data())}},e=>console.error("Settings sync:",e))}
  function startNewsSync(onChange){if(!db)return;if(unsubscribe)unsubscribe();unsubscribe=db.collection("site").doc("news").onSnapshot(s=>{if(s.exists&&Array.isArray(s.data().items)){localStorage.setItem("newsbangla24_v1",JSON.stringify(s.data().items));onChange&&onChange()}},e=>console.error("News sync:",e))}
  function watchAuth(callback){if(auth)return auth.onAuthStateChanged(callback);callback(null);return ()=>{}}
  window.NBCloud={configured:configured,isAdmin:isAdmin,googleLogin:googleLogin,logout:logout,subscribe:subscribe,saveNews:saveNews,saveSettings:saveSettings,getSettings:getSettings,watchSettings:watchSettings,startNewsSync:startNewsSync,watchAuth:watchAuth,get currentUser(){return auth&&auth.currentUser}};
  document.addEventListener("DOMContentLoaded",()=>{
    const login=document.getElementById("visitorLogin"),out=document.getElementById("visitorLogout"),adminLink=document.getElementById("adminDashboardLink");
    if(login)login.addEventListener("click",async()=>{const status=document.getElementById("visitorAuthStatus");try{if(!configured)throw new Error("Gmail Login চালু করতে Firebase Project Config বসাতে হবে। README.md দেখুন।");if(status)status.textContent="Google Login হচ্ছে...";await googleLogin();if(status)status.textContent="";}catch(e){if(status)status.textContent=e.message||"Google Login হয়নি";}});
    if(out)out.addEventListener("click",logout);
    if(auth)auth.onAuthStateChanged(user=>{if(login)login.hidden=!!user;if(out)out.hidden=!user;if(adminLink)adminLink.hidden=!(user&&isAdmin());const status=document.getElementById("visitorAuthStatus");if(status&&user)status.textContent="Gmail দিয়ে লগইন হয়েছে।";if(user&&isAdmin()&&!/admin\.html(?:$|[?#])/.test(location.pathname+location.search+location.hash)){location.href="admin.html";}});
  });
})();
