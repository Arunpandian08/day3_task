let obj1={name : "person 1", age : 5};
let obj2={age : 5, name:"person 1"};

let raiseFlag = true;                                     
 //here consider raiseFlag as true

if(Object.keys(obj1).length == Object.keys(obj2).length) 
 //In if condition both object lenghts are equal then we can iterate keys using for...in
{
    for(let key in  obj1){                     // iterate all keys in obj1
        if(obj1[key]==obj2[key])              //if key of obj1 is equalto key of obj2 then continue raiseFlag as true
        {                                
            continue;
        }
        else{                                //else the above condition is not satisfy raise a flag false in console
            raiseFlag=false;
            break;
        }
    
    }    
}
else{                                      //if Object keys lengths are not equal raise a flag flase in console 
    raiseFlag=false;
}
console.log(raiseFlag);
