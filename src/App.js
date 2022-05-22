import { useState } from 'react';
import Robot from './components/Robot';
import Searchbox from './components/Searchbox';
import { robots } from './data/robots';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState(robots);

  const handleChange = (value) => {
    setSearchQuery(value);
    setFilteredList(
      robots.filter(
        (robot) =>
          robot.name.toLowerCase().includes(value.toLowerCase()) ||
          robot.username.toLowerCase().includes(value.toLowerCase()) ||
          robot.email.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className='container'>
      <h1>ST Technical Interview</h1>
      <Searchbox value={searchQuery} handleChange={handleChange} />
      {filteredList.map((robot) => (
        <Robot key={robot.id} robot={robot} />
      ))}
    </div>
  );
}

export default App;
