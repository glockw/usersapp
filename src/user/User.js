import "./user.css";
import moment from "moment";
const User = ({ user }) => {
  return (
    <div className="card">
      <Avatar picture={user.picture} alt={user.name} />
      <UserDetail user={user} />
    </div>
  );
};

export default User;

const Avatar = ({ picture, alt }) => {
  return (
    <div className="img">
      <img className="profile-img" src={picture} alt={alt} />
    </div>
  );
};

const UserDetail = ({ user: { name, dob, gender } }) => {
  return (
    <div className="info-detail">
      <section className="section">
        <h2 className="profile-heading">{name}</h2>
      </section>
      <Age dob={dob} />
      <Gender gender={gender} />
    </div>
  );
};

const Age = ({ dob: { date, age } }) => {
  return (
    <section className="section">
      <div className="sub-section">
        <h3> Age: </h3>
        <p> {age}</p>
      </div>
      <div className="sub-section">
        <h3>Dob:</h3>
        <p>{new moment(date).format("ll")}</p>
      </div>
    </section>
  );
};
const Gender = ({ gender }) => {
  const genderClass = `fas fa-${
    gender === "female" ? "venus female" : "mars male"
  }`;
  return (
    <section className="section">
      <div className="sub-section">
        <h3>Gender:</h3>
        <i className={genderClass}></i>
      </div>
    </section>
  );
};
