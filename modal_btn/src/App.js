import React from 'react';
import './App.css';

function App() {
  const Modal = ({ open, setOpen }) => (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
      <div className="modal">
        <svg
          onClick={() => setOpen(false)}
          height="200"
          viewBox="0 0 200 200"
          width="200"
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <img
          className="GIF"
          src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif?cid=790b7611d44dwujil51vf1ieh1shkiwwb9u0wvoocannfp4t&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          style={{ width: '30%', height: '20%', objectFit: 'contain' }}
          alt="GIF"
        />
      </div>
    </div>
  );

  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨Открыть модальное окно
      </button>
      {open && <Modal open={open} setOpen={setOpen} />}
    </div>
  );
}

export default App;
