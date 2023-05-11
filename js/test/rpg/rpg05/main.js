// rpgV0.5.0 패치노트
// - 캐릭터 정보 출력을 한꺼번에 출력되도록 수정하였습니다.
// - ex) [엠피스 (50/100)][오크전사 (30/100)]

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