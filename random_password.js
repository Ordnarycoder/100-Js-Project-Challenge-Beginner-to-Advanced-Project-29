const result = document.getElementById("result");
const button = document.getElementById("submit");

const AllChars = [];
for (let i = 32; i < 127; i++) {
  AllChars.push(String.fromCharCode(i));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function random_password() {
    let password = [];
    let a = 0;
    while (a < 16) {
        let b = getRandomInt(95);
        password.push(AllChars[b]);
        a += 1;
    }
    let ran_password = password.join('');
    result.value = ran_password;  // Use value property to set the text in textarea
}

button.addEventListener("click", random_password);
