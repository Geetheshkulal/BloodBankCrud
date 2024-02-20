// import React, { useState } from 'react';
// import css from '../css/Signup.css';

// function Signup(){
//   const [loginVisible, setLoginVisible] = useState(true);

//   const toggleForm = () => {
//     setLoginVisible(!loginVisible);
//   };

//   return (
//     <div className="hero">
//       <div className="log">
//         <div className="button">
//           <div className="btn"></div>
//           <button type="button" className="toggle-btn" onClick={toggleForm}>
//             {loginVisible ? 'Log in' : 'Register'}
//           </button>
//         </div>
//         {/* <div className="social">
//           <img src="facebook.png" alt="Facebook" />
//           <img src="goo.png" alt="Google" />
//           <img src="twi.png" alt="Twitter" />
//         </div> */}

//         {loginVisible ? (
//           <form className="grow">
//             <input type="text" className="input-f" placeholder="user id" required />
//             <input type="text" className="input-f" placeholder="password" required />
//             <input type="checkbox" className="check" />
//             <span>Remember Password</span>
//             <button type="submit" className="submit-btn">
//               Log in
//             </button>
//           </form>
//         ) : (
//           <form className="grow">
//             <input type="text" className="input-f" placeholder="user id" required />
//             <input type="email" className="input-f" placeholder="Email Id" required />
//             <input type="text" className="input-f" placeholder="password" required />
//             <input type="checkbox" className="check" />
//             <span>I agree to the terms & conditions</span>
//             <button type="submit" className="submit-btn">
//               Register
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Signup;
