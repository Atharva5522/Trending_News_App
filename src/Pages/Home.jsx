import { useContext, useEffect } from "react"
import Clouser from "../components/Clouser"
import NewsCard from "../components/NewsCard"
import Trending from "../components/Trending"
import WeatherCard from "../components/WeatherCard"
import NewsContext from "../context/news/NewsContext"
import { fetchNews } from "../context/news/NewsAction"

const Home = () => {

  const {allNews,dispatch} = useContext(NewsContext)

  const getNews = async() => {
    const data = await fetchNews("Indore");
    dispatch({
      type : "GET_NEWS",
      payload : data,
    })
  }

  useEffect(() => {
    getNews()

  },[])


  return (
    <div>

    <div className="container-fluid p-2 bg-dark">
    <Clouser/>
    <Trending/>

    <div className="row g-3">
        <div className="col-sm-12 col-md-4">
        <WeatherCard/>
        </div>

        <div className="col-sm-12 col-md-8">
        <div className="row g-3">
        
        {
          !allNews || allNews.length === 0 ? (
            <h1 className="text-center display-1 text-light">Loading...</h1>
          ) : (
            allNews.map((news,index) => ( <NewsCard key={index} news={news}/>))
          )
        }
        
        </div>

        </div>
    </div>


    </div>
      
    </div>
  )
}

export default Home
