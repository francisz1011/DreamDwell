import Homevideo from "/assets/HomeVideo.mp4"



const HomeVideo = () => {
  return(
      <div id="home" className="video-background">
      <video autoPlay muted loop>
        <source src={Homevideo} type="video/mp4" />
        <span>
    <video autoPlay muted loop>
      <source src={Homevideo} type="video/mp4" />
    </video>
  </span>

      </video>
      
    </div>
  )
}

export default HomeVideo;