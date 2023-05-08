// cat 클래스 객체를 생성하기
// 변수 kitty를 선언하고 여기에 위의 Cat 클래스 객체 생성문 넣기(대입)
// 속성들 넣어주고 다 출력해보기

function Cat(){
    this.name = "";
    this.age = 0;
    this.weight = 0;
    this.family = "";
    this.color = "";

    this.crying = function(){
        document.write("냥냥");
    }
}

var kitty = new Cat();
kitty.name = "야옹이"
kitty.age = 9;
kitty.weight = 6.5;
kitty.family = "코숏";
kitty.color = "검정";

document.write(kitty.name);
document.write("<br>");
document.write(kitty.age);
document.write("<br>");
document.write(kitty.weight);
document.write("<br>");
document.write(kitty.family);
document.write("<br>");
document.write(kitty.color);
document.write("<br>");
kitty.crying();
