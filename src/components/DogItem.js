function DogItem({ dog, onEdit, onDelete }) {
    const subs = dog.subBreeds ? dog.subBreeds.split(',').filter(Boolean) : [];

    return (
        <div className="dog-item">
            <div className="dog-info">
                <strong className="breed-name">{dog.breed}</strong>
                {subs.length > 0 && (
                    <span className="sub-breeds">→ {subs.join(', ')}</span>
                )}
            </div>
            <div className="dog-actions">
                <button onClick={() => onEdit(dog)}>Edit</button>
                <button className="danger" onClick={() => onDelete(dog.id)}>Delete</button>
            </div>
        </div>
    );
}

export default DogItem;