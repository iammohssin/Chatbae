import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

const apiKey ='nehaw7v8tje7';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__wrapper'>
        <chat client={client} theme="team light">
            <channelListContainer

            />
            <channelContainer
            
            />
        </chat>
    </div>
  )
}

export default App