Page({
  data: {
    No:'',
    userInfoID:'',
  },
  getInputNo:function(e)
  {
    this.setData({
      No:e.detail.value,
    });
    wx.setStorageSync(
      "teacher_reply_No",e.detail.value
    ); 
    var userInfoID=wx.getStorageSync('userInfoID')
    this.setData({
      userInfoID:userInfoID
    })
  },

  select_pass:function(){ 
    wx.request({
        url: 'https://abc.charlieqyq.top:29999/Approval.php',
        data: {
          'ID':this.data.userInfoID,
          'No': this.data.No,
          'Status': 'PASS',
        },
        method: 'GET',
           
        success: function (res) {
          console.log(res.data)
          wx.navigateTo({
            url: '../teacher_index/teacher_index',
          })
        }
    })
    var userInfoID=wx.getStorageSync('userInfoID')
    this.setData({
      userInfoID:userInfoID,
    })
    wx.request({
      url: 'https://abc.charlieqyq.top:29999/TeacherQuery.php',
      data:{
        'TeacherID':this.data.userInfoID
      },
      method:'GET',

      success:function(res){
        console.log(res.data)
        wx.setStorage({
          data: res.data,
          key: 'askfor_records',
        })
      },
    })
  },

  select_fail:function(){ 
    wx.request({
        url: 'https://abc.charlieqyq.top:29999/Approval.php',
        data: {
          'ID':this.data.userInfoID,
          'No': this.data.No,
          'Status': 'FAIL',
        },
        method: 'GET',
           
        success: function (res) {
          console.log(res.data)
          wx.navigateTo({
            url: '../teacher_index/teacher_index',
          })
        }
    })
    var userInfoID=wx.getStorageSync('userInfoID')
    this.setData({
      userInfoID:userInfoID,
    })
    wx.request({
      url: 'https://abc.charlieqyq.top:29999/TeacherQuery.php',
      data:{
        'TeacherID':this.data.userInfoID
      },
      method:'GET',

      success:function(res){
        console.log(res.data)
        wx.setStorage({
          data: res.data,
          key: 'askfor_records',
        })
      },
    })
  },
  
  onLoad: function (options) {
    
    wx.request({
      url: 'https://abc.charlieqyq.top:29999/AppliNoQuery.php',
      data: {
        'No': this.data.No,
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data),
       
        wx.setStorage({
          data: res.data,
          key: 'the_newest_data',
        })
      }
  })
  },
})