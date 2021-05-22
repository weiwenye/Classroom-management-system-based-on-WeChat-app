Page({
  data:{
    //登陆账号
    login_ID:'',
    //登陆密码
    login_password:'',
  },
  //输入账号
  getInputID:function(e){
    this.setData({
      login_ID:e.detail.value,
    });
    //将登陆账号存入缓存，并命名为“userInfoID”
    wx.setStorageSync(
      "userInfoID",e.detail.value
    ); 
  },
  //输入密码
  getInputPassword:function(e)
  {
    this.setData({
      login_password:e.detail.value,
    }),
    //将登陆账号存入缓存，并命名为“userInfoPassword”
    wx.setStorageSync(
      "userInfoPassword",e.detail.value
    ); 
  },
  //获取用户手机信息
  handleGetUserInfo(e){
    console.log(e);
    const {userInfo}=e.detail;
    //将用户信息存入缓存，并命名为“userInfo”
    wx.setStorageSync(
      "userInfo",userInfo
    ); 
  },
  //点击登录
  click_login:function(){ 
    wx.request({
        url: 'https://abc.charlieqyq.top:29999/StudentLogin.php',
        data: {
          'StudentID': this.data.login_ID,
          'StudentPassword': this.data.login_password,
        },
        method: 'GET',
           
        success: function (res) {
          console.log(res.data)
          if(res.data=="Password Correct"){
            //弹窗显示结果
            wx.showModal({
              title:'登陆成功！',
              success:function(e){
                //跳转到学生首页
                wx.switchTab({
                  url: '../index/index',
                })
              }
            })
          }else{
            wx.showModal({
              title:res.data,
              content:'请重新输入！',
              success:function(r){
                //重新回到学生登陆页面
                wx.navigateTo({
                  url: '../login/login',
                })
              }
            })
          }
        }
    })
  }
})