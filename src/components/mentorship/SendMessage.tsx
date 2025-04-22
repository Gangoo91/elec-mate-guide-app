
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface SendMessageProps {
  recipientId: string;
  onMessageSent?: () => void;
  className?: string;
}

const SendMessage: React.FC<SendMessageProps> = ({ recipientId, onMessageSent, className = '' }) => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

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
      
      if (onMessageSent) {
        onMessageSent();
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
      <Textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900] placeholder:text-[#FFC900]/50 resize-none"
        rows={3}
      />
      <div className="flex justify-end">
        <Button
          onClick={handleSendMessage}
          disabled={!message.trim() || isSending}
          className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
        >
          <Send className="h-4 w-4 mr-2" />
          {isSending ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </div>
  );
};

export default SendMessage;
