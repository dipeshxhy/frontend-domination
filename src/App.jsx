import { useState } from 'react';
import Playlist from './Playlist';

const App = () => {
  const [playlists, setPlaylists] = useState([
    { id: 1, name: 'chand tare', singer: 'Kumar',isFav:false },
    { id: 2, name: 'Tere Naam', singer: 'Udit Narayan',isFav:false },
    { id: 3, name: 'Tere surror', singer: 'Himesh Resahmaya',isFav:false },
    { id: 4, name: 'Hamari Adhuri Kahani', singer: 'Arman Malik' ,isFav:false},
  ]);
const addFav = (id)=>{
  setPlaylists(prev=>prev.map(p=>p.id===id?({...p,isFav:!p.isFav}):p))
}
const numsFav = playlists.filter(p=>p.isFav).length
  const showPlaylist = playlists.map((p) => <Playlist key={p.id} song={p} addFav={addFav} />);

  return (
    <div className="flex h-screen max-w-7xl mx-auto flex-col items-center justify-center ">
      <header className="flex justify-between w-full mb-20 ">
        <div>Orange</div>
        <div>
          favorites: <span>{numsFav}</span>
        </div>
      </header>
      <div className='flex gap-4'>{showPlaylist}</div>
    </div>
  );
};

export default App;
