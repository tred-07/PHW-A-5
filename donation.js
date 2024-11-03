// donationType-1-btn
document
  .getElementById("donationType-1-btn")
  .addEventListener("click", (e1) => {
    e1.preventDefault();
    let date = new Date();
    console.log(date);
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
      <p class="font-bold text-black text-[1.5rem]">${donationTypeNumber} Taka is Donated for Flood at Noakhali, Bangladesh</p>
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
      document.getElementById("modal-box-1-h3").innerHTML = `
      <h3 style="color: black;text-align: center;" id="modal-box-1-h3">
                        <span style="color: black;font-weight: bold;text-align: center;font-size:1.5rem;">Congrates!</span>
                        <br><img src="./assets/coin.png" style="width: 80px;height: 80px;margin: auto;" alt=""> <br>
                        <span style="font-size:1.25rem">You Have Donated for Humankind.</span><br><span
                          style="color: black;font-weight: bold;text-align: center;font-size:1.5rem;">Successfully</span>
                      </h3>
      `;

      /* `<h3 class="text-lg font-bold text-[black] center flex items-center gap-[10px] justify-center" id="modal-box-1-h3">
      ${donationTypeNumber} taka susscessfully donated.
      </h3>`;*/
      console.log(document.getElementById("modal-box-1-h3").innerText);
    } else if (totalDonatedAmountNumber < donationTypeNumber) {
      document.getElementById("donationType-1-donateAmount").value = 0;
      alert("Not enough balance");
      document.getElementById(
        "modal-box-1-h3"
      ).innerHTML = `<h3 class="text-lg font-bold text-[black] center flex items-center gap-[10px] justify-center" id="modal-box-1-h3">
      <i class="fa-solid fa-xmark text-[white] font-bold text-[10rem] bg-[red] rounded-[48%] p-[15px]"></i> Not enough balance.
      </h3>`;
      console.log("Not enough balance");
    } else {
      document.getElementById("donationType-1-donateAmount").value = 0;
      alert("Please enter greater than O Bdt.");
      document.getElementById(
        "modal-box-1-h3"
      ).innerHTML = `<h3 class="text-lg font-bold text-[black] center flex items-center gap-[10px] justify-center" id="modal-box-1-h3">
      <i class="fa-solid fa-xmark text-[white] font-bold text-[10rem] bg-[red] rounded-[48%] p-[15px]"></i> Please enter greater than ${0} taka.
      </h3>`;
    }
  });

// Donation type 2
// donationType-2-btn
document
  .getElementById("donationType-2-btn")
  .addEventListener("click", (e2) => {
    e2.preventDefault();
    let date = new Date();
    console.log(date);
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
      document.getElementById(
        "modal-box-2-h3"
      ).innerHTML = `<h3 style="color: black;text-align: center;" id="modal-box-1-h3">
                        <span style="color: black;font-weight: bold;text-align: center;font-size:1.5rem;">Congrates!</span>
                        <br><img src="./assets/coin.png" style="width: 80px;height: 80px;margin: auto;" alt=""> <br>
                        <span style="font-size:1.25rem">You Have Donated for Humankind.</span><br><span
                          style="color: black;font-weight: bold;text-align: center;font-size:1.5rem;">Successfully</span>
                      </h3>`;
      /* `<h3 class="text-lg font-bold text-[black] center flex items-center gap-[10px] justify-center" id="modal-box-1-h3">
      <i class="fa-solid fa-check text-[white] font-bold text-[10rem] bg-[#B4F461] rounded-[48%] p-[15px]"></i> ${donationTypeNumber} taka susscessfully donated.
      </h3>`;*/
    } else if (totalDonatedAmountNumber < donationTypeNumber) {
      document.getElementById("donationType-2-donateAmount").value = 0;
      alert("Not enough balance");
      document.getElementById(
        "modal-box-2-h3"
      ).innerHTML = `<h3 class="text-lg font-bold text-[black] center flex items-center gap-[10px] justify-center" id="modal-box-1-h3">
      <i class="fa-solid fa-xmark text-[white] font-bold text-[10rem] bg-[red] rounded-[48%] p-[15px]"></i> Not enough balance.
      </h3>`;
      console.log("Invalid value");
    } else {
      document.getElementById("donationType-2-donateAmount").value = 0;
      alert("Please enter greater than O Bdt.");
      console.log("Invalid value");
      document.getElementById(
        "modal-box-2-h3"
      ).innerHTML = `<h3 class="text-lg font-bold text-[black] center flex items-center gap-[10px] justify-center" id="modal-box-1-h3">
      <i class="fa-solid fa-xmark text-[white] font-bold text-[10rem] bg-[red] rounded-[48%] p-[15px]"></i> Please enter greater than ${0} taka.
      </h3>`;
    }
  });


  // donationType-3-btn
document
  .getElementById("donationType-3-btn")
  .addEventListener("click", (e3) => {
    e3.preventDefault();
    let date = new Date();
    console.log(date);
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
      document.getElementById(
        "modal-box-3-h3"
      ).innerHTML = `<h3 style="color: black;text-align: center;" id="modal-box-1-h3">
                        <span style="color: black;font-weight: bold;text-align: center;font-size:1.5rem;">Congrates!</span>
                        <br><img src="./assets/coin.png" style="width: 80px;height: 80px;margin: auto;" alt=""> <br>
                        <span style="font-size:1.25rem">You Have Donated for Humankind.</span><br><span
                          style="color: black;font-weight: bold;text-align: center;font-size:1.5rem;">Successfully</span>
                      </h3>`;
      /*`<h3 class="text-lg font-bold text-[black] center flex items-center gap-[10px] justify-center" id="modal-box-1-h3">
      <i class="fa-solid fa-check text-[white] font-bold text-[10rem] bg-[#B4F461] rounded-[48%] p-[15px]"></i> ${donationTypeNumber} taka susscessfully donated.
      </h3>`;*/
    } else if (totalDonatedAmountNumber < donationTypeNumber) {
      document.getElementById("donationType-3-donateAmount").value = 0;
      alert("Not enough balance");
      document.getElementById(
        "modal-box-3-h3"
      ).innerHTML = `<h3 class="text-lg font-bold text-[black] center flex items-center gap-[10px] justify-center" id="modal-box-1-h3">
      <i class="fa-solid fa-xmark text-[white] font-bold text-[10rem] bg-[red] rounded-[48%] p-[15px]"></i> Not enough balance.
      </h3>`;
      console.log("Invalid value");
    } else {
      document.getElementById("donationType-3-donateAmount").value = 0;
      alert("Please enter greater than O Bdt.");
      console.log("Invalid value");
      document.getElementById(
        "modal-box-3-h3"
      ).innerHTML = `<h3 class="text-lg font-bold text-[black] center flex items-center gap-[10px] justify-center" id="modal-box-1-h3">
      <i class="fa-solid fa-xmark text-[white] font-bold text-[10rem] bg-[red] rounded-[48%] p-[15px]"></i> Please enter greater than ${0} taka.
      </h3>`;
    }
  });
