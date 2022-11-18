var a = null;
var b = 375;
function fu() {
    clearInterval(a);
    a = setInterval(function () {
        var html_ = document.getElementsByTagName('html')[0];
        var w = document.clientWidth || document.body.clientWidth;
        html_.style.fontSize = (w / b) * 10 + ('px')
    }, 20)

}
fu();