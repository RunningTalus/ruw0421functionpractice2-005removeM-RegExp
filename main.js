//http://winter2014.refactoru.com/exercises/problem-set/function-practice2

//5) Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function should return the new string.

//5a) removeM('family') should return 'faily'
//  using Regular Expressions
//  var removeM = function (str){
// 	//console.log(x.length); //logs 6
// 	var newStr = str.replace(/m/gi,'');
// 	console.log("On the following line, EXPECT the value faily: ");
// 	console.log(newStr);
// 	return newStr;
// };
// removeM('family');

//5b) removeM('memory') should return 'eory'
//  var removeM = function (str){
// 	//console.log(x.length); //logs 6
// 	var newStr = str.replace(/m/gi,'');
// 	console.log("On the following line, EXPECT the value eory: ");
// 	console.log(newStr);
// 	return newStr;
// };
// removeM('memory');

// 5ab) Using a Loop
var removeM = function (str){
	var output ="";
	for(var i = 0; i<str.length; i++){
		var letter = str[i]
		if(letter !== 'm' && letter !== 'M'){
			// console.log(letter);
			output = output + letter;
			console.log(output);		
		};
	};	
	return output;	
};
removeM('family');
removeM('memory');	