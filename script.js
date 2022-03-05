const elForm = document.querySelector(".form")

const elInput = document.querySelector(".form__input")

const elList = document.querySelector(".form__ol")


var ListOl = [];

elForm.addEventListener("submit", function(evt){
   evt.preventDefault()
   let inputVal = elInput.value.trim();

   let word = {
      id: ListOl.length,
      title: inputVal,
    };
  
    ListOl.push(word.title);
    elList.innerHTML = "";
    for (let item of ListOl) {
  
      let list = document.createElement("li");
  
      list.textContent = item;
  
      elList.appendChild(list);
  
      elInput.value = ""
    }
});
 




