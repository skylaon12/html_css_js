// rpgV0.7.0 패치노트
// - 전투 종료 처리(종료 메세지 출력, 경험치 획득)
// - 챔피언 클래스에 현재 경험치, 다음 레벨업에 필요한 경험치 두 변수를 추가하였습니다.
//      단, 현재 경험치는 초기값이 0이며 필요 경험치는 초기값이 300입니다.
// - 몬스터를 잡고 받은 경험치 획득 처리는 플레이어의 현재 경험치에 100을 추가해줍니다.
// - 플레이어 간략 정보 표시에 현재 경험치 / 다음 레벨업 필요 경험치 표시를 추가하였습니다.
//      (레벨업 경험치 기획은 현재 미정으로 300으로 하드코딩 된 상태)
// - 전투 종료 후 얻은 경험치를 확인하기 위해 플레이어 info 함수에 한 번 호출하기
// -test case : 적(monster)의 전투력(ad)을 더 높혀서 플레이어도 죽는지 확인

var orc = new Monster("하급 오크", 100, 10);
var elf = new Champion("케일", 75, 18);

orc.info();
elf.info();

hr();
dw("전투 시작");
hr();

fight(elf, orc);

elf.info();