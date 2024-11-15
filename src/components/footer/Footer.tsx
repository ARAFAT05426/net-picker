import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import social_links from '../../statics/social_links';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-secondary text-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10">

        {/* Logo and About Section */}
        <div className="space-y-3.5">
          <Logo />
          <p className="max-w-sm text-xs tracking-widest">
            {t("footer.about.description")}
          </p>
          <div className="flex space-x-2 pt-3">
            {social_links?.map((social_link, i) => (
              <Link
                key={i}
                to={social_link.path}
                className="bg-accent text-white p-2.5 hover:bg-primary rounded-sm transition-colors"
              >
                <social_link.icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">{t("footer.quick_links.title")}</h4>
          <ul className="space-y-1 text-sm tracking-widest">
            <li><Link to="/about" className="hover:underline">{t("footer.quick_links.about_us")}</Link></li>
            <li><Link to="/blog" className="hover:underline">{t("footer.quick_links.blog")}</Link></li>
            <li><Link to="/contact" className="hover:underline">{t("footer.quick_links.contact")}</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">{t("footer.quick_links.privacy_policy")}</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">{t("footer.contact_us.title")}</h4>
          <p className="text-sm">{t("footer.contact_us.email")}: support@netpicker.com</p>
          <p className="text-sm">{t("footer.contact_us.phone")}: +123 456 7890</p>
          <p className="text-sm">{t("footer.contact_us.address")}: 1234 Net Picker Street, City, Country</p>
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">{t("footer.subscribe.title")}</h4>
          <p className="text-xs tracking-widest">{t("footer.subscribe.description")}</p>
          <form className="flex w-full max-w-xs bg-accent rounded-sm overflow-hidden">
            <input
              type="email"
              placeholder={t("footer.subscribe.placeholder")}
              className="w-full px-3 py-2 bg-accent text-black rounded-l-sm outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2.5 rounded-r-sm hover:bg-accent transition"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-t-[#303030] text-xs py-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 px-5">
          <p>{t("footer.bottom.copy")}</p>
          <div className="flex items-center gap-2">
            <Link to="/terms" className="hover:text-accent">{t("footer.bottom.terms")}</Link>
            <span>|</span>
            <Link to="/subscription" className="hover:text-accent">{t("footer.bottom.subscription")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
