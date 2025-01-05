const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

//Store the first, big long, string of text inside a variable called 
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
//Store the first set of three strings inside an array called 
const insertX = ["Willy the Goblin",
    "Big Daddy",
    "Father Christmas"]
//Store the second set of three strings inside an array called 
const insertY = ["the soup kitchen",
    "Disneyland",
    "the White House"]
//Store the third set of three strings inside an array called 
const insertZ = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"]

randomize.addEventListener('click', result);

function result() {
    console.log('clicked');
    var newStory = storyText;
    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);

    }

    if (document.getElementById("uk").checked) {
        const weight = `${Math.round(300 / 14)} stone`;
        const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    story.textContent = newStory;
    story.style.visibility = 'visible';
}