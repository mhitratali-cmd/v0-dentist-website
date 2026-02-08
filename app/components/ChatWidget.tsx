"use client";

import Script from "next/script";

export default function ChatWidget() {
  return (
    <>
      {/* Required container for the widget */}
      <div 
        id="VG_OVERLAY_CONTAINER" 
        style={{ width: 0, height: 0 }} 
      >
        {/* Here is where CONVOCORE renders the widget. */}
        {/* Set render to 'full-width' then adjust the width and height to 500px (for example) to render the chatbot itself without the popup. */}
      </div>
      
      {/* Widget Configuration */}
      <Script id="convocore-config" strategy="afterInteractive">
        {`
          window.VG_CONFIG = {
            ID: "hrOAuMO1MM6Z5bSH8aJS", // YOUR AGENT ID
            region: 'eu', // YOUR ACCOUNT REGION 
            render: 'bottom-right', // can be 'full-width' or 'bottom-left' or 'bottom-right'
            // modalMode: true, // Set this to 'true' to open the widget in modal mode
            stylesheets: [
                // Base CONVOCORE CSS
                "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
                // Add your custom css stylesheets, Can also add relative URL ('/public/your-file.css)
            ],
            // THIS IS SUPPOSED TO BE CHANGED OR REMOVED.
            // user: {
            //     name: 'John Doe', // User's name
            //     email: 'johndoe@gmail.com', // User's email
            //     phone: '+1234567890', // User's phone number
            // }
            // Optional user data -- end
            // **
            // userID: 'USER_ID', // If you want to use your own user_id
            // autostart: true, // Whether to autostart the chatbot with the proactive message
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
