'use client'
import Script from 'next/script'

export default function WideAngleComponent() {
    return (
      <Script
            defer 
            async
            src="https://stats.wideangle.co/script/1A2BG3B9ACB00F42D8.js"
            data-waa-late-init="true"
            strategy="afterInteractive"
            onReady={() => {
              waaCreate()
                .then(waa => window.waa = waa)
                .then(() => console.info("Wide Angle Analytics script loaded"));
            }}
          />
    );
  }