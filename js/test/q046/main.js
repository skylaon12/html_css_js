// cat 클래스 객체를 생성하기
// 변수 kitty를 선언하고 여기에 위의 Cat 클래스 객체 생성문 넣기(대입)
// 이 클래스형 변수 kitty가 가진 name 변수에 "야옹이"를 넣기("야옹이라고 이름 지어주기")
// 고양이 이름 출력하기

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

var cat = new Cat();
cat.name = "야옹이"

document.write(cat.name);