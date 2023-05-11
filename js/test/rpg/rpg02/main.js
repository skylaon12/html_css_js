// 기능 추가
// 전투 시작 메세지 출력
// 오크와 엘프 간 전투 처리(서로 한번씩만 때려 피해를 입히는 처리)
// 상대의 공격력(attack) 수치만큼 hp(체력)에 피해(마이너스) 처리
// 각 객체의 info를 호출하여 현재 정보 출력 


// 몬스터 클래스
function Monster(name, hp, atk){
    this.name= name;
    this.hp = hp;
    this.atk = atk;

    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.hp+"][atk:"+this.atk+"]");
        hr();
    }
}
// 캐릭터 클래스
function Character(name, hp, atk){
    this.name= name;
    this.hp = hp;
    this.atk = atk;

    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.hp+"][atk:"+this.atk+"]");
        hr();
    }
}

// function fight(Character a, Character b){
//     a.hp = a.hp - b.atk;
//     b.hp -= a.atk;
// }

var orc = new Monster("하급 오크", 100, 10);
var elf = new Character("초급 엘프", 75, 10);

orc.info();
elf.info();

hr();
dw("전투 시작");
hr();


orc.hp -= elf.atk;
elf.hp -= orc.atk;

orc.info();
elf.info();
