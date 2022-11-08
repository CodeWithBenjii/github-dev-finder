import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import { fetchGithub } from "./utils/fetchGithub";
import iconHome from "./assets/icon-location.svg";
import iconCompany from "./assets/icon-company.svg";
import iconTwitter from "./assets/icon-twitter.svg";
import iconWebsite from "./assets/icon-website.svg";
import iconSearch from "./assets/icon-search.svg";

// import iconHome from "./assets/icon-location.svg";

function App() {
  const [githubData, setGithubData] = useState([]);
  const [githubUser, setGithubUser] = useState("octocat");

  const getGithubData = () => {
    return fetch(`https://api.github.com/users/${githubUser}`)
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  };

  useEffect(() => {
    getGithubData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <NavigationBar />
        <div className="searchContainer">
          <img src={iconSearch} alt="" />
          <input
            type="text"
            onChange={(e) => setGithubUser(e.target.value)}
            placeholder="Search GitHub username…"
          />
          <button onClick={getGithubData}>Search</button>
        </div>
        <div className="content-card">
          <div className="details-container">
            <img src={githubData.avatar_url} alt="" />
            <div className="details">
              <p>{githubData.name}</p>
              <p>@{githubData.login}</p>
              <p>Joined at {githubData.created_at}</p>
            </div>
          </div>
          <div className="">
            <p>{githubData.bio}</p>
          </div>
          <div className="stats-card">
            <div className="stat">
              <p>Repos</p>
              <span>{githubData.public_repos}</span>
            </div>
            <div className="stat">
              <p>Followers</p>
              <span>{githubData.followers}</span>
            </div>
            <div className="stat">
              <p>Following</p>
              <span>{githubData.following}</span>
            </div>
          </div>
          <div className="links">
            <div className="list">
              <img src={iconWebsite} />
              <p>
                {"https://github.com/" + githubData.login ?? "Not Available"}
              </p>
            </div>
            <div className="list">
              <img src={iconHome} />
              <p>{githubData.location ?? "Not Available"}</p>
            </div>
            <div className="list">
              <img src={iconTwitter} />
              <p>{githubData.twitter_username ?? "Not Available"}</p>
            </div>
            <div className="list">
              <img src={iconCompany} />
              <p>{githubData.company ?? "Not Available"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
