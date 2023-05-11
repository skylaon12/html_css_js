// rpgV0.4.0 패치노트
// - 체력 표시를 [현재체력/최대체력] 식으로 변경하였습니다.
// - 챔피언 정보 표시(info)를 수정하였습니다(Charactor -> Champion 이름 변경)
// - ex) [엠피스(70/100)]

class Unit {
    constructor(name, hp, ad) {
        this.name = name;
        this.hp = hp;
        this.max_hp = hp;
        this.ad = ad;
        
    }
    info(){
        hr();
        dw("["+this.name+"("+this.hp+"/"+this.max_hp+")]");
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
class Champion extends Unit{
    
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
var elf = new Champion("케일", 75, 10);

orc.info();
elf.info();

hr();
dw("전투 시작");
hr();

fight(elf, orc);

orc.info();
elf.info();