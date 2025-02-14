import SetupNewPassword from '@/components/SetupNewPassword';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Setup new password",
  description: "Setup new password",
};

const Page = () => {
  return (
    <div>
      <SetupNewPassword />
    </div>
  )
}

export default Page
