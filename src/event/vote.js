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

    return (<>
        {!showCards && (<><div className='header11'><h1>Vote for the Best ......</h1></div>
            <div className="game15"><button className='button-53 vote-button' onClick={handleButtonClick}><h3>Start Voting</h3></button>
            </div></>)}
        {showCards && (
            <div class="container001 horizontal">
                {Object.keys(data).map(key => (

                    <article class="card001">
                        <img class="card__background" src={data[key].image_url}

                            alt="Photo of Cartagena's cathedral at the background and some colonial style houses" width="1920"
                            height="2193" />
                        <div class="card__content | flow">
                            <div class="card__content--container | flow">

                                <h2 class="card__title">{data[key].title}  </h2>

                                <p class="card__description">
                                    {data[key].description}
                                </p>
                            </div>
                            <button class="card__button" onClick={() => handleVoteClick(data[key].id)} role="button" >vote</button>
                            <div className='ote-button-container'> </div>
                        </div>
                    </article>


                ))}


            </div>
        )}
    </>
    );
};
;
