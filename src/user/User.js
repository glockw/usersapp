
import './user.css'
const User = ({user:{ name, dob, gender, picture }}) => {

  return (
    <div className="card">
      <div className="img">
        <img className="profile-img" src={picture} alt="user info" />
      </div>
      <div className="info">
        <h2 className="profile-heading">{name}</h2>
        <p>{dob}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
};

export default User;
