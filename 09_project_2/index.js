


const form = document.querySelector("form");
//console.log(form);

form.addEventListener('submit',function(e){
    e.preventDefault();//to stop data to send on server from Ui

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid Height ${height}`
    }else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
        
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if(bmi < 18.6){
            results.innerHTML = `<span> ${bmi}, your are under weight </span>`
        }else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `<span style = "color:green"> your BMI ${bmi}, your are in Normal Range </span>`
        } else {
            results.innerHTML = `<span style = "color:red"> ${bmi}, you are over Weight </span>`   
            
        }
        
    }
})