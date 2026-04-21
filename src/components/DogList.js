import DogItem from './DogItem';

function DogList({ dogs, onEdit, onDelete }) {
    if (dogs.length === 0) {
        return <p className="empty-msg">No dogs found.They ran from here.🐕🐕🐕</p>;
    }

    return (
        <div className="dog-list">
            {dogs.map(dog => (
                <DogItem key={dog.id} dog={dog} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default DogList;