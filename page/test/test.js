// page/normalPeoList/normalPeoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startX: '',
    endX: '',
    txtStyle: '',
    list:[{
      style:''
    }, {
      style: ''
    }]
  },
  touchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX
      });
    }
  },
  touchM: function (e) {
    // console.log(e.changedTouches)
    var txtStyle = "";
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var disX = this.data.startX - moveX;
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变  
        txtStyle = "left:0px";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离  
        txtStyle = "left:-" + disX + "px";
        if (disX >= 140) {
          //控制手指移动距离最大值为删除按钮的宽度  
          txtStyle = "left:-280rpx";
        }
      }
      //获取手指触摸的是哪一项  
      var index = e.target.dataset.index;
      var list = this.data.list;
      list[index].style = txtStyle;
      //更新列表的状态  
      this.setData({
        list: list
      });  
    }
  },
  touchE: function (e) {
    if (e.changedTouches.length == 1) {
      //手指移动结束后水平位置  
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离  
      var disX = this.data.startX - endX;
      //如果距离小于删除按钮的1/2，不显示删除按钮  
      var txtStyle = disX > 140 / 2 ? "left:-" + 280 + "rpx" : "left:0px";
      //获取手指触摸的是哪一项  
      var index = e.target.dataset.index;
      var list = this.data.list;
      console.log(list)
      console.log(index)
      list[index].style = txtStyle;
      //更新列表的状态  
      this.setData({
        list: list
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})