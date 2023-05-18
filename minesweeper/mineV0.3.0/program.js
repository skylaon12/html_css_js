const startBtn = document.getElementById("startBtn");
// getElementByTagName -> html 파일에서 name tag를 한 번에 불러와
// 배열 형태의 객체인 HTMLCollection을 쓸 수 있다.
// 따라서 getElementByTagName('td')를 통해 생성된 td요소를 모두 불러와 변수에 저장하고
// 반복문을 통해 mines 배열과 내부 요소를 비교하며 일치하는 위치에 mine이라는 class를 추가하면?
const tdArr = document.getElementsByTagName('td');
startBtn.addEventListener("click", setGame);

function setGame() {
    const row = parseInt(document.getElementById("row").value);
    const col = parseInt(document.getElementById("col").value);
    const mineNum = parseInt(document.getElementById("mineNum").value);
    const mineArr = setMineNumArr(mineNum, row * col);

    makeBoard(row, col);
    putMineInBoard(mineArr);
}

function makeBoard(rowNum, colNum) {
    var tableEle = '<table>';

    for (var i = 0; i < colNum; i++) {
        tableEle += '<tr>';
        for (var j = 0; j < rowNum; j++) {
            tableEle += '<td></td>'
        }
        tableEle += '</tr>';
    }
    tableEle += '</table>';
    document.getElementById("gameBoard").innerHTML = tableEle;
}

// 지뢰 범위 설정하기
function setMineNumArr(numLimit, numRange){
    var mineArr = []; // 배열 선언
    for(var i = 0; i < numLimit; i++){
        var randomNum = Math.floor(Math.random() * numRange);
        if(!findMine(randomNum)){
            mineArr.push(randomNum); // 각 index의 value에 폭탄이 들어간다고 생각
        }else{
            i--;
        }
    }
    // 중복 확인
    function findMine(j){
        return mineArr.find((e) => (e === j));
    }
    return mineArr.sort();
}

// mine 배열을 받아서
// ex) mine = [0, 25, 1] 이면 tdArr의 0번째 25번째 1번째 공간(td)에 mine클래스를 붙혀준다.
function putMineInBoard(mine){
    con(mine);
    // i는 tdArr(전체 테이블)까지 반복
    for(var i = 0; i < tdArr.length; i++){
        if(findMine(i)){                    // mine배열과 일치하면?
            tdArr[i].classList.add('mine'); // 해당 td에 mine 클래스를 추가해줌
        }
    }
    
    // MDN - Arrow Function (화살표 함수)
    function findMine(j){
        // mine 배열중에 j랑 같은게 있다면 true를 리턴하라.
        return mine.find((any) => (any === j));
    }

}