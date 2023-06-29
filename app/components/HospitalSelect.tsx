import { useEffect, useState } from 'react';
import axios from 'axios';

type Hospital = {
  name: string;
  consultation_fee: number;
};

const HospitalSelect: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    try {
      const response = await axios.get('https://ef02-41-139-168-163.ngrok-free.app/v1/hospitals', {
        headers: {
          Authorization: 'Bearer',
        },
      });
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  return (
    <select
      id="currency"
      name="currency"
      className="h-full w-56 rounded-md border-2 bg-transparent py-2 pl-2 px-6 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
    >
      {hospitals.map((hospital) => (
        <option key={hospital.name} value={hospital.consultation_fee}>
          {`${hospital.name} : ${hospital.consultation_fee}`}
        </option>
      ))}
    </select>
  );
};

export default HospitalSelect;
