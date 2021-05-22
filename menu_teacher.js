//与学生表单除ID与TeacherID自动从内存中获取、request接口不同之外，其他基本相同
Page({
  data: {
    ID:'',
    RoomName:'',
    Weeks:'',
    Weekdays:'',
    Times:'',
    Reason:'',
    TeacherID:'',
  },
  
  getInputRoomName:function(e)
  {
    this.setData({
      RoomName:e.detail.value,
      ID:wx.getStorageSync('userInfoID'),
      TeacherID:wx.getStorageSync('userInfoID'),
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
    var userinfoID=wx.getStorageSync('userinfoID')
    this.setData({
      TeacherID:userinfoID
    })
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
                  url: '../teacher_index/teacher_index',
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


  
