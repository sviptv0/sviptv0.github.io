var posts=["undefined/39fc.html","undefined/888c.html","undefined/3e5.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };