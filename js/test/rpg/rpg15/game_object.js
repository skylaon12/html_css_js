// monster class
class Monster{
    // init
    constructor(name, hp, ad, money, exp) {
        this.name = name;   // monster name
        this.hp = hp;       // monster's current hp
        this.max_hp = hp;   // monster's total hp
        this.ad = ad;       // monster's physical damage
        this.money = money; // monster's gold
        this.exp = exp;     // distribute exp
        this.currentMode = "대기";// current state
    }

    attack(enemy){
        var temp_ad = getRandomAttackValue(this.ad);
        enemy.hp -= temp_ad;
        tv1("🪓" + this.name + "(이)가 " + enemy.name + "(을)를 공격! 데미지 : " + temp_ad);
        br();
    }

    info(){
        tv3("[💖"+this.name+"("+this.hp+"/"+this.max_hp+")]");
    }

}

// champion class
class Champion{
    
    // init
    constructor(name, hp, ad, money) {
        this.name = name;   // champion name
        this.hp = hp;       // champion's current hp
        this.max_hp = hp;   // champion's total hp
        this.ad = ad;       // champion's physical damage
        this.money = money; // champion's gold
        this.exp = 0;       // champion's current exp
        this.max_exp = 300; // champion's total exp
    }   

    // 챔피언 정보 출력 이름/체력/경험치/보유골드 순
    info(){
        tv3("\n["+this.name+"(💖"+this.hp+"/"+this.max_hp+")(exp:" + this.exp + "/" + this.max_exp + ")(💰" + this.money + ")]");
    }

    // 챔피언 공격 행동
    attack(enemy){
        var temp_ad = getRandomAttackValue(this.ad);
        enemy.hp -= temp_ad;
        tv1("🏹" + this.name + "(이)가 " + enemy.name + "(을)를 공격! 데미지 : " + temp_ad);
        br();
    }

}