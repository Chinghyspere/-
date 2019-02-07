//index.js
const app = getApp()
var start_time;
var end_time;
Page({
  data: {
    result:'拇指放在圆圈上\nReady？GO！'
  },
push_start:function(event){
  start_time = new Date().getTime();
},
push_end:function(event){
end_time = new Date().getTime();
var results = end_time-start_time;
results = results / 1000.0
this.setData(
  {result:results}
);
}
});