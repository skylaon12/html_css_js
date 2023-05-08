var userRpc = "";
var comRpc = "";

var rpcInputText;
var rpcResultScreen;

var resultString = "";

window.onload = function () {

    rpcInputText = document.getElementById("rpc_input_text");
    rpcResultScreen = document.getElementById("rpc_result_screen");

}

function rpcInputButtonClick() {

    while (true) {
        userRpc = rpcInputText.value;
        if (userRpc == "가위" || userRpc == "바위" || userRpc == "보")
            break;
        else
            alert("다시 입력하십시오.");
    }

    comRpc = Math.floor(Math.random() * 3 + 1);
    if (comRpc == 1) {
        comRpc = "가위";
    } else if (comRpc == 2) {
        comRpc = "바위";
    } else if (comRpc == 3) {
        comRpc = "보";
    }

    resultString = "유저 : " + userRpc + "\n컴 : " + comRpc + "\n";

    var result = "";
    switch(userRpc){
        case "가위":
            switch (comRpc) {
                case "가위":
                    result = "DRAW";
                    break;
                case "바위":
                    result = "USER LOSE";
                    break;
                case "보":
                    result = "USER WIN";
                    break;
            }
            break;
        case "바위":
            switch (comRpc) {
                case "가위":
                    result = "USER WIN";
                    break;
                case "바위":
                    result = "DRAW";
                    break;
                case "보":
                    result = "USER LOSE";
                    break;
            }
            break;
            case "보":
            switch (comRpc) {
                case "가위":
                    result = "USER LOSE";
                    break;
                case "바위":
                    result = "USER WIN";
                    break;
                case "보":
                    result = "DRAO";
                    break;
            }
            break;
    }
    resultString += "결과 : " + result;

    rpcResultScreen.value = resultString;
}