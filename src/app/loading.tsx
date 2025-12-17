import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-background fixed inset-0 z-[200]">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
    </div>
  );
}
