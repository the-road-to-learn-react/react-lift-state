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

  const filteredList = list.filter(byQuery(query));

  return (
    <div>
      <Search query={query} handleQuery={handleQuery}>
        Search List:
      </Search>
      <List list={filteredList} />
    </div>
  );
};

const List = ({ list }) => {
  const [archivedItems, setArchivedItems] = React.useState([]);

  const handleArchive = id => {
    setArchivedItems(archivedItems => [...archivedItems, id]);
  };

  return (
    <ul>
      {list.filter(byArchived(archivedItems)).map(item => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span>
            <button
              type="button"
              onClick={() => handleArchive(item.id)}
            >
              Archive
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

const Search = ({ query, handleQuery, children }) => (
  <div>
    {children}
    <input type="text" value={query} onChange={handleQuery} />
  </div>
);

const byQuery = query => item =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

const byArchived = archivedItems => item =>
  !archivedItems.includes(item.id);

export default App;
