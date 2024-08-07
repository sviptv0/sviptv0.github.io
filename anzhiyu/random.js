var posts=["优选IP/","docker搭建个人博客Wordpress/","搭建Xray证书自动续期/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };