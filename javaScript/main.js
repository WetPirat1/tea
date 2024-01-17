

//функция проверки галочки на форме
function validateForm() {
    var checkBox = document.getElementById("agree");
    if (!checkBox.checked) {
    alert("Confirm your agreement with the policy for the use of postal addresses.");
    return false;
    }
}