import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import { HexColorPicker } from "react-colorful";
import { Sparkles, Download, Palette, Type, Wand2 } from "lucide-react";

function App() {
  const [mainText, setMainText] = useState("Happy New Year");
  const [yearText, setYearText] = useState("2026");
  const [subText, setSubText] = useState("Let's make it amazing!");
  const [bgGradient, setBgGradient] = useState(
    "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #14b8a6 100%)"
  );
  const [textColor, setTextColor] = useState("#ffffff");
  const [showGradientPicker, setShowGradientPicker] = useState(false);
  const [showTextPicker, setShowTextPicker] = useState(false);
  const [selectedGradient, setSelectedGradient] = useState("purple");
  const [fontSize, setFontSize] = useState({ main: 6, year: 9, sub: 2 });
  const [animationStyle, setAnimationStyle] = useState("bounce");
  const [showEmojis, setShowEmojis] = useState(true);
  const [fontFamily, setFontFamily] = useState("sans");
  const cardRef = useRef(null);

  const gradientPresets = {
    purple: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #14b8a6 100%)",
    sunset: "linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #ff9ff3 100%)",
    ocean: "linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)",
    fire: "linear-gradient(135deg, #ff0844 0%, #ffb199 50%, #ff8500 100%)",
    forest: "linear-gradient(135deg, #11998e 0%, #38ef7d 50%, #a8ff78 100%)",
    galaxy: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 50%, #00d4ff 100%)",
    candy: "linear-gradient(135deg, #ff6ec4 0%, #7873f5 50%, #4facfe 100%)",
    gold: "linear-gradient(135deg, #f7971e 0%, #ffd200 50%, #f7971e 100%)",
  };

  useEffect(() => {
    if (selectedGradient !== "custom") {
      setBgGradient(gradientPresets[selectedGradient]);
    }
  }, [selectedGradient]);

  const downloadImage = () => {
    if (!cardRef.current) return;
    html2canvas(cardRef.current, { scale: 3, backgroundColor: null }).then(
      (canvas) => {
        const link = document.createElement("a");
        link.download = `${mainText.replace(/\s+/g, "-")}-2026.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      }
    );
  };

  const getAnimationClass = () => {
    switch (animationStyle) {
      case "bounce":
        return "animate-bounce";
      case "pulse":
        return "animate-pulse";
      case "spin":
        return "animate-spin";
      default:
        return "";
    }
  };

  const getFontClass = () => {
    switch (fontFamily) {
      case "serif":
        return "font-serif";
      case "mono":
        return "font-mono";
      default:
        return "font-sans";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-2xl flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
            2026 Card Generator
            <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
          </h1>
          <p className="text-purple-200 text-lg">
            Create stunning greeting cards in seconds
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
          {/* Controls Panel */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Wand2 className="w-7 h-7 text-pink-400" />
              Customize Your Card
            </h2>

            <div className="space-y-6">
              {/* Text Inputs */}
              <div>
                <label className="block text-purple-200 font-medium mb-2 flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Main Heading
                </label>
                <input
                  type="text"
                  value={mainText}
                  onChange={(e) => setMainText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition border border-white/10"
                  placeholder="e.g., Welcome 2026!"
                />
              </div>

              <div>
                <label className="block text-purple-200 font-medium mb-2 flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Year
                </label>
                <input
                  type="text"
                  value={yearText}
                  onChange={(e) => setYearText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition border border-white/10"
                  placeholder="2026"
                />
              </div>

              <div>
                <label className="block text-purple-200 font-medium mb-2 flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Sub Message
                </label>
                <input
                  type="text"
                  value={subText}
                  onChange={(e) => setSubText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition border border-white/10"
                  placeholder="e.g., Bigger, bolder, brighter!"
                />
              </div>

              {/* Gradient Presets */}
              <div>
                <label className="block text-purple-200 font-medium mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  Background Theme
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {Object.keys(gradientPresets).map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setSelectedGradient(preset)}
                      className={`h-12 rounded-lg border-2 transition-all ${
                        selectedGradient === preset
                          ? "border-white scale-105 shadow-lg"
                          : "border-white/20 hover:border-white/40"
                      }`}
                      style={{ background: gradientPresets[preset] }}
                      title={preset}
                    />
                  ))}
                </div>
              </div>

              {/* Custom Gradient Picker */}
              <div>
                <label className="block text-purple-200 font-medium mb-2">
                  Custom Gradient Color
                </label>
                <button
                  onClick={() => {
                    setShowGradientPicker(!showGradientPicker);
                    setSelectedGradient("custom");
                  }}
                  className="w-full h-14 rounded-xl border-2 border-white/30 shadow-lg hover:border-white/50 transition"
                  style={{ background: bgGradient }}
                />
                {showGradientPicker && (
                  <div className="mt-4 bg-white p-4 rounded-xl shadow-xl">
                    <p className="text-gray-700 mb-3 text-sm">
                      Pick a base color — gradient will auto-generate!
                    </p>
                    <HexColorPicker
                      color={
                        bgGradient.match(/#([a-fA-F0-9]{6})/)?.[0] || "#a855f7"
                      }
                      onChange={(color) => {
                        setBgGradient(
                          `linear-gradient(135deg, ${color} 0%, #ec4899 50%, #14b8a6 100%)`
                        );
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Text Color */}
              <div>
                <label className="block text-purple-200 font-medium mb-2">
                  Text Color
                </label>
                <button
                  onClick={() => setShowTextPicker(!showTextPicker)}
                  className="w-full h-14 rounded-xl border-2 border-white/30 shadow-lg flex items-center justify-center text-3xl font-bold hover:border-white/50 transition"
                  style={{
                    backgroundColor:
                      textColor === "#ffffff" ? "#fff" : textColor,
                    color: textColor === "#ffffff" ? "#000" : "#fff",
                  }}
                >
                  Aa
                </button>
                {showTextPicker && (
                  <div className="mt-4 bg-white p-4 rounded-xl shadow-xl">
                    <HexColorPicker color={textColor} onChange={setTextColor} />
                  </div>
                )}
              </div>

              {/* Font Family */}
              <div>
                <label className="block text-purple-200 font-medium mb-2">
                  Font Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["sans", "serif", "mono"].map((font) => (
                    <button
                      key={font}
                      onClick={() => setFontFamily(font)}
                      className={`py-3 px-4 rounded-lg transition-all ${
                        fontFamily === font
                          ? "bg-pink-500 text-white"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      {font === "sans" && "Sans"}
                      {font === "serif" && "Serif"}
                      {font === "mono" && "Mono"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Animation Style */}
              <div>
                <label className="block text-purple-200 font-medium mb-2">
                  Emoji Animation
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["bounce", "pulse", "spin", "none"].map((anim) => (
                    <button
                      key={anim}
                      onClick={() => setAnimationStyle(anim)}
                      className={`py-3 px-4 rounded-lg transition-all capitalize ${
                        animationStyle === anim
                          ? "bg-purple-500 text-white"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      {anim}
                    </button>
                  ))}
                </div>
              </div>

              {/* Show/Hide Emojis */}
              <div>
                <label className="flex items-center gap-3 text-purple-200 font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showEmojis}
                    onChange={(e) => setShowEmojis(e.target.checked)}
                    className="w-5 h-5 rounded"
                  />
                  Show Decorative Emojis
                </label>
              </div>

              {/* Font Size Sliders */}
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-purple-200 font-medium mb-2">
                    Main Text Size: {fontSize.main}
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="10"
                    value={fontSize.main}
                    onChange={(e) =>
                      setFontSize({
                        ...fontSize,
                        main: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 font-medium mb-2">
                    Year Size: {fontSize.year}
                  </label>
                  <input
                    type="range"
                    min="6"
                    max="12"
                    value={fontSize.year}
                    onChange={(e) =>
                      setFontSize({
                        ...fontSize,
                        year: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 font-medium mb-2">
                    Sub Text Size: {fontSize.sub}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    value={fontSize.sub}
                    onChange={(e) =>
                      setFontSize({
                        ...fontSize,
                        sub: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={downloadImage}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xl rounded-xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition duration-300 shadow-2xl flex items-center justify-center gap-3"
              >
                <Download className="w-6 h-6" />
                Download Card
              </button>
            </div>
          </div>

          {/* Live Preview */}
          <div className="flex items-center justify-center">
            <div
              ref={cardRef}
              className={`relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-3xl flex flex-col items-center justify-center p-8 md:p-12 text-center ${getFontClass()}`}
              style={{ background: bgGradient }}
            >
              {/* Confetti & Sparkles */}
              {showEmojis && (
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  <div
                    className={`absolute top-10 left-10 text-5xl ${getAnimationClass()}`}
                  >
                    🎉
                  </div>
                  <div
                    className={`absolute top-20 right-8 text-4xl ${
                      animationStyle === "bounce"
                        ? "animate-pulse"
                        : getAnimationClass()
                    }`}
                  >
                    ✨
                  </div>
                  <div
                    className={`absolute bottom-16 left-14 text-6xl ${getAnimationClass()} delay-300`}
                  >
                    🎊
                  </div>
                  <div
                    className={`absolute bottom-10 right-12 text-5xl ${
                      animationStyle === "spin"
                        ? "animate-pulse"
                        : getAnimationClass()
                    }`}
                  >
                    🌟
                  </div>
                  <div
                    className={`absolute top-1/2 left-6 text-4xl ${
                      animationStyle === "pulse"
                        ? "animate-bounce"
                        : getAnimationClass()
                    }`}
                  >
                    🪄
                  </div>
                </div>
              )}

              <h1
                className="font-extrabold tracking-tight mb-6 drop-shadow-2xl break-words"
                style={{
                  color: textColor,
                  fontSize: `${fontSize.main * 0.5}rem`,
                }}
              >
                {mainText}
              </h1>

              <h2
                className="font-black tracking-tighter mb-8 drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200 break-words"
                style={{
                  WebkitTextStroke: "2px rgba(0,0,0,0.3)",
                  fontSize: `${fontSize.year * 0.5}rem`,
                }}
              >
                {yearText}
              </h2>

              <p
                className="font-semibold max-w-md leading-relaxed drop-shadow-lg break-words"
                style={{
                  color: textColor,
                  fontSize: `${fontSize.sub * 0.5}rem`,
                }}
              >
                {subText}
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-purple-300">
          <p className="text-sm">Made with ❤️ for celebrating 2026</p>
        </div>
      </div>
    </div>
  );
}

export default App;
