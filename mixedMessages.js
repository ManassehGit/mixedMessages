//Variables section

//Variables for the general random motivation messages; The main
let starter = ['You are', 'You would be'];
let mid = ['a bright shining star', 'a great person', 'a blessing to many', 'a great gift'];
let end = ['would continue to shine', 'would continue to shine', 'would always be victorious'];


//Function to generate random number in the supplied range
const getRandNum = num => {
    randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
};

//The main random quote generator
const getRandMotivation = () => {
    let first = starter[getRandNum(starter.length)];
    let second = mid[getRandNum(mid.length)];
    let third = end[getRandNum(end.length)];

    return `${first} ${second} and ${third}`;
};

//function to display a randomly selected quotes from the given array
const getMotivation = anArray => {
    let output = anArray[getRandNum(anArray.length)];
    return output;
};
//Testing the getRandomMotivation function 
//console.log(getRandMotivation());

let inspire = [
    'We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle',
    'It is during our darkest moments that we must focus to see the light. - Aristotle Onassis',
    'The question isn’t who is going to let me; it’s who is going to stop me. - Ayn Rand',
    'Always make a total effort, even when the odds are against you. - Arnold Palmer',
    'Start where you are. Use what you have. Do what you can. - Arthur Ashe',
    'Don’t wait for your feelings to change to take the action. Take the action and your feelings will change. - Barbara Baron',
    'The difference between a stumbling block and a stepping stone is how high you raise your foot. - Benny Lewis',
    'As we look ahead into the next century, leaders will be those who empower others. - Bill Gates',
    'Success comes from having dreams that are bigger than your fears. - Bobby Unser',
    'If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you! - T. Harv Eker',
    'If you want to lift yourself up, lift up someone else. - Booker T. Washington',
    'The distance between insanity and genius is measured only by success. - Bruce Feirstein',
    'If you have everything under control, you’re not moving fast enough. - Mario Andretti',
    'Never do tomorrow what you can do today. Procrastination is the thief of time. - Charles Dickens',
    'Don’t spend time beating on a wall, hoping to transform it into a door. - Coco Chanel'
];
let programming = [
    'Don\'t comment bad code, rewrite it. - Brian Kernighan',
    'A programming language is for thinking about programs, not for expressing programs you\'ve already thought of. It should be a pencil, not a pen. - Paul Graham',
    'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code. - Dan Salomon',
    'It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive. - Steve McConnell',
    'One of my most productive days was throwing away 1000 lines of code. - Ken Thompson',
    'Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. - Rajanand',
    'System programmers are the high priests of a low cult. - Robert S. Barton',
    'I don\'t care if it works on your machine! We are not shipping your machine!" - Vidiu Platon',
    'Measuring programming progree by lines of code is like measuring aircraft building progree by weight. - Bill Gates',
    'If debudding is the process of removing software bugs, then programming must be the process of putting them in. - Edsger W. Dijkstra',
    'The computer was born to solve problems that did not exist before. - Bill Gates',
    'Always code as if the guy who ends up maintaning your code will be a violent psychopath who knows where you live. - Rick Osborne',
    'People don\'t care about what you say, they care about what you build. - Mark Zuckerberg',
    'We have to stop optimizing for programmers and start optimizing for users. — Jeff Atwood',
    'If the code and the comments do not match, possibly both are incorrect. — Norm Schryer',
    'Bad programmers worry about the code. Good programmers worry about data structures and their relationships. - Linus Torvalds',
    'If you optimize everything, you will always be unhappy. - Donald Knuth',
    'The trouble with programmers is that you can never tell what a programmer is doing until it\'s too late. - Seymour Cray',
    'Debugging becomes significantly easier if you first admit that you are the problem. - William Laeder',
    'Talk is cheap.Show me the code. - Linus Torvalds',
    'Everybody in this country should learn to program a computer because it teaches you how to think. - Steve Jobs',
    'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. - Rajanand',
    'First, solve the problem.Then write the code. - John Johnson',
    'The function of a good software is to make the complex appear to be simple. - Grady Booch',
    'Your most unhappy customers are your greatest source of learning. — Bill Gates',
    'Small minds are concerned with the extraordinary, great minds with the ordinary. - Blaise Pascal',
    'Everyday life is like programming, I guess.If you love something you can put beauty on it. - Donald Knuth',
    'As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow. - Doug McIlroy',
    'A good programmer is someone who always looks both ways before crossing a one-way street. - Doug Linder',
    'Testing can only prove the presence of bugs, not their absence. – Edsger W. Dijkstra'
];
let emotional = [
    "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart ― Helen Keller",
    'I don\'t want to be at the mercy of my emotions. I want to use them, to enjoy them, and to dominate them.” ― Oscar Wilde, The Picture of Dorian Gray',
    'The emotion that can break your heart is sometimes the very one that heals it...” ― Nicholas Sparks, At First Sight',
    'Your emotions are the slaves to your thoughts, and you are the slave to your emotions.” ― Elizabeth Gilbert, Eat Pray Love: One Woman\'s Search for Everything'
];

//Display the randomly selected quotes
//console.log(getMotivation(inspire));
//console.log(getMotivation(programming));
//console.log(getMotivation(emotional));

//function to select quote to display based on input string 
//Choices: Inspirational, Emotional, Programming, and the main
//The main general random quotes randomly selects phases and adds up

const quote = aString => {
    if(aString === 'inspirational'){
        return getMotivation(inspire);
    }else if(aString === 'emotional'){
        return getMotivation(emotional);
    }else if(aString === 'programming'){
        return getMotivation(programming);
    }else{
        return getRandMotivation();
    }
};

//Testing the quote function 
//console.log(quote('inspirational'));

/*
//Function being worked on to forward message to the web page
const quoteToPage = () => {
    let mood = document.getElementByName('mood');
    let choice;
    for(let element of mood){
        if(element.checked){
            choice = element
            document.write(element)
        }
    }
    let message = getMotivation(choice);
    document.getElementById("content").innerHTML = message
};
*/

//Main Testing 
console.log(quote('inspirational'));

