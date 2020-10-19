module.exports = function toReadable (num) {
//   let arrNumbers =[
//       "zero",
//       "one" ,
//       "two" , 
//       "three", 
//       "four",
//       "five",
//       "six",
//       "seven",
//       "eight",
//       "nine",
//       "eleven",
//       "twelve",
//       "thirteen",
//       "fourteen",
//       "fiveteen",
//       "sixteen",
//       "seventeen",
//       "eighteen",
//       "nineteen"
//   ];
//   let numbertoarr = number.toString().split("");
//   let result = "";
  
//       if(numbertoarr.lengh = 3){
//           result+=arrNumbers[Number(numbertoarr[0])] + " hundred ";
//       }
//       if(numbertoarr.lengh >=2 && Number(numbertoarr[numbertoarr.lengh-2])>0){
//           result +=arrNumbers[Number(numbertoarr[numbertoarr.lengh-2])] + "ty";
//       }
//       if(0<Number(numbertoarr[numbertoarr.lengh-1])){
//         result +=" " + arrNumbers[Number(numbertoarr[numbertoarr.lengh-1])];
//       }
// return result;
var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
'ninety'];

var numString = num.toString();

if (num < 0) throw new Error('Negative numbers are not supported.');

if (num === 0) return 'zero';

//the case of 1 - 20
if (num < 20) {
return ones[num];
}

if (numString.length === 2) {
return (tens[numString[0]] + ' ' + ones[numString[1]]).trim();
}

//100 and more
if (numString.length == 3) {
if (numString[1] === '0' && numString[2] === '0')
return ones[numString[0]] + ' hundred';
else
return ones[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2]));
}


}
