
var currentyear:number =2024;
var birthYear:number =2004;
const myAge :number = currentyear - birthYear;
console.log(myAge); 
var length=20;
var width = 30;
// area of a rectangle = length*width;
var rectangle = length*width;
console.log(rectangle);
var radius:number = 20;
var pi:number =Math.PI;
// circle area formula =PIr*r
const result =  pi * radius * radius 
console.log(result);
// var sidelength: number= parseInt(prompt("Enter your number"));
//formula area of the cube = SA = 6s^2 
var sidelength: number= 10;
var result2 = 6*sidelength * sidelength * sidelength
console.log(result2);
var totalSeconds = 125; 
var minutes, seconds;
minutes = Math.floor(totalSeconds / 60);  
seconds = totalSeconds % 60; 
console.log(minutes,seconds);
//percentage formula = (totalmarks/obtainedmarks)*100
 var totalmarks = 1100;
var obtainedmarks = 900;
var percentage=(900/1100)*100;
console.log(percentage);
//increment&decrement opretor questions
var a = 2;
var b = ++a*2;
console.log(a,b);
var x =5;
var y =x-+2;
console.log(y);
var x =3;
var y = ++x + x++ + ++x;
console.log(y);
var m =2;
var n = ++m*m++*-m;
console.log(n);
var a =3;
var b =5;
var result1 = ++a + b-- -a++ + --b
console.log(result1);
var m =2;
var n =4;
var p = m++ + ++n - --m + n--;
console.log(m,n,p);
var a =5;
var b =3;
var c =2;
var d =7;
var result3 = ++a* (b-- + c)/ --d;
console.log(a,b,c,d);
console.log(result3);
var m =2;
var n =3;
var o =4;
var result4 = m++*(--n+m)/(o-- -n);
console.log(m,n,o);
console.log(result4);




