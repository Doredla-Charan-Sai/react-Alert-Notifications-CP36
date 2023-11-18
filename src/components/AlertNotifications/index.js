// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotification = () => (
  <div className="bg-cont">
    <h1 className="alert">Alert Notifications</h1>
    <Notification>
      <div className="alert-card">
        <AiFillCheckCircle className="icon-success" />
        <div>
          <h1 className="success-txt">Success</h1>
          <p className="success-para">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="alert-card">
        <RiErrorWarningFill className="icon-error" />
        <div>
          <h1 className="error-txt">Error</h1>
          <p className="success-para">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="alert-card">
        <MdWarning className="icon-warning" />
        <div>
          <h1 className="warning-txt">Warning</h1>
          <p className="success-para">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="alert-card">
        <MdInfo className="icon-info" />
        <div>
          <h1 className="info-txt">Info</h1>
          <p className="success-para">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotification
