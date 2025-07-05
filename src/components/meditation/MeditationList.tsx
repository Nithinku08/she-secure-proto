
import { useState } from 'react';
import { meditationData, MeditationItem } from '@/data/meditationData';
import MeditationCard from './MeditationCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const MeditationList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCondition, setFilterCondition] = useState('all');
  
  const conditions = Array.from(new Set(meditationData.map(item => item.condition)));

  const filteredMeditation = meditationData.filter(item => {
    return (
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterCondition === 'all' || item.condition === filterCondition)
    );
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Label htmlFor="search" className="text-sm mb-2 block">Search Meditation Practices</Label>
          <Input
            id="search"
            placeholder="Search by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="condition-filter" className="text-sm mb-2 block">Filter by Condition</Label>
          <Select value={filterCondition} onValueChange={setFilterCondition}>
            <SelectTrigger id="condition-filter" className="w-full">
              <SelectValue placeholder="All Conditions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Conditions</SelectItem>
              {conditions.map(condition => (
                <SelectItem key={condition} value={condition}>{condition}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {filteredMeditation.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No meditation practices match your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeditation.map((item: MeditationItem) => (
            <MeditationCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MeditationList;
