document.getElementById("donationType-1-btn").addEventListener("click",(e)=>{
    let donationType=document.getElementById("donationType-1-donateAmount")
    console.log(typeof(parseFloat(donationType.value)));
    let donationTypeNumber=parseFloat(donationType.value)
    if(donationTypeNumber>0){
        let p=document.createElement('p')
        p.innerHTML=`<div><p>${donationTypeNumber} Donation Type 1</p></div>`
        let parent=document.getElementById("donationHistoryPart")
        parent.appendChild(p)
        console.log(donationType.value);
    }
    else{
        alert("Please enter greater than O Bdt.")
        console.log("Invalid value");
    }
})