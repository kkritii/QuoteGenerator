var quotes = [{
        quote: "The earth has music for those who listen.",
        author: "William Shakespeare"
    },
    {
        quote: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Seuss"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Be yourself. Everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss"
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    }
]


function getRandomQuote(array) {
    var randomQuote = Math.floor(Math.random() * 10);
    return array[randomQuote];
}

var btn = document.getElementById('btn');
var quoteDisplay = document.getElementById('quote');

quoteDisplay.innerHTML = getRandomQuote(quotes).quote;

btn.addEventListener('click', function() {

    quoteDisplay.innerHTML = getRandomQuote(quotes).quote;

})