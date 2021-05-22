Page({
  data: {
    askfor_records:{},   
  },

  onLoad: function (options) {
    //页面加载一开始就从内存中读取申请记录
    var askfor_records=wx.getStorageSync('askfor_records')
    this.setData({
      askfor_records:askfor_records,
    })
  },
})