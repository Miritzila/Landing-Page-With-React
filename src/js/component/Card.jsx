import React from "react";

const Card = () => {
    return (
        <div className="card" style={{ width: "14rem" }}>
            <img src="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Explora el Mundo</h5>
                <p className="card-text">Descubre destinos únicos y vive aventuras inolvidables.</p>
                <a href="#" className="btn btn-primary">Saber más</a>
            </div>
        </div>
    );
};

export default Card;
