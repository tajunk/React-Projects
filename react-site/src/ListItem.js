import React, { useState } from 'react';
import DataService from './services/ItemService';

const ListItem = (props) => {
  const initialListItemState = {
    key: null,
    title: '',
    description: '',
    published: false,
  };
  const [currentListItem, setCurrentListItem] = useState(initialListItemState);
  const [message, setMessage] = useState('');

  const { listitem } = props;
  if (currentListItem.id !== listitem.id) {
    setCurrentListItem(listitem);
    setMessage('');
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentListItem({ ...currentListItem, [name]: value });
  };

  const updatePublished = (status) => {
    DataService.update(currentListItem.id, { published: status })
      .then(() => {
        setCurrentListItem({ ...currentListItem, published: status });
        setMessage('The status was updated successfully!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateListItem = () => {
    const data = {
      title: currentListItem.title,
      description: currentListItem.description,
    };

    DataService.update(currentListItem.id, data)
      .then(() => {
        setMessage('The item was updated successfully!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteListItem = () => {
    DataService.remove(currentListItem.id)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentListItem ? (
        <div className='edit-form'>
          <h4>Item</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                className='form-control'
                id='title'
                name='title'
                value={currentListItem.title}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                className='form-control'
                id='description'
                name='description'
                value={currentListItem.description}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentListItem.published ? 'Published' : 'Pending'}
            </div>
          </form>

          {currentListItem.published ? (
            <button
              className='badge badge-primary mr-2'
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className='badge badge-primary mr-2'
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className='badge badge-danger mr-2' onClick={deleteListItem}>
            Delete
          </button>

          <button
            type='submit'
            className='badge badge-success'
            onClick={updateListItem}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Item...</p>
        </div>
      )}
    </div>
  );
};

export default ListItem;
