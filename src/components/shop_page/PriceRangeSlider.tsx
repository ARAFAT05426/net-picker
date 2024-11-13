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
        <div className="w-full flex flex-col items-center space-y-3.5 mt-3.5">
            <div className="flex items-center justify-between w-full text-sm tracking-widest font-semibold">
                <span className='px-3.5 py-0.5 border rounded-sm'>{currencyText} {values[0]}</span>
                <span className='px-3.5 py-0.5 border rounded-sm'>{currencyText} {values[1]}</span>
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
        </div>
    );
};

export default PriceRangeSlider;
