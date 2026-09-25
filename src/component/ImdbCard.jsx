import React from "react";

function ImdbCard() {

    const movies = [
       { rank: 1,
        name:"superman"
       },
       {
        rank: 2, name: "weapons"
       },
       {
         rank: 3, name: "sinners"
       },
        {
      rank: 4,
      name: "One Battle After Another"
    },
    {
      rank: 5,
      name: "Jurassic World: Rebirth"
    },
    {
      rank: 6,
      name: "Frankenstein"
    },
    {
      rank: 7,
      name: "Happy Gilmore 2"
    },
    {
      rank: 8,
      name: " Thunderbolts*"
    },
    {
      rank: 9,
      name: "   Mission: Impossible"
    },
    {
      rank: 10,
      name: "F1"
    }

    ]
    return (
        <div  style={{
        width: "300px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#315d98",
        color: "white",
        fontFamily: "Arial"
      }} >
         <h1 style={{ textAlign: "center" }}>
        IMDb
      </h1>

      <h2 style={{ textAlign: "center" }}>
        BEST OF 2025
      </h2>

      <h1 style={{ textAlign: "center", fontSize: "20px" }}>
        MOST POPULAR MOVIES
      </h1>

      <p style={{ textAlign: "center", margin: "10px" }}>
        AS OF 12/2/25
      </p>

      {
        movies.map((movie) => (
          <div
            key={movie.rank}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              margin: "2px",
              fontSize: "12px",
                   
            }}
          >

            <h1>
              {movie.rank}
            </h1>

            <h3>
              {movie.name}
            </h3>

          </div>
        ))
      }

    </div>
  )
}
        
            {/* ImdbCard</div>
    )
} */}
export default ImdbCard