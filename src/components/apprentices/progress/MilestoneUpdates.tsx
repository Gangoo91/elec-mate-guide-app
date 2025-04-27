
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from 'lucide-react';
import { formatDistance } from 'date-fns';
import { Update } from './types';

interface MilestoneUpdatesProps {
  updates: Update[];
  onAddUpdate: (note: string) => void;
}

export const MilestoneUpdates = ({ updates, onAddUpdate }: MilestoneUpdatesProps) => {
  const [updateNote, setUpdateNote] = useState("");

  const handleSubmitUpdate = () => {
    if (!updateNote.trim()) return;
    onAddUpdate(updateNote.trim());
    setUpdateNote("");
  };

  return (
    <div>
      <h4 className="text-sm font-medium mb-3 text-[#FFC900] flex items-center justify-between">
        <span>Progress Updates</span>
        <span className="text-xs text-[#FFC900]/60">
          {updates.length} {updates.length === 1 ? 'update' : 'updates'}
        </span>
      </h4>
      
      <div className="space-y-4">
        <div className="flex gap-3">
          <Textarea 
            placeholder="Add progress note or update..."
            value={updateNote}
            onChange={(e) => setUpdateNote(e.target.value)}
            className="flex-grow"
          />
          <Button 
            onClick={handleSubmitUpdate}
            className="self-end"
            disabled={!updateNote.trim()}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
        
        {updates.length > 0 ? (
          <div className="space-y-3 mt-4">
            {updates.map((update) => (
              <div key={update.id} className="bg-[#22251e]/50 p-3 rounded border border-[#FFC900]/10">
                <p className="text-[#FFC900]/80 mb-2">{update.note}</p>
                <p className="text-xs text-[#FFC900]/60">
                  {formatDistance(new Date(update.created_at), new Date(), { addSuffix: true })}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[#FFC900]/60 italic">No updates yet. Add your first progress note above.</p>
        )}
      </div>
    </div>
  );
};
