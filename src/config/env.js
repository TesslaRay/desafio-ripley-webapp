let url = process.env.REACT_APP_URL;

// TODO (ca): eliminate hardcoded
if (url === undefined) {
  console.log(
    "[desafio-ripley-webapp][Error] No URL specified in the env variables, hardcoded"
  );
  url = "";
}

export default url;
