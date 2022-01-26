import React, { useState, useEffect } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  // Create state variables for the fields in the Contact
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {}, [userName, email, message]);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleMouseLeave = (e) => {
    if (!e.target.value) {
      e.target.placeholder = `${e.target.name} is Required`;
    }
  };

  const handleContactSubmit = (e) => {
    // Preventing the default behavior of the Contact submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='contact'>
      <h2>Hello {userName}</h2>
      <form className='form contact'>
        <input
          className='email'
          value={email}
          name='email'
          onChange={handleInputChange}
          onBlur={handleMouseLeave}
          type='email'
          placeholder='email'
        />
        <input
          className='user'
          value={userName}
          name='userName'
          onChange={handleInputChange}
          onBlur={handleMouseLeave}
          type='text'
          placeholder='username'
        />
        <input
          className='message-input'
          value={message}
          name='message'
          onChange={handleInputChange}
          onBlur={handleMouseLeave}
          type='text'
          placeholder='Message'
        />
        <button type='button' onClick={handleContactSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
