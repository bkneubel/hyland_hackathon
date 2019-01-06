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


// Listen for form submit
document.getElementById('registerForm').addEventListener('submit',submitForm);

// Submit form
function submitForm(e){ //takes in an event
  e.preventDefault();

  // Get values
  var email = getInputVal('email');
  var name = getInputVal('name');
  var password = getInputVal('password');
  var num = Math.floor(Math.random()*9999 + 1);
  saveProfile(email,name,password,num);

  // Show Alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  // Clear Form
  document.getElementById('registerForm').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//Save profile to firebase
function saveProfile(email, name, password, highscore){
  var newProfileRef = profileRef.push();
  newProfileRef.set({
    email: email,
    name: name,
    password: password,
    highscore: highscore
  });
}
