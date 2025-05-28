const MODE = 'PROD';

var CONFIG = {
  URL: "https://politicalcompass-bf260743f9ce.herokuapp.com",
};

if (MODE === "dev") {
  CONFIG.URL = "http://localhost:8080"; // Adjust port as needed
}

export default CONFIG;
