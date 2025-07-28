import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { FETCH_ROUTE } from '@/utils/consts'
import "./styles.css"

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCedentials] = useState(false)
  const [usernameExist, setUsernameExist] = useState(false)
  const { login } = useAuth();
  const [isLogIn, setIsLogIn] = useState(true)

  const handleLogIn = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      fetch(`${FETCH_ROUTE}/user?username=${username}&password=${password}`,).then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.state) {
            login({
              id: data.user_id,
              username
            })
          } else {
            setInvalidCedentials(true)
          }
        });
    } catch (err) {
      console.log(err)
    }
  };
  const handleSigIn = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      fetch(`${FETCH_ROUTE}/user`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password,
        })
      }).then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.state) {
            login({
              id: data.user_id,
              username
            })
          } else {
            setUsernameExist(true)
          }
        });
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="auth-form" style={{ background: 'var(--verde-pastel)' }}>
      {isLogIn ? <h2>🌱 Inicia sesión en Plantweet</h2> : <h2> 🌱 Unete al jardín</h2>}

      <form >
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => {
            setInvalidCedentials(false)
            setUsernameExist(false)
            setUsername(e.target.value)
          }}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => {
            setInvalidCedentials(false)
            setUsernameExist(false)
            setPassword(e.target.value)
          }}
          required
        />
        {usernameExist ? <div className="bg-red-50  border-l-4 border-red-4 text-red-700 p-4 rounded-lg shadow-sm flex flex-col items-center gap-3 mb-4 ">
          <p className='text-center'>
            Este Jardinero ya existe.
          </p>
          <p>¡Intenta con otro nombre de usuario!</p>
        </div> : <></>}
        {invalidCredentials ? <div className="bg-red-50  border-l-4 border-red-4 text-red-700 p-4 rounded-lg shadow-sm flex flex-col items-center gap-3 mb-4 ">
          <p className='text-center'>
            Credenciales incorrectas. ¡Intenta de nuevo!
          </p>
        </div> : <></>}

        {isLogIn ?
          <div className='flex flex-col gap-2 justify-center items-center'>
            <button className="auth-btn" onClick={handleLogIn}>
              Entrar al jardín
            </button>
            <p className="change-btn" onClick={() => {
              setInvalidCedentials(false)
              setUsernameExist(false)
              setIsLogIn(false)
            }}>Registrarme en el jardín</p>
          </div>
          :
          <div className='flex flex-col gap-2 justify-center items-center'>
            <button className="auth-btn" onClick={handleSigIn}>
              Registrarme en el jardín
            </button>
            <p className='change-btn' onClick={() => {
              setInvalidCedentials(false)
              setUsernameExist(false)
              setIsLogIn(true)
            }}>Entrar en el jardín</p>
          </div>

        }
      </form>
    </div>
  );
};
export default LoginForm