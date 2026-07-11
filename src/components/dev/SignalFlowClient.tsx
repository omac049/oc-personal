'use client';

import dynamic from 'next/dynamic';

const SignalFlow = dynamic(() => import('./SignalFlow'), { ssr: false });

export default function SignalFlowClient() {
  return <SignalFlow />;
}
