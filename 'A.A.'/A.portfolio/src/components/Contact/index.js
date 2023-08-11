import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
              setLetterClass('text-animate-hover')
          }, 3000)
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_3ox3iqn',
            'template_0g84edg',
            refForm.current,
            'SDDVeENXhuqKk_6_W'
        )
.then(
    () => {
        alert('Message successfully sent!')
        window.location.reload(false)
    },
    () => {
        alert('Failed to send the message, please try again')
    }

)
      }

    return (
<>

<div className="container contact-page">
    <div className='text-zone'>
<h1>
    <AnimatedLetters
    letterClass={letterClass}
     strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ',  'm','e']} 
    idx={15}/>
</h1>

<p>
    My name is Alexander. 
    If you have any questions/requests or proposals, don't hesitate to contact me throught the social links or the form below. Skål! 
</p>


<div className='contact-form'>
    <form ref={refForm} onSubmit={sendEmail}>
        <ul>
            <li className='half'>
<input type='text' name='name' placeholder='Name' required />
            </li>
            <li className='half'>
<input type='email' name='email' placeholder='Email' required />
            </li>
            <li>
                <input  placeholder='Subject' type='text' name='subject' required />
            </li>
            <li>
                <textarea placeholder='Message' name='message' required></textarea>
            </li>
            <li>
                <input type='submit' className='flat-button' value='SEND' />
            </li>
        </ul>
    </form>

</div>
    </div>

<div className='info-map'>
Alexander Agassiz
<br />
Russia
<br />
Moscow
<br />
<span> alexanderagassizoffers@gmail.com </span>
</div>
<div className='map-wrap'>
<MapContainer center={[55.7549, 37.6268]} zoom={10}>
            <TileLayer attribution ='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
</div>

</div>
<Loader type="pacman" />
</>
)
}

export default Contact;