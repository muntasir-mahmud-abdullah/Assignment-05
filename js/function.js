document.getElementById ('donation-btn').addEventListener('click',function(){
    document.getElementById('donation-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
})
document.getElementById ('history-btn').addEventListener('click',function(){
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donation-container').classList.add('hidden');
})
function showBgById(id){
    document.getElementById('donation-btn').classList.remove('bg-green-300','border-none');
    document.getElementById('history-btn').classList.remove('bg-green-300','border-none');
    document.getElementById(id).classList.add('bg-green-300','border-none');
};

function InputValueById(id){
    return parseInt(document.getElementById(id).value);
}
function InputTextById(id){
    return parseInt(document.getElementById(id).innerText);
}

// document.getElementById("donate-btn1").addEventListener("click", function () {
//     donatedButtonId("donation-amount1", "donation-balance1", "donated-balance1");
//   });
//   document.getElementById("donate-btn2").addEventListener("click", function () {
//     donatedButtonId("donation-amount2", "donation-balance2", "donated-balance2");
//   });
//   document.getElementById("donate-btn3").addEventListener("click", function () {
//     donatedButtonId("donation-amount3", "donation-balance3", "donated-balance3");
//   });
//   document.getElementById("donate-btn4").addEventListener("click", function () {
//     donatedButtonId("donation-amount4", "donation-balance4", "donated-balance4");
//   });
//   document.getElementById("donate-btn5").addEventListener("click", function () {
//     donatedButtonId("donation-amount5", "donation-balance5", "donated-balance5");
//   });
//   document.getElementById("donate-btn6").addEventListener("click", function () {
//     donatedButtonId("donation-amount6", "donation-balance6", "donated-balance6");
//   });