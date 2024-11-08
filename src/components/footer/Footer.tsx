import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import social_links from '../../statics/social_links';

const Footer = () => {
    return (
        <footer className="w-full bg-secondary text-white">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-12 px-5">

                {/* Logo and About Section */}
                <div className="space-y-3">
                    <Link to="/">
                        <img src="/images/logo.png" alt="Net Picker Logo" className="w-32" />
                    </Link>
                    <p className="max-w-xs text-sm">
                        Net Picker is your trusted platform for product comparison, offering transparent, AI-enhanced recommendations to help you make the best shopping choices.
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
                    <h4 className="text-lg font-semibold">Information</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/about" className="hover:underline">About Us</Link></li>
                        <li><Link to="/blog" className="hover:underline">Blog</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                        <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="space-y-3">
                    <h4 className="text-lg font-semibold">Contact Us</h4>
                    <p className="text-sm">Email: support@netpicker.com</p>
                    <p className="text-sm">Phone: +123 456 7890</p>
                    <p className="text-sm">Address: 1234 Net Picker Street, City, Country</p>
                </div>

                {/* Newsletter Subscription */}
                <div className="space-y-3">
                    <h4 className="text-lg font-semibold">Subscribe to Our Newsletter</h4>
                    <p className="text-sm">Get updates on the latest product comparisons and promotions.</p>
                    <form className="flex w-full max-w-xs bg-accent rounded-sm overflow-hidden">
                        <input
                            type="email"
                            placeholder="Your Email"
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
                    <p>&copy; {new Date().getFullYear()} Net Picker | All Rights Reserved</p>
                    <div className="flex items-center gap-2">
                        <Link to="/terms" className="hover:text-accent">Terms & Conditions</Link>
                        <span>|</span>
                        <Link to="/subscription" className="hover:text-accent">Subscription</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
