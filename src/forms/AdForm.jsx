// AdForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AdForm.css";

export const AdForm = ({ onSubmit, ad }) => {
  const [imageUrl, setImageUrl] = useState(ad ? ad.image : null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Generate unique ID
  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit handler
  const onSubmitHandler = (data) => {
    const adData = {
      id: ad?.id || generateUniqueId(), // Use existing ID or generate a new one
      ...data,
      image: imageUrl,
    };
    onSubmit(adData); // Pass the ad data to the onSubmit function
    reset(); // Reset form after submission
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <label>Title:</label>
          <input
            {...register("title", { required: true })}
            defaultValue={ad ? ad.title : ""}
            type="text"
          />
          {errors.title && <span className="error">Title is required</span>}
        </div>
        <div>
          <label>Description:</label>
          <textarea
            {...register("description", { required: true })}
            defaultValue={ad ? ad.description : ""}
          />
          {errors.description && (
            <span className="error">Description is required</span>
          )}
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            {...register("image", { required: true })}
            onChange={handleImageChange}
          />
          {imageUrl && (
            <img src={imageUrl} alt="Image Preview" className="image-preview" />
          )}
          {errors.image && <span className="error">Image is required</span>}
        </div>
        <button type="submit">{ad ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};
