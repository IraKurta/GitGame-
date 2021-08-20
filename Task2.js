function GenerateRandom()
{
 var min = 0;
 var max = 5;
 var rand = min + Math.random()*(max + 1 - min);
 rand = Math.floor(rand);
  return rand;
  }
  function CheckInput(uservalue)
{
if(uservalue < 0 || uservalue >5)
 uservalue= window.prompt("Чи бажаєте почати гру?\n\Вибираємо число в проміжку від 0 до 5");
}
function RunTheGame()
{
var playermoney = 30;
var confirmation = window.confirm("Дійсно запустити?");
if(confirmation == true){
window.alert("Давайте грати!");
PlayTheGame(playermoney);
}
else{
window.alert("Сьогодні ви не виграли мільйон, а могли.");
return;
}
}
function PlayTheGame (playermoney){
var randvalue = GenerateRandom();
window.alert("Ваша вартість грошей ="+playermoney);
var uservalue = window.prompt("Введіть нове число (> = 0; <= 5).");
CheckInput(uservalue);
if(uservalue < 0 || uservalue > 5){
window.alert("Поганий варіант.");
return;
}
if (randvalue == uservalue){
windows.alert("Ваш виграш - 0$.");
playermoney +=0;
}
else {
 window.alert("Неправильно 1 спроба.");
 uservalue = window.prompt("Введіть новий номер.");
 CheckInput(uservalue);
 if (uservalue < 0 || uservalue > 5) {
  window.alert("Поганий варіант.");
  return;
 }
 if (randvalue == uservalue) {
  window.alert("Успіх, виграш 5$");
  playermoney += 5;
 } else {
  window.alert("Неправильно 2 спроба.");
  uservalue = window.prompt("Введіть новіший номер.");
  CheckInput(uservalue);
  if (uservalue < 0 || uservalue > 5) {
   window.alert("Поганий варіант.");
   return;
  }
  if (randvalue == uservalue) {
   window.alert("Успішно,виграш 2$");
   playermoney += 2;
  }
  else {
   window.alert("Ваш виграш - 0$.");
   playermoney = 0;
  }
 }
}
if(playermoney <= 0){
window.alert("Кінець гри");
return;
}
var completing = window.confirm("Продовжуємо гру ?");
if(completing == true){
PlayTheGame(playermoney);
}
else
return;
}
