Page({
  data: {
    search_val:'',

    shows1:false, //控制下拉列表的显示隐藏，false隐藏、true显示
    shows2:false,
    shows3:false,
    selectDatas1: [1, 2, 3], //下拉列表的数据
    selectDatas2: [1, 2, 3],
    selectDatas3: [1, 2, 3],
    indexs1: 0, //选择的下拉列 表下标,
    indexs2: 0,
    indexs3: 0,

    Weeks:'',
    Weekdays:'',
    Times:'',

    ID:'',
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

  askfor_records:function(){
    var userinfoID=wx.getStorageSync('userInfoID')
    this.setData({
      ID:userinfoID,
    })
    wx.request({
      url: 'https://abc.charlieqyq.top:29999/TeacherQuery.php',
      data:{
        'TeacherID':this.data.ID
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
    wx.navigateTo({
      url: '../records/records',
    })
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





