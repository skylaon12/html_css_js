// 문27	논리연산자	&& ||		
//  (	a 가 b 보다 큼	그리고	c 가 d 보다 작음	)	또는	(	e 가 100과 같음	그리고	f 가 100이 아님	)
//위의 긴 조건을 if 조건문으로 만들기											
//* 조건문 작성 시 이 괄호로 묶으세요
//위 조건을 다 만족(ok, 참, true) 시키게끔 a, b, c, d, e, f 값을 적절히 주기											
//조건을 만족하면 고양이 출력	

var a = 10;
var b = 5;
var c = 5;
var d = 10;
var e = 101;
var f = 100;

if((a>b && c<d) || (e==100 && f!=100)){
    document.write("고양이");
}else{
    document.write("false");
}