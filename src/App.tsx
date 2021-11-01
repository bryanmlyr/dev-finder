import React, { useState } from 'react';

import SearchBar from './components/searchBar';
import Title from './components/title';
import Card from './components/card';

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <div className="flex flex-col md:justify-center items-center md:h-screen min-h-screen sm:h-full bg-gray-900">
      <div className="lg:w-3/6 md:w-5/6 sm:w-screen">
        <Title title="DEV FINDER 👨🏻‍💻" />
        <SearchBar callback={setUserData} />
        <Card userData={userData} />
      </div>
    </div>
  );
}

export default App;
