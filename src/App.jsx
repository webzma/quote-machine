import './App.css'
import { useState } from 'react'
import { url, options } from './CONST'

function App() {
  const [borderColor, setBorderColor] = useState('blueviolet')

  const [quote, setQuote] = useState([{
    author: 'Nikola Tesla', 
    quote: 'La electricidad es un descubrimiento maravilloso'
  }])

  async function getQuote(url, options) {
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      setBorderColor(borderColorNum)
      setQuote(data)
    } catch(err) {
      console.log(err);
    }
  }

  const numAleatorio = () => {
    return Math.floor((Math.random() * (255 - 1 + 1)) + 1);
  }
  
  let borderColorNum = `rgb(${numAleatorio()}, ${numAleatorio()}, ${numAleatorio()})`

  const sendTweet = (e) => {
    e.preventDefault()
    const tweetContent = `https://twitter.com/intent/tweet?text=${quote[0].quote} -${quote[0].author}`
    window.open(tweetContent)
  }

  return (  
    <>
      <div className='quote-box' id='quote-box' style={
        {
          border: `2px solid ${borderColor}`
        }
      }>
        <p className='text' id='text'>{quote[0].quote}</p>
        <p className='author' id='author'>{quote[0].author}</p>
        <div className='quote-box__containerButtons'>
          <button 
            className='new-quote' 
            id='new-quote'
            onClick={() => getQuote(url, options)}
          >
            New quote
          </button>
          <a onClick={sendTweet} href='https://www.twitter.com/intent/tweet' className='tweet-quote' id='tweet-quote'>Tweet quote</a>
        </div>
      </div>
    </>
  )
}

export default App
