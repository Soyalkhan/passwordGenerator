let generateBtn = document.querySelector(".generate");
let inputpassword = document.getElementById("password");
let regenerate_btn = document.getElementById("regenerate_btn");
let copy = document.getElementById("copy_btn");

let lenghOfpass;
console.log(lenghOfpass);
//range selector
var slider = document.getElementById("myrange");
var output = document.querySelector(".val");
output.innerHTML = slider.value;
lenghOfpass =  slider.value;
slider.oninput = function() {
  lenghOfpass = this.value;
  output.innerHTML = this.value;
  console.log(lenghOfpass);
}

//password conditions
let char_Capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let char_Small = char_Capital.toLowerCase();
let symbol = "#$%&@@@%$$";
let number = 1234567890;
let allChoosen = number + symbol + char_Capital + char_Small;


//checkbox
// let useNum = document.getElementById("Num");
// console.log(useNum.value);
// let useSym = document.getElementById("sym");
// console.log(useSym.value);
// let useUpper = document.getElementById("Upper");
// console.log(useUpper.value);
// let useLower = document.getElementById("Lower");
// console.log(useLower.value);



// Generating password
const GeneratePassword = () => {
  let password = "";
  for (i = 1; i <= lenghOfpass; i++) {
    let char = Math.floor(Math.random() * allChoosen.length + 1);
    password += allChoosen.charAt(char);
  }
  inputpassword.value = password;
  inputpassword.style.color = "#C6A969";
  return password;
};

//copy to clipboard
const copyPassword = () => {
  if (inputpassword.value === "") {
    Swal.fire({
        icon: "error",
        title: "Generate Password!",
      });
  } else if(inputpassword.value != ""){

    inputpassword.select();
    navigator.clipboard.writeText(inputpassword.value);
    Swal.fire({
        title: "PassWord Copied!",
        icon: "success"
      });
    
  }
};

//calling functions
generateBtn.addEventListener("click", GeneratePassword);
regenerate_btn.addEventListener("click", GeneratePassword);
copy.addEventListener("click", copyPassword);
