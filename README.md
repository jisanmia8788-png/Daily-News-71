# NewsBangla24

Responsive Bangla/English news portal with breaking ticker, bilingual calendar date, Google sign-in, admin-only publishing and Gmail newsletter subscription.

## Important: one-time Firebase setup is required

The ZIP contains the integration code, but Google sign-in and shared online news cannot work until you connect your own Firebase project. Do not share your Firebase password or Google password with anyone.

### 1) Create Firebase project
1. Open https://console.firebase.google.com/ and create a project.
2. In **Authentication → Sign-in method**, enable **Google**.
3. In **Firestore Database**, create a database (production mode is recommended).
4. In **Project settings → General → Your apps**, add a Web app and copy its Firebase config.
5. In **Authentication → Settings → Authorized domains**, add your GitHub Pages domain (for example `YOURNAME.github.io`).

### 2) Add your Firebase config and Admin Gmail
1. Open `firebase-config.js`.
2. Replace all `PASTE_...` and `YOUR_PROJECT...` values with the Web app config from Firebase.
3. Replace `jrjisanalom@gmail.com` in `window.NB_ADMIN_EMAILS` with the exact Gmail address that will manage the website. You can add more admin emails separated by commas.
4. Open `firestore.rules` and replace `jrjisanalom@gmail.com` in the `isAdmin()` list with the same exact Gmail address(es).
5. Publish the rules in Firebase **Firestore → Rules**.

### 3) Deploy
Upload all files in this ZIP to the root of your GitHub repository, including:
- `firebase-config.js`
- `cloud.js`
- `admin-auth.js`
- `firestore.rules`

Then enable/refresh GitHub Pages.

## How it works
- Visitors can read published news without signing in.
- Visitors can use **Gmail Login** to sign in with Google.
- Newsletter subscription uses the verified Gmail address of the signed-in Google account.
- Only Gmail addresses listed in both `firebase-config.js` and Firestore rules can open Admin Dashboard and publish/edit/delete news.
- Admin news is stored in Firestore and synced to visitor browsers.
- Newsletter addresses are stored in the Firestore `subscribers` collection. Only admins can read that collection.

## Security notes
- The Firestore rules are the actual publishing security boundary; the email check in the browser is only for the user interface.
- Never remove the admin check from Firestore rules or publish the site with placeholder rules.
- Firebase web config is public by design; Firestore Security Rules protect your data.
- If you change an admin Gmail, update both `firebase-config.js` and `firestore.rules`.
- This starter currently uses Firestore document storage for the news list. Keep news content reasonably sized.

## Local preview
Open `index.html` or run:
```bash
python -m http.server 8000
```


## নতুন সংস্করণে কী যোগ হয়েছে
- কোনো নিউজে চাপ দিলে আলাদা `article.html` পেজে পুরো সংবাদ খুলবে; পপআপ থাকবে না।
- অ্যাডমিন নিউজের ট্যাগ যোগ করতে এবং প্রকাশ/আনপাবলিশ করতে পারবেন।
- অ্যাডমিন প্যানেলে সাইটের নাম, স্লোগান, লোগো URL, প্রধান রং, ফন্ট, বিজ্ঞাপনের লেখা, মেনু এবং ফুটারের লেখা/লিংক পরিবর্তনের সেটিংস যোগ করা হয়েছে।
- Footer স্বাভাবিক পেজ ফ্লোতে থাকবে এবং ছোট কনটেন্টের পেজেও নিচে থাকবে।

## গুরুত্বপূর্ণ: Firebase Rules প্রকাশ করুন
Firebase Console → Firestore Database → Rules-এ এই ZIP-এর `firestore.rules` ফাইলের সম্পূর্ণ লেখা বসিয়ে **Publish** করুন। এরপর ZIP-এর সব ফাইল GitHub Pages repository-তে আপলোড/Replace করুন। ZIP আপলোড করলেই Firestore Rules নিজে থেকে বদলায় না।

Admin Gmail: `jrjisanalom@gmail.com`
