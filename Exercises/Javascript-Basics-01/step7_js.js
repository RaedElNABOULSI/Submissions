var ss=parseInt(prompt("Enter your shoe size: "))
var by=parseInt(prompt("Enter your birth year: "))
function a(ss,by)
{
   var mult= ss*2
mult+=5
mult*=50
mult-=by
mult+=1766
alert("The result of the function is: " + mult)
}
a(ss,by)