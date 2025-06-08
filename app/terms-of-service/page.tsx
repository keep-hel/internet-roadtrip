"use client"
import HeaderNav from "./components/headerNav";
import "./components/headerNav.css";

export default function Example() {
  return (
    <div className="privacy">
      <HeaderNav />
      <div className="privacy-text"> 
            <h1 className="h1-title text-4xl font-bold">Privacy Policy</h1>
            <div>Welcome to InternetRoadTrip.net. By accessing or using the Site, you agree to comply with and be bound by these terms. If you disagree, do not use the Site.</div>
            <h2 className="h1-title text-3xl font-bold">1. User Eligibility</h2>
            <div>1.You must be at least 13 years old (or the legal age in your jurisdiction) to use the Site.</div>
            <div>2.Creating fake accounts or impersonating others is prohibited.</div>
            <h2 className="h1-title text-3xl font-bold">2. Scope of Services</h2>
            <div><b>1.The Site provides:</b></div>
            <div>Online travel itinerary planning tools</div>
            <div>Travel community content sharing</div>
            <div>Partner offers and subscription services</div>
            <div>Other travel-related digital services</div>
            <div>2.We reserve the right to modify or discontinue services without notice.</div>
            <h2 className="h1-title text-3xl font-bold">3. User Responsibilities</h2>
            <div>You agree NOT to:</div>
            <div>Upload illegal, infringing, or harmful content (e.g., viruses, hate speech)</div>
            <div>Abuse services via automated tools (scrapers, bots)</div>
            <div>Reverse-engineer, hack, or disrupt security features</div>
            <div>Share account credentials; you are liable for all account activities</div>
            <h2 className="h1-title text-3xl font-bold">4. Intellectual Property</h2>
            <div>All Site content (text, images, code, design) is copyrighted and owned by InternetRoadTrip.net or its licensors.</div>
            <div>User-Generated Content License: You grant us a worldwide, non-exclusive, royalty-free license to use your content for Site operations and promotion.</div>
            <h2 className="h1-title text-3xl font-bold">5. Disclaimer of Warranties</h2>
            <div>1.Services are provided "as-is" with no guarantees:</div>
            <div>Uninterrupted availability</div>
            <div>Accuracy of user-generated content</div>
            <div>Safety of third-party links</div>
            <div>2.We are not liable for indirect damages (e.g., data loss, lost profits).</div>
            <h2 className="h1-title text-3xl font-bold">6. Paid Services (If Applicable)</h2>
            <div>Subscriptions auto-renew unless canceled 7 days before renewal</div>
            <div>Payments are non-refundable unless required by law</div>
            <div>Prices may change; existing subscribers retain current rates</div>
            <h2 className="h1-title text-3xl font-bold">7. Termination</h2>
            <div>Violation of these terms</div>
            <div>Account inactivity (exceeding 24 months)</div>
            <div>Legal compliance requirements</div>
            <h2 className="h1-title text-3xl font-bold">8. Dispute Resolution</h2>
            <div>Governing Law: California State Law, USA</div>
            <div>Disputes resolved through binding arbitration (under AAA rules)</div>
            <div>Class action waivers apply</div>
            <h2 className="h1-title text-3xl font-bold">9. Contact</h2>
            <div>For questions about these Terms:</div>
            <div>Email: legal@internetroadtrip.net</div>
      </div>
    </div>
  )
}
