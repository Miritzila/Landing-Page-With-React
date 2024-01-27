import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col">
                        {/* Columna vacía si es necesario */}
                    </div>
                    <div className="col-md-10">
                        <div className="container"><Jumbotron /></div>
                        <div className="row justify-content-around">
                            <div className="col-md-3">
                                <div className="container"><Card /></div>
                            </div>
                            <div className="col-md-3">
                                <div className="container"><Card /></div>
                            </div>
                            <div className="col-md-3">
                                <div className="container"><Card /></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;