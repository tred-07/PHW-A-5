document.getElementById("donationFeaturesBtn").addEventListener("click",function(event){
    event.preventDefault()
    document.getElementById("donationPart").classList.remove("hidden")
    document.getElementById("donationHistoryPart").classList.add("hidden")
    document.getElementById("historyFeaturesBtn").style.background="white"
    document.getElementById("donationFeaturesBtn").style.background="#B4F461"
    document.getElementById("historyFeaturesBtn").style.background="white"
    document.getElementById("historyFeaturesBtn").style.border="1px solid #222"
    document.getElementById("donationFeaturesBtn").style.border="none"
})
document.getElementById("historyFeaturesBtn").addEventListener("click",function(event){
    event.preventDefault()
    document.getElementById("donationPart").classList.add("hidden")
    document.getElementById("donationHistoryPart").classList.remove("hidden")
    document.getElementById("historyFeaturesBtn").style.background="#B4F461"
    document.getElementById("donationFeaturesBtn").style.background="white"
    document.getElementById("donationFeaturesBtn").style.border="1px solid #222"
    document.getElementById("historyFeaturesBtn").style.border="none"
})