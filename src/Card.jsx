import profilePic from './assets/profile.png'

function Card(){
  return(
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className='card-title'>CTlandu</h2>
      <p className='card-text'>A photographer, student</p>
    </div>
  );

}

export default Card