// 2. 내가 한 게임을 구매했다고 가정하고		

// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	


// 내 번호들
var p =[1,2,3,4,5,6];

// 컴 번호들
var r1,r2,r3,r4,r5,r6;

// 랜덤 번호들
r1 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
document.write(r1);
document.write("<br>");


////    앞선 번호들과 비교하여 중복된 번호가 나온 경우 다시 번호를 뽑게 하기(그렇게 해서 나온 번호도 또 검사를 계속 해야함)
while(true){

    r2 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r1 != r2){   // r2가 r1과 같지 않으면 빠져나감
        document.write(r2);
        document.write("<br>");
        break;
    }
}


// r3  가 r1 이나 r2와 같으면 다시뽑게하기(무한히)
while(true){

    r3 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r3 != r1 && r3 != r2 ){   // r3  가 r1 이나 r2와 같으면 다시뽑게하기(무한히)
        document.write(r3);
        document.write("<br>");
        break;
    }
}




while(true){

    r4 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r4 != r1 && r4 != r2 && r4 != r3){
        document.write(r4);
        document.write("<br>");
        break;
    }
}



while(true){

    r5 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r5 != r1 && r5 != r2 && r5 != r3 && r5 != r4){
        document.write(r5);
        document.write("<br>");
        break;
    }
}



while(true){

    r6 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r6 != r1 && r6 != r2 && r6 != r3 && r6 != r4 && r6 != r5){
        document.write(r6);
        document.write("<br>");
        break;
    }
}



// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	
// p[0] ~ p[5]


var win = 0;    //내가 맞춘 수

if(p[0] == r1){
    win++;
}
if(p[0] == r2){
    win++;
}
if(p[0] == r3){
    win++;
}
if(p[0] == r4){
    win++;
}
if(p[0] == r5){
    win++;
}
if(p[0] == r6){
    win++;
}

if(p[1] == r1){
    win++;
}
if(p[1] == r2){
    win++;
}
if(p[1] == r3){
    win++;
}
if(p[1] == r4){
    win++;
}
if(p[1] == r5){
    win++;
}
if(p[1] == r6){
    win++;
}

//3

if(p[2] == r1){
    win++;
}
if(p[2] == r2){
    win++;
}
if(p[2] == r3){
    win++;
}
if(p[2] == r4){
    win++;
}
if(p[2] == r5){
    win++;
}
if(p[2] == r6){
    win++;
}

//4

if(p[3] == r1){
    win++;
}
if(p[3] == r2){
    win++;
}
if(p[3] == r3){
    win++;
}
if(p[3] == r4){
    win++;
}
if(p[3] == r5){
    win++;
}
if(p[3] == r6){
    win++;
}

//5

if(p[4] == r1){
    win++;
}
if(p[4] == r2){
    win++;
}
if(p[4] == r3){
    win++;
}
if(p[4] == r4){
    win++;
}
if(p[4] == r5){
    win++;
}
if(p[4] == r6){
    win++;
}

//6

if(p[5] == r1){
    win++;
}
if(p[5] == r2){
    win++;
}
if(p[5] == r3){
    win++;
}
if(p[5] == r4){
    win++;
}
if(p[5] == r5){
    win++;
}
if(p[5] == r6){
    win++;
}

document.write("win:"+win);


