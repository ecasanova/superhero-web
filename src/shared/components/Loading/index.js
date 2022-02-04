import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from './super-hero-lotie.json';
import './styles.scss';

export default function Loading() {
  return (
    <div className="c-loading">
      <div className="c-loading__animation">
        <Lottie animationData={loadingAnimation} />;
      </div>
    </div>
  );
}
