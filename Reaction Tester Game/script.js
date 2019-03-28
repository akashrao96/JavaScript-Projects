var bestTime=0;
var start=new Date().getTime();
function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
function appear(){
     pos =Math.random()*350;
     width=Math.random()*350;
     
     if(Math.random()>0.5)
     {
        document.getElementById("figure").style.borderRadius="0%";   
     }
     else
     {
        document.getElementById("figure").style.borderRadius="50%";   
     }

    document.getElementById("figure").style.width = width + "px";
    document.getElementById("figure").style.height = width + "px";
    document.getElementById("figure").style.top=pos + "px";
    document.getElementById("figure").style.left=pos + "px";
    document.getElementById("figure").style.backgroundColor=getRandomColor();

    document.getElementById("figure").style.display="block";
    start=new Date().getTime(); 

}
function appearAfterDelay(){
    setTimeout(appear, Math.random()*2000);
}
appearAfterDelay();


document.getElementById("figure").onclick = function()
{
    document.getElementById("figure").style.display= "none";
    var end=new Date().getTime();
    var timeElasped=(end-start)/1000;
  
   
    document.getElementById("time").innerHTML=timeElasped + " s";
    
  
    var bestTime =0;


                if (timeElasped > bestTime) {

                     

                    document.getElementById("besttime").innerHTML = bestTime + "s"

                } 
                else {
                    bestTime = timeElasped;

                    document.getElementById("besttime").innerHTML = bestTime + "s"

                }
    
    
   
    appearAfterDelay();
}

