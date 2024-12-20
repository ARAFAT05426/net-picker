import type { FC } from 'react';

interface BarLoaderProps {
    size?: string;
    color?: string;
    speed?: string;
    className?: string;
}

const BarLoader: FC<BarLoaderProps> = ({
    size = '35px',
    color = '#e7ab3c',
    speed = '1s',
    className = ""
}) => {
    return (
        <>
            <style>
                {`
          .bar-loader-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: var(--uib-size);
            height: calc(var(--uib-size) * 0.9);
          }

          .bar {
            width: 2.5px;
            height: 100%;
            background-color: var(--uib-color);
            transition: background-color 0.3s ease;
          }

          .bar:nth-child(1) {
            animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.45) infinite;
          }

          .bar:nth-child(2) {
            animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.3) infinite;
          }

          .bar:nth-child(3) {
            animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.15) infinite;
          }

          .bar:nth-child(4) {
            animation: grow var(--uib-speed) ease-in-out infinite;
          }

          @keyframes grow {
            0%, 100% {
              transform: scaleY(0.3);
            }
            50% {
              transform: scaleY(1);
            }
          }
        `}
            </style>

            <div
                className={`${className} bar-loader-container`}
                style={{
                    '--uib-size': size,
                    '--uib-color': color,
                    '--uib-speed': speed,
                } as React.CSSProperties}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </>
    );
};

export default BarLoader;
