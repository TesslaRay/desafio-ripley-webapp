let url = process.env.REACT_APP_API_URL;

// TODO (ca): eliminate hardcoded
if (url === undefined) {
  console.log(
    "[desafio-ripley-webapp][Error] No URL specified in the env variables, hardcoded"
  );
  url = "https://api-desafio-ripley-dot-cristian-valdivia.ue.r.appspot.com";
}

export default url;
