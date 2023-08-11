import Coat from '../../assets/images/Agassiz.png';
import LogoTitle from '../../assets/images/Logo-A.png';
    import { Link } from 'react-router-dom';
    import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate')
const hiArray = ['S','a','l','u','t', '!']
const imArray= [ 'i',"'", 'm']
const nameArray = ['g', 'a', 's', 's' ,'i','z']
const jobArray = ['f', 'r', 'o', 'n', 't', 'e', 'n', 'd','-', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r' ]

useEffect(() => {
  setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
}, [])


    return (

<>

<div className="container home-page">

<div className='coa'>
<img className='coa-img' src={Coat} alt="Agassiz Coat of arms"></img>
</div>

    <div className="text-zone">
<h1>
<AnimatedLetters letterClass={letterClass}
strArray={hiArray}
idx={7} />

     <br />

     <AnimatedLetters letterClass={letterClass}
strArray={imArray}
idx={13} />


<img src={LogoTitle} alt="developer" />
<AnimatedLetters letterClass={letterClass}
strArray={nameArray}
idx={15} />


<br/>
<AnimatedLetters letterClass={letterClass}
strArray={jobArray}
idx={18}
 />


</h1>
<h2>React / JavaScript / Sass</h2>
<Link to="/contact" className="flat-button">CONTACT ME</Link>
    </div>


</div>


<img className='coa-img1' src={Coat} alt="Agassiz Coat of arms"></img>




<Loader type='pacman' />
</>

    );
}




export default Home;