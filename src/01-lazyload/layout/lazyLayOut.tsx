import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { LazyPages1, LazyPages2, LazyPages3 } from '../pages';




export const LazyLayOut = () => {
  return (
    <div>
      <h1>Lazy LayOut Page</h1>

       <ul>
           <li>
            <NavLink to="lazy1"> lazi 1</NavLink>

        </li>
           <li>
            <NavLink to="lazy2"> lazi 2</NavLink>

        </li>
           <li>
            <NavLink to="lazy3"> lazi 3</NavLink>

        </li>


       </ul>

       <Routes>
            <Route path='lazy1' element={<LazyPages1/>} /> 
            <Route path='lazy2' element={<LazyPages2/>} /> 
            <Route path='lazy3' element={<LazyPages3/>} /> 
            <Route path='*' element={<Navigate replace to="lazy1"/>} /> 



       </Routes>



    </div>
  );
};

export default LazyLayOut
