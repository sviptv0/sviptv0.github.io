var posts=["undefined/undefined.html","undefined/undefined.html","undefined/undefined.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };