var posts=["posts/39fc.html","posts/3e5.html","posts/888c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };