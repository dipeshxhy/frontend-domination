
const Card = ({ name, description, image }) => {
  return (
    <div className="w-80 rounded  bg-slate-200">
      <div className="w-full h-65 ">
        <img className="w-full h-full rounded  object-cover" src={image} alt="" />
      </div>
      <div className="p-2">
        <h2 className="text-xl font-bold uppercase">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default Card