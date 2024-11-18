import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import social_links from '../../statics/social_links';
import useLocalStorage from '../../hooks/useLocalStorage';

interface TopHeaderProps {
    isScrolled: number;
}

const TopHeader = ({ isScrolled }: TopHeaderProps) => {
    const { t, i18n } = useTranslation();
    const { value: language, setValue: setLanguage } = useLocalStorage<string>('language', 'en');

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage); // Update the language in localStorage
        i18n.changeLanguage(selectedLanguage); // Immediately change the language in i18next
    };

    return (
        <div className={`border-b border-b-accent/25 ${isScrolled > 50 ? 'h-0 overflow-hidden' : 'h-10 overflow-visible'} transition-all duration-300`}>
            <div className="container flex items-center justify-between text-sm md:text-sm">
                <span className="hidden md:block">
                    {t('header.welcome')} <b className="underline">{t('header.guest')}</b> {t('header.to_net_picker')}
                </span>

                <div className="flex items-center gap-x-2.5 ml-auto">
                    {/* Social Links */}
                    <div className="h-10 hidden md:flex items-center gap-x-1.5 py-2.5 pr-1.5 border-r">
                        {social_links?.map((social_link, i) => (
                            <Link key={i} to={social_link?.path}>
                                <social_link.icon size={15} />
                            </Link>
                        ))}
                    </div>

                    {/* Language Selector */}
                    <div className="relative h-9 mr-1.5 border-r">
                        <select
                            className="h-full text-xs tracking-wider transition-all duration-300 focus:outline-none"
                            value={language} // Bind to `language` state
                            onChange={handleLanguageChange} // Trigger on language change
                        >
                            <option value="en">
                                {t('header.english')}
                            </option>
                            <option value="fr">
                                {t('header.french')}
                            </option>
                            <option value="ar">
                                {t('header.arabic')}
                            </option>
                        </select>
                    </div>

                    {/* Login Link */}
                    <Link className="pl-1.5 flex items-center gap-x-1.5 hover:text-primary transition-all duration-300" to={'/signup'}>
                        <FaUserAlt />
                        {t('header.login')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
