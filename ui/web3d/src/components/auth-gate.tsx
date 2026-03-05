import { useState } from "react";
import { useOfficeStore } from "@/stores/use-office-store";

export function AuthGate() {
  const setToken = useOfficeStore((s) => s.setToken);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setToken(input.trim());
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0f]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#12121a] border border-[#2a2a3a] rounded-lg p-8 w-96"
      >
        <h1 className="text-xl font-semibold text-white mb-2">Agent Office 3D</h1>
        <p className="text-sm text-gray-400 mb-6">
          Enter your gateway token to connect.
        </p>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Gateway token"
          className="w-full px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#4a4a5a] mb-4"
          autoFocus
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded font-medium transition-colors"
        >
          Connect
        </button>
      </form>
    </div>
  );
}
