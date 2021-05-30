function checkUserAge() {
	// взимаме въведените от потребителя данни:
	var inputsValues = getInputsValues();
	var userBirthYear = inputsValues.uBirth.year;
	var userName = inputsValues.uname;

	console.log("userBirthYear=" + userBirthYear);
	console.log("userName=" + userName);

	// ЗАДАЧА - реализирайте следната функционалност, която ще се изпълни след кликване на бутона "Go":
	//  ако потребителят е пълнолетен  то на екрана да се изпише:
	//  	  "Добре дошли, <userName>!"
	//  ако потребителят е непълнолетен, но не и малолетен, то на екрана да се изпише:
	//  	  "<UserName>, ще имате достъп само до определена функционалност от този сайт"
	//  ако потребителят е малолетен  то:
	//  	"Съжaлявам <userName>, отбий се тук след X години!");
	//
	//  където <userName> e името въведено от потребителя, а X = 18-userAge;

	// пример за изписване на екрана на произволен низ, чрез функцията writeToOutput():
	// writeToOutput("Натиснахте бутона GO, но не сте направили задачата!");

	// >>>>>>>>>> НАЧАЛО НА ВАШИЯ КОД >>>>>>>>>>
    var dateObj = new Date();
    var year = dateObj.getUTCFullYear();
    var y = year - userBirthYear;
    console.log(y);
    var x = 18 - y;
    console.log(x)
    if(y>=18){
        writeToOutput("Добре дошли," +userName+ "!");
    } else if(y>=14 && y<18){
        writeToOutput( userName+", ще имате достъп само до определена функционалност от този сайт");
    } else if(y<14){
        writeToOutput("Съжaлявам " +userName+", отбий се тук след " +x+ " години!");
    }else{
        writeToOutput("Моля въведете дата на раждане")
    }
	// <<<<<<<<<< КРАЙ НА ВАШИЯ КОД <<<<<<<<<<<<<
}

// ****************************************
// main:
writeToOutput("Попълнете формата и кликнете върху бутона!");

// ****************************************
// DO NOT CHANGE
// допълнителни DOM функции:
function getInputsValues() {
	var form = document.getElementsByClassName("test")[0];
	var inputs = form.getElementsByTagName("input");
	var inputsValues = {};

	for (var i = 0, len = inputs.length; i < len; i++) {
		var inputNode = inputs[i];
		var inputNodeValue = inputNode.value;

		// check for date field:
		if (inputNode.type === "date") {
			var dateMatch = inputNodeValue.match(/^(\d{4})-(\d{2})-(\d{2})$/); //YYYY-MM-DD
			if (dateMatch) {
				inputNodeValue = {
					year: dateMatch[1],
					month: dateMatch[2],
					day: dateMatch[3]
				};
			}
		} else {
			inputNodeValue = inputNode.value;
		}
		inputsValues[inputNode.id] = inputNodeValue;
	}

	// console.log("inputsValues=", inputsValues);
	return inputsValues;
}

function writeToOutput(result) {
	var outputNode = document.getElementById("output");
	outputNode.innerHTML = result;
}
