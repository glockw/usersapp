
import './user.css'
const User = ({user:{ name, dob, gender, picture }}) => {
  const imgStyle = {
    height: "100%",
    width: "auto",
    borderRadius: "1rem",
  };
  return (
    <div className="card">
      <div className="img">
        <img style={imgStyle} src={picture} alt="user info" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>{dob}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
};

export default User;
