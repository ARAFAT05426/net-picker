interface WidgetSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const WidgetSection: React.FC<WidgetSectionProps> = ({ title = "", className = "", children }) => (
    <div className={`${className} group relative w-full`}>
        <h2 className="w-fit relative uppercase text-lg sm:text-xl tracking-wider font-semibold pb-0.5 mb-2.5">
            {title}
            <span className="absolute bottom-0 left-0 h-0.5 w-2/5 bg-primary group-hover:w-3/4 transition-all duration-300" />
        </h2>
        {children}
    </div>
);
export default WidgetSection;