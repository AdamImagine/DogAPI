'use strict';

function getDogImage(userInput) {
    fetch('https://dog.ceo/api/breeds/image/random/'+userInput)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson.message))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
  function displayResults(responseJson) {
    /*responseJson.forEach((img)=> $('.results-img').append(
      `<img src="${img}">`
    ))*/
    responseJson.forEach((img)=> console.log(img));
    //display the results section
    $('.results').removeClass('hidden');
  }
  
  function watchForm() {
    $('#form1').submit(event => {
      event.preventDefault();
      let userInput = $("#userInput").val();
      if((userInput >= 1) && (userInput <= 50))
      {
        getDogImage(userInput);
      }
      else
      {
        alert("Please enter a value between 1 and 50");
        return;
      }
    });
  }
  
  //Fetch and see
  
  function getDogImageSee(userInputSee) {
    fetch('https://dog.ceo/api/breeds/image/random/'+userInputSee)
      .then(response => response.json())
      .then(responseJson => 
        displayResultsSee(responseJson.message))
      .catch(error => alert('Something went wrong. Please try again.'));
  }
  
  function displayResultsSee(responseJson) {
    $('.resultsSee-img').html("");
    responseJson.forEach((img)=> $('.resultsSee-img').append(
      `<img src="${img}">`
    ))
    //responseJson.forEach((img)=> console.log(img));
    //display the results section
    $('.resultsSee').removeClass('hidden');
  }
  
  
  function watchFormForSee() {
    $('#form2').submit(event => {
      event.preventDefault();
      let userInput = $("#userInputSee").val();
        if( (userInput >= 1) && (userInput <= 50) && (userInput))
      {
        getDogImageSee(userInput);
      }
      else
      {
        alert("Please enter a value between 1 and 50");
        return;
      }
    });
  }

  //fetching by Breed

function getDogImageByBreed(namebreed) {
    fetch("https://dog.ceo/api/breed/"+namebreed+"/images/random/1")
      .then(response => response.json())
      .then(responseJson => 
        displayResultsByBreed(responseJson.message))
      .catch(error => alert('Breed not Found!'));
  }
  
  function displayResultsByBreed(responseJson) {
    $('.resultsbreed-img').html("");
    responseJson.forEach((img)=> $('.resultsbreed-img').append(
      `<img src="${img}">`
    ))
    //responseJson.forEach((img)=> console.log(img));
    //display the results section
    $('.resultsbreed').removeClass('hidden');
  }
  
  
  function watchFormForBreed() {
    $('#form3').submit(event => {
      event.preventDefault();
      let namebreed = $("#namebreed").val();
      if(namebreed != "")
      {
      getDogImageByBreed(namebreed);
      }
      else
      {
      alert("Please make sure you enter a value for breed");
      }
      });
    }
  
  
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
    watchFormForSee();
    watchFormForBreed();
  });