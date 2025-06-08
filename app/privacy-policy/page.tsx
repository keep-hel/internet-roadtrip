"use client"
import HeaderNav from "./components/headerNav";
import "./components/headerNav.css";

export default function Example() {
  return (
    <div className="privacy">
      <HeaderNav />
      <div className="privacy-txt"> 
            <div>Last updated: May 08, 2025</div>
            <h1 className="h1-title text-4xl font-bold">Privacy Policy</h1>
            <div>Welcome to InternetRoadTrip.net (the "Site"). We are committed to protecting your privacy. This policy explains how we collect, use, store, and safeguard your personal information. Please read this document carefully.</div>
            <h2 className="h1-title text-3xl font-bold">1. Information We Collect</h2>
            <div className="font-bold">1.Information You Provide:</div>
            <div>Account registration details (name, email, password).</div>
            <div>Payment information (credit card, billing address) for purchases.</div>
            <div>Content submitted via forms, comments, or contact features.</div>
            <div className="font-bold">2.Automatically Collected Data</div>
            <div>Device Information: IP address, browser type, operating system, device identifiers.</div>
            <div>Usage Data: Pages visited, clickstream behavior, session duration, referral URLs (collected via cookies and similar technologies).</div>
            <div className="font-bold">3.Third-Party Sources</div>
            <div>If you log in via social media (e.g., Google, Facebook), we may receive limited profile data you authorize.</div>

            <h2 className="h1-title text-3xl font-bold">2. How We Use Your Information</h2>

            <div>We may use your information to:</div>
            <div>Provide, maintain, and improve our services.</div>
            <div>Process transactions and respond to support requests.</div>
            <div>Send service-related notices, updates, or promotional materials (opt-out available).</div>
            <div>Analyze user behavior to enhance site functionality.</div>
            <div>Prevent fraud or unauthorized activities.</div>
            
            <h2 className="h1-title text-3xl font-bold">3. Sharing and Disclosure</h2>
            <div>We share your information only in the following cases:</div>
            <div>Service Providers: Third parties assisting with payment processing, hosting, analytics (e.g., Stripe, Google Analytics).</div>
            <div>Legal Compliance: To comply with court orders, government requests, or applicable laws.</div>
            <div>Business Transfers: In mergers, acquisitions, or asset sales, user data may be transferred.</div>

            <h2 className="h1-title text-3xl font-bold">4. Your Rights</h2>
            <div>You have the right to:</div>
            <div>Access, correct, or delete your personal data.</div>
            <div>Opt out of marketing communications (via "unsubscribe" links).</div>
            <div>Disable cookies (via browser settings, though site features may be affected).</div>
            <h2 className="h1-title text-3xl font-bold">5. Data Security</h2>
            <div>We implement encryption (SSL), access controls, and other safeguards. However, no internet transmission is 100% secure.</div>
            <h2 className="h1-title text-3xl font-bold">6. Cookie Policy</h2>
            <div>We use cookies to:</div>
            <div>Remember login sessions and preferences.</div>
            <div>Analyze traffic sources and user behavior (disable via browser settings).</div>

            <h2 className="h1-title text-3xl font-bold">7. Children’s Privacy</h2>
            <div>This Site does not target users under 13. Contact us to remove data if a child has provided information.</div>

            <h2 className="h1-title text-3xl font-bold">8. Policy Updates</h2>
            <div>We may update this policy. Changes will be posted on the Site or communicated via email.</div>

            <h2 className="h1-title text-3xl font-bold">9. Contact Us</h2>
            <div>For privacy-related inquiries, contact:</div>
            <div>Email: legal@internetroadtrip.net</div>
      </div>
    </div>
  )
}
