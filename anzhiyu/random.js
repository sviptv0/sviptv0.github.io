var posts=["2024/08/07/docker搭建个人博客Wordpress/","2024/08/07/搭建Xray证书自动续期/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };