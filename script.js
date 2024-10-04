const btn=document.getElementById('btn');


function unitToggle(){
    let unit=document.getElementById("unit").value;
    let w_unit=document.getElementById('w-unit');
    let h_unit=document.getElementById('h-unit');
    if (unit==="metric"){
        w_unit.innerHTML="kg";
        h_unit.innerHTML="cm";
    }
    else if (unit==="imperial"){
        w_unit.innerHTML="lbs";
        h_unit.innerHTML="in";
    }
}

btn.addEventListener('click',calculateBMI);
btn.addEventListener('click',changeMenu);


function changeMenu(){
    let calc_menu=document.getElementById('calc-cont');
    let results_menu=document.getElementById('results');
    if (calc_menu.style.display="flex"){
        calc_menu.style.display="none";
        results_menu.style.display="flex";
    }
    else if (results_menu.style.display="flex"){
        results_menu.style.display="none";
        calc_menu.style.display="flex";
        
    }    
};

function calculateBMI(){
    let unit=document.getElementById("unit").value;
    let weight=parseInt(document.getElementById("weight").value);
    let height=parseInt(document.getElementById("height").value);
    let bmi=document.getElementById("bmi");
    let bmi_value;
    if(unit==="metric"){
        bmi_value=Math.round(((weight/(height*height))*10000)*10)/10;
    }
    else if(unit==="imperial"){
        bmi_value=Math.round(((weight/(height*height))*703)*10)/10;
    }
    bmi.innerHTML=bmi_value;
    
    let bmi_cat=document.getElementById("bmi-cat");
    let category;

    if (bmi_value < 18.5){
        category="underweight";
    }
    else if(bmi_value >= 18.6 && bmi_value <= 24.9){
        category="normal weight";
    }
    else if (bmi_value >= 25 && bmi_value <= 29.9){
        category="overweight";
    }
    else  if(bmi_value>30){
        category="obese";
    };
    
    bmi_cat.innerHTML=category;

};

