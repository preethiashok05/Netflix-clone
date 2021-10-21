import Row from './components/Row';
import requests from './requests';
import '../src/styles/App.css';
import Banner  from '../src/components/Banner';
import Nav from '../src/components/Nav'

function App() {
  return (
    <div className="App">
       <Nav/>
       <Banner/>
       <Row title ="Netflix Originals" fetchURL = {requests.fetchNetflixOriginals}  isLarge/>
       <Row title ="Trending" fetchURL = {requests.fetchTrending}/>
       <Row title ="Top Rated" fetchURL = {requests.fetchTopRated}/>
       <Row title ="Action Movies" fetchURL = {requests.fetchActionMovies}/>
       <Row title ="Comedy" fetchURL = {requests.fetchComedy}/>
       <Row title ="Horror Movies" fetchURL = {requests.fetchHorrorMovies}/>
       <Row title ="Romance" fetchURL = {requests.fetchRomance}/>
       <Row title ="Documentaries" fetchURL = {requests.fetchDoc}/>  
      
    </div>
  );
}

export default App;
