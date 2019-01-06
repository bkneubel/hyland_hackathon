// Initialize Firebase
      var config = {
        apiKey: "AIzaSyCwaXOETf1Ry-NDlgdojSdc3TkrFwTvRII",
        authDomain: "gainz-3bd29.firebaseapp.com",
        databaseURL: "https://gainz-3bd29.firebaseio.com",
        projectId: "gainz-3bd29",
        storageBucket: "gainz-3bd29.appspot.com",
        messagingSenderId: "764577182636"
      };
      firebase.initializeApp(config);
var number;
//Reference profiles collection
var profileRef = firebase.database().ref('profile');

function errData(err){
  console.log('Error!');
  console.log(err);
}


document.getElementById('accessForm').addEventListener('submit',submitForm);

function submitForm(e){ //takes in an event


  e.preventDefault();

  var name = getInputVal('username');
  var password = getInputVal('password');

  var anon = function(data){
    var profiles = data.val();
    var keys = Object.keys(profiles);

    for(var i = 0; i < keys.length ; i++){
      var k = keys[i];

      /*
      var email = profiles[k].email;
      var username = profiles[k].name;
      var highscore = profiles[k].highscore;
      var password = profiles[k].password;
      console.log(email,username,highscore,password);
      */
      if(profiles[k].name == name && profiles[k].password != password){
        console.log('Password entered incorrectly.');
        document.querySelector('.showIncorrect').style.display = 'block';

        setTimeout(function(){
          document.querySelector('.showIncorrect').style.display = 'none';
        },3000);
      }
      else if(profiles[k].name == name && profiles[k].password == password){
        number = profiles[k].highscore;
        //window.alert("Your high score is " + profiles[k].highscore);
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.welcome').style.display = 'block';
        document.getElementById('playerName').innerHTML = "Welcome, " + name;
        document.getElementById('playerScore').innerHTML = "Highscore: " + number;
        console.log(profiles[k].highscore);
      }
    }
  }

  profileRef.on('value',anon,errData);

  // Clear Form
  document.getElementById('accessForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}
