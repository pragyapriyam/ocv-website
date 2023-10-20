import React from "react";
import './web.css'
const Web = ({ header, body, button }) => {

    const scrollToServices2 = () => {
        window.open('https://www.linkedin.com/pulse/storytelling-crypto-how-tell-stories-captivate-your-mcznc', '_blank');

    };
    const scrollToServices3 = () => {
        window.open('https://www.linkedin.com/pulse/tokenization-real-world-assets-one-crypto-ventures', '_blank');

    };
    const scrollToServices4 = () => {
        window.open('https://www.linkedin.com/pulse/differences-between-on-chain-transactions-off-chain', '_blank');

    };
    const scrollToServices5 = () => {
        window.open('https://www.linkedin.com/pulse/today-best-time-build-web3-one-crypto-ventures', '_blank');

    };
    return (
        <div>
            <div id="services-section" className={`services-1 web-services-2 ${header === "Services" ? '' : 'services-1-test'} `}>
                <div>
                <div style={{marginLeft:"0px"}} className="services-2  services-2-33">
                        <div className="services-3 web-services-3">
                            <div className="services-4">Storytelling in Crypto: How to Tell Stories <br /> that Captivate Your Web3 Audience</div>
                            <div className="services-5">The world of blockchain, also known as Web3, is a realm defined by innovation, rapid change...</div>
                            <div className="date-settings">October 18, 2023</div>
                            <div href="#marketing-section" onClick={scrollToServices2} className="services-6">{button} ></div>
                        </div>
                    </div>
                    
                    <div className="services-3 web-services-3">
                            <div className="services-4">Differences Between On-Chain Transactions <br />and Off-Chain Transactions</div>
                            <div className="services-5">The term “on-chain” signifies that the transaction occurs directly on the blockchain...</div>
                            <div className="date-settings">August 25, 2023</div>
                            <div href="#marketing-section" onClick={scrollToServices4} className="services-6">{button} ></div>
                        </div>

                  
                </div>
                <div>
                <div className="services-2  services-2-33">
                       
                        <div className="services-3 web-services-3">
                        <div className="services-4">Today Is The Best Time To Build Web3</div>
                        <div className="services-5">In just 15 years, the blockchain sector has transformed into a trillion-dollar industry...</div>
                        <div className="date-settings">September 7, 2023</div>
                        <div href="#marketing-section" onClick={scrollToServices5} className="services-6">{button} ></div>
                    </div>
               
                    </div>
                    <div className="services-2 services-2-33">
                        <div style={{marginLeft:"0px"}}  className="services-2 services-2-33">
                            <div className="services-3 web-services-3">
                                <div className="services-4">Tokenization of Real-World Assets</div>
                                <div className="services-5">As the world transitions into the era of Web3 and decentralized finance, an innovative...</div>
                                <div className="date-settings">July 24, 2023</div>
                                <div href="#marketing-section" onClick={scrollToServices3} className="services-6">{button} ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Web;
