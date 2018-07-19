//index.js
Page({

  data: {
    imgUrls: [
      'https://api.hnhyrc.cn/images/xcb.jpg',
      'https://api.hnhyrc.cn/images/rcw.jpg',
      'https://api.hnhyrc.cn/images/zl.jpg'
    ],

    links: [
      '/pages/xianchang/xianchang',
      '/pages/hyrc/hyrc',
      '/pages/zhilian/zhilian'
    ],
    //幻灯片数据
    swiperCurrent: 0,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    circular: true,
  },

  onLaunch: function() {
    console.log('loading Launching ...');
  },
  onShow: function() {
    var that = this;
    setTimeout(function() {
      that.setData({
        hidden: true
      });
    }, 1500);
  },

  //轮播图的切换事件
  swiperChange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  //点击指示点切换
  chuangEvent: function(e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },

  //点击图片触发事件
  swipclick: function(e) {
    //console.log(this.data.swiperCurrent);
    wx.switchTab({
      url: this.data.links[this.data.swiperCurrent]
    })
  }
});