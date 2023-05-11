// LOTTO V0.1.0
// 1. 컴퓨터가 1~45 사이의 수를 6개 뽑아서 출력

var num = 0;
var cat = 1;
for(var i = 0; i < 7; i++){
    num = Math.floor(Math.random()*45 + 1);
    document.write(num);
    console.log(num);
    br();
    cat++;
}

function br(){
    document.write("<br>");
}