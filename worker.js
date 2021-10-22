var n = 0;

// while(true){
//     n++;
//     document.getElementById('hh').innerHTML = n;
//     //worker는 UI작업 불가

//     //메인 스레드(워커를 사용하는 녀석)에게 전달
//     postMessage(n);

//     //while문이 너무 빨라서 UI를 그려낼 시간조차 없음-ㅅ-
// }

function fff(){
    n++;
    postMessage(n);
    setTimeout(fff, 500);   //500ms 후에 fff()함수 호출
}

fff();