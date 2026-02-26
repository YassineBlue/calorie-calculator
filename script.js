 document.querySelector('#Calculer').addEventListener('click',function(){
            let tkcalviande = (parseFloat(document.querySelector('#Viande').value)|| 0) * 2.5;
            let tkcalpain =   (parseFloat(document.querySelector('#Pain').value) || 0) * 2.65;
            let tkcalLegume = (parseFloat(document.querySelector('#Légumes').value) || 0) * .5;
            let tkcalFruits = (parseFloat(document.querySelector('#Fruits').value)|| 0) * .6;
            let tkcalYaourt = (parseFloat(document.querySelector('#Yaourt').value)|| 0 ) * .8;
            //total
            let tkcal = tkcalviande + tkcalpain + tkcalLegume + tkcalFruits + tkcalYaourt ; 
            // case of empty inputs
            if(tkcal === 0){
             alert("Pour calculer la valeur énergétique, merci d’entrer au moins la quantité consommée d’un aliment");
             return ; 
            }
            let result = document.querySelector('#result') ;
            // meal is light
            if(tkcal<500){
                result.textContent=`Total cals: ${tkcal} Kcals , Repas léger`;
                result.style.color='orange';
            }
            // meal is balanced 
            else if(tkcal<800){
                    result.textContent=`Total cals: ${tkcal} Kcals , Repas équilibré`;
                    result.style.color='green';
                }
            // meal is high in calories
            else{
                    result.textContent=`Total cals: ${tkcal} Kcals , Repas riche en calories`;
                    result.style.color='red';
                }
            });
