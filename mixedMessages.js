//Variables section
let starter = ['You are', 'You would be'];
let mid = ['a bright shining star', 'a great person', 'a blessing to many', 'a great gift'];
let end = ['would continue to shine', 'would continue to shine', 'would always be victorious'];


//Function to generate random number in the supplied range
const getRandNum = num => {
    randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
};

const getRandMotivation = () => {
    let first = starter[getRandNum(starter.length)];
    let second = mid[getRandNum(mid.length)];
    let third = end[getRandNum(end.length)];

    return `${first} ${second} and ${third}`;
};

console.log(getRandMotivation());
