export const fetchGithub = (githubUser) => {
  return fetch(`https://api.github.com/users/${githubUser}`).then((response) =>
    response.json()
  );
};
