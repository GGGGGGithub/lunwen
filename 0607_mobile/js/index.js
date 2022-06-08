$(function () {
  $('.address-li p').each(function (index) {
    $(this).click(function () {
      $('.address-li p').removeClass('active').eq(index).addClass('active')
      $('.address-con a').removeClass('show').eq(index).addClass('show')
    })
  })
  $(".middle span").click(function () {　　　　 //获取点击的元素给其添加样式，讲其兄弟元素的样式移除
    $(this).addClass("active").siblings().removeClass("active");　　　　 //获取选中元素的下标
    $(".introduce_info").eq($(".middle span").index(this)).addClass("show").siblings().removeClass('show');
  });
});