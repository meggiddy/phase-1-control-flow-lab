function scuberGreetingForFeet(num){
  // Write your code here!
  if (num <= 400) {
    return 'This one is on me!';
  } else if (num > 2500) {
    return 'No can do.';
  }  else if (num > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return "Ok, sounds good.";
  } else if (city === 'Pittsburgh') {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return "Thank you so much.";
      break;
  
    case 'not as generous':
    return "Thank you.";
    break;

    default: return "Bye.";
    break;
  }
}