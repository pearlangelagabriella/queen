// function Temptest(Person) {
//         switch (Person.temp) {
//             case 33:
//                 console.log ("Normal");
//             case 35:
//                 console.log ("Watch your temprature");        
//                 break;
        
//             default:
//                 console.log ("Please test for COVID 19");
//                 break;
//         }
//     }
// Temptest ({temp : 33});
// Temptest ({temp : 35});
// Temptest ({temp : 37});
// Temptest ({temp : 40});

function Tempetest(temp) {
    let result;
    if (temp > 36) {
      result = "Please test for COVID 19";
    }   else if (temp == 35) {
            result = "Watch Your Temperature";  
    }   else if (temp == 33) {
            result = "Normal Temperature";
    }   else{
            result = "Not conclusive";
        }        
    return result;
  }
  
  console.log(Tempetest(33));
  console.log(Tempetest(35));
  console.log(Tempetest(37));
  console.log(Tempetest(40));

let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
reversed = number.reverse();
console.log (reversed);

let third = number[2];
console.log ( "the third element is" , third );

reversed.splice(8, 1, 'Armstrong');
console.log (reversed);