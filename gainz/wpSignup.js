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


// Listen for form submit
document.getElementById('registerForm').addEventListener('submit',submitForm);

// Submit form
function submitForm(e){ //takes in an event
  e.preventDefault();

  // Get values
  var email = getInputVal('email');
  var name = getInputVal('name');
  var password = getInputVal('password');
  var weight = getInputVal('weight');
  var height = getInputVal('height');
  var gender;
  var radios = document.getElementsByName('gender');
  for (var i = 0; i < radios.length; i++){
    if(radios[i].checked){
      gender = radios[i].value;
      break;
    }
  }
  var planName;
  var radios2 = document.getElementsByName('program');
  for(var j = 0; j < radios2.length; j++){
    if(radios2[j].checked){
      planName = radios2[j].value;
      break;
    }
  }
  var bi,tri,chest,lBack,uBack,shoulder,trap,core;
  if(planName == "beginner" || planName == "intermediate"){
    bi = "EZ-Bar Curls";
    tri = "Tricep Dips";
    chest = "Dumbbell Bench Press";
    lBack = "Lower Back Hyperextension"
    uBack = "Single-arm Dumbbell Row";
    shoulder = "Lateral Flies";
    trap = "Dumbbell Farmer's Walk";
    core = "Crunches";
  }
  else if(planName == "calisthenics"){
    bi = "Chin-Ups";
    tri = "Tricep Dips";
    chest = "Push-Ups";
    lBack = "Lower Back Hyperextension"
    uBack = "Pull-Ups";
    shoulder = "Handstand Push-Ups";
    trap = "Dips";
    core = "Crunches";
  }
  else if(planName == "custom"){
    if(getInputVal("bicepExercise") != "other") bi = getInputVal("bicepExercise");
    else bi = getInputVal("otherBicep");
    if(getInputVal("tricepExercise") != "other") tri = getInputVal("tricepExercise");
    else tri = getInputVal("otherTricep");
    if(getInputVal("chestExercise") != "other") chest = getInputVal("chestExercise");
    else chest = getInputVal("otherChest");
    if(getInputVal("lBackExercise") != "other") lBack = getInputVal("lBackExercise");
    else lBack = getInputVal("otherLBack");
    if(getInputVal("uBackExercise") != "other") uBack = getInputVal("uBackExercise");
    else uBack = getInputVal("otherUBack");
    if(getInputVal("shoulderExercise") != "other") shoulder = getInputVal("shoulderExercise");
    else shoulder = getInputVal("otherShoulder");
    if(getInputVal("trapExercise") != "other") trap = getInputVal("trapExercise");
    else trap = getInputVal("otherTrap");
    if(getInputVal("coreExercise") != "other") core = getInputVal("coreExercise");
    else core = getInputVal("otherCore");
  }
  saveProfile(email,name,password,weight,height,gender,planName,bi,tri,chest,lBack,uBack,shoulder,trap,core);

  // Show Alert
  document.querySelector('.showReg').style.display = 'none';
  document.querySelector('.alertReg').style.display = 'block';

  //Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alertReg').style.display = 'none';
    document.querySelector('.showReg').style.display = 'block';
  },3000);
  // Clear Form
  document.getElementById('registerForm').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//Save profile to firebase
function saveProfile(email, name, password, weight, height,gender,planName,bicepWorkout,tricepWorkout,chestWorkout,lBackWorkout,uBackWorkout,shoulderWorkout,trapWorkout,coreWorkout){
  var newProgramRef = programRef.push();
  newProgramRef.set({
    email: email,
    name: name,
    password: password,
    weight: weight,
    height: height,
    gender: gender,
    planName: planName,
    bicepWorkout: bicepWorkout,
    tricepWorkout: tricepWorkout,
    chestWorkout: chestWorkout,
    lBackWorkout: lBackWorkout,
    uBackWorkout: uBackWorkout,
    shoulderWorkout: shoulderWorkout,
    trapWorkout: trapWorkout,
    coreWorkout: coreWorkout
  });
}
