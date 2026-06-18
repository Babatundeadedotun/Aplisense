import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdBanner = () => {
  useEffect(() => {
    try {
        if (window.adsbygoogle) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "30px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2451571696320546"
        data-ad-slot="4075179904"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};