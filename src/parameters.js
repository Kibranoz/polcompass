const MODE = "PROD";

var CONFIG = {
  URL: "https://d37twrk5hlymna.cloudfront.net/",
};

if (MODE === "dev") {
  CONFIG.URL = "http://localhost:8080"; // Adjust port as needed
}

export default CONFIG;
