import React from 'react';
import { useField } from 'formik';

interface StudentPictureProps {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    id?: string;
}

export const StudentPicture: React.FC<StudentPictureProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);

    const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('uploadImage called');

        const target = e.target;
        const selectedFile = target.files?.[0];

        if (!selectedFile) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);
        console.log('formData:', formData);

        // To further debug, you could log file details:
        console.log('File:', selectedFile.name, selectedFile.size);
    };

    return (
        <div className='w-full flex flex-col gap-1 h-28'>
            <label className='leading-6 tracking-tight' htmlFor={props.id || props.name}>
                {label}
            </label>
            <input
                type='file'
                id={props.id || props.name}
                className="w-full bg-gray-100 border p-3 h-12 rounded-lg placeholder:text-slate-500 placeholder:text-sm"
                onChange={uploadImage}
                // Commenting out props and field to simplify
                // {...field}
                // {...props}
            />
        </div>
    );
};
