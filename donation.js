document.getElementById("donationType-1-btn").addEventListener("click",(e)=>{
    e.preventDefault()
    let donationType=document.getElementById("donationType-1-donateAmount")
    console.log(typeof(parseFloat(donationType.value)));
    let donationTypeNumber=parseFloat(donationType.value)
    if(donationTypeNumber>0){
        let p=document.createElement('p')
        p.innerHTML=`<div><p class="font-bold text-black text-[2rem]">${donationTypeNumber} Donation Type 1</p></div>`
        let parent=document.getElementById("donationHistoryPart")
        parent.appendChild(p)
        console.log(donationType.value);
        let totalDonatedAmount=(document.getElementById("totalDonatedAmount").innerText)
        let totalDonatedAmountNumber=parseFloat(totalDonatedAmount)+donationTypeNumber
        document.getElementById("totalDonatedAmount").innerText=`${totalDonatedAmountNumber} BDT`
        console.log(typeof(totalDonatedAmount));
        document.getElementById("donationType-1-donateAmount").innerText="0"
    }
    else{
        alert("Please enter greater than O Bdt.")
        console.log("Invalid value");
    }
})