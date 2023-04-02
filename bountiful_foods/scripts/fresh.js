const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

const getFruitsData = async()=>{
    try{
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            console.log(data)
            displayResults(data);
          } else {
              throw Error(await res.text());
          }

    } catch (error) {
    console.log(error);
    }
    
}
getFruitsData();

function displayResults(data){
    const fruitList = document.querySelector(".fruits-lst");
    const submitBtn = document.querySelector(".sendBtn");

    //display fruits names
    data.forEach((fruit) =>{
        let label = document.createElement("label");
        let input = document.createElement("input");
        let checkInputs = document.querySelectorAll(".check");
        
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", fruit.name);
        input.setAttribute("value", fruit.name);
        input.classList.add("check");
        
        label.textContent = fruit.name;

        //Allow only to check 3 inputs 
        let max = 3;
        for (let i = 0; i < checkInputs.length; i++){
        checkInputs[i].onclick = selectiveCheck;}

        function selectiveCheck() {
        let checkedChecks = document.querySelectorAll(".check:checked");
        if (checkedChecks.length >= max + 1){
            return false;}
        };


        label.appendChild(input);
        fruitList.appendChild(label)

        //call a confirmation popup form
        submitBtn.addEventListener("click", confirmInfo(fruit));
        

    });

    
};

function confirmInfo(data){
    
    let form = document.querySelector("#fill-info");
    let confirmForm = document.querySelector(".confirmation");
    let form2 = document.querySelector("#send-info");
    

    //Button events to confirm of cancel request
    let confirmBtn = document.querySelector(".confirm");
    let cancelBtn = document.querySelector(".cancel");
    confirmBtn.addEventListener("click", ()=>{ 
        form.onsubmit = "";
        alert("✅ Request Submited")
        form.submit(); 
    })
    form2.onsubmit = (event)=>{ event.preventDefault(); return false;}
    cancelBtn.addEventListener("click", ()=>{confirmForm.style.display = "none";});


    //inputs information to confirm
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let phone = document.querySelector(".number");
    let moreInstructions = document.querySelector(".text-instruction");
    let checkInputs = document.querySelectorAll('.check');
    //element to display
    let info = document.querySelector(".personal-info");
    let selectedFruit = document.querySelector(".selected-fruit");
    let instructions = document.querySelector(".instructions");
    let orderDate = document.querySelector(".order-date");
    let dataTotal = document.querySelector(".total-amount");

   

    
    

    //add the checked fruits inputs to confirm form
   checkInputs.forEach((c) => {
    c.addEventListener("input", (e)=>{

        let checkedFruits = []

        //confirm is is checked
        checkInputs.forEach(d =>{
            if(d.checked){ 
                checkedFruits.push(d.value);
            };               
        });
        selectedFruit.textContent = `Fruits selected: ${checkedFruits.join(", ")}`
        
      });
    });

    console.log(selectedFruit.textContent)

    //when form is submitted prevent default refresh and add inputs information to popup form
    form.onsubmit = function (e){ 
        e.preventDefault();
        confirmForm.style.display = "block"
        
        info.innerHTML = `Name: ${name.value}<br>
                        Email: ${email.value}<br>
                        Phone Number: ${phone.value}<br>`;
                     
        instructions.textContent = `Special Instructions: ${moreInstructions.value}`;
        
 
        return false}


}
function displayNutritions(data){
    let selectedFruits = document.querySelector(".selected-fruit");
    console.log(selectedFruits)

    let carbohydrates = []
    let protein = []
    let fat = []
    let sugar = []
    let calories = []

    
            
       
}