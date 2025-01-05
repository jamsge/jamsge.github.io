import LinkedInSVG from "../assets/linkedin.svg";
import GithubSVG from "../assets/github.svg";


function Profile(): JSX.Element {
  return (
      <>
        <h1 className="centered-header">james ge</h1>
        <h5>email: james.ge1@outlook.com</h5>
        <h5>discord: jamsge</h5>
        <br />
        <div className="container">
          <a href="https://www.linkedin.com/in/james-ge-2480b6177/">
            <img className="icon-link" src={LinkedInSVG} />
          </a>
          <a href="https://github.com/jamsge">
            <img className="icon-link" src={GithubSVG} />
          </a>
        </div>
      </>
  );
}

export default Profile;
