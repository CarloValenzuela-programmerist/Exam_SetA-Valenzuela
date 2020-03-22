function ChangeColor(){
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);
    document.getElementById("motor").style.background = "rgb("+c1+","+c2+","+c3+")"
}
function Show()
{
    if (document.getElementById("pick").value == "Blue")
    {
        document.getElementById("motor").style.background = "blue"
    }
    else if (document.getElementById("pick").value == "Yellow")
    {
        document.getElementById("motor").style.background = "gold"
    }
    else if (document.getElementById("pick").value == "Red")
    {
        document.getElementById("motor").style.background = "red"
    }
    else if (document.getElementById("pick").value == "Grey")
    {
        document.getElementById("motor").style.background = "grey"
    }
    else if (document.getElementById("pick").value == "Orange")
    {
        document.getElementById("motor").style.background = "orange"
    }
    else if (document.getElementById("pick").value == "Pink")
    {
        document.getElementById("motor").style.background = "pink"
    }
    else if (document.getElementById("pick").value == "Green")
    {
        document.getElementById("motor").style.background = "green"
    }
    else if (document.getElementById("pick").value == "Black")
    {
        document.getElementById("motor").style.background = "black"
    }
    else if (document.getElementById("pick").value == "Light Blue")
    {
        document.getElementById("motor").style.background = "lightblue"
    }
    else if (document.getElementById("pick").value == "Violet")
    {
        document.getElementById("motor").style.background = "violet"
    }
    else if (document.getElementById("pick").value == "Maroon")
    {
        document.getElementById("motor").style.background = "maroon"
    }
}

function Reset()
{
    document.getElementById("motor").style.background = "white";
}