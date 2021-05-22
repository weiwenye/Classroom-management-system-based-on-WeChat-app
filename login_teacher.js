Page({
  data:{
    login_ID:'',
    login_password:'',
  },
  //获取输入数值
  getInputID:function(e)
  {
    this.setData({
      login_ID:e.detail.value,
    });
    //存入缓存
    wx.setStorageSync(
      "userInfoID",e.detail.value
    ); 
  },
  //获取输入数值
  getInputPassword:function(e)
  {
    this.setData({
      login_password:e.detail.value,
    }),
    //存入缓存
    wx.setStorageSync(
      "userInfoPassword",e.detail.value
    ); 
  },
  //获取用户信息
  handleGetUserInfo(e){
    //打印用户信息
    console.log(e);
    const {userInfo}=e.detail;
    //将用户信息存入缓存
    wx.setStorageSync(
      "userInfo",userInfo
    ); 
  },

  click_login:function(){ 
    //将账号密码发送数据库
    wx.request({
        url: 'https://abc.charlieqyq.top:29999/TeacherLogin.php',
        data: {
          'TeacherID': this.data.login_ID,
          'TeacherPassword': this.data.login_password,
        },
        method: 'GET',
        //检测账号密码是否正确
        success: function (res) {
          console.log(res.data)
          if(res.data=="Password Correct"){
            wx.showModal({
              title:'登陆成功！',
              //账号密码正确，跳转教师首页
              success:function(e){
                wx.navigateTo({
                  url: '../teacher_index/teacher_index',
                })
              }
            })
          }else{
            wx.showModal({
              title:res.data,
              content:'请重新输入！',
              success:function(r){
                wx.navigateTo({
                  url: '../login_teacher/login_teacher',
                })
              }
            })
          }
        }
    })
  }
})