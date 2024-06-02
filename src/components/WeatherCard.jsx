

const WeatherCard = () => {
  return (
    <div>
    <div className="card p-3">
       
       <div className="d-flex justify-content-between align-items-center">
       <span>
       <h1>26 C</h1>
       <h2 className="text-secondary">Indore</h2>
       </span>
       <span>
       <img style={{height: "40px"}} src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="" />
       <p className="text-secondary mt-3">Sunny</p>

       </span>
       </div>
       
       </div>
      
    </div>
  )
}

export default WeatherCard
