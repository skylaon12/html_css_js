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
        dw("[💖"+this.name+"("+this.hp+"/"+this.max_hp+")]");
    }

}
// 몬스터 클래스
class Monster extends Unit{
    
    attack(enemy){
        var temp_ad = getRandomAttackValue(this.ad);
        enemy.hp -= temp_ad;
        dw("🪓" + this.name + "(이)가 " + enemy.name + "(을)를 공격! 데미지 : " + temp_ad);
        br();
        hr();
    }

}
// 캐릭터 클래스
// class 생성자 override 
class Champion extends Unit{
    
    constructor(name, hp, ad) {
        super(name, hp, ad);
        this.exp = 0;
        this.max_exp = 300;
    }

    info(){
        dw("["+this.name+"(💖"+this.hp+"/"+this.max_hp+")(exp:" + this.exp + "/" + this.max_exp + ")]");
    }

    attack(enemy){
        var temp_ad = getRandomAttackValue(this.ad);
        enemy.hp -= temp_ad;
        dw("🏹" + this.name + "(이)가 " + enemy.name + "(을)를 공격! 데미지 : " + temp_ad);
        br();
        hr();
    }

}