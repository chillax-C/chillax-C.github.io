var posts=["2026/07/18/搭建博客/","2026/07/21/LCG/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };