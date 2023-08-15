import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLong, faPause, faPlay, faRotate, faUpLong } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  return (
    <>
      <div>
        <h2>Break Session Clock</h2>
        <div>
          <div>
            <h3 id='break-label'>Break Length</h3>
            <div>
              <button id="break-increment"><FontAwesomeIcon icon={faUpLong} /></button>
              <div id='break-length'>5</div>
              <button id="break-decrement"><FontAwesomeIcon icon={faDownLong} /></button>
            </div>
          </div>
          <div>
            <h3 id='session-label'>Session Length</h3>
            <div>
              <button id="session-increment"><FontAwesomeIcon icon={faUpLong} /></button>
              <div id='session-length'>25</div>
              <button id="session-decrement"><FontAwesomeIcon icon={faDownLong} /></button>
            </div>
          </div>
        </div>
        <div>
          <h3 id='timer-label'>Session</h3>
          <div id="time-left">25:00</div>
        </div>
        <div>
          <button id='start_stop'><FontAwesomeIcon icon={faPlay} /><FontAwesomeIcon icon={faPause} /></button>
          <button id="reset"><FontAwesomeIcon icon={faRotate} /></button>
        </div>
      </div>
    </>
  );
}

export default App;
