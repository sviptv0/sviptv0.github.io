var posts=["搭建Xray证书自动续期/","docker搭建个人博客Wordpress/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };