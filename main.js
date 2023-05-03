const questions = {
  'talisman1': { question: 'What was your last dream?', type: 'text' },
  'talisman2': { question: 'How are you doing today?', type: 'text' },
  'talisman3': { question: 'Where do you intend to go?', type: 'text' }
};


const displayImage = (url0,url1,url2) => {
  // This function should display the image at the given URL
  // in the 'result' div
  document.querySelector('#result0').innerHTML = `<img src="${url0}">`;
  document.querySelector('#result1').innerHTML = `<img src="${url1}">`;
  document.querySelector('#result2').innerHTML = `<img src="${url2}">`;
};

document.querySelectorAll('.talisman').forEach(button => {
  button.addEventListener('click', () => {
    const questionData = questions[button.id];
    const chosenQuestion = questionData.question;
    document.querySelector('#question').textContent = chosenQuestion;
  });
});

let button = document.querySelector('#generateBtn');
let input = document.getElementById('answer-input');

input.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') { 
		event.preventDefault();
		button.click();
	 }
})

button.addEventListener('click', async () => {
	const answer = document.querySelector('#answer-input').value;
    getLuckyImages(answer);
});



async function getLuckyImages(answer){ 
	const response = await fetch(`https://api.unsplash.com/photos/random?count=3&query=${answer}&client_id=QAqNpo7_FSfOb0z6tCGoUWp8QDkTqU0nnzXufZiDZcM`);

    const data = await response.json();
    console.log(data);
    const imageUrl0 = data[0].urls.small;
    const imageUrl1 = data[1].urls.small;
    const imageUrl2 = data[2].urls.small;

    displayImage(imageUrl0,imageUrl1,imageUrl2);
}
