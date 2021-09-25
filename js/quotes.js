const quotes = [
    {
        quote: "가나다라마바사",
        author: "김아무개",
    },
    {
        quote: "아자차카타파하",
        author: "박아무개",
    },
    {
        quote: "거너더러머버서",
        author: "이아무개",
    },
    {
        quote: "어저처커터퍼허",
        author: "정아무개",
    },
    {
        quote: "구누두루무부수",
        author: "곽아무개",
    },
    {
        quote: "우주추쿠투푸후",
        author: "오아무개",
    },
    {
        quote: "기니디리미비시",
        author: "나아무개",
    },
    {
        quote: "고노도로모보소",
        author: "양아무개",
    },
    {
        quote: "오조초코토포호",
        author: "배아무개",
    },
    {
        quote: "개내대래매배새",
        author: "손아무개",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;