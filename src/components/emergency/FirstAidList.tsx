
import { useState } from 'react';
import { firstAidData, FirstAidItem } from '@/data/emergencyData';
import FirstAidCard from './FirstAidCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FirstAidList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredFirstAid = firstAidData.filter(item => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="search" className="text-sm mb-2 block">Search Emergency Procedures</Label>
        <Input
          id="search"
          placeholder="Search for emergency situations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md"
        />
      </div>
      
      {filteredFirstAid.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No emergency procedures match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFirstAid.map((item: FirstAidItem) => (
            <FirstAidCard key={item.id} item={item} />
          ))}
        </div>
      )}
      
      <div className="bg-medical-light-purple/50 p-4 rounded-lg border border-medical-purple/20">
        <p className="text-sm text-gray-700">
          <strong className="font-medium">Important:</strong> These first aid guidelines are for informational purposes only and are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </div>
    </div>
  );
};

export default FirstAidList;
