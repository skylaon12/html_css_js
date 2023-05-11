// rpgV0.3.0 패치노트
// - 유닛 클래스 생성
// - 공격력을 해당 공격력 수치와 0사이의 값이 랜덤으로 나오도록 수정하였습니다.
// - 공격력으로 상대 체력을 깎는 처리를 하던 부분을 위 함수를 가진 attack 값(랜덤)으로 처리
// - 공격 메세지 출력 추가(ex. 오크전사가 엠피스에게 데미지를 10 입혔습니다.)
// 위의 처럼 서로 데미지를 입힐 때 누가 누구에게 몇의 데미지를 입혔는지를 출력하게 됩니다.

class Unit {
    constructor(name, hp, ad) {
        this.name = name;
        this.hp = hp;
        this.ad = ad;
        
    }
    info(){
        hr();
        dw("["+this.name+"]["+this.hp+"][ad:"+this.ad+"]");
        hr();
    }

    attack(enemy){
        var temp_ad = getRandomAttackValue(this.ad);
        enemy.hp -= temp_ad;
        dw(this.name + "가 " + enemy.name + "에게 " + temp_ad + "의 데미지를 입혔습니다.");
        br();
        hr();
    }
    
}
// 몬스터 클래스
class Monster extends Unit{
    
}
// 캐릭터 클래스
class Character extends Unit{
    
}

// 공격력을 해당 공격력 수치와 0 사이의 값이 랜덤으로 나오도록 함수 추가
function getRandomAttackValue(ad){
    var rand_ad = Math.floor(Math.random() * ++ad); // ad가 10이라면 0~10까지므로 ++처리
    return rand_ad;
}

// 전투 함수. 두 유닛이 전투를 개시함.
function fight(Unit1, Unit2){
    Unit1.attack(Unit2);
    Unit2.attack(Unit1);
}


var orc = new Monster("하급 오크", 100, 10);
var elf = new Character("초급 엘프", 75, 10);

orc.info();
elf.info();

hr();
dw("전투 시작");
hr();

fight(elf, orc);

orc.info();
elf.info();