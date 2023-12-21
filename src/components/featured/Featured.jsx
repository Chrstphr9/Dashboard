import MoreVerticon  from '@mui/icons-material/MoreVert'
import './Featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">
          Total Revenue
        </h1>
        <MoreVerticon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          
        </div>
        
      </div>
    </div>
  )
}

export default Featured