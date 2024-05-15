import { useState, useEffect } from 'react';


export const VoteComponent = ({ data, onVoteButtonClick }) => {
    const [showCards, setShowCards] = useState(false);
    const [voteCount1, setVoteCount1] = useState(0);
    const [voteCount2, setVoteCount2] = useState(0);
    const [voteCount3, setVoteCount3] = useState(0);
    const [timer, setTimer] = useState(120); // 2 minutes in seconds

    useEffect(() => {
        let countdown = null;
        if (showCards) {
            countdown = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        }
        return () => clearInterval(countdown);
    }, [showCards]);

    useEffect(() => {
        if (timer === 0) {
            // Voting time is over, do something

            clearInterval(timer);
            setShowCards(false); // Hide the cards when time is up
        }
    }, [timer]);

    const handleButtonClick = () => {
        setShowCards(true); // Update showCards state to true
    };


    const handleVoteClick = (eventId) => {
        onVoteButtonClick(eventId)
    };
    const array = ["https://wc6twypwa5fhvlv5ytxjrk5wtjnriurwyiigkeay6mcx3vzvwr6a.arweave.net/sL07YfYHSnquvcTumKu2mlsUUjbCEGUQGPMFfdc1tHw", "https://bafkreif7g76jre76i5mnjc2y63pidnfhfabdnik3naq2udvxjf2hhr3bui.ipfs.nftstorage.link/", "https://zlyd4yjgrmfjnumk6cwncdx3hywxixqdxqyjslno4x5sam4c7bia.arweave.net/yvA-YSaLCpbRivCs0Q77Pi10XgO8MJktruX7IDOC-FA"]

    return (
        <div className="container events-container">
            {!showCards && (
                <div className="game15"><button className='button-89 vote-button' onClick={handleButtonClick}><h3>Start Voting</h3></button>
                </div>)}
            {showCards && (

                <div className="fit1134">

                    <div className="event"><div className="event-containerx data11win">
                        {Object.keys(data).map(key => (

                            <div className="container112 event-detailsx event-detailse datafit11" >
                                <div className="wrapper112">
                                    <div className="banner-image" style={{
                                        backgroundImage: `url(${array[key]})`
                                    }}> </div>
                                    <h1>{data[key].title}</h1>
                                    <p>{data[key].description}</p>
                                    <h3>{data[key].total_votes}</h3>
                                </div>
                                <div className="button-wrapper">
                                    <button className="btn fill" onClick={() => handleVoteClick(data[key].id)} role="button" >Vote</button>
                                </div>
                            </div>

                        ))}</div>
                    </div>


                </div>
            )}
            {showCards && <div>Time Left: {timer} seconds</div>}
        </div>
    );
};
;
