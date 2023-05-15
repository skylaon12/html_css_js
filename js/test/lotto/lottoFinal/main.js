
var p = [];         // 사용자 번호(5천원 어치)
var r = [];         // 로또 번호
var win_max = 0;    // 최대 hit 횟수
var bonusNum = 0;   // 보너스 번호
var bonusArr = [0, 0, 0, 0, 0, 0];
var max_index = 0;  // 최대 hit 로또의 인덱스 num -> 보너스 계산 시 필요

p = getPlayerNum();     // 사용자 번호 뽑기
r = getLotto();         // 로또 번호 추첨
bonusNum = getBonus(r); // 보너스 번호 추첨
win_max = getWin(p, r);  // 사용자가 5번 뽑은 로또 중 가장 많이 맞춘 갯수

playerInfo(p);  // 플레이어가 구매한 로또 번호 출력
lottoInfo(r);   // 추첨로또번호 출력

rank(win_max);  // 결과


// ---------------FUNCTION LINE -----------------------------//

// 보너스 번호 뽑고 기존 번호와 같다면 재추첨
// 로또 번호 추첨
function getLotto() {
    const lotto = new Set();// 로또 추첨(중복방지로 set형 사용)
    while (lotto.size < 6) {
        lotto.add(Math.floor(Math.random() * 45 + 1));
    }
    return Array.from(lotto);// 배열로 리턴
}

// 사용자 로또 자동 구매
function getPlayerNum() {
    // 5번 x 6번 추첨(2차원 배열)
    var p = new Array(5);
    for (var i = 0; i < p.length; i++) {
        p[i] = new Array();
        p[i] = getLotto();
    }

    return p;
}

function getBonus(arr) {
    var r_num = Math.floor(Math.random() * 45 + 1);

    // 보너스 번호가 추첨번호와 일치하면 보너스 재추첨
    while (arr.includes(r_num)) {
        r_num = Math.floor(Math.random() * 45 + 1);
    }
    return r_num;
}

// 사용자 추첨번호와 로또 번호 비교
// 가장 많이 맞춘 횟수 return
// 좀 더 효율적인 로직 필요.. O(n^3)임
function getWin(p, r) {
    var win = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < p.length; i++) {
        for (var j = 0; j < p[i].length; j++) {
            if (p[i][j] == bonusNum) {
                bonusArr[i]++;
                continue;   // 보너스 번호와 같다면 아래 for루프를 건너뜀
            }
            for (var k = 0; k < r.length; k++) {
                if (p[i][j] == r[k]) {
                    win[i]++;
                }
            }
        }
    }

    return getMax(win);

}

function getMax(win){
    var maxNum = 0;
    for(var i = 0; i < win.length; i++){
        if(maxNum < win[i]){
            maxNum = win[i];
            max_index = i;
        }
    }
    dw("가장 많이 맞춘 개수 : " + maxNum);
    br();
    return maxNum;
}

// 등수 출력
function rank(win) {
    switch (win) {
        case 3:
            dw("5등입니다.");
            break;
        case 4:
            dw("4등입니다.");
            break;
        case 5:
            // 보너스 번호 hit 배열에서 win배열의 최댓값에 대한 index를 그대로 가져옴
            if (bonusArr[max_index] == 1) {
                dw("2등입니다.");
                break;
            }
            dw("3등입니다.");
            break;
        case 6:
            dw("1등입니다.");
            break;
        default:
            dw("꽝");
    }
}

function playerInfo(arr){
    for(var i = 0; i < arr.length; i++){
        dw((i + 1) + "번째 : " + arr[i]);
        br();
    }
}

function lottoInfo(arr){
    dw("로또 번호 : " + arr + " 보너스 번호 : " + bonusNum);
    br();
}

function dw(str) {
    document.write(str);
}
function br() {
    document.write("<br>");
}
