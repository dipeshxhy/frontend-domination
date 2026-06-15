
const Playlist = ({song,addFav}) => {
  return (
    <div className='w-78 bg-stone-200 p-2 relative'>
      <div className='flex gap-2'>
        <div className='w-20 h-20 rounded '>
          <img className='w-full h-full' src="https://plus.unsplash.com/premium_photo-1681400557395-f9bac51b28d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzZXR8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <div>
          <h3>{song.name}</h3>
          <h4>{song.singer}</h4>
        </div>
      </div>
      <button onClick={()=>addFav(song.id)} className="absolute left-1/2 -bottom-4 px-2.5 py-2 bg-orange-500 -translate-x-1/2 text-white text-lg rounded-full">{song.isFav?"Added":"Add to Favorite"}</button>
    </div>
  )
}

export default Playlist