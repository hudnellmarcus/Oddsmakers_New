import Welcome from "./Components/Welcome";

function App() {

const allSportsUrl = "https://api.the-odds-api.com/v4/sports/?apiKey=cfc369a0682e9abfe063c7a2184ab763"; 

const getAllSports = async () => {
  const response = await fetch(allSportsUrl);
  const allSportsData = await response.json();
  return allSportsData; 
}

  return (
    <div className="App">
   <Welcome allSportsUrl={allSportsUrl}/>
    </div>
  );
}

export default App;
