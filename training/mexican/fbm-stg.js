{

const email = document.querySelector('#email'); 
const signOutButton = document.querySelector('#signOutButton');
const userName = document.querySelector('#userName');
const userName2 = document.querySelector('#userName2');
const loader = document.querySelector('#loadanimation');
const maincontent = document.querySelector('#maincontent');



 const firebaseConfig = {
    apiKey: "AIzaSyDApbEuGdjDf-dBlOljBvvXAPlZmUx-D5M",
    authDomain: "stonegate-system.firebaseapp.com",
    projectId: "stonegate-system",
    storageBucket: "stonegate-system.appspot.com",
    messagingSenderId: "798322604618",
    appId: "1:798322604618:web:fada6a2e9f09f0319bc4b3",
    measurementId: "G-1J8XNVRV7Q"
  };


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const authChanged = firebase.auth().onAuthStateChanged(user =>{
let mprognum = 0
let mprognum2 = 0
let mprognum3 = 0
let mprognum4 = 0
let mprognum5 = 0

const signout = () => {
    auth.signOut();
}

signOutButton.addEventListener('click', signout);


auth.onAuthStateChanged(async (user) => {
  let currentPath = window.location.pathname;
  if (user) {
    maincontent.style.display='flex';
		loader.style.display='none';
    let myFS = firebase.firestore()
    let docSnap = await myFS.doc("users/"+firebase.auth().currentUser.uid).get();
    let data = docSnap.data()
    let prereq = data['prereq'];
    let name = data['Name'];
    let emaild = data['Email']; 
    let firstletter = name.substring(0, 1)
    $('.firstletter').html(firstletter);

    let m1p1 = data['m1p1'];    
    let m1p2 = data['m1p2'];    
    let m1p3 = data['m1p3'];    
    let m1p4 = data['m1p4']; 
    let m1p5 = data['m1p5'];    
    let m1p6 = data['m1p6'];    
    let m1p7 = data['m1p7'];    
     
    let m2p1 = data['m2p1'];    
    let m2p2 = data['m2p2'];    
    let m2p3 = data['m2p3'];
    let m2p4 = data['m2p4'];
    let m2p5 = data['m2p5'];    
    let m2p6 = data['m2p6'];    
    let m2p7 = data['m2p7'];
    let m2p8 = data['m2p8'];

    let m3p1 = data['m3p1'];    
    let m3p2 = data['m3p2'];    
    let m3p3 = data['m3p3'];
    let m3p4 = data['m3p4'];
    
    let m4p1 = data['m4p1'];    
    let m4p2 = data['m4p2'];    
    let m4p3 = data['m4p3'];
    let m4p4 = data['m4p4'];

    let m5p1 = data['m5p1'];

    if( m1p1 == true) {
$('#m1p1').hide()
$('#m1p1x').show()
mprognum++
}
    if( m1p2 == true) {
$('#m1p2').hide()
$('#m1p2x').show()
mprognum++
}

    if( m1p3 == true) {
$('#m1p3').hide()
$('#m1p3x').show()
mprognum++
}

    if( m1p4 == true) {
$('#m1p4').hide()
$('#m1p4x').show()
mprognum++
}

    if( m1p5 == true) {
$('#m1p5').hide()
$('#m1p5x').show()
mprognum++
}

    if( m1p6 == true) {
$('#m1p6').hide()
$('#m1p6x').show()
mprognum++
}

    if( m1p7 == true) {
$('#m1p7').hide()
$('#m1p7x').show()
mprognum++
}
  
if( m2p1 == true) {
$('#m2p1').hide()
$('#m2p1x').show()
mprognum2++
}
    
if( m2p2 == true) {
$('#m2p2').hide()
$('#m2p2x').show()
mprognum2++
}
    
if( m2p3 == true) {
$('#m2p3').hide()
$('#m2p3').show()
mprognum2++
}
    
    
if( m2p4 == true) {
$('#m2p4').hide()
$('#m2p4x').show()
mprognum2++
}

if( m2p5 == true) {
$('#m2p5').hide()
$('#m2p5x').show()
mprognum2++
}

if( m2p6 == true) {
$('#m2p6').hide()
$('#m2p6x').show()
mprognum2++
}
    
if( m2p7 == true) {
$('#m2p7').hide()
$('#m2p7x').show()
mprognum2++
}

if( m2p8 == true) {
$('#m2p8').hide()
$('#m2p8x').show()
mprognum2++
}

if( m3p1 == true) {
$('#m3p1').hide()
$('#m3p1x').show()
mprognum3++
}
    
if( m3p2 == true) {
$('#m3p2').hide()
$('#m3p2x').show()
mprognum3++
}

if( m3p3 == true) {
$('#m3p3').hide()
$('#m3p3x').show()
mprognum3++
}

if( m3p4 == true) {
$('#m3p4').hide()
$('#m3p4x').show()
mprognum3++
}

if( m4p1 == true) {
$('#m4p1').hide()
$('#m4p1x').show()
mprognum4++
}
    
if( m4p2 == true) {
$('#m4p2').hide()
$('#m4p2x').show()
mprognum4++
}
  
if( m4p3 == true) {
$('#m4p3').hide()
$('#m4p3x').show()
mprognum4++
}  

if( m4p4 == true) {
$('#m4p4').hide()
$('#m4p4x').show()
mprognum4++
}

if( m5p1 == true) {
$('#m5p1').hide()
$('#m5p1x').show()
mprognum5++
}



let sp =((mprognum+mprognum2+mprognum3+mprognum4+mprognum5)/24*100)
let spn = Math.round(sp)+'%'
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({MXC:spn}, {merge:true})


 if(prereq !== true) {
        location.href = '/onboarding';
        }
 if(!!name) {
      $('#userName2').html(name);
  } else {
  
  firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({Name:user.displayName}, {merge:true})
  {
  setTimeout(() => { 
         window.location.href = '/dashboard/training/mexican';
  
  }, 2000);
  
  }
  
      $('#userName2').html(name);
  }

  if(!!emaild) {
      $('#email').html(emaild);
  }} else {
    console.log('user logged out');
    signOutButton.style.display="none";
    if('/' != currentPath){location.href = '/login';}
    maincontent.style.display='none';
		loader.style.display='flex';
  }
signOutButton.addEventListener('click', signout);
document.querySelector('#mprognum').textContent = mprognum
document.querySelector('#mprognum2').textContent = mprognum2
document.querySelector('#mprognum3').textContent = mprognum3
document.querySelector('#mprognum4').textContent = mprognum4
document.querySelector('#mprognum5').textContent = mprognum5

})})

}
