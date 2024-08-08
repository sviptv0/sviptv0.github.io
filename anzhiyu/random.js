var posts=["posts/优选IP.html","posts/docker搭建个人博客Wordpress.html","posts/搭建Xray证书自动续期.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };