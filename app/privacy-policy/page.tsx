import Link from "next/link";
import { ArrowLeft, Terminal, ShieldAlert, Cpu } from "lucide-react";

export const metadata = {
  title: "Privacy Policy // Cyber Mainframe",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen text-[#f4f4f6] font-inter py-12 px-6 md:px-12 relative overflow-x-hidden select-none">
      
      {/* Top Header */}
      <div className="max-w-4xl mx-auto mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 z-10 relative">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors bg-zinc-950 px-4 py-2.5 border border-zinc-900 rounded-xl hover:border-zinc-800"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          Back to Mainframe
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-mono">
            SYS_COMPLIANCE // PROTOCOL_LOGS
          </span>
        </div>
      </div>

      {/* Main Core Container */}
      <main className="max-w-4xl mx-auto z-10 relative space-y-8 pb-32">
        
        {/* Title Area */}
        <div className="space-y-3 pb-6 border-b border-zinc-900">
          <div className="flex items-center gap-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 w-fit">
            <Terminal className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span className="text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider">
              Legal Telemetry
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-outfit font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider">
            Last Updated // <span className="text-zinc-300 font-bold">2026-01-06</span>
          </p>
        </div>

        {/* Terminal Frame Box */}
        <div className="bg-zinc-950/80 border border-zinc-900 rounded-3xl p-6 md:p-8 relative overflow-hidden">
          
          {/* Top terminal headers */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6 font-mono text-[10px] sm:text-xs text-zinc-500 font-bold">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span>session_audit_compliance.log</span>
            <span className="text-indigo-400">STATUS: VERIFIED</span>
          </div>

          {/* Scrollable monospace terminal logs */}
          <div className="font-mono text-xs md:text-sm text-zinc-300 space-y-6 leading-relaxed max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin select-all">
            
            <div className="text-indigo-400 border-b border-zinc-900/60 pb-4">
              {`[AUDIT_LOG_START] INITIALIZING PRIVACY SERVICE COMPLIANCE CONTRACT...\n`}
              {`[AUDIT_LOG] PROVISIONED SERVICE: LEARNAI APPLICATION (FREE_VERSION)\n`}
              {`[AUDIT_LOG] SECURITY CODE: 100-COMPLY-2026`}
            </div>

            <p>
              I built the LearnAI app as a Free app. This SERVICE is provided at no cost and is intended for use test.
            </p>
            
            <p>
              This page is used to inform visitors regarding our policies with the
              collection, use, and disclosure of Personal Information if anyone
              decided to use our Service.
            </p>
            
            <p>
              If you choose to use our Service, then you agree to the collection and
              use of information in relation to this policy. The Personal Information
              that we collect is used for providing and improving the Service. We will
              not use or share your information with anyone except as described in
              this Privacy Policy.
            </p>

            <div className="space-y-4 pt-4 border-t border-zinc-900/60">
              <h2 className="text-white font-bold text-sm md:text-base flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400" />
                1. Information Collection and Use
              </h2>
              <p>
                For a better experience, while using our Service, the app utilizes third-party 
                services that collect information used to identify you and analyze app usage. 
                This includes:
              </p>
              <ul className="list-none pl-4 space-y-2 text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold">-</span>
                  <span><strong>Approximate Location:</strong> Derived from IP addresses to understand regional usage patterns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold">-</span>
                  <span><strong>App Activity:</strong> Tracking interactions such as screens viewed and buttons clicked.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold">-</span>
                  <span><strong>Diagnostics:</strong> Collection of error logs and performance data to improve stability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold">-</span>
                  <span><strong>Device IDs:</strong> Unique identifiers used to distinguish users and sessions.</span>
                </li>
              </ul>
              <p className="mt-4">
                Links to the privacy policy of third-party service providers used by the app:
              </p>
              <ul className="list-none pl-4 space-y-1">
                <li>
                  <a
                    href="https://www.google.com/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-white hover:underline transition-colors font-bold"
                  >
                    - Google Play Services [External]
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebase.google.com/policies/analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-white hover:underline transition-colors font-bold"
                  >
                    - Google Analytics for Firebase [External]
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-900/60">
              <h2 className="text-white font-bold text-sm md:text-base flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-indigo-400" />
                2. Data Deletion Request
              </h2>
              <p>
                We provide a way for users to request that their collected data is deleted. Since the app 
                does not use accounts, this data is primarily linked to your device ID. If you wish to 
                request the deletion of your analytics data, please contact us at:
              </p>
              <div className="bg-zinc-900 border border-zinc-850 p-4 rounded-2xl w-fit text-white font-bold select-all">
                aryan@lagaryan.click
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-900/60">
              <h2 className="text-white font-bold text-sm md:text-base">
                3. Log Data
              </h2>
              <p>
                We want to inform you that whenever you use our Service, in a case of an
                error in the app we collect data and information (through third-party
                products) on your phone called Log Data. This Log Data may include
                information such as your device Internet Protocol (“IP”) address, device
                name, operating system version, the configuration of the app when
                utilizing our Service, the time and date of your use of the Service, and
                other statistics.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-900/60">
              <h2 className="text-white font-bold text-sm md:text-base">
                4. Cookies
              </h2>
              <p>
                Cookies are files with a small amount of data that are commonly used as
                anonymous unique identifiers. These are sent to your browser from the
                websites that you visit and are stored on your device’s internal
                memory.
              </p>
              <p>
                This Service does not use these “cookies” explicitly. However, the app
                may use third-party code and libraries that use “cookies” to collect
                information and improve their services. You have the option to either
                accept or refuse these cookies and know when a cookie is being sent to
                your device.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-900/60">
              <h2 className="text-white font-bold text-sm md:text-base">
                5. Service Providers
              </h2>
              <p>
                We may employ third-party companies and individuals to facilitate our 
                Service, perform service-related tasks, or assist us in analyzing how 
                our Service is used. These third parties have access to the information 
                mentioned above only to perform these tasks on our behalf and are 
                obligated not to disclose or use it for any other purpose.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-900/60">
              <h2 className="text-white font-bold text-sm md:text-base">
                6. Security
              </h2>
              <p>
                We value your trust in providing us your information, thus we
                are striving to use commercially acceptable means of protecting it. But
                remember that no method of transmission over the internet, or method of
                electronic storage is 100% secure and reliable, and we cannot guarantee
                its absolute security.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-900/60">
              <h2 className="text-white font-bold text-sm md:text-base">
                7. Links to Other Sites
              </h2>
              <p>
                This Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that these
                external sites are not operated by us. Therefore, we strongly advise you
                to review the Privacy Policy of these websites.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-900/60">
              <h2 className="text-white font-bold text-sm md:text-base">
                8. Children’s Privacy
              </h2>
              <p>
                These Services do not address anyone under the age of 13. We do not
                knowingly collect personally identifiable information from children
                under 13.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-900/60">
              <h2 className="text-white font-bold text-sm md:text-base">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. Thus, you are
                advised to review this page periodically for any changes. We will notify
                you of any changes by posting the new Privacy Policy on this page.
              </p>
              <p>This policy is effective as of 2026-01-06.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-900/60 text-indigo-400">
              <h2 className="text-white font-bold text-sm md:text-base">
                10. Contact Us
              </h2>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do
                not hesitate to contact us at:
              </p>
              <div className="bg-zinc-900 border border-zinc-850 p-4 rounded-2xl w-fit text-white font-bold select-all">
                aryan@lagaryan.click
              </div>
              <div className="text-[10px] text-zinc-500 pt-4">
                [AUDIT_LOG_END] PROTOCOLS REPORT TERMINATED SUCCESSFULLY.
              </div>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
