const person={firstName:"Nigam",lastName:"Rai",ageInYears:20};
function ageInDays(person,result){
    const fullName=(person.firstName).concat(" ",person.lastName);
    let ageInDays=person.ageInYears*365;
    return result(fullName,ageInDays);
}

function logResult(fName,ageInDays){
    console.log(`The person's full name is ${fName}, and their age in days is ${ageInDays}`);
}

ageInDays(person,logResult);

