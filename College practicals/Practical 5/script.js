function only_letter(name)
{
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(name))
    {
        return true;
    }
    else
    {
        alert("Please Enter alphabets only. Don't use numbers or any special character.");
        return false; 
    }
}