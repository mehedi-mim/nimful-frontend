import React, { useState, useEffect, useRef, useCallback } from 'react';
import { reduceEachTrailingCommentRange } from 'typescript';

const VerificationPage = () => {
  const isMountedRef = useRef(true);
  useEffect(() => {
    if(isMountedRef.current ===false)return
   const token = new URLSearchParams(window?.location.search).get('token');
    const verifyToken = async () => {
     
      console.log({token})
      try {
        if (!!token && process.env.NEXT_PUBLIC_BACKEND_BASE_URL) {
        
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/verify-signup`, {
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
        }
      } catch (error) {
        console.log("Error occurred:", error);
      }
    };

    verifyToken();
    return () => void (!!token ?isMountedRef.current = false:isMountedRef.current =true);
    
  }, []);

  return (
    <div className="verification-page">
      <h1>Verification Page</h1>
      <p>Verifying...</p>
    </div>
  );
};

export default VerificationPage;
