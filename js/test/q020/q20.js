// 문20	반복문 - 별찍기

/*
**********
 *********
  ********
   *******
    ******
     *****
      ****
       ***
        **
         *
이런 모양 나오게

*/

var st = "*";
for(var i = 1; i <= 10; i++){
    
    for(var k = 1; k <= i-1; k++){
        document.write("&nbsp;");
    }
    for(var j = 10; j >= i; j--){
        document.write(st);
    }
    document.write("<br>");
}