
import './App.css';
import { useState } from 'react';
/*import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import Button from '@mui/material/Button';

//import { Modal } from '@mui/material';

function Button(props) {
  function handleShow() {
    // Show the modal
    props.onShow();
  }

  return (
    <button onClick={handleShow}>Show Modal</button>
  );
}

function Modal(props) {
  return (
    <div className={props.show ? "modal show" : "modal"}>
      <div className="modal-content">
        {props.children}
      </div>
    </div>
  );
}
*/
function App() {
  const [cards] = useState([
    {
        title: 'Project-1',
        Text: 'Return 0 Software Project'
    },
    {
      title:  'Project-2',
      Text: 'MAS UI design'
  },
  {
      title:  'Project-3',
      Text: 'Wso2 Employee-api'
  },
  {
      title:  'Project-4',
      Text: 'Project Name'
  },
  {
      title:  'Project-5',
      Text: 'Project Name'
  },
  {
      title:  'Project-6',
      Text: 'Project Name'
  },
  {
    title:  'Project-7',
    Text: 'Project Name'
},


  ])

  return(
    <div>
      <section>
        <div className='ProLiscontainer'>
          <h2>Projects</h2>
          <div className='Pcards'>
            {
              cards.map((card,i) => ( 
              <div key={i} className='card'>
              <h3>{card.title}</h3>
              <p>{card.Text}</p>
              <button className='btn'>Options</button>
                </div>
              ))
            }
             
              </div> 

        </div>
      </section>
    </div>
  );


  }
  export default App;