const MODE = "PROD";

var CONFIG = {
  URL: "http://louisrcouture.ddns.net:50999",
};

if (MODE === "dev") {
  CONFIG.URL = "http://localhost:8080"; // Adjust port as needed
}

export default CONFIG;
