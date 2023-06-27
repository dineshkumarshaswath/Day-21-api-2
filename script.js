var div = document.createElement("div");
div.className = "main";
div.style.textAlign="center";
div.style.margin="80px";
div.style.display="grid";
div.style.placeItems="center";



var input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("id", "disney");
input.classList.add("form-control");
input.setAttribute("placeholder", "Enter the value 10 to 48");
input.style.margin="10px";
input.style.width="50%";
input.style.textAlign="center";




var button = document.createElement("button");
button.innerHTML = "search";
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.addEventListener("click",getdata);
  
var div2=document.createElement("div");
div2.classname="result";
div2.style.margin="10px";



div2.style.display="flex";
div2.style.justifyContent="center";
div2.style.alignItems="center";
div2.style.padding="20px";






 div.append(input,button,div2);

async function getdata(){

    try{
    var res = document.getElementById("disney").value;
      
    if(res>=10&&res<=48){
    var url=`https://api.disneyapi.dev/character/${res}`;
    var data= await fetch(url);
    var disney = await data.json();
     
    
    var result1=disney.data.name;
    var result2=disney.data.imageUrl;
    var result3=disney.data.tvShows;    ;
    var result4=disney.data.films;    ;
    var result5=disney.data.enemies;
    var result6=disney.data.allies    ;
    

    
 div2.innerHTML=(`

 <div class="card border-primary mb-3" style="max-width: 18rem; background-image: linear-gradient(to  bottom right, #6889FF , #C668FF);">
      <div class="card-header bg-dark" style="color:white; text-align:center">NAME: ${result1}</div><hr/>
      <img src="${result2}" class="card-img-top" alt="Country Flags"><hr/>
      <div class="card-body text-primary" style="color:white; text-align:center">
        <p class="card-text" style="color:black;">Tv Show:  ${result3}</p><hr/>
        <p class="card-text" style="color:black;">Films: ${result4}</p><hr/>
        <p class="card-text" style="color:black;">ENEMIES: ${result5}</p><hr/>
        <p class="card-text"style="color:black; >ALLIES: ${result6}</p>

</div>`)

}
else{
    div2.innerHTML=(`This is not a valid number`);
}
}catch (error){console.log(error)}
}


document.body.append(div);

