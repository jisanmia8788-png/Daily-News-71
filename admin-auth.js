document.addEventListener("DOMContentLoaded",()=>{
 const gate=document.getElementById("adminAuth"),dash=document.getElementById("adminDashboard"),status=document.getElementById("adminAuthStatus"),login=document.getElementById("adminGoogleLogin");
 const cloud=window.NBCloud;
 if(!cloud||!cloud.configured){status.textContent="প্রথমে firebase-config.js ফাইলে Firebase Project Config বসাতে হবে।";login.disabled=true;return;}
 login.addEventListener("click",async()=>{try{status.textContent="Google Login হচ্ছে...";await cloud.googleLogin()}catch(e){status.textContent=e.message||"Login ব্যর্থ হয়েছে"}});
 cloud.watchAuth(user=>{if(user&&cloud.isAdmin()){gate.hidden=true;dash.hidden=false;status.textContent="";cloud.startNewsSync(()=>{if(typeof initAdmin==="function"){} });if(typeof initAdmin==="function")initAdmin();}else{gate.hidden=false;dash.hidden=true;if(user)status.textContent="এই Gmail-টি Admin হিসেবে অনুমোদিত নয়।";}});
});
