// 컴퓨터의 6개의 숫자랑 내꺼랑 각각 비교해서
// 몇 개가 일치하는지 세어 출력하기
// 컴퓨터의 두번째 번호가 첫번째 번호와 같은 경우 다시 뽑도록 하기
var p1,p2,p3,p4,p5,p6;
var r1,r2,r3,r4,r5,r6;
var cnt = 0; // 일치 횟수
// 본인번호
p1 = 1;
p2 = 2;
p3 = 3;
p4 = 4;
p5 = 5;
p6 = 6;
// 컴퓨터번호

while(r1 != r2){
    r1 = Math.floor(Math.random()*45 + 1);
    r2 = Math.floor(Math.random()*45 + 1);
}
r3 = Math.floor(Math.random()*45 + 1);
r4 = Math.floor(Math.random()*45 + 1);
r5 = Math.floor(Math.random()*45 + 1);
r6 = Math.floor(Math.random()*45 + 1);

if (p1 == r1)
    cnt++;
else if (p1 == r2)
    cnt++;
else if (p1 == r3)
    cnt++;
else if (p1 == r4)
    cnt++;
else if (p1 == r5)
    cnt++;
else if (p1 == r6)
    cnt++;
if (p2 == r1)
    cnt++;
else if (p2 == r2)
    cnt++;
else if (p2 == r3)
    cnt++;
else if (p2 == r4)
    cnt++;
else if (p2 == r5)
    cnt++;
else if (p2 == r6)
    cnt++;
if (p3 == r1)
    cnt++;
else if (p3 == r2)
    cnt++;
else if (p3 == r3)
    cnt++;
else if (p3 == r4)
    cnt++;
else if (p3 == r5)
    cnt++;
else if (p3 == r6)
    cnt++;
if (p4 == r1)
    cnt++;
else if (p4 == r2)
    cnt++;
else if (p4 == r3)
    cnt++;
else if (p4 == r4)
    cnt++;
else if (p4 == r5)
    cnt++;
else if (p4 == r6)
    cnt++;
if (p5 == r1)
    cnt++;
else if (p5 == r2)
    cnt++;
else if (p5 == r3)
    cnt++;
else if (p5 == r4)
    cnt++;
else if (p5 == r5)
    cnt++;
else if (p5 == r6)
    cnt++;
if (p6 == r1)
    cnt++;
else if (p6 == r2)
    cnt++;
else if (p6 == r3)
    cnt++;
else if (p6 == r4)
    cnt++;
else if (p6 == r5)
    cnt++;
else if (p6 == r6)
    cnt++;

document.write(cnt);


function br(){
    document.write("<br>");
}