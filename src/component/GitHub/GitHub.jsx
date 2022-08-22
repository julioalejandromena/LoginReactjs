import React from "react";
import "./GitHub.css"

import profil from "../../svg/profil.jpeg"
import github from "../../svg/github.svg";
import twitter from "../../svg/Twitter.svg";
import instagram from "../../svg/instagram.svg";
import facebook from "../../svg/facebook.svg";

function GitHub({ name }) 
{
    return (
        <div>
            <img src={profil} alt="profil" width="200px"/>
            <br />
            <br />
            <h3 style={{color : "green"}}>You Are All Welcome!</h3>
            <h4 style={{color : "silver"}}>You can reach me at the links below. </h4>
            <br />
            <div className="social">
                <a href="https://github.com/julioalejandromena" target="_blank">
                    <button className="icon">
                        {" "}
                        <img src={github} alt="github" width={"50px"}/>
                    </button>
                </a>

                <a href="https://twitter.com/juliomenaacosta" target="_blank">
                    <button className="icon">
                        {" "}
                        <img src={twitter} alt="twitter" width={"50px"} />
                    </button>
                </a>

                <a href="https://instagram.com/mena_acosta_julio" target="_blank">
                    <button className="icon">
                        {" "}
                        <img src={instagram} alt="github" width={"50px"}/>
                    </button>
                </a>

                <a href="https://facebook.com/juliomenaacosta" target="_blank">
                    <button className="icon">
                        {" "}
                        <img src={facebook} alt="twitter" width={"50px"} />
                    </button>
                </a>

            </div>
        </div>
    )
    
}

export default GitHub