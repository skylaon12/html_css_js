// ☆ 을 
// ☆
// ☆☆
// ☆☆☆
// .....
// ☆ x 10 까지 출력

var st = "☆";

for(var i = 1; i < 11; i++){
    for(var j = 0; j < i; j++){
        document.write(st);
    }
    document.write("<br>");
}