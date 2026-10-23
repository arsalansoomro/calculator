
var input = document.getElementById("inputBox");

var string = "";

function calculate(value) {

    if (value == "AC") {
        string = "";
        input.value = string;
    }

    else if (value == "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    }

    else if (value == "=") {
        if (string != "") {
            try {
                string = eval(string);
                input.value = string;
            }
            catch (error) {
                input.value = "Error";
                string = "";
            }
        }
    }

    else {
        string = string + value;
        input.value = string;
    }
}