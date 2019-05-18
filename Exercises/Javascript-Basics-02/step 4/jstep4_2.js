function myfunction()
{
if(confirm('Do you want to clear all input fields?'))
{
    var x=document.getElementById("name")
    var y=document.getElementById("surname")
    var z=document.getElementById("city")
    x.value=""
    y.value=""
    z.value=""
}
else{

}
}