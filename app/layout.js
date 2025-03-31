import { Montserrat } from "next/font/google";

// Styles
import "@/globals.css";

// Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
});

// Components
import Navbar from "@/components/common/Navbar/navbar";
import Footer from "@/components/common/Footer/footer";

export const metadata = {
  title: "Top Auto Repair & Tire Shop in TX - Tire Store Service Center",
  description:
    "Tire Store Service Center offers expert auto repair, tire sales, and maintenance services across Texas. Our technicians ensure top-notch care for your vehicle, from tires to repairs. Schedule an appointment online today!",
  keywords:
    "tire store service center, tire store, tire shop, tire repair shop, tire repair service, tire repair near me, auto repair shop, auto repair service, auto repair near me, car repair shop, car repair service, car repair near me, oil change service, oil change near me, brake repair service, brake repair near me, wheel alignment service, wheel alignment near me",
  language: "en",
  subject: "Auto Repair & Tire Shop in TX",
  coverage: "United States",
  robots: "index, follow",
  author: "Tire Store Service Center",
  publisher: "TIRESTORE SERVICE CENTER by eMETHOD Inc.",
  og: {
    type: "website",
    title: "Top Auto Repair & Tire Shop in TX - Tire Store Service Center",
    description:
      "Tire Store Service Center offers expert auto repair, tire sales, and maintenance services across Texas. Our technicians ensure top-notch care for your vehicle, from tires to repairs. Schedule an appointment online today!",
    site_name: "Tire Store Service Center",
    url: "https://promo.tirestoretx.com/",
  },
  alternates: {
    canonical: "https://promo.tirestoretx.com/",
    languages: {
      en: "/en",
    },
  },
};

export default function Layout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5RM5MMCM');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${montserrat.className} text-grey-400 mx-auto text-sm md:text-base font-normal relative`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RM5MMCM"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
