var x = 2;
var y = 15;
var string1 = "This sentence has more than 10 characters";
var string2 ="Hello";
var string3 ="Welcome to the site!";
var name1 = ["Rachel", "Monica", "Ross", "Pheobe", "Chandler", "Joey"];
var name2 = ["Will", "Hilary", "Phil", "Carleton", "Ashley", "Vivian"];
var name3 = ["New Hope", "Empire Strikes Back", "Return of the Jedi", "Phantom Menace", "Attack of the clones", "Revenge of the sith"];


function calc(x,y){
    var sum = x+y;
    var z = sum * 5;
    return z;   
} 


function charCount(string){
    var result = string.length;
    if (result > 10){
        return true;
    }else{
        return false;
    }
}


var returnedstring
var result

for (var i = 0; i < name1.length; i++) {
    returnedstring = name1[i];
    if (returnedstring.substring(0, 5) === "Ph"){
        result = returnedstring;
        console.log (result);
    }
}



function name(returnedstring)
{
    for (var i = 0; i < name1.length; i++) {
        returnedstring = name1[i];
    }    
    for (var i = 0; i < name2.length; i++) {
        returnedstring = name2[i];
    }    
    for (var i = 0; i < name3.length; i++) {
        returnedstring = name3[i];
    }
    if (returnedstring.substring (0, 5) === "Ph"){
        return result;
    }
}
console.log (name.name3);





console.log (calc(2,5));
console.log (calc(10,3));
console.log (calc(5,5));

console.log (charCount(string1));
console.log (charCount(string2));
console.log (charCount(string3));
