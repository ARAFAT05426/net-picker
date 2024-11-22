import { FiShield, FiGlobe, FiCpu, FiShuffle } from "react-icons/fi";
import { IconType } from "react-icons";
interface OurFeaturesProps {
    icon: IconType,
    title: string,
    description: string
}

const our_features: OurFeaturesProps[] = [{
    icon: FiShuffle,
    title: "our_features.feature1.title",
    description: "our_features.feature1.description"
},
{
    icon: FiCpu,
    title: "our_features.feature2.title",
    description: "our_features.feature2.description"
},
{
    icon: FiShield,
    title: "our_features.feature3.title",
    description: "our_features.feature3.description"
},
{
    icon: FiGlobe,
    title: "our_features.feature4.title",
    description: "our_features.feature4.description"
}
];

export default our_features;
