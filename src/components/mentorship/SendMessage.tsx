
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, Check } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SendMessageProps {
  recipientId: string;
  onMessageSent?: () => void;
  className?: string;
  maxHeight?: string;
}

const SendMessage: React.FC<SendMessageProps> = ({ 
  recipientId, 
  onMessageSent, 
  className = '',
  maxHeight = '140px'
}) => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Reset success indicator after 3 seconds
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showSuccess) {
      timeout = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showSuccess]);

  const handleSendMessage = async () => {
    if (!user || !message.trim()) return;
    
    setIsSending(true);
    
    try {
      const { error } = await supabase
        .from('messages')
        .insert({
          sender_id: user.id,
          receiver_id: recipientId,
          content: message.trim(),
          read: false
        });
        
      if (error) throw error;
      
      toast({
        title: 'Message Sent',
        description: 'Your message has been sent successfully.',
      });
      
      setMessage('');
      setShowSuccess(true);
      
      if (onMessageSent) {
        onMessageSent();
      }
      
      // Focus the textarea again for easy sending of multiple messages
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <ScrollArea className={`w-full border border-[#FFC900]/20 rounded-md`} style={{ maxHeight }}>
        <Textarea
          ref={textareaRef}
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[#151812] border-none text-[#FFC900] placeholder:text-[#FFC900]/50 resize-none min-h-[100px] p-3"
        />
      </ScrollArea>
      
      <div className="flex justify-between items-center">
        <div className="text-xs text-[#FFC900]/60">
          {message.length > 0 ? `${message.length} characters` : 'Type a message to send'}
        </div>
        <Button
          onClick={handleSendMessage}
          disabled={!message.trim() || isSending}
          className={`transition-all ${
            showSuccess 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]'
          }`}
        >
          {showSuccess ? (
            <Check className="h-4 w-4 mr-2" />
          ) : (
            <Send className="h-4 w-4 mr-2" />
          )}
          {isSending ? 'Sending...' : showSuccess ? 'Sent!' : 'Send Message'}
        </Button>
      </div>
    </div>
  );
};

export default SendMessage;
