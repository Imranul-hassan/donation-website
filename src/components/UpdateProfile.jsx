
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success('Profile updated successfully!');
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile.');
    }
  };

  return (
    <div className='w-4/12 mx-auto my-10 bg-slate-100 px-5 py-10 shadow-lg rounded-lg'>
      <h2 className="text-center font-bold text-2xl">Update Your Profile</h2>

      <form onSubmit={handleUpdate} className="form-control">
        <div className="form-group mb-2">
          <label htmlFor="photoURL" className="label">Photo URL</label>
          <input
            type="text"
            id="photoURL"
            className="input input-bordered w-full"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter new photo URL"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="name" className="label">Name</label>
          <input
            type="text"
            id="name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter new name"
            required
          />
        </div>
        <button type="submit" className="btn btn-success text-white font-semibold">Update Information</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
