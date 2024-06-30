import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ onSearch }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogoutClick = () => {
    navigate('/logout');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-6">
          <a onClick={() => navigate('/home')} className="btn btn-ghost text-xl">CineCritique</a>
          <button onClick={() => navigate('/movies')} className="btn btn-ghost">All Movies</button>
          <form onSubmit={handleSearchSubmit} className="form-control">
            <input 
              type="text" 
              placeholder="Search" 
              className="input input-bordered w-full md:w-auto" 
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
        </div>

        <div className="flex items-center gap-6">
          <label className="flex cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              {/* <li>
                <a onClick={() => navigate('/profile')} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li> */}
              <li><a onClick={handleLogoutClick}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}