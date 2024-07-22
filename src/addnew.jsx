import React from 'react';
import { Toolbar } from './button'; // Import Toolbar from button.jsx

function AddNew() {
    return (
        <div>
            <h1 style={{ textAlign: 'left', margin: '20px' }}>Add New</h1>
            <div style={{ margin: '20px' }}>
                <Toolbar
                    onPlayMovie={() => alert('Playing!')}
                    onUploadImage={() => alert('Uploading!')}
                />
            </div>
        </div>
    );
}

export default AddNew;
