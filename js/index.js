document.getElementById("donation-btn").addEventListener("click", function () {
  showBgById("donation-btn");
});
document.getElementById("history-btn").addEventListener("click", function () {
  showBgById("history-btn");
});

document.getElementById("donate-btn").addEventListener("click", function () {
 
  const donationAmount = InputValueById("donation-amount");
  const donationBalance = InputTextById("donation-balance");

  let donatedMoney = InputTextById("donated-balance");
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
  document.getElementById("donation-balance").innerText = updateBalance;
  document.getElementById("donated-balance").innerText = donatedMoney;
  //   transaction updated
  const title = document.getElementById("flood-title").innerText;
  const p = document.createElement("p");
  p.innerText = `${donatedMoney} Taka is donated for flood at ${title}`;
  p.style.fontWeight = "semi-bold";
  p.style.fontSize = "1.2rem";
  document.getElementById("history-container").appendChild(p);
  const h6 = document.createElement("h6");
  h6.innerText = `${new Date()}`;
  document.getElementById("history-container").appendChild(h6);
});
