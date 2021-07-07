const quotes = document.querySelector('#quotes');

let quoteList = [
  {
    text: '"Be yourself; everyone else is already taken."',
    author: 'Oscar Wilde'
  },
  {
    text: '"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best."',
    author: 'Marilyn Monroe'
  },
  {
    text: '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."',
    author: 'Albert Einstein'
  },
  {
    text: '"So many books, so little time."',
    author: 'Frank Zappa'
  },
  {
    text: '"A room without books is like a body without a soul."',
    author: 'Marcus Tullius Cicero'
  },
  {
    text: '"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind."',
    author: 'Bernard M.Baruch '
  },
  {
    text: '"You only live once, but if you do it right, once is enough."',
    author: 'Mae West'
  },
  {
    text: '"Be the change that you wish to see in the world."',
    author: 'Mahatma Gandhi'
  },
  {
    text: '"In three words I can sum up everything I\'ve learned about life: it goes on."',
    author: 'Robert Frost'
  },
  {
    text: '"If you tell the truth, you don\'t have to remember anything."',
    author: 'Mark Twain'
  }
]

let randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)]

function changeQuote() {
  randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)]
  quotes.innerHTML = `<p> <i>${randomQuote.text}</i>, ${randomQuote.author}</p>`
}

quotes.innerHTML = `<p> <i>${randomQuote.text}</i>, ${randomQuote.author}</p>`

quotes.addEventListener('click', changeQuote)