
    function Temptest(Person) {
        switch (Person.temp) {
            case 33:
                console.log ("Normal");
            case 35:
                console.log ("Watch your temprature");        
                break;
        
            default:
                console.log ("Please test for COVID 19");
                break;
        }
    }
Temptest ({temp : 33});
Temptest ({temp : 35});
Temptest ({temp : 37});
Temptest ({temp : 40});