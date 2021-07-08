(function(){
  var navList = document.querySelectorAll('.nav-list-title')

  // 定义一个入口函数
  var init =function(){
    initEvent();
  }

  // 事件绑定函数
  var initEvent =function(){
    iconMenuBtn.addEventListener('click',onIconMenuBtnClick)
    closeBtn.onclick=onCloseBtnClick
    
    navList.forEach(function(node,index){
      node.addEventListener('mouseenter',onNavItemMouseEnter)
    })
  }

  // 导航标题鼠标划过事件
  var onNavItemMouseEnter=function(){
    var currentIndex = this.getAttribute('data')
    //getAttribute函数，getAttribute() 方法返回指定属性名的属性值
    
    //第一步添加类名
    navList.forEach(function(node){
      node.classList.remove('on')
    }) 
    this.classList.add('on')

    if(!currentIndex) return
  }

  
})