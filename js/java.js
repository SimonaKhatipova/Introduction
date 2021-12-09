
 //вау тут начем JS

 /*можно писать js код в body либо head скриптах,
 либо в exteral file как
<script src = "js/two-external.js"></script>
потом в коде при использовании каждый раз <script> с названием функций вставлять-->
*/

/* Operators
	=== равное по значению и типу данных
	% остаток от деления
	&& логичнское обе части верны
	|| хотя бы одна часть верна
*/


//не выведет текст, ибо понимает что это джава, только в скрипте пишется джава, остальное штмл

//alert("Hi dear");//уведомление при входе сверху

//var name = prompt("hey bro type ur name here");//всплывающее уведомление со вводом
var name = "Привет, дорогой друг"
document.write(name +" здесь я записала текст при загрузке файла");
document.write("<h1>"+'hi '+name+"</h1>");
document.write(document.baseURI+"<br>");//path to the site

document.write(document.title+ "   title <br>");


document.write("<h1>Будем делать красоту!</h1>");

document.getElementById("test").innerHTML ='Time to learn JavaScript';//берет текст тестер н2 и меняет

console.log("Secret message heegegegeg");//не отражается для пользователя, помощь в дебаге, отражается в консольке в браузере


//case-sensitive variables name!=Name
var date = Date();
document.write(date+ "<br>");		


//numerical
var width = window.innerWidth;
var pi=3.1415;

//string
// var location = window.location;
// document.write(location+ "<br>"); //какая-то непонятная фигня из-за которой зацикливается прога

//boolean
var windowStatus=window.closed;

//object
var topic= document.getElementById("test");
var links= document.getElementsByTagName("a");
document.write(links[0]);

var pars= document.getElementsByTagName('p');
document.write(pars +"<br/>");
document.write(pars.length);


// Functions

function welcomeMsg(){
	alert ("Welcome to JS, dear");
}


function welcomeMsg(msg){
	alert (msg);
	var name = prompt("Do you feel the Christmas Eve atmosphere?");
	return name;
}


// var x= "Hello";
// welcomeMsg(x);
// x="Goodbye";
// welcomeMsg(x);

// var firstName = welcomeMsg("HI");

function message(msg)
{
	document.getElementById('output').innerHTML = msg +" event";
}

/* Events
	onclick, onmouseover, onresize, onload(с тегом body) 
*/

function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}

function closeMe(){
	//find the element
	x=document.getElementById("change_the_style");
	//option 1: change the style attribute directly
	//x.style.display="none";

	//option 2: change the class
	x.className="close_paragraph"
}

function openMe(){
	//find the element
	x=document.getElementById("change_the_style");
	//option 1: change the style attribute directly
	//x.style.display="block";

	//option 2: change the class
	x.className="open_paragraph"
}

//универсальная, берет любой элемент и его id выводит в консоль
function displayId(element){
	console.log(element.id);
}

//так отобразим альт текст элемента
function showProperties(element){
	document.getElementById('message').innerHTML=element.alt; 
} 

// 
function upDate(element){
	 document.getElementById('image').innerHTML=element.alt;
	 document.getElementById("image").style.background = "url(" + element.src + ")#ffffff"
} 

function unDo(element){
	document.getElementById("image").style.background = "url('') #8e68ff"
	document.getElementById('image').innerHTML="Hover over an image below to display here.";

}




//Arrays

var grades = [6,4,5,6,7,4,3,5,7,4,3];
var images = document.getElementsByClassName['image'];
var listitems = document.getElementsByTagName['li'];

//не обязательно одного типа элементы
var info = ['Simona', 1999, 'Khatipova',614030]

grades.length;
grades.sort();
grades.push(element);
grades[grades.length] = element;



var fruits = ["Banana", "Orange", "Apple", "Mango"];

function printFruits(){
   document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
  var fruit = prompt("What is your favorite fruit? ");
  fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}

//Loops

var sum=0;
for (i=0; i<grades.length; i++){
	sum+=grades[i];
}
document.write(sum/grades.length);
