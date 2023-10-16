import React from "react";
import './web.css'
const Web = ({ header, body, button }) => {

    const scrollToServices2 = () => {
        window.open('https://www.linkedin.com/pulse/web3-needs-easier-language-one-crypto-ventures', '_blank');

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
                <div><div className="services-3 web-services-3">
                        <div className="services-4">Today Is The Best Time To Build Web3</div>
                        <div className="services-5">In just 15 years, the blockchain sector has transformed into a trillion-dollar industry, and while prices are down from 2021 highs, corporate interest and participation...</div>
                        <div className="date-settings">September 7, 2023</div>
                        <div href="#marketing-section" onClick={scrollToServices5} className="services-6">{button} ></div>
                    </div>
                   <div style={{marginLeft:"0px"}} className="services-2  services-2-33">
                        <div className="services-3 web-services-3">
                            <div className="services-4">{header}</div>
                            <div className="services-5">{body}</div>
                            <div className="date-settings">June 22, 2023</div>
                            <div href="#marketing-section" onClick={scrollToServices2} className="services-6">{button} ></div>
                        </div>
                    </div>

                  
                </div>
                <div>
                <div className="services-2  services-2-33">
                        <div className="services-3 web-services-3">
                            <div className="services-4">Differences Between On-Chain Transactions and Off-Chain Transactions</div>
                            <div className="services-5">The term “on-chain” signifies that the transaction occurs directly on the blockchain. On-chain transactions lie at the heart of what makes blockchain technology distinctive...</div>
                            <div className="date-settings">August 25, 2023</div>
                            <div href="#marketing-section" onClick={scrollToServices4} className="services-6">{button} ></div>
                        </div>
                    </div>
                    <div className="services-2 services-2-33">
                        <div style={{marginLeft:"0px"}}  className="services-2 services-2-33">
                            <div className="services-3 web-services-3">
                                <div className="services-4">Tokenization of Real-World Assets</div>
                                <div className="services-5">As the world transitions into the era of Web3 and decentralized finance, an innovative concept is gaining momentum: Real-World Asset (RWA)...</div>
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
