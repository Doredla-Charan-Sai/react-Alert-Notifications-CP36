// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="not-cont">
      {children}
      <GrFormClose className="icon-img" />
    </div>
  )
}

export default Notification
