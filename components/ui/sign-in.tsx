import React from 'react';

const SignInButton = () => {
  const handleSignIn = () => {
    // Redirect to a blank page
    window.location.href = '/blank'; // Adjust the path as needed
  };

  return (
    <button onClick={handleSignIn}>
      Sign In
    </button>
  );
};

export default SignInButton; 