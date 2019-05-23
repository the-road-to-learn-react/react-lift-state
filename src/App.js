import React from 'react';

const MYLIST = [
  { id: 'a', name: 'React' },
  { id: 'b', name: 'Redux' },
];

const App = () => <SearchableList list={MYLIST} />;

const SearchableList = ({ list }) => (
  <div>
    <Search>Search List:</Search>
    <List list={list} />
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

const Search = ({ children }) => {
  const [query, setQuery] = React.useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      {children}
      <input type="text" value={query} onChange={handleChange} />
    </div>
  );
};

export default App;
