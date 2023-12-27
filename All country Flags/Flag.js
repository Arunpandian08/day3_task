const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest(); 

xhr.open("GET",URL);

xhr.send();

xhr.onload = () => {
    // console.log(JSON.parse(xhr.response));

      let answer = JSON.parse(xhr.response);
      for(ind = 0 ; ind<answer.length ; ind++){
        console.log(answer[ind].flags)
      }
};

