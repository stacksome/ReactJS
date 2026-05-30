import RightCardContet from './RightCardContet'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img}></img>
      <RightCardContet id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
