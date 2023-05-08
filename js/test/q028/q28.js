// for 1~10 반복 하여
// 홀수면 1은 홀수입니다.
// 짝수면 2는 짝수입니다... 출력

for(var i = 1; i <= 10; i++){
    if(i % 2 == 0)
        document.write(i + "은 짝수입니다.");
    else    
        document.write(i + "은 홀수입니다.");

    br();
}

function br(){
    document.write("<br>");
}