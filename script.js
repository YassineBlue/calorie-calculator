 document.querySelector('#Calculer').addEventListener('click',function(){
            let tkcalviande = parseFloat(document.querySelector('#Viande').value) * 2.5 ;
            let tkcalpain = parseFloat(document.querySelector('#Pain').value) * 2.65 ;
            let tkcalLegume = parseFloat(document.querySelector('#Légumes').value) * .5 ;
            let tkcalFruits = parseFloat(document.querySelector('#Fruits').value) * .6 ;
            let tkcalYaourt = parseFloat(document.querySelector('#Yaourt').value) * .8 ;
            let tkcal = tkcalviande + tkcalpain + tkcalLegume + tkcalFruits + tkcalYaourt ; //total 
            if(tkcal<500){
                document.querySelector('#result').textContent=`Total cals: ${tkcal} Kcals , Repas léger`;
                document.querySelector('#result').style.color='orange';
            }else{
                if(tkcal<800){
                    document.querySelector('#result').textContent=`Total cals: ${tkcal} Kcals , Repas équilibré`;
                    document.querySelector('#result').style.color='green';

                }else{
                    document.querySelector('#result').textContent=`Total cals: ${tkcal} Kcals , Repas riche en calories`;
                    document.querySelector('#result').style.color='red';
                }
            }
            });
