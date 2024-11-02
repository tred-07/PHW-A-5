let date = new Date();
console.log(date);

document
  .getElementById("donationType-1-btn")
  .addEventListener("click", (e1) => {
    e1.preventDefault();
    let donationType = document.getElementById("donationType-1-donateAmount");
    let donationTypeNumber = parseFloat(donationType.value);
    let totalDonatedAmount =
      document.getElementById("totalDonatedAmount").innerText;
    let totalDonatedAmountNumber = parseFloat(totalDonatedAmount);
    if (
      donationTypeNumber > 0 &&
      totalDonatedAmountNumber >= donationTypeNumber
    ) {
      let div = document.createElement("div");
      div.innerHTML = `<div class="border-[1px] border-solid border-[#222] px-[25px] py-[50px] rounded-[20px] w-[100%]">
      <p class="font-bold text-black text-[1.5rem]">${donationTypeNumber} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
      <p class="font-bold text-black text-[1rem]">Date: ${date}</p>
      </div>`;
      let parent = document.getElementById("donationHistoryPart");
      parent.appendChild(div);
      div.style.width = "80%";
      div.style.marginBottom = "25px";
      totalDonatedAmountNumber -= donationTypeNumber;
      document.getElementById(
        "totalDonatedAmount"
      ).innerText = `${totalDonatedAmountNumber} BDT`;

      let donationType_1_totalCollection = parseFloat(
        document.getElementById("donationType-1-totalCollection").innerText
      );
      document.getElementById(
        "donationType-1-totalCollection"
      ).innerHTML = `<h1 id="donationType-1-totalCollection" class="text-[black] text-[1.5rem] font-bold">${
        donationType_1_totalCollection + donationTypeNumber
      } BDT</h1>`;
      document.getElementById("donationType-1-donateAmount").value = 0;
      alert(`${donationTypeNumber} donated successfully.`);
    } else if (totalDonatedAmountNumber < donationTypeNumber) {
      document.getElementById("donationType-1-donateAmount").value = 0;
      alert("Not enough balance");
      console.log("Invalid value");
    } else {
      document.getElementById("donationType-1-donateAmount").value = 0;
      alert("Please enter greater than O Bdt.");
    }
  });

document
  .getElementById("donationType-2-btn")
  .addEventListener("click", (e2) => {
    e2.preventDefault();
    let donationType = document.getElementById("donationType-2-donateAmount");
    console.log(typeof parseFloat(donationType.value));
    let donationTypeNumber = parseFloat(donationType.value);
    let totalDonatedAmount =
      document.getElementById("totalDonatedAmount").innerText;
    let totalDonatedAmountNumber = parseFloat(totalDonatedAmount);
    if (
      donationTypeNumber > 0 &&
      totalDonatedAmountNumber >= donationTypeNumber
    ) {
      let div = document.createElement("div");
      div.innerHTML = `<div class="border-[1px] border-solid border-[#222] px-[25px] py-[50px] rounded-[20px] w-[100%]"><p class="font-bold text-black text-[1.5rem] w-[80%] text-wrap">${donationTypeNumber} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
      <p class="font-bold text-black text-[1rem]">Date: ${date}</p></div>`;
      let parent = document.getElementById("donationHistoryPart");
      parent.appendChild(div);
      div.style.width = "80%";
      div.style.marginBottom = "25px";
      console.log(donationType.value);
      totalDonatedAmountNumber -= donationTypeNumber;
      document.getElementById(
        "totalDonatedAmount"
      ).innerText = `${totalDonatedAmountNumber} BDT`;
      console.log(typeof totalDonatedAmount);
      let donationType_1_totalCollection = parseFloat(
        document.getElementById("donationType-2-totalCollection").innerText
      );
      document.getElementById(
        "donationType-2-totalCollection"
      ).innerHTML = `<h1 id="donationType-2-totalCollection" class="text-[black] text-[1.5rem] font-bold">${
        donationType_1_totalCollection + donationTypeNumber
      } BDT</h1>`;
      document.getElementById("donationType-2-donateAmount").value = 0;
      alert(`${donationTypeNumber} donated successfully.`);
    } else if (totalDonatedAmountNumber < donationTypeNumber) {
      document.getElementById("donationType-2-donateAmount").value = 0;
      alert("Not enough balance");
      console.log("Invalid value");
    } else {
      document.getElementById("donationType-2-donateAmount").value = 0;
      alert("Please enter greater than O Bdt.");
      console.log("Invalid value");
    }
  });

document
  .getElementById("donationType-3-btn")
  .addEventListener("click", (e3) => {
    e3.preventDefault();
    let donationType = document.getElementById("donationType-3-donateAmount");
    console.log(typeof parseFloat(donationType.value));
    let donationTypeNumber = parseFloat(donationType.value);
    let totalDonatedAmount =
      document.getElementById("totalDonatedAmount").innerText;
    let totalDonatedAmountNumber = parseFloat(totalDonatedAmount);
    if (
      donationTypeNumber > 0 &&
      totalDonatedAmountNumber >= donationTypeNumber
    ) {
      let div = document.createElement("div");
      div.innerHTML = `<div class="border-[1px] border-solid border-[#222] px-[25px] py-[50px] rounded-[20px] w-[100%]">
      <p class="font-bold text-black text-[1.5rem]">${donationTypeNumber} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
      <p class="font-bold text-black text-[1rem]">Date: ${date}</p>
      </div>`;
      let parent = document.getElementById("donationHistoryPart");
      parent.appendChild(div);
      div.style.width = "80%";
      div.style.marginBottom = "25px";
      console.log(donationType.value);
      totalDonatedAmountNumber -= donationTypeNumber;
      document.getElementById(
        "totalDonatedAmount"
      ).innerText = `${totalDonatedAmountNumber} BDT`;
      console.log(typeof totalDonatedAmount);
      let donationType_1_totalCollection = parseFloat(
        document.getElementById("donationType-3-totalCollection").innerText
      );
      document.getElementById(
        "donationType-3-totalCollection"
      ).innerHTML = `<h1 id="donationType-3-totalCollection" class="text-[black] text-[1.5rem] font-bold">${
        donationType_1_totalCollection + donationTypeNumber
      } BDT</h1>`;
      document.getElementById("donationType-3-donateAmount").value = 0;
      alert(`${donationTypeNumber} donated successfully.`);
    } else if (totalDonatedAmountNumber < donationTypeNumber) {
      document.getElementById("donationType-3-donateAmount").value = 0;
      alert("Not enough balance");
      console.log("Invalid value");
    } else {
      document.getElementById("donationType-3-donateAmount").value = 0;
      alert("Please enter greater than O Bdt.");
      console.log("Invalid value");
    }
  });
