import "./MainNavigation.css"
import {NavLink} from 'react-router-dom';
function MainNavigation(){
    return(
         <nav>
             <div>
             <div className="zeus">ZeusFly <i class="fas fa-plane-departure"></i></div>
             <div className="logo"> Sticky<font>Notes</font></div>
             </div>
             <ul className='menu-list'>
                 <li>
                     <NavLink exact activeClassName="active_class" to='/notes' >
                         Notes
                     </NavLink>
                 </li>
                 
                 <li>
                     <NavLink exact activeClassName="active_class" to='/create'>
                         Create
                     </NavLink>
                 </li>
                 
                 <li>
                     <NavLink  activeClassName="active_class" to='/archive'>
                         Archive
                     </NavLink>
                 </li>
                 <li>
                     <button className="userName">{window.localStorage.userName}</button>
                 </li>
             </ul>
         </nav>
    );
}

export default MainNavigation;