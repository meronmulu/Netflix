import './App.css'
import Banner from './Markup/Component/Banner/Banner'
import Row from './Markup/Component/Row/Row'
import requests from './requests'
import Nav from './Markup/Component/Nav/Nav'
function App() {

  return (
    <>
    <div className="App">
    <Nav/>
    <Banner/>
      <Row 
          title="NETFLIX ORGINAL"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
      <Row 
           title="Trending Now"
           fetchUrl={requests.fetchTrending}
      />
       <Row 
           title="Top Rated"
           fetchUrl={requests.fetchTopRatedMovies}
      /> 
      <Row 
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      /> 
      <Row 
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
     /> 
      <Row 
           title="Horrer Movies"
           fetchUrl={requests.fetchHorrorMovies}
      /> 
      <Row 
         title="Romance Movies"
         fetchUrl={requests.fetchRomanceMovies}
      /> 
      <Row 
        title="Docmentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
/>
    </div>
     
    </>
  )
}

export default App
