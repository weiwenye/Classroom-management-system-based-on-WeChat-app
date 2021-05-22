Page({
  data: {

  },
  //选择学生身份
  select_student:function(){
    //跳转到学生首页
    wx.navigateTo({
      url: '../login/login',
    })
  },
  //选择老师身份
  select_teacher:function(){
    //跳转到教师首页
    wx.navigateTo({
      url: '../login_teacher/login_teacher',
    })
  }
})