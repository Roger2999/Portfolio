export const CardPresentation =()=> {
  return (
   
      <div className="max-w-md w-full mt-10 bg-white dark:bg-gray-200 rounded-2xl shadow-xl p-8 text-center transform transition hover:scale-[1.02]">
        
        {/* Foto / Avatar */}
        <div className="flex justify-center">
          <img
            src="src\assets\perfil.png"
            alt="Foto de perfil"
            className="w-28 h-28 rounded-full border-4 border-primary shadow-md"
          />
        </div>

        {/* Nombre */}
        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Roger Gutiérrez Martínez
        </h1>

        {/* Profesión */}
        <p className="mt-2 text-gray-600">
          Desarrollador Frontend | React & TypeScript
        </p>

        {/* Descripción */}
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          Apasionado por crear experiencias digitales modernas, 
          con un enfoque en la simplicidad, el rendimiento y la accesibilidad. 🚀
        </p>

        {/* Botones */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
          >
            GitHub
          </a>
        </div>
      </div>
  )
}