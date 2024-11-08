// import type { FC } from 'react';

import { Link } from "react-router-dom";

// interface LogoProps {}

const Logo = () => {
    return (<Link to={"/"} className="text-2xl md:text-3xl font-bold">Net<span className="text-primary">P</span>icker<b className="text-primary">.</b></Link>);
}
export default Logo;