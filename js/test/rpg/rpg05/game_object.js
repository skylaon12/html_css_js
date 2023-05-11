// 유닛들 영역
class Unit {
    constructor(name, hp, ad) {
        this.name = name;
        this.hp = hp;
        this.max_hp = hp;
        this.ad = ad;
        
    }

    // hr제거함으로써 한 줄로 만듬.. 뭔가 부족한 느낌..?
    info(){
        dw("["+this.name+"("+this.hp+"/"+this.max_hp+")]");
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