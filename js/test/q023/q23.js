// 반복문 1~10 돌면서 1~10을 출력
// 반복문 도중 변수값이 랜덤 값과 일치하는 경우 반복문을 중지

var num = Math.floor(Math.random() * 10 + 1);

for (var i = 1; i <= 10; i++) {

    if (num == i) {
        document.write("마지막 값 : " + i);
        break;
    }

    else
    document.write(i + "<br>");

}
