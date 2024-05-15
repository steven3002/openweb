import styles from '@/styles/app.module.css';
import { useState, useEffect } from 'react';
import { useStore } from '@/layout';
import { HelloNearContract } from '../config';
import { EventsContainer } from '@/event/eventList'
import { VoteComponent } from '@/event/vote'



// Contract that the app will interact with
const CONTRACT = HelloNearContract;

export default function Home() {
  const { signedAccountId, wallet } = useStore();

  const [greeting, setGreeting] = useState('loading...');
  const [newGreeting, setNewGreeting] = useState('loading...');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (!wallet) return;

    wallet.viewMethod({ contractId: CONTRACT, method: 'list_polls' })
      .then(greeting => setGreeting(greeting));
  }, [wallet]);

  useEffect(() => {
    setLoggedIn(!!signedAccountId);
  }, [signedAccountId]);
  console.log(greeting)
  const handleVoteButtonClick = async (eventId) => {
    setShowSpinner(true);
    await wallet.callMethod({ contractId: CONTRACT, method: 'add_vote', args: { id: eventId } });
    const eventList = await wallet.viewMethod({ contractId: CONTRACT, method: 'list_polls' });
    setGreeting(eventList);
    setShowSpinner(false); // Change to false to hide the spinner after updating the event list
  };








  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Interacting with the contract: &nbsp;
          <code className={styles.code}>{CONTRACT}</code>
        </p>
      </div>

      <div className={styles.center}>
        <div className="input-group main1134" hidden={!loggedIn}>

          <EventsContainer data1={greeting} />

          <VoteComponent data={greeting} onVoteButtonClick={handleVoteButtonClick} />


        </div>
        <div className="w-100 text-end align-text-center" hidden={loggedIn}>
          <p className="m-0"> Please login to vote</p>
        </div>
      </div>
    </main >
  );
}