const height = 33; // meater
const weight = 60; // kg

const bmi = weight / (height * height);


if(bmi < 18.5){
    console.log(`you are underweight. `)
}else{
    if(bmi >= 18.5 && bmi <= 24.9){
        console.log(`you are normal. `)
    }else{
        if(bmi <= 29.9 ){
        console.log(`you are overweight. `)
            
        }
    }
}