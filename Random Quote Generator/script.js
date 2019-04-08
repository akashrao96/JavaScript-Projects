var quotes = [
    {
        content : "I believe that through knowledge and discipline, financial peace is possible for all of us",
        source : 'Dave Ramsey'
    },
    {
        content : "Too many people spend money they earned..to buy things they don't want..to impress people that they don't like",
        source : 'Will Rogers'   
    },
    {
        content : "The greatest glory in living lies not in never falling, but in rising every time we fall." ,
        source : 'Nelson Mandela'
    },
    {
        content : "The way to get started is to quit talking and begin doing.",
        source : 'Walt Disney'
    },
    {
        content : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        source : 'Steve Jobs'
    },
    {
        content : "If life were predictable it would cease to be life, and be without flavor.",
        source : 'Eleanor Roosevelt'
    },
    {
        content : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        source : 'Oprah Winfrey'
    },
    {
        content : "Life is what happens when you're busy making other plans.",
        source : 'John Lennon'
    },
    {
        content : "The future belongs to those who believe in the beauty of their dreams.",
        source : 'Eleanor Roosevelt'
    },
    {
        content : "Tell me and I forget. Teach me and I remember. Involve me and I learn." ,
        source : 'Benjamin Franklin'
    },
    {
        content :  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        source : 'Helen Keller'
    },
    {
        content : "It is during our darkest moments that we must focus to see the light.",
        source : 'Aristotle'
    },
    {
        content : "Whoever is happy will make others happy too." ,
        source : 'Anne Frank'
    },
    {
        content : "The first rule is not to lose. The second rule is not to forget the first rule.",
        source : 'Warren Buffet'
    }
 ];
 function myQuote(){
     var random = Math.floor(Math.random()*(quotes.length));
     document.getElementById("box1").innerHTML= "'" + quotes[random].content + "'" ;
     document.getElementById("box2").innerHTML=" - " + quotes[random].source;
 }