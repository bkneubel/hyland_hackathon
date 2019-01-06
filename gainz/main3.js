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
var profileRef = firebase.database().ref('profile');

profileRef.on('value',gotData,errData);

function gotData(data){
  var profiles = data.val();
  var keys = Object.keys(profiles);
  //initialize array of all scores and sort it
  var scores = [];
  for(var i = 0; i < keys.length ; i++){
    var k = keys[i];
    scores.push(profiles[k].highscore);
  }
  scores.sort();
  console.log(scores);
  //go through all scores in descending order
  for(var i = scores.length - 1; i >= 0; i--){
    var number = scores[i]; //get the current score
    var curName;
    for(var j = 0; j < keys.length ; j++){
      var k = keys[j];
      if(profiles[k].highscore == number){
        curName = profiles[k].name;
      }
    }
    var num = scores.length - i;
    if(num <= 10){
      var n = num.toString();
      var cur = 'player' + n;
      var cur2 = 'score' + n;
      document.getElementById(cur).innerHTML = "" + curName;
      document.getElementById(cur2).innerHTML = "" + number;
    } else{
      break;
    }

  }
}
function errData(err){
  console.log('Error!');
  console.log(err);
}
