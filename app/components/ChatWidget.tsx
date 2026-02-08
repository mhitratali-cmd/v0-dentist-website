"use client";

import Script from "next/script";

export default function ChatWidget() {
  return (
    <>
      {/* Required container for the widget */}
      <div 
        id="VG_OVERLAY_CONTAINER" 
        style={{ width: 0, height: 0 }} 
      />
      
      {/* Widget Configuration */}
      <Script id="convocore-config" strategy="afterInteractive">
        {`
          window.VG_CONFIG = {
            ID: "hrOAuMO1MM6Z5bSH8aJS",
            region: "eu",
            render: "bottom-right",
            stylesheets: [
              "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"
            ]
          };
        `}
      </Script>
      
      {/* Widget Script Bundle */}
      <Script
        src="https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"
        strategy="afterInteractive"
        defer
      />
    </>
  );
}
