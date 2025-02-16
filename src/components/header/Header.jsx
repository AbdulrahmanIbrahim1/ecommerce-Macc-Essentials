
import { Link, useNavigate } from 'react-router-dom'
import './header.css'



export default function Header() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="p-2 px-4 topHeader d-flex">
        <div className="space"></div>
        <ul className='d-flex justify-content-between align-items-center'>
          <li className='px-2 mx-2 cursor-pointer ' onClick={()=>{
            navigate(-1)
          }}>Return</li>
          <li className='px-2 mx-2'><a href="#" >Help</a></li>
          <li className='px-2 mx-2'><a href="#" >Register/Sign In</a></li>
          <li className='px-2 mx-2'><Link to="/collection" >collection</Link></li>
        </ul>
      </div>


      <div className='bottomHeader p-3 d-flex justify-content-between align-items-center'>
        <div className='searchIcon ps-4 fs-5  '>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className='mediumLinks align-items-center d-flex justify-content-between'>
          <a href="#">Shop</a>
          <a href="#">Essentials</a>
          <Link to={'/'} className='text-center fs-2'> <span className='text-danger'>Macc</span> <br /> <span className='text-primary'>Essentials</span> </Link>
          <a href="#">Best sellers</a>
          <a href="#">About us</a>
        </div>

        <div className='leftIconLinks p-2 d-flex justify-content-around align-items-center'>
          <i  className="fa-regular fa-user"></i>
          <i className="fa-regular fa-bell"></i>

          <Link to={'/cart'}>
          <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.996 21.3401L18.324 5.41707C18.3069 5.25626 18.231 5.10744 18.1108 4.99925C17.9907 4.89106 17.8347 4.83116 17.673 4.83107H14.53V4.11407C14.5065 3.05553 14.0694 2.04826 13.3125 1.30794C12.5555 0.567616 11.5388 0.153076 10.48 0.153076C9.42118 0.153076 8.40445 0.567616 7.6475 1.30794C6.89054 2.04826 6.45351 3.05553 6.42998 4.11407V4.83107H3.28498C3.12328 4.83116 2.96731 4.89106 2.84713 4.99925C2.72694 5.10744 2.65102 5.25626 2.63398 5.41707L0.958984 21.3401C0.949436 21.4315 0.959257 21.524 0.987807 21.6114C1.01636 21.6988 1.063 21.7793 1.12469 21.8475C1.18638 21.9157 1.26175 21.9701 1.34588 22.0073C1.43001 22.0444 1.52102 22.0634 1.61298 22.0631H19.345C19.4367 22.063 19.5274 22.0437 19.6111 22.0063C19.6949 21.969 19.7699 21.9145 19.8313 21.8464C19.8927 21.7782 19.939 21.6979 19.9674 21.6107C19.9958 21.5235 20.0055 21.4313 19.996 21.3401ZM7.73798 4.11407C7.73798 3.38698 8.02682 2.68967 8.54095 2.17554C9.05508 1.66141 9.75239 1.37257 10.4795 1.37257C11.2066 1.37257 11.9039 1.66141 12.418 2.17554C12.9321 2.68967 13.221 3.38698 13.221 4.11407V4.83107H7.73798V4.11407ZM2.33798 20.7541L3.87498 6.14007H6.42798V7.58307C6.42798 7.75679 6.49699 7.92339 6.61983 8.04623C6.74267 8.16906 6.90927 8.23807 7.08298 8.23807C7.2567 8.23807 7.4233 8.16906 7.54614 8.04623C7.66898 7.92339 7.73798 7.75679 7.73798 7.58307V6.14007H13.221V7.58307C13.221 7.75679 13.29 7.92339 13.4128 8.04623C13.5357 8.16906 13.7023 8.23807 13.876 8.23807C14.0497 8.23807 14.2163 8.16906 14.3391 8.04623C14.462 7.92339 14.531 7.75679 14.531 7.58307V6.14007H17.084L18.619 20.7541H2.33798Z" fill="#222222" />
          </svg>
          </Link>

        </div>

      </div>

    </div>
  )
}
