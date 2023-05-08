// 고양이 나이, 고양이 종류, 고양이 이름 이 3가지를 각각 변수를 만드시고, 다 합친 변수도 하나 만드시고
// 합친걸 팝업으로 출력하세요


var c_age;
var c_feat;
var c_name;
var cat;

function c_register(){
    c_age = prompt("나이를 입력하세요.");
    c_feat = prompt("종을 입력하세요");
    c_name = prompt("이름을 입력하세요");

    cat = c_plus(c_age, c_feat, c_name);

    document.write(cat);
}

function c_plus(a,b,c){
    return a+b+c;
}

c_register();
