import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";  // Import useTranslation

const Logo = () => {
    const { t } = useTranslation();  // Initialize the translation function

    return (
        <Link to={"/"} className="text-2xl md:text-3xl tracking-widest font-bold">
            <span className="text-primary">
                {t('logo.net')}
            </span>
            {t('logo.picker')}
            <b className="text-primary">.</b>
        </Link>
    );
};

export default Logo;
