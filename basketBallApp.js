homeScoreEl=document.getElementById("homeScore")
homeScore=parseInt(document.getElementById("homeScore").innerText)
guestScoreEl=document.getElementById("guestScore")
guestScore=parseInt(document.getElementById("guestScore").innerText)
homeHolder=document.getElementById("homeHolder")
guestHolder=document.getElementById("guestHolder")



function checkScore()
{
    if (homeScore>guestScore)
    {
        homeScoreEl.style.color="#00FF00"
        guestScoreEl.style.color="#dc3545"
    }
    else if(guestScore>homeScore)
    {
        guestScoreEl.style.color="#00FF00"
        homeScoreEl.style.color="#dc3545"
    }
    else
    {
        homeScoreEl.style.color="#FFFF00"
        guestScoreEl.style.color="#FFFF00"
    }
}




function add1()
{
    homeScore+=1
    homeScoreEl.innerText=homeScore
}
function add2()
{
    homeScore+=2
    homeScoreEl.innerText=homeScore
}
function add3()
{
    homeScore+=3
    homeScoreEl.innerText=homeScore  
}


function add1G()
{
    guestScore+=1
    guestScoreEl.innerText=guestScore   
}
function add2G()
{
    guestScore+=2
    guestScoreEl.innerText=guestScore   
}
function add3G()
{
    guestScore+=3
    guestScoreEl.innerText=guestScore   
}

function reset()
{
    homeScore=0
    guestScore=0
    homeScoreEl.innerText="0"
    guestScoreEl.innerText="0"
    // checkScore()
    homeScoreEl.style.color="#dc3545"
    guestScoreEl.style.color="#dc3545"
}