function display(get)
{
    document.getElementById("result").value += get;
}
function clearscreen()
{
    document.getElementById("result").value="";
}
function calculate()
{
    let q=document.getElementById("result").value;
    let p=eval(q);
    document.getElementById("result").value=p;
}