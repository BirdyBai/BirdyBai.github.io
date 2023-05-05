let items=document.querySelectorAll('.item');

function setActive(){
  items.forEach((item) => {
    item.classList.remove('active');
  });
  this.classList.add('active');
}
items.forEach((item) => {
  item.addEventListener('click',setActive);

});



function guessName1(){
  var response = prompt("Tell me the name of this Album:");
  if (response === 'Reputation'){
    alert("You are right");
    var x = document.getElementById('reputation1');
    var y = document.getElementById('reputation2');
    x.innerHTML='Reputation!';
    y.innerHTML='You are Swifties!';
  } else {
    alert("Guess again");
  };
}

function guessName2(){
  var response = prompt("Tell me the name of this Album:");
  if (response === 'Evermore'){
    alert("You are right");
    var x = document.getElementById('evermore1');
    var y = document.getElementById('evermore2');
    x.innerHTML='Evermore!';
    y.innerHTML='You are Swifties!';
  } else {
    alert("Guess again");
  };
}

function guessName3(){
  var response = prompt("Tell me the name of this Album:");
  if (response === 'Folklore'){
    alert("You are right");
    var x = document.getElementById('folklore1');
    var y = document.getElementById('folklore2');
    x.innerHTML='Folklore!';
    y.innerHTML='You are Swifties!';
  } else {
    alert("Guess again");
  };
}

function guessName4(){
  var response = prompt("Tell me the name of this Album:");
  if (response === 'Lover'){
    alert("You are right");
    var x = document.getElementById('lover1');
    var y = document.getElementById('lover2');
    x.innerHTML='Lover!';
    y.innerHTML='You are Swifties!';
  } else {
    alert("Guess again");
  };
}

function guessName5(){
  var response = prompt("Tell me the name of this Album:");
  if (response === 'Midnights'){
    alert("You are right");
    var x = document.getElementById('midnights1');
    var y = document.getElementById('midnights2');
    x.innerHTML='Midnights!';
    y.innerHTML='You are Swifties!';
  } else {
    alert("Guess again");
  };
}
