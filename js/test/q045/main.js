// cat 클래스 정의

function Cat(){
    this.name = "하늘";
    this.age = 9;
    this.weight = 6.5;
    this.family = "터키쉬앙고라";
    this.color = "갈색";

    this.crying = function(){
        document.write("냥냥");
    }
}

var cat = new Cat();

cat.crying();