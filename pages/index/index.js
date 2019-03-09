//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    subjects:""
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
    let _this=this;
   app.request({
     url:"https://douban.uieee.com/v2/movie/coming_soon",
     data:{
       city:"yes"
     }
   })
   .then(function(res){
      console.log(res)
      _this.setData({
        subjects:res.data.subjects
      })
   })
   .catch(function(err){
     console.log(err)
   })
  },
  getUserInfo: function(e) {
   
  }
})
