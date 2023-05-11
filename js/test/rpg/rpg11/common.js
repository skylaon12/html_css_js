// 공통함수영역
function tv1(s){
    // document.write(s);
    str1 += s;

    tv_1.value = str1;
}

// info 분리
function tv3(s){
    // document.write(s);
    str3 += s;

    tv_3.value = str3;
}

function br(){
    // tv("<br>");
    str1 += "\n";

    tv_1.value = str1;
}
function hr(){
    // document.write("<hr>");
    str1 += "\n=====================================================================\n";
    tv_1.value = str1;
}

// 공격력을 해당 공격력 수치와 0 사이의 값이 랜덤으로 나오도록 함수 추가
function getRandomAttackValue(ad){
    var rand_ad = Math.floor(Math.random() * ++ad); // ad가 10이라면 0~10까지므로 ++처리
    return rand_ad;
}

// 전투
// 두 캐릭터가 전투를 개시
// 첫번째 parameter 를 champion 두번째 parameter를 monster로 가정
// 어느 한 쪽의 hp가 0 이하가 될 때까지 서로 1회씩 공격하며 공격 이후 서로의 정보 출력
function fight(champ, mon){
    while((champ.hp > 0) && (mon.hp > 0)){
        champ.attack(mon);
        mon.attack(champ);
        champ.info();
        mon.info();
        
        if(champ.hp <= 0){
            br();
            tv1(champ.name + "(이)가 전투불능에 빠졌습니다. " + champ.name + " 패배! 로비로 돌아갑니다.<hr>");
            champ.hp = champ.max_hp;
            break;
        }
        else if(mon.hp <= 0){
            br();
            tv1(champ.name + "이 " + mon.name + "을 처치하고 100의 경험치와 " + mon.money + "골드를 획득하였습니다.");
            hr();
            champ.exp += 100;
            champ.money += mon.money;
            champ.hp = champ.max_hp;
            break;
        }
        hr();
    }
}