import LinkBtn from "../../btns/LinkBtn";

const WelcomeAdmin = ({ adminName = 'Khan' }) => {
    return (
        <div className="px-5 sm:px-10 md:px-14 py-5 rounded-sm flex items-center border">
            {/* Animated Card Container */}
            <div className="w-full flex items-center justify-between flex-col sm:flex-row">
                {/* Greeting Text */}
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <h1 className="text-3xl sm:text-5xl font-bold tracking-wide">
                        Welcome Back, {adminName}!
                    </h1>
                    <p className="text-base sm:text-lg opacity-75 mb-5">
                        Ready to manage your platform? Let's make today productive.
                    </p>
                    <LinkBtn to="/">
                        Get Started
                    </LinkBtn>
                </div>
                {/* Image */}
                <img className="max-w-full sm:max-w-56 mr-0 sm:mr-5" src="/admin.png" alt="admin" />
            </div>
        </div>
    );
};

export default WelcomeAdmin;
