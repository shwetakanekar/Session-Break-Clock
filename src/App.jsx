import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLong, faPause, faPlay, faRotate, faUpLong } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  return (
    <>
      <div id='container' className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className='mb-4'>Break Session Clock</h2>
        <div id='clock-setting' className='d-flex justify-content-around p-3'>
          <div>
            <h4 id='break-label'>Break Length</h4>
            <div className='d-flex justify-content-center'>
              <button id='break-increment' className='btn btn-light rounded-circle px-2 py-0'><FontAwesomeIcon icon={faUpLong} size='2xs' /></button>
              <div id='break-length' className='mx-2'>5</div>
              <button id="break-decrement" className='btn btn-light rounded-circle px-2 py-0'><FontAwesomeIcon icon={faDownLong} size='2xs' /></button>
            </div>
          </div>
          <div>
            <h4 id='session-label'>Session Length</h4>
            <div className='d-flex justify-content-center'>
              <button id='session-increment' className='btn btn-light rounded-circle px-2 py-0'><FontAwesomeIcon icon={faUpLong} size='2xs' /></button>
              <div id='session-length' className='mx-2'>25</div>
              <button id='session-decrement' className='btn btn-light rounded-circle px-2 py-0'><FontAwesomeIcon icon={faDownLong} size='2xs' /></button>
            </div>
          </div>
        </div>
        <div id='clock' className='d-flex flex-column align-items-center border border-light border-3 rounded-4 p-2'>
          <h4 id='timer-label'>Session</h4>
          <div id="time-left" className='fs-1'>25:00</div>
          <div>
            <button id='start_stop' className='btn btn-light rounded-circle px-2 py-0'><FontAwesomeIcon icon={faPlay} size='2xs' /><FontAwesomeIcon icon={faPause} size='2xs' /></button>
            <button id='reset' className='btn btn-light rounded-circle px-2 py-0 m-2'><FontAwesomeIcon icon={faRotate} size='2xs' /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
