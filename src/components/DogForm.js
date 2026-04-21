import { useState, useEffect } from 'react';

function DogForm({ onSubmit, editingDog, onCancel }) {
    const [breed, setBreed] = useState('');
    const [subBreeds, setSubBreeds] = useState('');

    useEffect(() => {
        if (editingDog) {
            setBreed(editingDog.breed);
            setSubBreeds(editingDog.subBreeds || '');
        } else {
            setBreed('');
            setSubBreeds('');
        }
    }, [editingDog]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!breed.trim()) return;
        onSubmit({ breed: breed.trim().toLowerCase(), subBreeds: subBreeds.trim() });
        setBreed('');
        setSubBreeds('');
    }

    return (
        <form onSubmit={handleSubmit} className="dog-form">
            <input
                type="text"
                placeholder="Breed (e.g. labrador)"
                value={breed}
                onChange={e => setBreed(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Sub-breeds comma separated (e.g. golden,curly)"
                value={subBreeds}
                onChange={e => setSubBreeds(e.target.value)}
            />
            <button type="submit">{editingDog ? 'Update' : 'Add Dog'}</button>
            {editingDog && <button type="button" onClick={onCancel}>Cancel</button>}
        </form>
    );
}

export default DogForm;