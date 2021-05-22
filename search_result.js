Page({
  data: {
    //教室信息，包含了“RoomName”教室名称、“Building”教室所在楼和“Capacity”教师容量
    roominfo:{},
  },
  onLoad: function (options) {
    var roominfo=wx.getStorageSync('roominfo')
    this.setData({
      roominfo:roominfo,
    })
   }
})