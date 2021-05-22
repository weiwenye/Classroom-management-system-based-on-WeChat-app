Page({
  data: {
    userInfoID:'',
    ID:'',
  },

  askfor_records:function(){
    var ID=wx.getStorageSync('userInfoID')
    this.setData({
      ID:ID,
    })
    wx.request({
      url: 'https://abc.charlieqyq.top:29999/AppliQuery.php',
      data:{
        'ID':this.data.ID
      },
      method:'GET',
      success:function(res){
        console.log(res.data)
        //将返回的申请记录存入缓存
        wx.setStorage({
          data: res.data,
          key: 'askfor_records',
        })
      },
    }),
    wx.navigateTo({
      url: '../records/records',
    })
  },
  onLoad: function(options){
    //页面一开始加载就将用户手机信息从内存中读出
    userInfoID:wx.getStorageSync('userInfoID');
  },

  exit:function(e){
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync(Object);
          //页面跳转
          wx.redirectTo({
            url: '../select_character/select_character',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },  
})