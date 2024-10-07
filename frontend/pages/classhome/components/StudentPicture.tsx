// import React, { useMemo, useState, useEffect } from 'react';
// import { useDropzone } from 'react-dropzone';
// import axios from 'axios';
// import { FolderDown } from 'lucide-react';

// interface StudentPictureProps {
//     label: string;
//     name: string;
//     type: string;
//     placeholder?: string;
//     id?: string;
// }

// export const StudentPicture: React.FC<StudentPictureProps> = () => {
//     const [file, setFile] = useState<File | null>(null);
//     const [previewUrl, setPreviewUrl] = useState<string | null>(null);

//     const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`;

//     const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
//         accept: {
//             'image/png': ['.png'],
//             'image/jpeg': ['.jpeg', '.jpg'],
//             'text/html': ['.html', '.htm'],
//         },
//         onDrop: (acceptedFiles) => {
//             const selectedFile = acceptedFiles[0];
//             setFile(selectedFile);
//             if (selectedFile) {
//                 const url = URL.createObjectURL(selectedFile);
//                 setPreviewUrl(url);
//             }
//         },
//     });

//     useEffect(() => {
//         return () => {
//             if (previewUrl) {
//                 URL.revokeObjectURL(previewUrl);
//             }
//         };
//     }, [previewUrl]);

//     useEffect(() => {
//         if (file) {
//             const upload = async () => {
//                 const formData = new FormData();
//                 formData.append('file', file);
//                 formData.append('upload_preset', 'dev-project');

//                 try {
//                     const response = await axios.post(
//                         cloudinaryUrl,
//                         formData,
//                         {
//                             headers: {
//                                 'Authorization': `Basic ${btoa(`${process.env.REACT_APP_CLOUDINARY_API_KEY}:${process.env.REACT_APP_CLOUDINARY_API_SECRET}`)}`
//                             }
//                         }
//                     );
//                     console.log('Upload success:', response.data);
//                 } catch (error) {
//                     console.error('Upload error:', error);
//                 }
//             };

//             upload();
//         }}, [file]);

//     const borderStyles = useMemo(() => {
//         if (isDragAccept) return 'border-blue-500';
//         if (isDragReject) return 'border-red-500';
//         if (isFocused) return 'border-green-500';
//         return 'border-gray-300';
//     }, [isFocused, isDragAccept, isDragReject]);

//     return (
//         <section className={`p-2 h-32 border-dashed flex flex-col justify-center border-2 items-center text-sm text-gray-700 ${borderStyles}`}>
//             <div {...getRootProps({ className: 'cursor-pointer' })}>
//                 <input {...getInputProps()} />
//                 <div className='flex gap-3 items-center'>
//                     <p>{!file ? "Татах" : "Өөрчлөх"}</p>
//                     <FolderDown/>
//                 </div>
//             </div>
//             {/* {previewUrl && <img src={previewUrl} alt="Preview" className="mt-2 h-16 w-auto rounded-full" />} */}
//             {/* {file && (
//                 <div className='mt-2 text-sm text-gray-500'>
//                     <p>Selected file: {file.name}</p>
//                 </div>
//             )} */}
            
//         </section>
//     );
// };
