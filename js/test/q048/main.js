// cat 클래스 객체를 생성하기
// 변수 kitty를 선언하고 여기에 위의 Cat 클래스 객체 생성문 넣기(대입)
// 속성들 넣어주고 다 출력해보기
// 추가로 cat 클래스로부터 yaongi 객체를 하나 더 만들기.. 속성값도 임의로 주고
// 키티랑 야옹이랑 나이를 비교하여 서열정리
// ex) 형님 고양이 : 야옹이
//     동생 고양이 : 키티
//      둘은 친구 (같으면)
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
kitty.name = "키티"
kitty.age = 15;
kitty.weight = 6.5;
kitty.family = "코숏";
kitty.color = "검정";

var yaongi = new Cat();
yaongi.name = "야옹이"
yaongi.age = 9;
yaongi.weight = 9;
yaongi.family = "스핑크스";
yaongi.color = "살색";

if (kitty.age > yaongi.age)
    document.write("형님 고양이 : " + kitty.name + "<br>동생 고양이 : " + yaongi.name);
else if (kitty.age < yaongi.age)
    document.write("형님 고양이 : " + yaongi.name + "<br>동생 고양이 : " + kitty.name);
else 
    document.write("둘은 친구임");
