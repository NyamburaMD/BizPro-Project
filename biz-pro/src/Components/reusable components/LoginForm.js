import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (email === 'darlene.mwaura@strathmore.edu' && password === 'fuckJavier') {
                navigate('/Dashboard');
            } else {
                throw new Error('Invalid email or password');
            }
            } catch (err) {
              setError(err.message || 'Something went wrong.');
            } finally {
              setLoading(false);
        }
    };

    return (
      <div className="dashboard">
        <div className="dashboard-grid">
          <div className="Login-card">
            <div className="Login-content">
              <h2>Welcome Back!😁</h2>
              {error && <div className="login-error" style={{color:"darkmagenta", marginBottom: "10px"}}>{error}</div>}
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type=""
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </form>
            </div>
          </div>
        </div>
      </div>
    )
};

export default LoginForm;