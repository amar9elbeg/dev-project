import { Bookmark, NotebookIcon, User } from 'lucide-react';
import React from 'react';

type SubHeaderProps = {
  header: string;
  numberOfItemForEachSection: number;
};

export const SubHeader = ({ header, numberOfItemForEachSection }: SubHeaderProps) => {
    const headerMap: { [key: string]: string } = {
        student: 'сурагч',
        topic: 'сэдэв',
        report: 'репорт', 
      };
      
      const monHeader = headerMap[header] || 'сурагч';  
  return (
    <div className="flex flex-col gap-1">
      <h1 className="capitalize p-0 font-semibold text-2xl">{monHeader}</h1>
      <div className="flex justify-start items-center text-gray-400 text-xs gap-2">
        {header === 'student' ? <User data-testid='lucide-user' size={15}/> : <Bookmark data-testid='lucide-bookmark' size={15}/>}
        <span>Нийт {monHeader} : {numberOfItemForEachSection}</span>
      </div>
    </div>
  );
};
