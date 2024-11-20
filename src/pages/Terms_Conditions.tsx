const Terms_Conditions = () => {
  return (
    <section className="container py-5 space-y-4">
      <h1 className="text-3xl font-bold text-center">Terms and Conditions</h1>

      <div className="">
        <h2 className="text-2xl font-semibold ">1. Introduction</h2>
        <p>
          Welcome to Net Picker. By using our platform, you agree to these terms and conditions.
          Please read them carefully before using the site. If you do not agree, do not use the platform.
        </p>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold ">2. User Responsibilities</h2>
        <p>
          As a user, you are responsible for maintaining the confidentiality of your account details and for all activities under your account.
          You agree to use our services only for lawful purposes.
        </p>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold ">3. Privacy and Data Protection</h2>
        <p>
          Net Picker values your privacy. We collect data to improve our services. Please review our
          <a href="/privacy-policy" className="text-primary"> Privacy Policy</a> for more details.
        </p>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold ">4. Affiliate Marketing</h2>
        <p>
          Our platform includes affiliate links, which means we may earn commissions on purchases made through those links.
          However, our product comparisons are unbiased, and we strive to provide the best offers to our users.
        </p>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold ">5. Limitation of Liability</h2>
        <p>
          We make no warranties about the accuracy or completeness of the product information on the platform.
          Net Picker is not liable for any loss or damage caused by the use of the platform.
        </p>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold ">6. Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Any changes will be posted on this page with an updated effective date.
        </p>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold ">7. Governing Law</h2>
        <p>
          These terms are governed by the laws of the jurisdiction in which Net Picker operates.
        </p>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold ">8. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at:
          <a href="mailto:support@netpicker.com" className="text-primary"> support@netpicker.com</a>
        </p>
      </div>
    </section>
  );
};

export default Terms_Conditions;
