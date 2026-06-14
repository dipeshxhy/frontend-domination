
const Card = ({ name, description, image,isFollow,onFollow,id }) => {

  function handleFollow() {
    // Logic to follow/unfollow the user
    onFollow(id);
  }
  return (
    <div className="w-80 rounded  bg-slate-200">
      <div className="w-full h-65 ">
        <img className="w-full h-full rounded  object-cover" src={image} alt="" />
      </div>
      <div className="p-2">
        <h2 className="text-xl font-bold uppercase">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <button className="px-3.5 py-2 bg-blue-500 rounded text-white mt-4">Know more</button>
        <button className={`px-3.5 py-2 rounded text-white mt-4 ${isFollow ? 'bg-red-500' : 'bg-green-500'}`} onClick={handleFollow}>
          {isFollow ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  )
}

export default Card