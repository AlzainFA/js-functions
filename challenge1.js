

function add(a,b) {
    c=a+b 
    return c 
}
final = add(2,3)
console.log(final)


/**
 

* Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */


function printName(firstn,lastn) {
    fullname= firstn + " " + lastn;
    return fullname;
}
myfullname = printName("Alzain","Alawadhi")
console.log(myfullname);





/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(currentyear, birth) { 
    Age = currentyear - birth 
    return Age;
}
myAge = printAge(2025,2004)
console.log(myAge);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
  function printHello(name,language){
    if (language === "en"){
        return  "hello " + name;
  }
    else if (language === "es") {
        return "Hola " + name; 
    }
  else if (language === + "fr"){
    return "bonjour " + name;
  }
  else if(language === "tr") {
    return "Merhaba "  + name;
    
  }
  else {
    return  "Language not supported ";
  }
  }

  languageintro = printHello("Alzain" , "es")
  console.log(languageintro);
  
  
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax (Number1, Number2) {
    if (Number1 > Number2){
       return Number1;
    }
    else {
        return Number2; 
    }
}
   
Bigger= printMax(6,2004) 
console.log (Bigger);

// 

function printMin(){
    // 1 - find the smallest number of the 2
        // a - 2 inputs that are numbers
}