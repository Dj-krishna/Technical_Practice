/* function palindrome(n){
var number = n.toString();
  const arr = number.split('').reverse().join('');
  if(number === arr){
    console.log("Palindrome");
  }else{
    console.log("Not Palindrome");
  }
}

palindrome(878); */

function palindrome(num) {
	var n = num.toString();
  var l = n.length;
  for(let i = 0; i < l; i++){
  	if(n[i] !== n[l-1-i]){
   		return false;    	
    }
  }
  return true;  
}

var num = 434;
if(palindrome(num) == false){
	console.log('Not palidrome');
} else {
	console.log('Palidrome');
}
