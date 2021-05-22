Page({

  data:{
    aa:[
            {
                name:"101",
                reward:"7：00-8：00"
            },
            {
                name: "102",
                reward: "7：00-8：00"
            },
            {
                name: "103",
                reward: "7：00-8：00"
            },
            {
                name: "104",
                reward: "7：00-8：00"
            },
            {
                name: "105",
                reward: "7：00-8：00"
            },
            {
                name: "106",
                reward: "7：00-8：00"
            },
            {
                name: "201",
                reward: "7：00-8：00"
            },
            {
                name: "202",
                reward: "7：00-8：00"
            },
            {
                name: "203",
                reward: "7：00-8：00"
            },
            {
                name: "204",
                reward: "7：00-8：00"
            },
        ],
},
click:function(){
    wx.showModal({
        title: '功能尚未开发',
        content: '敬请期待!',
        success: function (res) {
          if (res.confirm) {
            // console.log('用户点击确定')
            wx.removeStorageSync(Object);
            //页面跳转
            wx.redirectTo({
              url: '../building_N/building_N',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
     })
}
})