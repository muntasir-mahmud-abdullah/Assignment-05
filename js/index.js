document.getElementById("donation-btn").addEventListener("click", function () {
  showBgById("donation-btn");
});
document.getElementById("history-btn").addEventListener("click", function () {
  showBgById("history-btn");
});
function donatedButtonId(amountid, balanceid, donatedid, titleid) {
  const donationAmount = InputValueById(amountid);
  const donationBalance = InputTextById(balanceid);

  let donatedMoney = InputTextById(donatedid);
  if (
    donationAmount > donationBalance ||
    donationAmount <= 0 ||
    donationAmount === null
  ) {
    alert("Invalid Amount");
    return;
  }
  if (isNaN(donationAmount)) {
    alert("Invalid Amount");
    return;
  }

  my_modal_1.showModal();
  const updateBalance = donationBalance - donationAmount;
  donatedMoney += donationAmount;
  document.getElementById(balanceid).innerText = updateBalance;
  document.getElementById(donatedid).innerText = donatedMoney;
  //   transaction updated
  const title = document.getElementById(titleid).innerText;
  const p = document.createElement("p");
  p.innerText = `${donatedMoney} Taka is donated for flood at ${title}`;
  p.style.fontWeight = "semi-bold";
  p.style.fontSize = "1.2rem";
  document.getElementById("history-container").appendChild(p);
  const h6 = document.createElement("h6");
  h6.innerText = `${new Date()}`;
  document.getElementById("history-container").appendChild(h6);
}
document.getElementById("donate-btn1").addEventListener("click", function () {
  donatedButtonId("donation-amount1", "donation-balance", "donated-balance1", "donate-title1");
});
document.getElementById("donate-btn2").addEventListener("click", function () {
  donatedButtonId("donation-amount2", "donation-balance", "donated-balance2", "donate-title2");
});
document.getElementById("donate-btn3").addEventListener("click", function () {
  donatedButtonId("donation-amount3", "donation-balance", "donated-balance3", "donate-title3");
});
document.getElementById("donate-btn4").addEventListener("click", function () {
  donatedButtonId("donation-amount4", "donation-balance", "donated-balance4", "donate-title4");
});
document.getElementById("donate-btn5").addEventListener("click", function () {
  donatedButtonId("donation-amount5", "donation-balance", "donated-balance5", "donate-title5");
});
document.getElementById("donate-btn6").addEventListener("click", function () {
  donatedButtonId("donation-amount6", "donation-balance", "donated-balance6", "donate-title6");
});
