// 문21	반복문 - 별찍기

/*

         *
        **
       ***
      ****
     *****
    ******
   *******
  ********
 *********
**********

이런 모양 나오게

*/

for(var i = 1; i <= 10; i++){
    for(var k = 10; k >= i; k--){
        document.write("&nbsp;");
    }
    for(var j = 1; j <= i; j++){
        document.write("*");
    }
    document.write("<br>");
}