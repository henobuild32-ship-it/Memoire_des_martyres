import { useState } from 'react';
import { Calendar, Clock, MapPin, Download } from 'lucide-react';
import InvitationCard from './components/InvitationCard';
import AnnouncementHero from './components/AnnouncementHero';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [userName, setUserName] = useState('');
  const [generatedName, setGeneratedName] = useState('');

  const handleGenerateInvitation = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      setGeneratedName(userName.trim());
      setShowInvitation(true);
    }
  };

  const handleBack = () => {
    setShowInvitation(false);
    setUserName('');
  };

  if (showInvitation) {
    return <InvitationCard userName={generatedName} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <AnnouncementHero />

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mt-8">
          <div className="bg-gradient-to-r from-blue-600 via-yellow-500 to-red-600 h-3"></div>

          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                03 JANVIER 2026
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                JOURNÉE D'EXPOSITIONS<br />
                EN MÉMOIRE DES MARTYRS<br />
                DE L'INDÉPENDANCE DE LA RDC
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-yellow-500 to-red-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 font-medium italic">
                À la mémoire de nos martyrs...
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Organisé par <span className="font-bold text-blue-600">1H30 POUR L'ÉCOLE</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <img
                src="/whatsapp_image_2025-12-07_a_11.42.52_fbac3cb6.jpg"
                alt="Martyrs de l'indépendance"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/whatsapp_image_2025-12-07_a_11.42.53_6a042c12.jpg"
                alt="Leaders historiques"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">ACTIVITÉS</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Expositions des œuvres d\'art',
                  'Théâtre',
                  'Ciné École',
                  'Sensibilisation',
                  'Karaoké'
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow">
                    <span className="text-red-600 text-xl">📌</span>
                    <span className="text-gray-800 font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-8 bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-xl">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Horaire</p>
                  <p className="text-gray-700">10h - 13h</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Lieu</p>
                  <p className="text-gray-700">Grande salle du Collège LES CARMELITES</p>
                  <p className="text-sm text-gray-600">Av. Révolution, 36, Q. Herady / Commune de Selembao</p>
                  <p className="text-sm text-gray-600">Réf. Arrêts Terrasse et Habitat (route By Pass)</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleGenerateInvitation} className="bg-gradient-to-r from-blue-600 to-red-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4 text-center">RECEVOIR MON INVITATION</h3>
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Entrez votre nom complet"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  <span>Générer</span>
                </button>
              </div>
            </form>

            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-2xl font-bold text-gray-900 mb-2">Cordiale bienvenue à tous !</p>
              <p className="text-gray-600">Un événement à ne pas manquer</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-white text-sm">
          <p>🇨🇩 En hommage aux héros de notre nation 🇨🇩</p>
        </div>
      </div>
    </div>
  );
}

export default App;
