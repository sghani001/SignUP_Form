import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'fullName') {
      setFullName(value);
      setFullNameError('');
    } else if (name === 'email') {
      setEmail(value);
      setEmailError('');
    } else if (name === 'password') {
      setPassword(value);
      setPasswordError('');
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
      setConfirmPasswordError('');
    } else if (name === 'age') {
      setAge(value);
      setAgeError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!fullName.trim()) {
      setFullNameError('Full Name is required.');
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      setFullNameError('Full Name should only contain alphabets and spaces.');
    }

    if (!email.trim()) {
      setEmailError('Email is required.');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Invalid email format.');
    }

    if (!password.trim()) {
      setPasswordError('Password is required.');
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      setPasswordError('Password should contain at least one uppercase letter, one lowercase letter, and one number.');
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Confirm Password is required.');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match.');
    }

    if (!age.trim()) {
      setAgeError('Age is required.');
    } else if (!/^\d+$/.test(age)) {
      setAgeError('Age should be a numeric value.');
    } else {
      // Form submission logic can be added here
      console.log('Form submitted successfully!');
    }
    if (!fullNameError && !emailError && !passwordError && !confirmPasswordError && !ageError) {
      // All fields are valid, show success message and reset form after 2 seconds
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setAge('');
      }, 2000);
    } else {
      // If there are errors, do not show the success message
      setShowSuccessMessage(false);
    }
  };

  return(

    <div>
      {/* Navbar */}
      <div className="navbar">
        <h1>Signup Form</h1>
    </div>

    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="field-row">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleInputChange}
          />
        </div>
        {fullNameError && <p className="error">{fullNameError}</p>}
        <div className="field-row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        {emailError && <p className="error">{emailError}</p>}
        <div className="field-row">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        {passwordError && <p className="error">{passwordError}</p>}
        <div className="field-row">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
        <div className="field-row">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={age}
            onChange={handleInputChange}
          />
        </div>
        {ageError && <p className="error">{ageError}</p>}
        <button type="submit">Submit</button>
        {showSuccessMessage && !fullNameError && !emailError && !passwordError && !confirmPasswordError && !ageError && (
            <p className="success">Form submitted successfully!</p>
          )}
      </form>
    </div>

    

    {/* Footer */}
    <div className="footer">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;
