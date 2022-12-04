import React, {useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareTwitter, faSquareTumblr} from '@fortawesome/free-brands-svg-icons'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';


function App() {
  const [text, setText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState('#bdbb99');
  const [color, setColor] = useState('#bdbb99');
  let r_text = [];
  r_text[0] = 'The two most important days in your life are the day you are born and the day you find out why.';
  r_text[1] = '"This is another"';
  r_text[2] = '"This is a test"';
  r_text[3] = '"This is another"';

  var i = Math.floor(r_text.length * Math.random());
  let multipleColor = ['#f39c12', '#bdbb99', '#2c3e50', '#9b59b6','#472e32'];
  var j = Math.floor(multipleColor.length * Math.random());

   const handleChange =() => {
  setText(r_text[i]);
  setColor(multipleColor[j]);
  setBackgroundColor(multipleColor[j])
}
  

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center" style={{backgroundColor}}>
  <div className="container" id="quote-box">
<div id="text">
  <FontAwesomeIcon icon={faQuoteLeft} className="icon" style={{color}}/>
<span style={{color}}>{text}</span>
</div>

<div id="author" style={{color}}>- Mark Twain</div>



<a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Nothing%20is%20impossible%2C%20the%20word%20itself%20says%2C%20%E2%80%9CI%E2%80%99m%20possible!%E2%80%9D%22%20%E2%80%93Audrey%20Hepburn" id="tweet-quote" rel='noreferrer' target="_blank" style={{color}}>
<FontAwesomeIcon icon={faSquareTwitter} />
</a>
<a href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3D%25E2%2580%2593Audrey%2BHepburn%26content%3DNothing%2Bis%2Bimpossible%252C%2Bthe%2Bword%2Bitself%2Bsays%252C%2B%25E2%2580%259CI%25E2%2580%2599m%2Bpossible%2521%25E2%2580%259D%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"  rel='noreferrer' target="_blank" style={{color}}>
<FontAwesomeIcon icon={faSquareTumblr}  />
</a>
  <button onClick={()=>handleChange()} style={{backgroundColor}} id="new-quote">New quote</button>
  


  </div>
  <div>
    <p className='hezag'>by hezag</p>
  </div>
    </div>
  );
}

export default App;
