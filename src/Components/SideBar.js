import React from 'react'
import pay1 from '../Images/pay1.png'
import analytics from '../Images/analytics.jpg'
import payments from '../Images/payments.png'
import card from '../Images/card.png'
import  Settings from '../Images/Settings.jpg'
function SideBar() {
  return (
    <div className='container'>
        <div className="sidebar">
    <img src={pay1} width="30px" height="30px"/>
  <a className="active" href="#Accounts">Accounts</a>
  <img src={analytics} width="30px" height="40px"/>
  <a  className="act" href="#Analytics">Analytics</a>
  <img src={payments} width="30px" height="30px"/>
  <a className="acti" href="#Payments">Payments</a>
  <img src={card} width="30px" height="30px"/>
  <a className="a" href="#Cards">Cards</a>
  <img src={Settings} width="30px " height="30px"/>
  <a className="c"href="#settings">Settings</a>
 
</div>
      
    </div>
  )
}

export default SideBar
