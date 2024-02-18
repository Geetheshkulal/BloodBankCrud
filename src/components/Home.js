import '../css/Home.css';
import Contact from './Contact';
import Service from './Service';
function Home(){
    return(
        <>
        <div className="home">
            <div className='home-text'>
<p>Your Health is our priority</p> 
</div>
        </div>
        <Service/>
        <Contact/>
        </>
    );
}
export default Home;