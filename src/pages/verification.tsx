import React, { useState,useEffect } from 'react';

const VerificationPage = () => {

  useEffect(() => {
    const verifyToken = async () => {
      const token = new URLSearchParams(window.location.search).get('token');
      try {
        const response = await fetch('http://52.66.247.18:8080/api/v1/verify-signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token })
        });

        if (response.ok) {
            window.location.href = '/success';
        } else {
            window.location.href = '/failed';
        }
      } catch (error) {
        console.log("Error occurred:", error);
      }
    };

    verifyToken();
  }, []);

  return (
    <div className="verification-page">
      <h1>Verification Page</h1>
      <p>Verifying...</p>
    </div>
  );
};

export default VerificationPage;
