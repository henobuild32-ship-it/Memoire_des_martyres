import { ArrowLeft, Camera } from 'lucide-react';

interface InvitationCardProps {
  userName: string;
  onBack: () => void;
}

const InvitationCard = ({ userName, onBack }: InvitationCardProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <button
          onClick={onBack}
          className="mb-6 flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Retour</span>
        </button>

        <div className="bg-yellow-400 rounded-2xl p-6 mb-6 shadow-2xl">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Camera className="w-6 h-6 text-gray-900 animate-pulse" />
            <p className="text-gray-900 font-bold text-center">
              📸 Capturez cette invitation et envoyez-la à <span className="underline">Maestro</span>
            </p>
          </div>
        </div>

        <div id="invitation-card" className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-yellow-500 to-red-600 h-2"></div>

          <div className="p-6">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🇨🇩</div>
              <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
                INVITATION OFFICIELLE
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-yellow-500 to-red-600 mx-auto mb-3"></div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <p className="text-gray-800 text-center mb-2">
                <span className="font-semibold">M./Mme/Mlle</span>
              </p>
              <p className="text-xl font-bold text-blue-600 text-center border-b-2 border-blue-600 pb-2">
                {userName}
              </p>
            </div>

            <div className="text-center mb-4">
              <p className="text-gray-700 text-sm mb-2">Vous êtes cordialement invité(e) à</p>
              <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">
                JOURNÉE D'EXPOSITIONS
              </h3>
              <p className="text-base font-semibold text-red-600">
                EN MÉMOIRE DES MARTYRS DE L'INDÉPENDANCE
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-lg p-4 mb-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">📅 Date:</span>
                <span className="text-gray-900 font-bold">03 Janvier 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">⏰ Heure:</span>
                <span className="text-gray-900 font-bold">10h - 13h</span>
              </div>
              <div className="border-t border-gray-300 pt-2">
                <p className="font-semibold text-gray-700 mb-1">📍 Lieu:</p>
                <p className="text-gray-900 text-xs leading-relaxed">
                  <span className="font-bold">Collège LES CARMELITES</span><br />
                  Av. Révolution, 36, Q. Herady<br />
                  Commune de Selembao
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 mb-4">
              <p className="text-xs text-gray-700 font-medium">
                <span className="font-bold">Activités:</span> Expositions d'art • Théâtre • Ciné École • Sensibilisation • Karaoké
              </p>
            </div>

            <div className="text-center pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-1">Organisé par</p>
              <p className="text-sm font-bold text-blue-600">1H30 POUR L'ÉCOLE</p>
              <p className="text-xs text-gray-500 italic mt-2">À la mémoire de nos martyrs...</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-yellow-500 to-red-600 h-2"></div>
        </div>

        <div className="mt-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-white text-sm font-semibold mb-2">
              ✅ Invitation générée avec succès !
            </p>
            <p className="text-yellow-300 text-xs">
              Prenez une capture d'écran et envoyez-la à Maestro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
