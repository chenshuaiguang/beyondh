//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {//111
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
  // test:{
<<<<<<< HEAD
  //   name:1,
        // name:2
=======
  //   name:1
>>>>>>> 255620754ca950efb91855f5cccf230abf98a698
  // }
})