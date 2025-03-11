
import { useState, useRef } from 'react';
import { Camera } from 'lucide-react';

const ProfileUploader = () => {
  const [profileImage, setProfileImage] = useState<string | null>(
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setProfileImage(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative w-80 h-96 newspaper-overlay overflow-hidden rounded-lg transform transition-all duration-1000 opacity-100 scale-100">
      {profileImage ? (
        <img 
          src={profileImage}
          alt="Profile" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center">
          <span className="text-muted-foreground">Upload an image</span>
        </div>
      )}
      
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
        <div>
          <div className="font-serif uppercase tracking-wider text-white/90 text-sm">Developer</div>
          <div className="font-serif uppercase tracking-wider text-white/90 text-sm mt-1">Innovator</div>
        </div>
        <div>
          <div className="font-serif uppercase tracking-wider text-white/90 text-sm">Est. 2023</div>
        </div>
      </div>
      
      <button
        onClick={triggerFileInput}
        className="absolute right-3 bottom-3 p-2 bg-purple rounded-full text-white hover:bg-purple-light transition-colors z-30"
        aria-label="Upload profile picture"
      >
        <Camera size={18} />
      </button>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default ProfileUploader;
