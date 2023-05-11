// rpgV0.6.0 패치노트
// 전투 처리 부분과 캐릭터들의 상태 정보를 출력하는 부분을 하나의 함수로 묶어 처리하였습니다.
// 전투 무한 루프 처리 : 전투 시 플레이어나 적의 currentHp가 0 이하로 될 때까지(죽을때까지) 전투를 반복하도록 처리했습니다.

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