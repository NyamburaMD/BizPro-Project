import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
        <div className="login-wrapper">
            <div className="login-card">
                <h2>Welcome Back!😁</h2>
                {error && <div className="login-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ marginBottom: '20px', fontSize: '14px' }}>
            <input
              type="checkbox"
              id="show-password"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="show-password" style={{ marginLeft: '8px' }}>
              Show Password
            </label>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <div className="login-footer">
          Don’t have an account? <a href="/register">Sign up</a>
        </div>
            </div>
        </div>

    );
};

export default LoginForm;