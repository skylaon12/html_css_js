function br(){
    document.write("<br>");
}
var now = new Date();



document.write(now.getFullYear() + "년 " + now.getMonth() + "월 " + now.getDate() + "일 ");
document.write(now.getHours() + "시 " + now.getMinutes() + "분 " + now.getSeconds() + "초 " + now.getMilliseconds() + "밀리초");
