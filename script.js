var num = "";
var size = prompt("Voer een getal in:");
document.write('Het getal wat is ingevoerd is: ' + size + '<br>')
for(var i=1; i<=size; i++)
{
  num = num + i
  document.write('<br>')
  document.write(num);
}