import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faAward, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbsUp, faAward, faCheck)

class MonthlyMeet extends React.Component {
  render() {
    return (
      <div className="container-fluid mmeets spacing" style={{ margin: '0' }}>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 spacing" style={{ zIndex: '2', position: 'relative' }}>
                    <h2>Join us on the last Friday of every month at Trago2Wheels Newton Abbot for a group Ride Out</h2>
                    <p>Every last Friday of the month, May - September.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default MonthlyMeet;