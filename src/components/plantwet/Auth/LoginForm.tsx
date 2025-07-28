import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { FETCH_ROUTE } from '@/utils/consts'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [isLogIn, setIsLogIn] = useState(true)

  const handleLogIn = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      fetch(`${FETCH_ROUTE}/user?username=${username}&password=${password}`,).then(response => response.json())
        .then(data => {
          if (data.state) {
            login({
              id: data.user_id,
              username
            })
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
          }
        });
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="auth-form" style={{ background: 'var(--verde-pastel)' }}>
      <h2>🌱 Inicia sesión en Plantweet</h2>
      <form >
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />{isLogIn ?
          <div className='flex flex-col gap-2'>
            <button className="auth-btn" onClick={handleLogIn}>
              Entrar al jardín
            </button>
            <p onClick={() => setIsLogIn(false)}>Registrarme en el jardín</p>
          </div>
          :
          <div>
            <button className="auth-btn" onClick={handleSigIn}>
              Registrarme
            </button>
            <p onClick={() => setIsLogIn(true)}>Entrar en el jardín</p>
          </div>

        }
      </form>
    </div>
  );
};
export default LoginForm