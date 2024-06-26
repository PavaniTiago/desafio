import React from 'react';
import { Input } from './input';
import Image from 'next/image';

interface InputIconProps {
    icon?: any;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputIcon({ icon, type, placeholder, value, onChange }: InputIconProps) {
    return (
        <div className="flex items-center border border-muted-foreground rounded-full px-2 w-[335px]">
            {typeof icon === 'string' ? <Image alt='icon image' src={icon} width={0} height={0} className="w-5 h-5 text-gray-500" /> : <div className='text-secondary-foreground'>{icon}</div>}
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='border-0 shadow-none text-secondary placeholder:text-secondary-foreground w-full'
            />
        </div>
    );
}