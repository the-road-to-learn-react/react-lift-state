import React from 'react';

const MYLIST = [
  { id: 'a', name: 'React' },
  { id: 'b', name: 'Redux' },
];

const App = () => <SearchableList list={MYLIST} />;

const SearchableList = ({ list }) => {
  const [query, setQuery] = React.useState('');

  const handleQuery = event => {
    setQuery(event.target.value);
  };

  const filteredList = !query
    ? list
    : list.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div>
      <Search query={query} handleQuery={handleQuery}>
        Search List:
      </Search>
      <List list={filteredList} />
    </div>
  );
};

const List = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

const Search = ({ query, handleQuery, children }) => (
  <div>
    {children}
    <input type="text" value={query} onChange={handleQuery} />
  </div>
);

export default App;
