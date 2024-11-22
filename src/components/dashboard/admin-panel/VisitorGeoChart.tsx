import { useState } from 'react';
import { Chart } from 'react-google-charts';
import { useQuery } from '@tanstack/react-query';
import axios_common from '../../../utils/axios_common';
import BarLoader from '../../common/BarLoader';

const fetchVisitorData = async () => {
  const response = await axios_common.get('/visitor-stats');
  return response.data;
};

const VisitorGeoChart = () => {
  const [isDaily, setIsDaily] = useState(true);

  // Fetch data using useQuery
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['visitorStats', isDaily],
    queryFn: async () => await fetchVisitorData(),
  });

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className="min-h-96 flex items-center justify-center">
        <BarLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching visitor data</div>;
  }

  // Trigger a refetch when `isDaily` changes
  const toggleDataType = (isDailySelected: boolean) => {
    setIsDaily(isDailySelected);
    refetch();
  };

  const formattedData = isDaily ? data.daily : data.monthly;

  if (!Array.isArray(formattedData)) {
    return <div>Invalid data format</div>;
  }

  const chartData = [
    ['Country', 'Visitor Count'],
    ...formattedData.map((item) => [
      item.country || 'Unknown Country',
      item.visitor || 0,
    ]),
  ];

  const options = {
    colorAxis: { colors: ['#f8c471', '#d35400'] },
    datalessRegionColor: '#cccccc',
    defaultColor: '#f5f5f5',
  };

  return (
    <div className="border p-5 mt-2.5">
      {/* Toggle buttons to switch between daily and monthly */}
      <div className="flex flex-wrap justify-start mb-4">
        <button
          className={`px-5 py-1.5 ${isDaily ? 'bg-secondary' : 'bg-primary'} text-white`}
          onClick={() => toggleDataType(true)}
        >
          Daily
        </button>
        <button
          className={`px-5 py-1.5 ${!isDaily ? 'bg-secondary' : 'bg-primary'} text-white`}
          onClick={() => toggleDataType(false)}
        >
          Monthly
        </button>
      </div>

      {/* Google Chart rendering with responsive width and height */}
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        <Chart
          chartType="GeoChart"
          width="100%"
          height="100%"  // Responsive height
          data={chartData}
          options={options}
        />
      </div>
    </div>
  );
};

export default VisitorGeoChart;
