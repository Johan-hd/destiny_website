// Ruta: app/privacy-policy/page.tsx

import Navbar from '@/components/Navbar'; // <-- IMPORTANTE: Ajusta esta ruta si es necesario

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar /> {/* <-- Navbar añadida */}
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl text-[var(--text-primary)]">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p>
            The website https://destinyvtc.wixsite.com/my-site is owned by Destiny VTC, which is a data controller of your personal data.
          </p>
          <p>
            We have adopted this Privacy Policy, which determines how we process the information collected by https://destinyvtc.wixsite.com/my-site, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using the https://destinyvtc.wixsite.com/my-site website.
          </p>
          <p>
            We take care of your personal data and are committed to ensuring its confidentiality and security.
          </p>

          <h2 className="text-2xl font-bold pt-4 text-[var(--text-primary)]">Personal information we collect:</h2>
          <p>
            When you visit https://destinyvtc.wixsite.com/my-site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. Additionally, as you browse the site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the site, and how you interact with it. We refer to this automatically-collected information as &quot;Device Information.&quot; Furthermore, we may collect the personal data you provide to us (including but not limited to Name, Last Name, Address, payment information, etc.) during registration to be able to fulfill the agreement.
          </p>

          <h2 className="text-2xl font-bold pt-4 text-[var(--text-primary)]">Why do we process your data?</h2>
          <p>
            Our top priority is customer data security, and as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that would identify any particular user of the system.
          </p>
          <p>
            You can visit the site without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website&apos;s features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, and telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website&apos;s features. For example, you won&apos;t be able to receive our Newsletter or contact us directly from the website. Users who are unsure about what information is mandatory are welcome to contact us via <a href="mailto:destiny_vtc@outlook.com" className="text-[var(--accent-primary)] hover:underline">destiny_vtc@outlook.com</a>.
          </p>

          <h2 className="text-2xl font-bold pt-4 text-[var(--text-primary)]">Your rights:</h2>
          <p>
            If you are a European resident, you have the following rights related to your personal data:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>The right to be informed.</li>
            <li>The right of access.</li>
            <li>The right to rectification.</li>
            <li>The right to erasure.</li>
            <li>The right to restrict processing.</li>
            <li>The right to data portability.</li>
            <li>The right to object.</li>
            <li>Rights in relation to automated decision making and profiling.</li>
          </ul>
          <p>
            If you would like to exercise this right, please contact us through the contact information below.
          </p>
          <p>
            Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information might be transferred outside of Europe, including Canada and the United States.
          </p>

          <h2 className="text-2xl font-bold pt-4 text-[var(--text-primary)]">Links to other websites:</h2>
          <p>
            Our site may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or the privacy practices of third parties. We encourage you to be aware when you leave our website and to read the privacy statements of each and every website that may collect personal information.
          </p>

          <h2 className="text-2xl font-bold pt-4 text-[var(--text-primary)]">Information security:</h2>
          <p>
            We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and disclosure of personal data in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.
          </p>

          <h2 className="text-2xl font-bold pt-4 text-[var(--text-primary)]">Legal disclosure:</h2>
          <p>
            We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
          </p>

          <h2 className="text-2xl font-bold pt-4 text-[var(--text-primary)]">Contact information:</h2>
          <p>
            If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to <a href="mailto:destiny_vtc@outlook.com" className="text-[var(--accent-primary)] hover:underline">destiny_vtc@outlook.com</a>.
          </p>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicyPage;