import { useContext, useState } from "react"
import { fetchNews } from "../context/news/NewsAction";
import NewsContext from "../context/news/NewsContext";

const Navbar = () => {

  const [text,setText] = useState("");
  const {dispatch} = useContext(NewsContext)

  const getNews = async(topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type : "GET_NEWS",
      payload : data,
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    getNews(text);

    

    
  };

  


  return (
    <div>

<nav className="navbar navbar-expand-lg bg-dark p-2">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">News-App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#" onClick={()=>getNews("Indian Sports")}>Sports</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#" onClick={()=> getNews("Indian Politics")}>Politics</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#" onClick={()=> getNews("Bollywood")}>Entertainment</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#" onClick={()=> getNews("Indian Tech")}>Technology</a>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setText(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
