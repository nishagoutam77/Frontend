import React, { useState, useRef } from 'react';
import axios from 'axios';  
import './upload.css'; 

const FileUpload = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});  
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);  
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        setErrors({});

        const newErrors = {};
        if (!name) newErrors.name = "Name is required.";
        if (!email) newErrors.email = "Email is required.";
        if (!file) newErrors.file = "File is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;  
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email); 
        formData.append('file', file);      

        try {
            const response = await axios.post('http://localhost:5000/files/upload', formData);

            setMessage("File uploaded successfully!");
            console.log('Download URL:', response.data.fileUrl);

            setName('');
            setEmail('');
            setFile(null);
            if (fileInputRef.current) {
              fileInputRef.current.value = ''; 
          }
        } catch (error) {

            console.error('Error uploading file:', error);
            setMessage("Failed to upload file.");
        }
    };

    return (
        <div className="file-upload-container">
            <form onSubmit={handleSubmit} className="file-upload-form">
                <h2>Upload File</h2>
                
                <div className="form-group" id='group'>
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                    />
                </div>
                {errors.name && <div className="error-message">{errors.name}</div>} 

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                {errors.email && <div className="error-message">{errors.email}</div>} {/* Display email error */}

                <div className="form-group">
                    <label htmlFor="file">Upload File:</label>
                    <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />
                </div>
                {errors.file && <div className="error-message">{errors.file}</div>}

                <button type="submit" className="submit-btn">Submit</button>
                {message && <div className="success-message">{message}</div>}
            </form>
        </div>
    );
};

export default FileUpload;
