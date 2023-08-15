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
              <button id="break-increment">+</button>
              <div id='break-length'>5</div>
              <button id="break-decrement">-</button>
            </div>
          </div>
          <div>
            <h3 id='session-label'>Session Length</h3>
            <div>
              <button id="session-increment">+</button>
              <div id='session-length'>25</div>
              <button id="session-decrement">-</button>
            </div>
          </div>
        </div>
        <div>
          <h3 id='timer-label'>Session</h3>
          <div id="time-left">25:00</div>
        </div>
        <div>
          <button id='start_stop'>Start/Stop</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
