const form = document.querySelector("form");
const localStorageKey = "feedback-form-state";

let data = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

form.elements.email.value = data.email ?? "";
form.elements.message.value = data.message ?? "";


form.addEventListener("input", handleInput);
function handleInput(event) {

    data.email = `${event.currentTarget.elements.email.value.trim()}`;
    data.message = `${event.currentTarget.elements.message.value.trim()}`;
    localStorage.setItem(localStorageKey, JSON.stringify(data));
   
}

 

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    
    event.preventDefault();
    if (!(event.currentTarget.elements.message.value && event.currentTarget.elements.email.value)) {
        alert("Fill all fields!")
        return
     
    }
    console.log(data);
    localStorage.removeItem(localStorageKey);
    form.reset();

}




