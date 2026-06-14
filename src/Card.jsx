
const Card = ({ name, description, image,isFollow,onFollow,id }) => {

  function handleFollow() {
    // Logic to follow/unfollow the user
    onFollow(id);
  }
  return (
    <div className="w-98 rounded flex p-4  bg-slate-200">
      <div className=" flex-1  ">
        <img className="w-full h-20 rounded  object-cover" src={image} alt="" />
      </div>
      <div className="p-2 flex-2">
        <h2 className="text-xl font-bold uppercase">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <button className="px-3.5 py-2 bg-blue-500 rounded text-white mt-4" onClick={handleFollow}>{isFollow ? 'Downloaded' : 'Download'}</button>
        <button className={`px-3.5 py-2 rounded text-white mt-4 ${isFollow ? 'bg-red-500' : 'bg-green-500'}`} onClick={handleFollow}>
          {isFollow ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  )
}

export default Card