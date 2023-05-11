function test() {
    if (orc.hp > 0) {
        orc.currentMode = "전투"
        input_turn.value = ++turn;
        fight(elf, orc);
    } else {
        orc.hp = orc.max_hp
        end_Fight()
    }
    
    // textarea의 길이 초과 시 스크롤이 자동으로 맨 아래로
    tv_1.scrollTop = tv_1.scrollHeight;

}

function end_Fight() {
    tv1("전투가 종료되었습니다.");
    hr();

}