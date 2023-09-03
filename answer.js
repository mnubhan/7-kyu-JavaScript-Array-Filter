const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);

function getEvenNumbers(numbersArray){
  const findEvenNumber = x => x%2 == 0
  return numbersArray.filter(findEvenNumber)
}
