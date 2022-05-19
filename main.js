
//Добавляємо в заголовок кількість справ у списку
var listItems = document.querySelectorAll('li');
var heading = document. querySelector('h2'); 
var headingText = heading.firstChild.nodeValue; 
var totalItems = listItems.length; 
var newHeading = headingText + '<span>' + ' ' + totalItems + '</span>'; 
heading.innerHTML = newHeading; 


//Створюємо кнопку закрити на кожному з елементів
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var newEl = document.createElement("span");
  var nawText = document.createTextNode("\u00D7");
  newEl.className = "close";
  newEl.appendChild(nawText);
  myNodelist[i].appendChild(newEl);
}

//Спрацювання кнопки закриття
var close= document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++){
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
} 

// Зміна фону кольору при клліку на елементі
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Створити новий елемент списку, через фунцію, натиснувши кнопку "Додати", якщо нічого не введенно виводить повідомлення через "alert"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Вам необхіднов поле ввести назву!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Змінюємо колір li, при натисканні кнопки
function changeColor() {
  var hotItems = document.querySelectorAll('li.sky');//створюємо обєкт в який поміщаємо всі елементи списку li
      if (hotItems.length > 0) { //якщо є хоча б один елемент
      for (var i=0; i<hotItems.length; i++) { 
      hotItems[i].className = 'colorChange'; //міняємо класс у кожного елемента
      }
      }
};
// Редагуємо текст у спику li
document.getElementById("editor").addEventListener("input", function() {
  console.log("input event fired");
}, false);