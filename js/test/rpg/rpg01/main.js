// 몬스터 클래스
function mon(name, hp, atk){
    this.name= name;
    this.hp = hp;
    this.atk = atk;

    this.info = function(){
        document.write("이름 : " + this.name);
        br();
        document.write("체력 : " + this.hp);
        br();
        document.write("공격력 : " + this.atk);
    }
}
// 캐릭터 클래스
function hu(){
    this.name = "";
    this.hp = 0;
    this.atk = 0;

    this.info = function(){
        document.write("이름 : " + this.name);
        br();
        document.write("체력 : " + this.hp);
        br();
        document.write("공격력 : " + this.atk);
    }
}

function br(){
    document.write("<br>");
}

var orc = new mon("하급 오크", 100, 10);
var elf = new hu();
elf.name="초급 엘프"
elf.hp="75";
elf.atk=10;

orc.info();
br();
elf.info();