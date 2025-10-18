import React from 'react'

function EmailVerify() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Email Verification</h2>
      <p className="mb-4 text-gray-600">
        Please check your email for a verification link to activate your account.
      </p>
      {/* You can add a "Resend Verification" button here */}
    </div>
  )
}
export default EmailVerify
