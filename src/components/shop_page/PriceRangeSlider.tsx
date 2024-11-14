import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';

interface PriceRangeSliderProps {
    min: number;
    max: number;
    onChange: (value: { min: number; max: number }) => void;
    currencyText?: string;
    width?: string;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
    min = 0,
    max = 100,
    onChange,
    currencyText = "$",
}) => {
    const [values, setValues] = React.useState([min, max]);

    const handleChange = (values: number[]) => {
        setValues(values);
        onChange({ min: values[0], max: values[1] });
    };

    return (
        <div className="w-full flex flex-col space-y-3.5 mt-3.5">
            <div className="flex items-center justify-between w-full text-sm tracking-widest font-semibold">
                <input defaultValue={currencyText + values[0]} className='w-fit max-w-24 outline-none px-3.5 py-1 border rounded-sm'/>
                <input defaultValue={currencyText + values[1]} className='w-fit max-w-24 px-3.5 py-1 outline-none border rounded-sm'/>
            </div>
            <div className='px-1.5 w-full'>
                <Range
                    values={values}
                    step={1}
                    min={min}
                    max={max}
                    onChange={handleChange}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "5px",
                                background: getTrackBackground({
                                    values,
                                    colors: ["#ebebeb", "#e7ab3c", "#ebebeb"],
                                    min,
                                    max,
                                }),
                                borderRadius: "0.75px",
                                width: "100%",
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "18px",
                                width: "18px",
                                borderRadius: "1.25px",
                                backgroundColor: "#e7ab3c",
                                outline: "none",
                            }}
                        />
                    )}
                />
            </div>
            <button className='w-fit bg-primary text-white px-8 py-1.5 font-semibold text-sm tracking-widest'>
                Apply
            </button>
        </div>
    );
};

export default PriceRangeSlider;
