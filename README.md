
1. Log into https://firebase.google.com/
2. Go to https://console.firebase.google.com/
3. Create new project
4. Go to project, click on authentication -> sign in methods, and enable gmail;
5. Go to database, rules and paste:
####note: this is only meant for development, look into how awesome and powerful firebase rules are on your own :)
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
6. Go to projects home page, click on 'add Firebase to your web app' and copy the javascript into /public/scripts/firebaseConfig.js
7. hopefully you can fallow directions and I can write decently. :) happy firebaseing.





## For a chestnut and fellow marshmallows
####you just got roasted
ilyall.
