

import React, { useEffect } from 'react';


export function EventsContainer({ data1 }) {
    let length = 0
    Object.keys(data1).map(key =>
        length = length + data1[key].total_votes
    )


    return (
        <>
            <div className="container events-container game14">
                <div id="events-list">
                    <div className="event">
                        <div className="event-containerx">
                            <div className="event-detailsx, event-detailse">
                                <h5>NFt Present</h5>
                                <h3>3</h3>


                            </div>
                            <div className="event-detailsx">
                                <h5>votes</h5>
                                <h3>{length}</h3>

                            </div>
                            <div className="event-detailsx line-edit">
                                <h5>Ending at</h5>
                                <h3>Sep 11th 2027</h3>


                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );


}

