import { ForceSidebarCollapse } from "@/components/force-sidebar-collapse";

export const metadata = {
    title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <ForceSidebarCollapse />
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                Privacy Policy
            </h1>

            <p className="text-muted-foreground text-sm mb-8">
                <strong className="text-foreground">Last updated: January 06, 2026</strong>
            </p>

            <section className="space-y-6 text-muted-foreground leading-7">
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

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                    Information Collection and Use
                </h2>
                <p>
                    For a better experience, while using our Service, the app utilizes third-party 
                    services that collect information used to identify you and analyze app usage. 
                    This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Approximate Location:</strong> Derived from IP addresses to understand regional usage.</li>
                    <li><strong>App Activity:</strong> Tracking interactions such as screens viewed and buttons clicked.</li>
                    <li><strong>Diagnostics:</strong> Collection of error logs and performance data to improve stability.</li>
                    <li><strong>Device IDs:</strong> Unique identifiers used to distinguish users and sessions.</li>
                </ul>
                
                <p className="mt-4">
                    Link to the privacy policy of third-party service providers used by the
                    app:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <a
                            href="https://www.google.com/policies/privacy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                        >
                            Google Play Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://firebase.google.com/policies/analytics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                        >
                            Google Analytics for Firebase
                        </a>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                    Data Deletion Request
                </h2>
                <p>
                    We provide a way for users to request that their collected data is deleted. Since the app 
                    does not use accounts, this data is primarily linked to your device ID. If you wish to 
                    request the deletion of your analytics data, please contact us at:
                </p>
                <p className="font-medium text-foreground">
                    aryan@lagaryan.click
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                    Log Data
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

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                    Cookies
                </h2>
                <p>
                    Cookies are files with a small amount of data that are commonly used as
                    anonymous unique identifiers. These are sent to your browser from the
                    websites that you visit and are stored on your device&apos;s internal
                    memory.
                </p>
                <p>
                    This Service does not use these “cookies” explicitly. However, the app
                    may use third-party code and libraries that use “cookies” to collect
                    information and improve their services. You have the option to either
                    accept or refuse these cookies and know when a cookie is being sent to
                    your device.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                    Service Providers
                </h2>
                <p>
                    We may employ third-party companies and individuals to facilitate our 
                    Service, perform service-related tasks, or assist us in analyzing how 
                    our Service is used. These third parties have access to the information 
                    mentioned above only to perform these tasks on our behalf and are 
                    obligated not to disclose or use it for any other purpose.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                    Security
                </h2>
                <p>
                    We value your trust in providing us your information, thus we
                    are striving to use commercially acceptable means of protecting it. But
                    remember that no method of transmission over the internet, or method of
                    electronic storage is 100% secure and reliable, and we cannot guarantee
                    its absolute security.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                    Links to Other Sites
                </h2>
                <p>
                    This Service may contain links to other sites. If you click on a
                    third-party link, you will be directed to that site. Note that these
                    external sites are not operated by us. Therefore, we strongly advise you
                    to review the Privacy Policy of these websites.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                    Children’s Privacy
                </h2>
                <p>
                    These Services do not address anyone under the age of 13. We do not
                    knowingly collect personally identifiable information from children
                    under 13.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                    Changes to This Privacy Policy
                </h2>
                <p>
                    We may update our Privacy Policy from time to time. Thus, you are
                    advised to review this page periodically for any changes. We will notify
                    you of any changes by posting the new Privacy Policy on this page.
                </p>
                <p>This policy is effective as of 2026-01-06</p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                    Contact Us
                </h2>
                <p>
                    If you have any questions or suggestions about our Privacy Policy, do
                    not hesitate to contact us at aryan@lagaryan.click.
                </p>
            </section>
        </div>
    );
}