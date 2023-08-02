import React,{useState} from 'react';
import Swal from 'sweetalert2';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin= () => {
      // Login logic here
      // If login is successful, update isLoggedIn state to true
      Swal.fire({
        title:'You are login successfully!',
      }).then(function() {
        window.location.href = "/admin";
    })

      setIsLoggedIn(true);
    }
  
    return (
      <div>
        {isLoggedIn ? (
          <p></p>

          
        ) : (
          <form onSubmit={handleLogin}>
          <input type='text' placeholder='name' />
          <input type='text' placeholder='password' />
            {/* Your login form inputs */}
            <button type='submit'>Login</button>
          </form>
        )}
      </div>
    );
  }

  export default Login
