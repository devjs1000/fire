import bluePrint from '../bluePrints/heroPrint'
export default ()=>{
  return (
    <div className={'min-h-[80vh] w-[100vw] '+bluePrint.theme}>
<img className='w-full object-cover' src={bluePrint.banner}/>
    </div>
  )
}
