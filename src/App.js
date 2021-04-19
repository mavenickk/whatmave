import React, { useEffect, useState} from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
// import Pusher from 'pusher-js';
// import axios from "./axios";
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   axios.get('/messages/sync')
  //   .then(response =>{
  //     setMessages(response.data);
  //   })
  // },[]);

  // useEffect(() => {
  //   var pusher = new Pusher('db69bdf7eab534f0c599', {
  //     cluster: 'ap2'
  //   });

  //   var channel = pusher.subscribe('messages');
  //   channel.bind('inserted', (newMessage) => {
  //     setMessages([...messages, newMessage])
  //   });

  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   }

  // }, [messages]);

  // console.log(messages);

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ): (
        <div className="app_body">
        <Router>
          <Sidebar />
          {/* <Chat messages={messages} /> */}
          <Switch>
          
            <Route path="/rooms/:roomId">
              <Chat  />
            </Route>

            <Route path="/">
              <Chat  />
            </Route>

          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
