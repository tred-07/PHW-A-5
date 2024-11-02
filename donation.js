document
  .getElementById("donationType-1-btn")
  .addEventListener("click", (e1) => {
    e1.preventDefault();
    let donationType = document.getElementById("donationType-1-donateAmount");
    let donationTypeNumber = parseFloat(donationType.value);
    if (donationTypeNumber > 0) {
      let p = document.createElement("p");
      p.innerHTML = `<div><p class="font-bold text-black text-[2rem]">${donationTypeNumber} Donation Type 1</p></div>`;
      let parent = document.getElementById("donationHistoryPart");
      parent.appendChild(p);
      let totalDonatedAmount =
        document.getElementById("totalDonatedAmount").innerText;
      let totalDonatedAmountNumber =
        parseFloat(totalDonatedAmount) + donationTypeNumber;
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
    } else {
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
    if (donationTypeNumber > 0) {
      let p = document.createElement("p");
      p.innerHTML = `<div><p class="font-bold text-black text-[2rem]">${donationTypeNumber} Donation Type 2</p></div>`;
      let parent = document.getElementById("donationHistoryPart");
      parent.appendChild(p);
      console.log(donationType.value);
      let totalDonatedAmount =
        document.getElementById("totalDonatedAmount").innerText;
      let totalDonatedAmountNumber =
        parseFloat(totalDonatedAmount) + donationTypeNumber;
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
    } else {
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
    if (donationTypeNumber > 0) {
      let p = document.createElement("p");
      p.innerHTML = `<div><p class="font-bold text-black text-[2rem]">${donationTypeNumber} Donation Type 3</p></div>`;
      let parent = document.getElementById("donationHistoryPart");
      parent.appendChild(p);
      console.log(donationType.value);
      let totalDonatedAmount =
        document.getElementById("totalDonatedAmount").innerText;
      let totalDonatedAmountNumber =
        parseFloat(totalDonatedAmount) + donationTypeNumber;
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
    } else {
      alert("Please enter greater than O Bdt.");
      console.log("Invalid value");
    }
  });
