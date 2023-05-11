// 2. 내가 한 게임을 구매했다고 가정하고		

// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	
// 기존 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는지 세는 작업을 반복문으로 처리
// 맞은 갯수에 맞춰 등수도 출력하기
// 0~2개 -> 꽝입니다.
// 3개 -> 5등입니다.
// 4개 -> 4등입니다.
// 5개 -> 3등입니다.
// 6개 -> 1등입니다.
// 보너스 번호 추가로 뽑고 중복 시 다시 뽑기

// 내 번호들
var p =[1,2,3,4,5,6];

// 컴 번호들
var r =[0,0,0,0,0,0];

// 랜덤 번호들
r[0] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
print(r[0]);
print("<br>");


////    앞선 번호들과 비교하여 중복된 번호가 나온 경우 다시 번호를 뽑게 하기(그렇게 해서 나온 번호도 또 검사를 계속 해야함)
while(true){

    r[1] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r[0] != r[1]){   // r[1]가 r[0]과 같지 않으면 빠져나감
        print(r[1]);
        print("<br>");
        break;
    }
}


// r[2]  가 r[0] 이나 r[1]와 같으면 다시뽑게하기(무한히)
while(true){

    r[2] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r[2] != r[0] && r[2] != r[1] ){   // r[2]  가 r[0] 이나 r[1]와 같으면 다시뽑게하기(무한히)
        print(r[2]);
        print("<br>");
        break;
    }
}




while(true){

    r[3] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r[3] != r[0] && r[3] != r[1] && r[3] != r[2]){
        print(r[3]);
        print("<br>");
        break;
    }
}



while(true){

    r[4] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]){
        print(r[4]);
        print("<br>");
        break;
    }
}

while(true){

    r[5] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]){
        print(r[5]);
        print("<br>");
        break;
    }
}

var bonusNum = Math.floor(Math.random()*45 + 1);


for (var i = 0; i < r.length; i++) {
    if (bonusNum == r[i]) {
        bonusNum = Math.floor(Math.random() * 45 + 1);
        i = -1;
    }
}




// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	
// p[0] ~ p[5]


var win = 0;    //내가 맞춘 수

for(var i = 0; i < p.length; i++){
    for(var j = 0; j < j.length; j++){
        if(p[i] == r[j])
            win++;
    }
}
print("Bonus: " + bonusNum);
br();
print("win:"+win);
br();

switch(win){
    case 6:
        print("1등입니다.");
        break;
    case 5:
        print("3등입니다.");
        break;
    case 4:
        print("4등입니다.");
        break;
    case 3:
        print("5등입니다.");
        break;
    default:
        print("꽝입니다.");
}

function br(){
    print("<br>");
}
function print(str){
    document.write(str);
}
