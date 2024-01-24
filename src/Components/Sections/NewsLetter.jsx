import './newsletter.css'

const Newsletter =()=>{
    return(
        <div className='newsletterparent'>
            <div className="newsletterwrapper">
                <div className="news">
                    <h1>Newsletter</h1>
                    <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                </div>
                <div className="info">
                    <input type="text" name="" id="ss" placeholder='Your email'/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter