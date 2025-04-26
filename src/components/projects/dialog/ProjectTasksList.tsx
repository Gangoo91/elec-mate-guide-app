
export function ProjectTasksList() {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-[#FFC900] mb-3">Project Tasks</h3>
      <div className="space-y-2">
        <div className="flex items-center p-3 bg-[#333] rounded-md">
          <div className="w-5 h-5 mr-3 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-black text-xs">✓</span>
          </div>
          <span className="text-sm text-[#FFC900]">Initial site assessment</span>
        </div>
        
        <div className="flex items-center p-3 bg-[#333] rounded-md">
          <div className="w-5 h-5 mr-3 rounded-full bg-amber-500 flex items-center justify-center">
            <span className="text-black text-xs">⟳</span>
          </div>
          <span className="text-sm text-[#FFC900]">Material procurement</span>
        </div>
        
        <div className="flex items-center p-3 bg-[#333] rounded-md">
          <div className="w-5 h-5 mr-3 rounded-full bg-gray-600 flex items-center justify-center">
            <span className="text-white text-xs">○</span>
          </div>
          <span className="text-sm text-[#FFC900]">Installation</span>
        </div>
      </div>
    </div>
  );
}
