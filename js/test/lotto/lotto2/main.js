// LOTTO V0.1.0
// 내가 한 게임을 구매했다고 가정하고
// 변수 p1부터 p6까지 값 6개 각각 추가
// 컴퓨터의 랜덤값고 변수명을 r1~r6까지 변경해주기

var p1,p2,p3,p4,p5,p6;
var r1,r2,r3,r4,r5,r6;

r1 = Math.floor(Math.random()*45 + 1);
r2 = Math.floor(Math.random()*45 + 1);
r3 = Math.floor(Math.random()*45 + 1);
r4 = Math.floor(Math.random()*45 + 1);
r5 = Math.floor(Math.random()*45 + 1);
r6 = Math.floor(Math.random()*45 + 1);

document.write(r1);
br();
document.write(r2);
br();
document.write(r3);
br();
document.write(r4);
br();
document.write(r5);
br();
document.write(r6);

function br(){
    document.write("<br>");
}