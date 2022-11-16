
//点击后60秒发送验证码
var huoqu = document.getElementsByClassName('huoqu')[0];
var num = 60;
var time;
function dianji() {
    clearInterval(time);
    time = setInterval(fn, 1000);
}
function fn() {
    num = --num;
    huoqu.innerHTML = '（' + num + '）' + '重发';
    if (num <= 0) {
        huoqu.innerHTML = '重新发送';
    }
}