// pages/xianchang/xianchang.js
Page({
 
  data: {
    imgUrls: [
      'https://api.hnhyrc.cn/images/xcb.jpg',

    ],
    //幻灯片数据
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    //TAB标签数据
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },
  
  onLaunch: function () {
    console.log('loading Launching ...');
  },
  onShow: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        hidden: true
      });
    }, 1500);
  },

});