// 100을 리턴하는 함수 만들기
// 200을 리턴하는 함수 만들기
// 숫자 둘을 매개변수로 받아서 그 둘을 더하여 그 결과를 리턴하는 함수 만들기

function a(){
    return 100;
}
function b (){
    return 200;
}

function a_b(a,b){

    return a+b;
}

document.write(a() + "<br>");
document.write(b() + "<br>");
document.write(a_b(a(),b()));