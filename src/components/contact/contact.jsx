import React from './contact.scss'

export default function contact() {
    return (
        <div className= "contact" id="contact">
      <div className="left">
        <img src="./assets/shakepng.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit="">
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          </form>
        </div>
       </div>   
    )
}



