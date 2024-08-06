import { useState } from "react";
import { toastError, toastSuccess } from "../utils/Toast";
import { useNavigate } from "react-router-dom";

export default function useContact () {
  const [ formData, setFormData ] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  } 
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setLoading(true);
      const data = await response.json();
      const success = data.success;
      if (success === true) {
        setLoading(false);
        toastSuccess('Message send successfully!');
        // navigate('/');
      }
    } catch (error) {
      console.log(error);
      toastError('Failed to submit admission form. Please try again later.');
    }
  }
  return { formData, handleChange, handleSubmit, loading }
}