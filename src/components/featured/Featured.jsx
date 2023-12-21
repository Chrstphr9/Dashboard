import MoreVerticon  from '@mui/icons-material/MoreVert'
import './Featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css/"

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
          <CircularProgressbar value={70} text={"70%"} strokeWidth={2} />
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">$420</p>
        <p className="title">Previous Transaction Processing. Last Payment May Mot Be Included.</p>
      </div>
    </div>
  )
}

export default Featured