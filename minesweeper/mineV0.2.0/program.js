const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", setGame);

function setGame() {
    const row = parseInt(document.getElementById("row").value);
    const col = parseInt(document.getElementById("col").value);
    const mineNum = parseInt(document.getElementById("mineNum").value);
    makeBoard(row, col);
    console.log(setMineNumArr(mineNum, row * col));
}

function makeBoard(rowNum, colNum) {
    let tableEle = '<table>';

    for (let i = 0; i < colNum; i++) {
        tableEle += '<tr>';
        for (let j = 0; j < rowNum; j++) {
            tableEle += '<td></td>'
        }
        tableEle += '</tr>';
    }
    tableEle += '</table>';0
    console.log(tableEle);
    document.getElementById("gameBoard").innerHTML = tableEle;
}

// 지뢰 범위 설정하기
function setMineNumArr(numLimit, numRange){

    let mineArr = []; // 배열 선언
    for(let i = 0; i < numLimit; i++){
        let randomNum = Math.floor(Math.random() * numRange + 1);
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
    return mineArr;
}
