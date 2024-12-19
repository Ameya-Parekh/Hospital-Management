import Footer from "../components/footer"
import Header from "../components/header"

const Home=()=>{
    return(

        <>
            {<Header/>}
             <img class="allabout" src="https://reliantmedicalgroup.org/wp-content/uploads/2019/12/GettyImages-1089609374-2048x1024.jpg" alt="" />
             <div class="conatiner">
             <h2 class="paea">Your health is our top priority.</h2>
             
             <img class="styline" src="http://pluspng.com/img-png/png-hd-doctor-doctors-550.png"/>
             </div>
             <img class="allabout" src="https://scx2.b-cdn.net/gfx/news/2015/doctorpatien.jpg"/>
            {<Footer/>}          
        </>
    )
}
export default Home 