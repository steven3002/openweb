
import { useState, useEffect } from 'react';
import { useStore } from '@/layout';
import { HelloNearContract } from '../config';

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
    <>
      <div className="w-100 text-end align-text-center" hidden={loggedIn}>
        <p> Please login to vote</p>

      </div>
      <div className='subbody' hidden={!loggedIn}>
        <VoteComponent data={greeting} onVoteButtonClick={handleVoteButtonClick} />


      </div>
    </>
  );
}
