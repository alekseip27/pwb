const email = document.querySelector('#email'); 
const signOutButton = document.querySelector('#signOutButton');
const userName = document.querySelector('#userName');
const userName2 = document.querySelector('#userName2');
const userProfilePic = document.querySelector('#userProfilePic');
const userProfilePic2 = document.querySelector('#userProfilePic2');
const loader = document.querySelector('#loadanimation');
const maincontent = document.querySelector('#maincontent');



// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-OWwg266yBXpTD8LM5wQSd6qhFCkMFLI",
  authDomain: "peckwater-8b3e7.firebaseapp.com",
  projectId: "peckwater-8b3e7",
  storageBucket: "peckwater-8b3e7.appspot.com",
  messagingSenderId: "784921135307",
  appId: "1:784921135307:web:29232c32ec3426815ab34e"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const authChanged = firebase.auth().onAuthStateChanged(user =>{
let prognum = 0
let prognum2 = 0
let prognum3 = 0
let prognum4 = 0
let prognum5 = 0
let prognum6 = 0
let prognum7 = 0

let prognumf = 0
let prognum2f = 0
let prognum3f = 0
let prognum4f = 0
let prognum5f = 0
let prognum6f = 0
let prognum7f = 0

const signout = () => {
    auth.signOut();
}

auth.onAuthStateChanged(async (user) => {
  let currentPath = window.location.pathname;
  if (user) {
    maincontent.style.display='flex';
		loader.style.display='none';
    let myFS = firebase.firestore()
    let docSnap = await myFS.doc("users/"+firebase.auth().currentUser.uid).get();
    let data = docSnap.data()
    let prereq = data['prereq'];
    let s1p1 = data['s1p1'];    
    let s1p2 = data['s1p2'];    
    let s1p3 = data['s1p3'];    
    let s1p4 = data['s1p4']; 
    let s1p5 = data['s1p5'];    
    let s1p6 = data['s1p6'];
    let s1p7 = data['s1p7'];    
    let s1p8 = data['s1p8']; 
    let s2p1 = data['s2p1'];    
    let s2p2 = data['s2p2'];    
    let s2p3 = data['s2p3'];    
    let s2p4 = data['s2p4']; 
    let s2p5 = data['s2p5'];    
    let s2p6 = data['s2p6'];
    let s2p7 = data['s2p7'];    
    let s2p8 = data['s2p8'];
    let s3p1 = data['s3p1'];    
    let s3p2 = data['s3p2']; 
    let s3p3 = data['s3p3'];    
    let s3p4 = data['s3p4']; 
    let s3p5 = data['s3p5'];    
    let s4p1 = data['s4p1']; 
    let s4p2 = data['s4p2']; 
    let s4p3 = data['s4p3']; 
    let s4p4 = data['s4p4']; 
    let s5p1 = data['s5p1']; 
    let s5p2 = data['s5p2']; 
    let s5p3 = data['s5p3']; 
    let s5p4 = data['s5p4']; 
    let s5p5 = data['s5p5']; 
    let s6p1 = data['s6p1']; 
    let s6p2 = data['s6p2']; 
    let s6p3 = data['s6p3']; 
    let s6p4 = data['s6p4']; 
    let s7p1 = data['s7p1']; 
    let s7p2 = data['s7p2']; 
    let s7p3 = data['s7p3']; 
    let s7p4 = data['s7p4']; 
    let s7p5 = data['s7p5']; 

    let f1p1 = data['f1p1'];    
    let f1p2 = data['f1p2'];    
    let f1p3 = data['f1p3'];    
    let f1p4 = data['f1p4']; 
    let f1p5 = data['f1p5'];    
    let f1p6 = data['f1p6'];
    let f1p7 = data['f1p7'];    
    let f1p8 = data['f1p8']; 
    let f1p9 = data['f1p9']; 
    let f2p1 = data['f2p1'];    
    let f2p2 = data['f2p2'];    
    let f2p3 = data['f2p3'];    
    let f2p4 = data['f2p4']; 
    let f2p5 = data['f2p5'];    
    let f2p6 = data['f2p6'];
    let f2p7 = data['f2p7'];    
    let f2p8 = data['f2p8'];
    let f2p9 = data['f2p9'];
    let f3p1 = data['f3p1'];    
    let f3p2 = data['f3p2']; 
    let f3p3 = data['f3p3'];    
    let f3p4 = data['f3p4']; 
    let f3p5 = data['f3p5'];    
    let f3p6 = data['f3p6'];    
    let f4p1 = data['f4p1']; 
    let f4p2 = data['f4p2']; 
    let f4p3 = data['f4p3']; 
    let f5p1 = data['f5p1']; 
    let f5p2 = data['f5p2']; 
    let f5p3 = data['f5p3']; 
    let f5p4 = data['f5p4']; 
    let f5p5 = data['f5p5']; 
    let f6p1 = data['f6p1']; 
    let f6p2 = data['f6p2']; 
    let f6p3 = data['f6p3']; 
    let f6p4 = data['f6p4']; 
    let f6p5 = data['f6p5']; 
    let f7p1 = data['f7p1']; 
    let f7p2 = data['f7p2']; 
    let f7p3 = data['f7p3']; 
    let f7p4 = data['f7p4']; 
    let f7p5 = data['f7p5']; 
    let f7p6 = data['f7p6']; 

    if( s1p1 == true) {
$('#s1p1').hide()
$('#s1p1x').show()
prognum++
}
    if( s1p2 == true) {
$('#s1p2').hide()
$('#s1p2x').show()
prognum++
}

    if( s1p3 == true) {
$('#s1p3').hide()
$('#s1p3x').show()
prognum++
}

    if( s1p4 == true) {
$('#s1p4').hide()
$('#s1p4x').show()
prognum++
}

    if( s1p5 == true) {
$('#s1p5').hide()
$('#s1p5x').show()
prognum++
}

    if( s1p6 == true) {
$('#s1p6').hide()
$('#s1p6x').show()
prognum++
}

    if( s1p7 == true) {
$('#s1p7').hide()
$('#s1p7x').show()
prognum++
}

    if( s1p8 == true) {
$('#s1p8').hide()
$('#s1p8x').show()
prognum++
}
    if( s2p1 == true) {
$('#s2p1').hide()
$('#s2p1x').show()
prognum2++
}
    if( s2p2 == true) {
$('#s2p2').hide()
$('#s2p2x').show()
prognum2++
}
    if( s2p3 == true) {
$('#s2p3').hide()
$('#s2p3x').show()
prognum2++
}
    if( s2p4 == true) {
$('#s2p4').hide()
$('#s2p4x').show()
prognum2++
}
    if( s2p5 == true) {
$('#s2p5').hide()
$('#s2p5x').show()
prognum2++
}
    if( s2p6 == true) {
$('#s2p6').hide()
$('#s2p6x').show()
prognum2++
}
    if( s2p7 == true) {
$('#s2p7').hide()
$('#s2p7x').show()
prognum2++
}
    if( s3p1 == true) {
$('#s3p1').hide()
$('#s3p1x').show()
prognum3++
}
    if( s3p2 == true) {
$('#s3p2').hide()
$('#s3p2x').show()
prognum3++
}
    if( s3p3 == true) {
$('#s3p3').hide()
$('#s3p3x').show()
prognum3++
}
    if( s3p4 == true) {
$('#s3p4').hide()
$('#s3p4x').show()
prognum3++
}
    if( s3p5 == true) {
$('#s3p5').hide()
$('#s3p5x').show()
prognum3++
}
    if( s4p1 == true) {
$('#s4p1').hide()
$('#s4p1x').show()
prognum4++
}
    if( s4p2 == true) {
$('#s4p2').hide()
$('#s4p2x').show()
prognum4++
}
    if( s4p3 == true) {
$('#s4p3').hide()
$('#s4p3x').show()
prognum4++
}
    if( s4p4 == true) {
$('#s4p4').hide()
$('#s4p4x').show()
prognum4++
}
    if( s5p1 == true) {
$('#s5p1').hide()
$('#s5p1x').show()
prognum5++
}
    if( s5p2 == true) {
$('#s5p2').hide()
$('#s5p2x').show()
prognum5++
}
    if( s5p3 == true) {
$('#s5p3').hide()
$('#s5p3x').show()
prognum5++
}
    if( s5p4 == true) {
$('#s5p4').hide()
$('#s5p4x').show()
prognum5++
}
    if( s5p5 == true) {
$('#s5p5').hide()
$('#s5p5x').show()
prognum5++
}
    if( s6p1 == true) {
$('#s6p1').hide()
$('#s6p1x').show()
prognum6++
}
    if( s6p2 == true) {
$('#s6p2').hide()
$('#s6p2x').show()
prognum6++
}
    if( s6p3 == true) {
$('#s6p3').hide()
$('#s6p3x').show()
prognum6++
}
    if( s6p4 == true) {
$('#s6p4').hide()
$('#s6p4x').show()
prognum6++
}
    if( s7p1 == true) {
$('#s7p1').hide()
$('#s7p1x').show()
prognum7++
}
    if( s7p2 == true) {
$('#s7p2').hide()
$('#s7p2x').show()
prognum7++
}
    if( s7p3 == true) {
$('#s7p3').hide()
$('#s7p3x').show()
prognum7++
}
    if( s7p4 == true) {
$('#s7p4').hide()
$('#s7p4x').show()
prognum7++
}
    if( s7p5 == true) {
$('#s7p5').hide()
$('#s7p5x').show()
prognum7++
}
    if( f1p1 == true) {
$('#f1p1').hide()
$('#f1p1x').show()
prognumf++
}
    if( f1p2 == true) {
$('#f1p2').hide()
$('#f1p2x').show()
prognumf++
}
    if( f1p3 == true) {
$('#f1p3').hide()
$('#f1p3x').show()
prognumf++
}
    if( f1p4 == true) {
$('#f1p4').hide()
$('#f1p4x').show()
prognumf++
}
    if( f1p5 == true) {
$('#f1p5').hide()
$('#f1p5x').show()
prognumf++
}
    if( f1p6 == true) {
$('#f1p6').hide()
$('#f1p6x').show()
prognumf++
}
    if( f1p7 == true) {
$('#f1p7').hide()
$('#f1p7x').show()
prognumf++
}
    if( f1p8 == true) {
$('#f1p8').hide()
$('#f1p8x').show()
prognumf++
}
    if( f1p9 == true) {
$('#f1p9').hide()
$('#f1p9x').show()
prognumf++
}
    if( f2p1 == true) {
$('#f2p1').hide()
$('#f2p1x').show()
prognum2f++
}
    if( f2p2 == true) {
$('#f2p2').hide()
$('#f2p2x').show()
prognum2f++
}
    if( f2p3 == true) {
$('#f2p3').hide()
$('#f2p3x').show()
prognum2f++
}
    if( f2p4== true) {
$('#f2p4').hide()
$('#f2p4x').show()
prognum2f++
}
    if( f2p5== true) {
$('#f2p5').hide()
$('#f2p5x').show()
prognum2f++
}
    if( f2p6== true) {
$('#f2p6').hide()
$('#f2p6x').show()
prognum2f++
}
    if( f2p7== true) {
$('#f2p7').hide()
$('#f2p7x').show()
prognum2f++
}
    if( f2p8== true) {
$('#f2p8').hide()
$('#f2p8x').show()
prognum2f++
}
    if( f3p1== true) {
$('#f3p1').hide()
$('#f3p1x').show()
prognum3f++
}
    if( f3p2== true) {
$('#f3p2').hide()
$('#f3p2x').show()
prognum3f++
}
    if( f3p3== true) {
$('#f3p3').hide()
$('#f3p3x').show()
prognum3f++
}
    if( f3p4== true) {
$('#f3p4').hide()
$('#f3p4x').show()
prognum3f++
}
    if( f3p5== true) {
$('#f3p5').hide()
$('#f3p5x').show()
prognum3f++
}
    if( f3p6== true) {
$('#f3p6').hide()
$('#f3p6x').show()
prognum3f++
}
    if( f4p1== true) {
$('#f4p1').hide()
$('#f4p1x').show()
prognum4f++
}
    if( f4p2== true) {
$('#f4p2').hide()
$('#f4p2x').show()
prognum4f++
}
    if( f4p3== true) {
$('#f4p3').hide()
$('#f4p3x').show()
prognum4f++
}
    if( f5p1 == true) {
$('#f5p1').hide()
$('#f5p1x').show()
prognum5f++
}
    if( f5p2 == true) {
$('#f5p2').hide()
$('#f5p2x').show()
prognum5f++
}
    if( f5p3== true) {
$('#f5p3').hide()
$('#f5p3x').show()
prognum5f++
}
    if( f5p4== true) {
$('#f5p4').hide()
$('#f5p4x').show()
prognum5f++
}
    if( f5p5== true) {
$('#f5p5').hide()
$('#f5p5x').show()
prognum5f++
}
    if( f5p5== true) {
$('#f5p5').hide()
$('#f5p5x').show()
prognum5f++
}
    if( f6p1== true) {
$('#f6p1').hide()
$('#f6p1x').show()
prognum6f++
}
    if( f6p2== true) {
$('#f6p2').hide()
$('#f6p2x').show()
prognum6f++
}
    if( f6p3== true) {
$('#f6p3').hide()
$('#f6p3x').show()
prognum6f++
}
    if( f6p4== true) {
$('#f6p4').hide()
$('#f6p4x').show()
prognum6f++
}
    if( f7p1	== true) {
$('#f7p1').hide()
$('#f7p1x').show()
prognum7f++
}
    if( f7p2	== true) {
$('#f7p1').hide()
$('#f7p1x').show()
prognum7f++
}
    if( f7p3	== true) {
$('#f7p3').hide()
$('#f7p3x').show()
prognum7f++
}
    if( f7p4	== true) {
$('#f7p4').hide()
$('#f7p4x').show()
prognum7f++
}
    if( f7p5	== true) {
$('#f7p5').hide()
$('#f7p5x').show()
prognum7f++
}
    if( f7p6	== true) {
$('#f7p6').hide()
$('#f7p6x').show()
prognum7f++
}

    if (prereq == false) {
      maincontent.style.display='none';
		  loader.style.display='flex';
      location.href = '/onboarding';
    }

    signOutButton.style.display="block";

    if(userName !== null){
      userName.innerHTML= user.displayName;
    }
     if(userName2 !== null){
      userName2.innerHTML= user.displayName;
    }
    if(email !== null){
    email.innerHTML= user.email;
    }
    if(userProfilePic !== null){
      userProfilePic.src=user.photoURL;
    }
    if(userProfilePic2 !== null){
      userProfilePic2.src=user.photoURL;
    }
    
    if (userProfilePic.src == 'https://www.peckwaterbrands.com/null' && userProfilePic2.src == 'https://www.peckwaterbrands.com/null') {
    userProfilePic.src = 'https://uploads-ssl.webflow.com/5ed4bdaf08ecb446579ff8c0/61a8e6ea274ee2654c685d00_avatar-placeholder.png'
    userProfilePic2.src = 'https://uploads-ssl.webflow.com/5ed4bdaf08ecb446579ff8c0/61a8e6ea274ee2654c685d00_avatar-placeholder.png'
}

  } else {
    console.log('user logged out');
    signOutButton.style.display="none";
    if('/' != currentPath){location.href = '/login';}
    maincontent.style.display='none';
		loader.style.display='flex';
  }
signOutButton.addEventListener('click', signout);
document.querySelector('#prognum').textContent = prognum
document.querySelector('#prognum2').textContent = prognum2
document.querySelector('#prognum3').textContent = prognum3
document.querySelector('#prognum4').textContent = prognum4
document.querySelector('#prognum5').textContent = prognum5
document.querySelector('#prognum6').textContent = prognum6
document.querySelector('#prognum7').textContent = prognum7

document.querySelector('#prognumf').textContent = prognumf
document.querySelector('#prognumf2').textContent = prognum2f
document.querySelector('#prognumf3').textContent = prognum3f
document.querySelector('#prognumf4').textContent = prognum4f
document.querySelector('#prognumf5').textContent = prognum5f
document.querySelector('#prognumf6').textContent = prognum6f
document.querySelector('#prognumf7').textContent = prognum7f

})})
