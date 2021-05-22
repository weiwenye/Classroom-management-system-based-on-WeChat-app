//学生申请表单
Page({
  data: {
    //申请人ID
    ID:'',
    //教室名称
    RoomName:'',
    //周次
    Weeks:'',
    //星期
    Weekdays:'',
    //节次
    Times:'',
    //申请原因
    Reason:'',
    //审批教师
    TeacherID:'',
  },
  //获取输入表单的每一项信息都存入了缓存
  getInputRoomName:function(e)
  {
    this.setData({
      RoomName:e.detail.value,
      //申请人ID即为登陆时账号，从缓存中读取
      ID:wx.getStorageSync('userInfoID')
    }),
    wx.setStorageSync(
      "applyRoomName",e.detail.value
    ); 
  },
  getInputWeeks:function(e)
  {
    this.setData({
      Weeks:e.detail.value,
    });
    wx.setStorageSync(
      "applyWeeks",e.detail.value
    ); 
  },
  getInputWeekdays:function(e)
  {
    this.setData({
      Weekdays:e.detail.value,
    });
    wx.setStorageSync(
      "applyWeekdays",e.detail.value
    ); 
  },
  getInputTimes:function(e)
  {
    this.setData({
      Times:e.detail.value,
    });
    wx.setStorageSync(
      "applyTimes",e.detail.value
    ); 
  },
  getInputReason:function(e)
  {
    this.setData({
      Reason:e.detail.value,
    });
    wx.setStorageSync(
      "applyReason",e.detail.value
    ); 
  },
  getInputTeacherID:function(e)
  {
    this.setData({
      TeacherID:e.detail.value,
    });
    wx.setStorageSync(
      "TeacherID",e.detail.value
    ); 
  },

  click_apply:function(){ 
    wx.request({
        url: 'https://abc.charlieqyq.top:29999/ApplicationUpload.php',
        data: {
          'ID': "'"+this.data.ID+"'",
          'RoomName': "'"+this.data.RoomName+"'",
          'Weeks':"'"+this.data.Weeks+"'",
          'Weekdays':"'"+this.data.Weekdays+"'",
          'Times':"'"+this.data.Times+"'",
          'Reason':"'"+this.data.Reason+"'",
          'TeacherID':"'"+this.data.TeacherID+"'",
        },
        method: 'GET',  
        success: function (res) {
          console.log(res.data)
          if(res.data=="INSERT Success"){
            wx.showModal({
              title:'提交成功！',
              success:function(e){
                wx.switchTab({
                  url: '../index/index',
                })
              }
            })
          }else{
            wx.showModal({
              title:'提交失败',
              content:'请重新提交！',
              success:function(r){
                wx.navigateTo({
                  url: '../menu/menu',
                })
              }
            })
          }
        }
    })
  },
})


  
