
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { LiIcon } from './LiIcon';

// Mock data for recommendations
const PROJECTS = [
    { title: "DARK MODE", cat: "WEB DESIGN", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400" },
    { title: "SILK ROAD", cat: "BRANDING", img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=400" },
    { title: "CYBER CITY", cat: "SOCIAL MEDIA", img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=400" },
    { title: "PURE VISION", cat: "PRODUCTION", img: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=400" }
];

interface Message {
    role: 'user' | 'ai';
    text: string;
    relatedProjects?: typeof PROJECTS;
}

export const AIAgent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'ai', text: 'Ahoj! Som tvoj CLICKI asistent. Povedz mi o svojom projekte a ja ti odporučím naše služby a ukážem relevantnú prácu.' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        (window as any).setAIAgentOpen = setIsOpen;
    }, []);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsTyping(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const chat = ai.chats.create({
                model: 'gemini-3-flash-preview',
                config: {
                    systemInstruction: `Si expertný konzultant digitálnej agentúry CLICKI. 
                    Tvojou úlohou je analyzovať potreby klienta a odporučiť naše služby: 
                    1. WEB ARCHITECTURE (UX/UI, Custom kód, E-shopy)
                    2. IDENTITY & BRANDING (Logo, manuál, typografia)
                    3. SOCIAL GROWTH (Content, Reels, Ads)
                    4. PRODUCTION (Fotenie, Video, Post-produkcia)
                    Vždy buď stručný, profesionálny a kreatívny. Používaj čiernu/ružovú estetiku v slovách.
                    Ak klient spomenie niečo, čo súvisí s kategóriami, napíš na koniec odpovede tag [CATEGORY:NAME] (napr. [CATEGORY:PRODUCTION]).`
                }
            });

            const result = await chat.sendMessage({ message: userMsg });
            const responseText = result.text;

            // Simple logic to find related projects based on AI response tags
            let related: typeof PROJECTS | undefined = undefined;
            if (responseText.toLowerCase().includes('produkcia') || responseText.toLowerCase().includes('fotenie')) {
                related = PROJECTS.filter(p => p.cat === "PRODUCTION");
            } else if (responseText.toLowerCase().includes('web') || responseText.toLowerCase().includes('kód')) {
                related = PROJECTS.filter(p => p.cat === "WEB DESIGN");
            } else if (responseText.toLowerCase().includes('branding') || responseText.toLowerCase().includes('logo')) {
                related = PROJECTS.filter(p => p.cat === "BRANDING");
            } else if (responseText.toLowerCase().includes('social') || responseText.toLowerCase().includes('reels')) {
                related = PROJECTS.filter(p => p.cat === "SOCIAL MEDIA");
            }

            setMessages(prev => [...prev, { 
                role: 'ai', 
                text: responseText.replace(/\[CATEGORY:.*?\]/g, ''),
                relatedProjects: related 
            }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', text: 'Prepáč, momentálne sa neviem spojiť so serverom. Skús to prosím neskôr.' }]);
        } finally {
            setIsTyping(false);
        }
    };

    const downloadReport = () => {
        const { jsPDF } = (window as any).jspdf;
        const doc = new jsPDF();
        
        doc.setFillColor(0, 0, 0);
        doc.rect(0, 0, 210, 297, 'F');
        
        doc.setTextColor(244, 49, 130);
        doc.setFontSize(30);
        doc.text("CLICKI REPORT", 20, 30);
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.text("Digitálna stratégia a odporúčania", 20, 45);
        doc.setDrawColor(244, 49, 130);
        doc.line(20, 50, 190, 50);

        let y = 70;
        messages.forEach(msg => {
            if (y > 270) { doc.addPage(); y = 20; doc.setFillColor(0,0,0); doc.rect(0,0,210,297,'F'); }
            doc.setTextColor(244, 49, 130);
            doc.setFontSize(10);
            doc.text(msg.role === 'user' ? 'KLIENT:' : 'CLICKI AI:', 20, y);
            y += 7;
            doc.setTextColor(200, 200, 200);
            const lines = doc.splitTextToSize(msg.text, 170);
            doc.text(lines, 20, y);
            y += (lines.length * 6) + 10;
        });

        doc.save(`ClickI_Konzultacia_${new Date().toLocaleDateString()}.pdf`);
    };

    return (
        <>
            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-10 right-10 z-[300] w-20 h-20 bg-[#F43182] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
            >
                {isOpen ? (
                    <span className="text-white text-3xl font-giaza">×</span>
                ) : (
                    <LiIcon size={32} color="white" className="group-hover:rotate-12 transition-transform" />
                )}
                {!isOpen && (
                    <div className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-black px-2 py-1 rounded-full animate-bounce">
                        AI
                    </div>
                )}
            </button>

            {/* Chat Window */}
            <div className={`fixed bottom-32 right-10 z-[300] w-[400px] h-[600px] glass rounded-3xl overflow-hidden flex flex-col transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'}`}>
                {/* Header */}
                <div className="p-6 bg-[#F43182] flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <LiIcon size={24} color="white" />
                        <span className="font-giaza text-xl text-white font-bold">CLICKI AI</span>
                    </div>
                    <button onClick={downloadReport} title="Stiahnuť Report" className="p-2 hover:bg-white/20 rounded-full transition-colors text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    </button>
                </div>

                {/* Messages */}
                <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-slide-up`}>
                            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#F43182] text-white rounded-br-none' : 'bg-white/5 text-gray-300 border border-white/5 rounded-bl-none'}`}>
                                {msg.text}
                            </div>
                            
                            {msg.relatedProjects && msg.relatedProjects.length > 0 && (
                                <div className="mt-4 w-full">
                                    <p className="text-[10px] font-black text-[#F43182] uppercase tracking-widest mb-3">Súvisiace projekty:</p>
                                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                        {msg.relatedProjects.map((p, pi) => (
                                            <div key={pi} className="min-w-[150px] bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 group/card cursor-pointer">
                                                <img src={p.img} className="w-full h-24 object-cover grayscale group-hover/card:grayscale-0 transition-all" />
                                                <div className="p-2">
                                                    <p className="text-[8px] text-[#F43182] font-bold uppercase">{p.cat}</p>
                                                    <p className="text-[10px] text-white font-bold truncate">{p.title}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex items-center gap-2 text-[#F43182]">
                            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"></span>
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="p-6 bg-black border-t border-white/5">
                    <div className="relative flex items-center">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Zadajte svoju otázku..."
                            className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 pr-16 outline-none focus:border-[#F43182] text-white text-sm transition-all"
                        />
                        <button 
                            onClick={handleSend}
                            className="absolute right-2 p-3 bg-[#F43182] text-white rounded-full hover:scale-105 transition-transform"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
