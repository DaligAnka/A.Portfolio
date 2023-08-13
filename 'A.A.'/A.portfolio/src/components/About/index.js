import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About =() => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
              setLetterClass('text-animate-hover')
          }, 3000)
      }, [])
      
    return (

<>

        <div className='container about-page'>
            <div className='text-zone'>
<h1>
    <AnimatedLetters
    letterClass={letterClass}
    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
</h1>
<p>    I'm a very ambitious growing front-end developer and looking for learning & working opportunities. 
            I'm eager to work with the latest
            technologies and ready to face the challenges! </p>

<p>    I'm confident and always get the things i like done. Here's why i consider self taughtness as a benefit. It's hard and it requires motivation,discipline and an ability to search for the answers myself. Aren't these traits necessary for a developer?</p>

<p>  I hope you're having a wonderful day! </p>

            </div>
<div className='stage-cube-cont'>
    <div className='cubespinner'>

<div className="face1">
     <FontAwesomeIcon icon={faHtml5} color="#F06529" />
</div>
<div className='face2'>
    <FontAwesomeIcon icon={faCss3} color='#264de4' />
</div>
<div className='face3'>
    <FontAwesomeIcon icon={faSass} color='#cc6699' />
</div>
<div className='face4'>
    <FontAwesomeIcon icon={faJsSquare} color='#f0db4f' />
</div>
<div className='face5'>
    <FontAwesomeIcon icon={faReact} color='#61dbfb' />
</div>
<div className='face6'>
    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
</div>
</div>
</div>

</div>

<Loader type='pacman' />
</>

 )
}

export default About;