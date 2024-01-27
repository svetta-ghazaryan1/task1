import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Song } from './type';

function App() {
  const[songs,setSongs]=useState <Song[]>([
    { songName: 'Halo', artistName: 'Blackbird Blackbird', trackNumber: 1,file:"one" },
    { songName: 'Blind', artistName: 'Blackbird Blackbird', trackNumber: 2 ,file:"one"},
    { songName: 'Twin Flames', artistName: 'Blackbird Blackbird', trackNumber: 3 ,file:"one"},
    { songName: 'Left to Hurt', artistName: 'Blackbird Blackbird', trackNumber: 4,file:"one" },
    { songName: 'Starlight', artistName: 'Blackbird Blackbird', trackNumber: 5,file:"one" },
    { songName: 'Modern Disbelief', artistName: 'Blackbird Blackbird', trackNumber: 6,file:"one"},

  ])

  const [selectedFile, setSelectedFile] = useState(null);


  const addSong = (data:Song) => {
    setSongs([...songs, { ...data }]);
  };

  const addallbutton = () => {
    console.log("all song is a ques", songs);
   
    songs.forEach((song:Song) => {
      setSongs([song]);
    });

    console.log('All songs added to the queue!');
  };
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
