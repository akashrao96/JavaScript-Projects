function calc() {
    var bill = Number(document.getElementById('bill').value);
    var tip = bill * Number(document.getElementById('serviceQuality').value);
    var total_bill = bill + tip;
    var share_person=total_bill/Number(document.getElementById("quantity").value);
    document.getElementById("tip").innerHTML= "$ "+Number(tip).toFixed(2);
    document.getElementById("total").innerHTML= "$ "+Number(total_bill).toFixed(2);    
    document.getElementById("share").innerHTML= "$ "+Number(share_person).toFixed(2);     
}