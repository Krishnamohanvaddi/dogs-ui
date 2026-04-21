import { useState, useEffect } from 'react';
import { fetchAllDogs, createDog, updateDog, deleteDog } from './api/dogsApi';
import DogList from './components/DogList';
import DogForm from './components/DogForm';
import './App.css';

function App() {
  const [dogs, setDogs] = useState([]);
  const [editingDog, setEditingDog] = useState(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadDogs();
  }, []);

  async function loadDogs() {
    try {
      const response = await fetchAllDogs();
      setDogs(response.data);
    } catch (err) {
      setError('Failed to load dogs. hey is your backend running?');
    }
  }

  async function handleCreate(dogData) {
    try {
      await createDog(dogData);
      await loadDogs();
      setError('');
    } catch (err) {
      setError('Not able to add breed. It may already exist check karo');
    }
  }

  async function handleUpdate(dogData) {
    try {
      await updateDog(editingDog.id, dogData);
      setEditingDog(null);
      await loadDogs();
      setError('');
    } catch (err) {
      setError('Update failed.');
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this breed? 🐕‍🦺 ')) return;
    try {
      await deleteDog(id);
      await loadDogs();
      setError('');
    } catch (err) {
      setError('Delete failed.');
    }
  }

  const filtered = dogs.filter(d =>
      d.breed.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <div className="app">
        <header>
          <h1>Dog Breeds🐶</h1>
          <p>{dogs.length} breeds in the database</p>
        </header>

        <main>
          <section className="form-section">
            <h2>{editingDog ? 'Edit breed' : 'Add a new breed'}</h2>
            <DogForm
                onSubmit={editingDog ? handleUpdate : handleCreate}
                editingDog={editingDog}
                onCancel={() => setEditingDog(null)}
            />
          </section>

          {error && <p className="error-msg">{error}</p>}

          <section className="list-section">
            <input
                className="search-box"
                type="text"
                placeholder="Search breeds..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <DogList
                dogs={filtered}
                onEdit={setEditingDog}
                onDelete={handleDelete}
            />
          </section>
        </main>
      </div>
  );
}

export default App;