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
//Reference profiles collection
var programRef = firebase.database().ref('program');

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
      }
      else if(profiles[k].name == name && profiles[k].password == password){
        var number = profiles[k].weight;
        var h = profiles[k].height;
        document.querySelector('.wpLogin').style.display = 'none';
        document.querySelector('.wpWelcome').style.display = 'block';
        document.querySelector('.wpRegister').style.display = 'none';
        document.querySelector('.wpOnline').style.display = 'block';
        var bmi = (number*0.453592)/(Math.pow(h*0.0254,2));
        document.getElementById('playerName').innerHTML = "Welcome, " + name;
        document.getElementById('playerName2').innerHTML = name;
        document.getElementById('playerWeight').innerHTML = "     " + "Weight: " + number + "     ||     Height: " + h + "     ||     BMI: " + bmi;

        document.getElementById('tricep').innerHTML = profiles[k].tricepWorkout;
        document.getElementById('tricep2').innerHTML = profiles[k].tricepWorkout;
        document.getElementById('bicep').innerHTML = profiles[k].bicepWorkout;
        document.getElementById('bicep2').innerHTML = profiles[k].bicepWorkout;
        document.getElementById('chest').innerHTML = profiles[k].chestWorkout;
        document.getElementById('chest2').innerHTML = profiles[k].chestWorkout;
        document.getElementById('uBack').innerHTML = profiles[k].uBackWorkout;
        document.getElementById('uBack2').innerHTML = profiles[k].uBackWorkout;

        document.getElementById('shoulders').innerHTML = profiles[k].shoulderWorkout;
        document.getElementById('shoulders2').innerHTML = profiles[k].shoulderWorkout;
        document.getElementById('lBack').innerHTML = profiles[k].lBackWorkout;
        document.getElementById('lBack2').innerHTML = profiles[k].lBackWorkout;
        document.getElementById('traps').innerHTML = profiles[k].trapWorkout;
        document.getElementById('traps2').innerHTML = profiles[k].trapWorkout;
        document.getElementById('core').innerHTML = profiles[k].coreWorkout;
        document.getElementById('core2').innerHTML = profiles[k].coreWorkout;

      }
    }
  }

  programRef.on('value',anon,errData);
  var today = new Date();

  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  var day = days[ today.getDay() ];
  var month = months[ today.getMonth()];



  var curr = "." + day.toLowerCase();
  document.querySelector(curr).style.display = 'block';

  document.getElementById('monthYear').innerHTML = "" + month + " " + today.getFullYear();
  // Clear Form
  document.getElementById('accessForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}
