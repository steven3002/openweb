import React, { useState, useEffect } from 'react';
import './data.css';

const ownerId = "mrMorale";




const PollCards = (props) => {
    return (
        <div className='Card' onClick={(e) => props.handleClick(e)}>
            <div className='CardImgContainer'>
                <div className='CardImg'
                    src={props.image}
                    alt="Fancy equilibrium cube"
                    width="198px"
                    height="144px"
                />
            </div>

            <div>
                <h1
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: "700",
                        color: "var(--white)",
                        textAlign: "left",
                    }}
                >
                    {props.name}
                </h1>
            </div>

            <p
                style={{
                    color: "var(--soft-blue)",
                    lineHeight: "1.5rem",
                    fontWeight: "300",
                }}
            >
                {props.word}
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        gap: "0px",
                        fontWeight: 700,
                        color: "var(--cyan)",
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <h6 style={{ margin: '0px' }}>Total Votes</h6>
                </div>

                <div
                    style={{
                        gap: "0px",
                        fontWeight: 700,
                        color: "var(--soft-blue)",
                    }}
                >
                    {/* {console.log('cnt', props.cnt)} */}
                    <span>{props.cnt || 0}</span>
                </div>
            </div>
        </div>
    );
};

const Divs = (props) => {
    const fn = (x) => {
        return x < 10 ? "0" + x : x;
    };
    const formatTime = (time) => {
        const hr = Math.floor(time / 3600);
        const minTime = time % 3600
        const min = Math.floor(minTime / 60);
        const sec = minTime % 60;
        return `${fn(hr)}:${fn(min)}:${fn(sec)} `;
    };
    // timer is for 61 secs
    const completeTime = 61;
    const [time, setTime] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [timer, setTimer] = useState(null);
    const [count, setCount] = useState({ A: 0, B: 0, C: 0 });

    const startTimer = () => {
        if (time > 0) return;
        setCompleted(false);
        const timing = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);

        setTimer(timing);
    }
    useEffect(() => {
        // console.log('mount')
        return () => {
            if (timer) clearInterval(timer);
        }
    }, []);

    useEffect(() => {
        if (time === completeTime) {
            setCompleted(true);
            clearInterval(timer);
            setTime(0);
        }
    }, [time]);

    const updateCount = (keyy) => {
        const newData = { A: 0, B: 0, C: 0 };
        newData[keyy] = 1;
        setCount(newData);
    }

    return (
        <div style={{
            padding: "20px",
            gap: "20px",
            margin: "20px",
        }}>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <h3 style={{ color: "white" }}>Voting</h3>
                <button onClick={() => startTimer()}>Start</button>
                <div style={{ color: "white" }}>
                    {completed ? 'Ended' : formatTime(time)}
                </div>
            </div>
            <div className='inlineList'>
                <PollCards
                    image="https://image-cache-service-z3w7d7dnea-ew.a.run.app/small?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fomni-live.appspot.com%2Fo%2Fstore%252Fanthropocene.mintbase1.near%253Aprofile%3Falt%3Dmedia%26token%3De119d2c8-637b-48e2-9de3-ef73f13fa09b"
                    word="We the first"
                    cnt={completed ? count.A : null}
                    name="TEAM A"
                    handleClick={(e) => {
                        updateCount('A')
                    }}
                />

                <PollCards
                    image="https://image-cache-service-z3w7d7dnea-ew.a.run.app/small?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fomni-live.appspot.com%2Fo%2Fstore%252Fnearconminsta.mintbase1.near%253Aprofile%3Falt%3Dmedia%26token%3D99c42b64-ec70-43f0-8597-1d8b01f74fc8"
                    word="We leading"
                    name="TEAM B"
                    cnt={completed ? count.B : null}
                    handleClick={(e) => {
                        updateCount('B')
                    }}
                />

                <PollCards
                    word="C us at the top"
                    name="TEAM C"
                    cnt={completed ? count.C : null}
                    handleClick={(e) => {
                        updateCount('C')
                    }}
                    image="https://image-cache-service-z3w7d7dnea-ew.a.run.app/small?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fomni-live.appspot.com%2Fo%2Fstore%252Fmint.sharddog.near%253Aprofile%3Falt%3Dmedia%26token%3D10415030-16c9-4886-9266-d30cc626825f"
                />
            </div>
        </div>
    );
};
export default function Help() {
    return (
        <div className='app'>
            <Divs></Divs>
        </div>
    );
}

