Page({
  data: {
    isSearch:false,
    isCancel:false,
    search_val:'',
    /*学生数组 */
    StudentID:[],
    StudentName:[],
    StudentPassword:[],

    shows1:false, //控制下拉列表的显示隐藏，false隐藏、true显示
    shows2:false,
    shows3:false,
    selectDatas1: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], //下拉列表的数据
    selectDatas2: [1,2,3,4,5,6,7],
    selectDatas3: [1,2,3,4,5,6,7,8,9,10],
    indexs1: 0, //选择的下拉列 表下标,
    indexs2: 0,
    indexs3: 0,

    Weeks:'',
    Weekdays:'',
    Times:'',

  },

  
  getInput:function(e)
  {
    //获取搜索框输入的内容
    this.setData({
      search_val:e.detail.value,
    })
    //将搜索内容存入缓存
    wx.setStorageSync(
      "search_room",e.detail.value
    ); 
    if(this.data.search_val.length>0){
      this.setData({
        isSearch:true,
        isCancel:true,
      })
    }else{
      this.setData({
        isSearch:false,
        isCancel:false,
    })
    }
  },
  click_NULL:function(){
    wx.showModal({
      title: '功能尚未开发',
      content: '敬请期待!',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync(Object);
          //页面跳转
          wx.redirectTo({
            url: '../index/index',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
   })
  },
  now_search:function()
  {
   wx.showModal({
      title: '功能尚未开发',
      content: '敬请期待!',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync(Object);
          //页面跳转
          wx.redirectTo({
            url: '../index/index',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
   })
    this.setData({
      
      isSearch:true,
      isCancel:true,
    })
  },
  now_cancel:function()
  {
    this.setData({
      search_val:'',
      isSearch:false,
      isCancel:false,
    })
  },

  // 点击下拉显示框
  selectTaps1() {
    this.setData({
      shows1: !this.data.shows1,
    });
  },
  selectTaps2() {
    this.setData({
      shows2: !this.data.shows2,
    });
  },
  selectTaps3() {
    this.setData({
      shows3: !this.data.shows3,
    });
  },
  // 点击下拉列表
  optionTaps1(e) {
    let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    console.log(Indexs)
    this.setData({
      indexs1: Indexs,
      shows1: !this.data.shows1,
      Weeks:Indexs+1,
    });
    wx.setStorageSync('Weeks', Indexs+1);
  },
  optionTaps2(e) {
    let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    console.log(Indexs)
    this.setData({
      indexs2: Indexs,
      shows2: !this.data.shows2,
      Weekdays:Indexs+1,
    });
    wx.setStorageSync('Weekdays', Indexs+1);
  },
  optionTaps3(e) {
    let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    console.log(Indexs)
    this.setData({
      indexs3: Indexs,
      shows3: !this.data.shows3,
      Times:Indexs+1,
    });
    wx.setStorageSync('Times', Indexs+1);
  },
  now_search_time(){
    wx.request({
      url: 'https://abc.charlieqyq.top:29999/RoomQuery.php',
      data:{
        'Weeks':this.data.Weeks,
        'Weekdays':this.data.Weekdays,
        'Times':this.data.Times,
      },
      success:function(res)
      {
        //将教室情况存入缓存
        wx.setStorage({
          data: res.data,
          key: 'roominfo',
        })
        wx.navigateTo({
          url: '../search_result/search_result',
        })
      }
      
    })
    
  },

  /*页面开始加载，就会触发的生命周期事件*/ 
  onLoad: function (options) {
  


  }
})





