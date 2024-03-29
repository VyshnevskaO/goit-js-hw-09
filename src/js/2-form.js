const form = document.querySelector("form");
const localStorageKey = "feedback-form-state";

const data = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};


form.elements.email.value = data.email ? data.email.trim() : "";
form.elements.message.value = data.message ? data.message.trim() : "";



form.addEventListener("input", handleInput);
function handleInput(event) {

    data.email = event.currentTarget.elements.email.value.trim();
    data.message = event.currentTarget.elements.message.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(data));
   
}

 

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    
    event.preventDefault();
    const messageField = event.currentTarget.elements.message.value.trim();
    const emailField = event.currentTarget.elements.email.value.trim();

    if (!(messageField && emailField)) {
        alert("Fill all fields!")
        return
     
    }
    console.log(data);
    localStorage.removeItem(localStorageKey);
    form.reset();

}




