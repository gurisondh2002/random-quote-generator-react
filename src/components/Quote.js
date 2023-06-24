import React, { useState } from 'react'
import './Quote.css'

function Quote() {
    const [input, setInput] = useState({ quote: "Quote", author: "~ Author" })
    async function getQuote() {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        const quoteRandom = data.content;
        const authorRandom = data.author;
        setInput({quote:quoteRandom , author:  authorRandom})
    }
    return (
        <div>
            <div class="container">
                <h1 class="heading">Random Quote Generator</h1>
                <h2 class="quote">
                    <i class="fa-solid fa-quote-left"></i>
                    <span id="quote" name="quote">{input.quote}</span>
                    <i class="fa-solid fa-quote-right"></i>
                </h2>
                <p class="author" id="author" >~{input.author}</p>
                <button class="btn" id="btn" onClick={getQuote}>GET QUOTE</button>
            </div>
        </div>
    )
}
export default Quote;
