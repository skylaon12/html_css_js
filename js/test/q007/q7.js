// 문6 복사 .... 조건문 if 사용
// 7번 고양이는 테두리를 황금색으로 나오게 처리
// css접근 처리를 이용하여 문제 풀기
var num = Math.floor(Math.random()*100) + 1;

//방법1
for(var i = 1; i <= num; i++){
    if(i == 7){
        document.write("<img src='cat.jpeg' style='border-style: solid; border-width: 3px; border-color: #ffd700;' witdh='100px' height='100px'");
        document.write(i);
    }
    else{
        document.write("<img src='cat.jpeg' width='100px' height='100px'>");
        document.write(i);
    }
}

// 방법2
// var random=Math.floor(Math.random()*100)+1;
// for( var i=1;  i <= random;  i=i+1  ) {
//     if ( i == 7 ) { //황금고양이 만들기
//         document.write("<img id='goldcat' src='cat.jpeg' width='100px' height='100px'>");
//         var gold_cat_img = document.getElementById("goldcat");
//         gold_cat_img.style.borderColor = "yellow";
//         gold_cat_img.style.borderStyle = "solid";
//         gold_cat_img.style.borderWidth = "10px";
//         document.write(i);
//     } else {
//         document.write("<img src='cat.jpeg' width='100px' height='100px'>");
//         document.write(i);
//     }
// }
