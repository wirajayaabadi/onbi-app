import { Message } from '@/ui/chat';
import React from 'react';
import MarkdownRenderer from '../markdown-renderer';

export default function ChatMessage({ id, fromUser, text }: Message) {
  return (
    <div className={`flex ${fromUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`relative ${
          fromUser ? 'px-5 max-w-[70%]' : 'max-w-[95%]'
        } py-3 text-sm leading-snug ${
          fromUser
            ? 'bg-[#e9e9e9] text-gray-800'
            : 'bg-transparent text-gray-800'
        } rounded-2xl`}
      >
        <MarkdownRenderer content={text} />
      </div>
    </div>
  );
}
