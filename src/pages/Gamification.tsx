
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Map, Award, HelpCircle, Home as HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface GameZone {
  id: string;
  name: string;
  description: string;
  icon: string;
  position: { x: number; y: number };
  unlocked: boolean;
  built: boolean;
}

const Gamification = () => {
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementText, setAchievementText] = useState("");
  const [zones, setZones] = useState<GameZone[]>([
    {
      id: "ux-lab",
      name: "UX Lab",
      description: "Descubre mis casos de estudio y proyectos UX",
      icon: "🔬",
      position: { x: 25, y: 25 },
      unlocked: true,
      built: false
    },
    {
      id: "biblioteca",
      name: "Biblioteca",
      description: "Explora mis habilidades, herramientas y procesos",
      icon: "📚",
      position: { x: 75, y: 20 },
      unlocked: false,
      built: false
    },
    {
      id: "plaza-central",
      name: "Plaza Central",
      description: "Conoce más sobre mi trayectoria y experiencia",
      icon: "🏛️",
      position: { x: 50, y: 50 },
      unlocked: false,
      built: false
    },
    {
      id: "puerto",
      name: "Puerto",
      description: "Contacta conmigo y conéctate a mis redes",
      icon: "🚢",
      position: { x: 20, y: 75 },
      unlocked: false,
      built: false
    },
    {
      id: "zona-oculta",
      name: "???",
      description: "Zona misteriosa por descubrir",
      icon: "❓",
      position: { x: 80, y: 80 },
      unlocked: false,
      built: false
    }
  ]);

  useEffect(() => {
    // Calculate progress based on built zones
    const builtZones = zones.filter(zone => zone.built).length;
    const newProgress = Math.floor((builtZones / zones.length) * 100);
    setProgressPercentage(newProgress);
  }, [zones]);

  const handleZoneClick = (zoneId: string) => {
    if (!zones.find(z => z.id === zoneId)?.unlocked) return;
    
    setActiveZone(zoneId);
    
    // Update zones state to mark this zone as built
    setZones(prevZones => 
      prevZones.map(zone => {
        if (zone.id === zoneId) {
          if (!zone.built) {
            // Show achievement notification
            displayAchievement(`¡Has construido ${zone.name}!`);
            
            // Unlock next zones based on progress
            setTimeout(() => {
              unlockNextZones(zoneId);
            }, 1000);
          }
          return { ...zone, built: true };
        }
        return zone;
      })
    );
  };

  const unlockNextZones = (currentZoneId: string) => {
    // Define zone unlock logic
    const unlockMap: {[key: string]: string[]} = {
      'ux-lab': ['biblioteca'],
      'biblioteca': ['plaza-central'],
      'plaza-central': ['puerto'],
      'puerto': ['zona-oculta']
    };
    
    const zonesToUnlock = unlockMap[currentZoneId] || [];
    
    if (zonesToUnlock.length > 0) {
      setZones(prevZones => 
        prevZones.map(zone => {
          if (zonesToUnlock.includes(zone.id)) {
            displayAchievement(`¡Has desbloqueado ${zone.name}!`);
            return { ...zone, unlocked: true };
          }
          return zone;
        })
      );
    }
  };

  const displayAchievement = (text: string) => {
    setAchievementText(text);
    setShowAchievement(true);
    setTimeout(() => {
      setShowAchievement(false);
    }, 3000);
  };

  const handleHover = (zone: GameZone, event: React.MouseEvent) => {
    setTooltipContent(`${zone.name}: ${zone.description}`);
    setTooltipPosition({ 
      x: event.clientX, 
      y: event.clientY - 40 
    });
    setShowTooltip(true);
  };

  const handleHoverEnd = () => {
    setShowTooltip(false);
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header / HUD */}
      <header className="fixed top-0 left-0 w-full bg-neutral-800 text-white py-2 px-4 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:text-blue-300">
              <ArrowLeft size={16} />
              <span>Volver</span>
            </Link>
            <div className="hidden md:block h-6 w-[1px] bg-neutral-600"></div>
            <h1 className="text-lg font-space-grotesk">Ciudad UX</h1>
          </div>
          
          {/* Progress bar */}
          <div className="flex-1 max-w-xs mx-4">
            <div className="bg-neutral-700 h-2 w-full rounded-full overflow-hidden">
              <div 
                className="bg-blue-500 h-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-center mt-1">Ciudad UX al {progressPercentage}% construida</p>
          </div>
          
          {/* HUD Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-neutral-700 rounded-full">
              <Map size={16} />
            </button>
            <button className="p-2 hover:bg-neutral-700 rounded-full">
              <Award size={16} />
            </button>
            <button className="p-2 hover:bg-neutral-700 rounded-full">
              <HelpCircle size={16} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Game Map */}
      <div className="pt-20 pb-12 min-h-screen w-full relative overflow-hidden">
        {/* Grid background for the map */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwIGggNDAgdiA0MCBoIC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U1ZTdlYiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjIiLz48L3N2Zz4=')] bg-neutral-200"></div>
        
        {/* Island base */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path 
              d="M100,20 C130,20 160,30 180,60 C200,90 180,140 160,160 C140,180 90,200 60,180 C30,160 20,130 20,100 C20,70 30,40 60,30 C70,26 80,20 100,20 Z" 
              fill="#e5e7eb" 
              stroke="#d1d5db" 
              strokeWidth="1"
            />
          </svg>
          
          {/* Map zones */}
          {zones.map((zone) => (
            <div
              key={zone.id}
              style={{
                left: `${zone.position.x}%`,
                top: `${zone.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className={cn(
                "absolute cursor-pointer transition-all duration-300",
                !zone.unlocked && "opacity-30 cursor-not-allowed",
                zone.built && "scale-110"
              )}
              onClick={() => handleZoneClick(zone.id)}
              onMouseEnter={(e) => handleHover(zone, e)}
              onMouseLeave={handleHoverEnd}
            >
              {zone.built ? (
                /* Building */
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center border border-neutral-300"
                >
                  <div className="text-3xl md:text-4xl mb-1">{zone.icon}</div>
                  <div className="text-xs md:text-sm font-medium text-neutral-700">{zone.name}</div>
                </motion.div>
              ) : (
                /* Plot */
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg border-2 border-dashed border-blue-500 bg-blue-50 bg-opacity-40 flex items-center justify-center text-blue-500 hover:bg-opacity-60 transition-colors">
                  <div className="text-xl md:text-2xl">+</div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Tooltip */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bg-black bg-opacity-80 text-white text-sm py-1 px-3 rounded-md z-50 pointer-events-none"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y
            }}
          >
            {tooltipContent}
          </motion.div>
        )}
        
        {/* Achievement notification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showAchievement ? 1 : 0, y: showAchievement ? 0 : 20 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg z-50"
        >
          <div className="flex items-center gap-2">
            <Award size={18} />
            <span>{achievementText}</span>
          </div>
        </motion.div>
      </div>
      
      {/* Content panels for zones */}
      {activeZone && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center p-4"
          onClick={() => setActiveZone(null)}
        >
          <Card 
            className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-space-grotesk font-bold">
                  {zones.find(z => z.id === activeZone)?.name}
                </h2>
                <button 
                  onClick={() => setActiveZone(null)}
                  className="text-neutral-500 hover:text-neutral-800"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                {activeZone === "ux-lab" && (
                  <div className="space-y-6">
                    <p className="text-neutral-600">Bienvenido al Laboratorio UX. Aquí encontrarás mis casos de estudio detallados.</p>
                    
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="border border-neutral-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                        <h3 className="text-xl font-medium mb-2">Caso de Estudio #{num}</h3>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/3">
                            <img 
                              src={`https://images.unsplash.com/photo-148${num}312338219-ce68d2c6f44d`} 
                              alt={`Proyecto ${num}`}
                              className="w-full aspect-video object-cover rounded-md"
                            />
                          </div>
                          <div className="md:w-2/3">
                            <p className="text-neutral-600 mb-2">Un completo estudio donde apliqué metodologías UX para resolver problemas reales de usuarios.</p>
                            <div className="flex gap-2 mb-3">
                              <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700">
                                UX Research
                              </span>
                              <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700">
                                UI Design
                              </span>
                            </div>
                            <button className="text-blue-500 hover:text-blue-700 font-medium">
                              Ver detalles
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeZone === "biblioteca" && (
                  <div className="space-y-6">
                    <p className="text-neutral-600">La Biblioteca reúne mis habilidades y herramientas.</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["UX Research", "UI Design", "Wireframing", "Prototyping", "User Testing", "Information Architecture"].map((skill) => (
                        <div key={skill} className="border border-neutral-200 rounded-lg p-3 hover:bg-blue-50 transition-colors">
                          <h4 className="font-medium mb-1">{skill}</h4>
                          <p className="text-sm text-neutral-500">Construido en 2023</p>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-medium pt-2">Herramientas</h3>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                      {["Figma", "Framer", "Notion", "Miro", "Trello", "Illustrator", "Photoshop"].map((tool) => (
                        <div key={tool} className="border border-neutral-200 rounded-lg p-3 text-center hover:bg-blue-50 transition-colors">
                          <p className="font-medium">{tool}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeZone === "plaza-central" && (
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                          <img 
                            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                            alt="Pablo Morro" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3 text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-2">Pablo Morro</h3>
                        <p className="text-neutral-600 mb-4">
                          Diseñador UI con expertise UX. Me especializo en crear interfaces limpias, funcionales y centradas en el usuario.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                          <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            UI Design Lead
                          </span>
                          <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            UX/UI Designer
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium pt-4">Línea Temporal</h3>
                    <div className="relative border-l-2 border-blue-300 pl-6 space-y-6 ml-4">
                      {[
                        { year: "2023", title: "UI Design Lead en OPN", desc: "Liderando estrategia de diseño de productos digitales" },
                        { year: "2022", title: "Principal UI Designer en ISYFU", desc: "Diseño de interfaces para startup en Lanzadera" },
                        { year: "2021", title: "UX/UI Designer", desc: "Proyectos freelance y formación especializada" }
                      ].map((item, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-[33px] w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                          <h4 className="text-lg font-medium">{item.title}</h4>
                          <p className="text-neutral-500 text-sm mb-1">{item.year}</p>
                          <p className="text-neutral-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeZone === "puerto" && (
                  <div className="space-y-6">
                    <p className="text-neutral-600">¡Conectemos! Puedes contactarme a través de cualquiera de estos canales:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a 
                        href="https://www.linkedin.com/in/pablomorro" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                          <span className="text-xl">in</span>
                        </div>
                        <div>
                          <h4 className="font-medium">LinkedIn</h4>
                          <p className="text-sm text-neutral-500">linkedin.com/in/pablomorro</p>
                        </div>
                      </a>
                      
                      <a 
                        href="mailto:pablo.morro@example.com" 
                        className="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                          <span className="text-xl">✉️</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-sm text-neutral-500">pablo.morro@example.com</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://www.behance.net/pablomorro" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                          <span className="text-xl">Be</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Behance</h4>
                          <p className="text-sm text-neutral-500">behance.net/pablomorro</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://www.upwork.com/freelancers/pablomorro" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                          <span className="text-xl">Up</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Upwork</h4>
                          <p className="text-sm text-neutral-500">upwork.com/freelancers/pablomorro</p>
                        </div>
                      </a>
                    </div>
                    
                    <div className="mt-6 p-4 border border-neutral-200 rounded-lg bg-neutral-50">
                      <h3 className="text-lg font-medium mb-3">Enviar mensaje</h3>
                      <div className="space-y-3">
                        <input 
                          type="text" 
                          placeholder="Nombre" 
                          className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                        />
                        <input 
                          type="email" 
                          placeholder="Email" 
                          className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                        />
                        <textarea 
                          placeholder="Mensaje" 
                          rows={3}
                          className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                        ></textarea>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                          Enviar mensaje
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeZone === "zona-oculta" && (
                  <div className="space-y-6 text-center">
                    <div className="py-8">
                      <div className="text-5xl mb-4">🏆</div>
                      <h3 className="text-2xl font-bold mb-3">¡Felicidades!</h3>
                      <p className="text-neutral-600">
                        Has completado la exploración de mi ciudad UX. Este espacio representa mi compromiso con la innovación y experimentación en UX/UI.
                      </p>
                      <div className="mt-6">
                        <p className="text-neutral-600 italic">
                          "El diseño no es solo lo que se ve y se siente. El diseño es cómo funciona."
                        </p>
                        <p className="text-neutral-500 mt-1">- Steve Jobs</p>
                      </div>
                      
                      <div className="mt-8">
                        <p className="text-blue-500 font-medium">Proyecto especial desbloqueado:</p>
                        <div className="mt-2 p-4 border border-blue-200 bg-blue-50 rounded-lg inline-block">
                          <p className="font-medium">Explora mi narrativa completa</p>
                          <a href="#" className="text-blue-500 hover:underline">Ver journey como diseñador</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      )}
      
      {/* Mentor character - fixed in bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 right-4 bg-white p-3 rounded-full shadow-lg z-30 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
          💡
        </div>
        
        {/* Speech bubble that appears on hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute bottom-full right-0 mb-2 p-3 bg-white rounded-lg shadow-lg w-64"
        >
          <p className="text-sm text-neutral-700">
            ¡Hola! Soy tu guía UX. Explora la isla haciendo clic en las zonas disponibles para construir y descubrir mi portfolio.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Gamification;
