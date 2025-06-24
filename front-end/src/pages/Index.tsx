
import { useState } from 'react';
import { Camera, Recycle, Zap, BarChart3, Award, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PlasticScanner from '@/components/PlasticScanner';
import Dashboard from '@/components/Dashboard';
import ProcessView from '@/components/ProcessView';
import RewardsView from '@/components/RewardsView';

const Index = () => {
  const [activeView, setActiveView] = useState('home');

  const renderActiveView = () => {
    switch (activeView) {
      case 'scanner':
        return <PlasticScanner onBack={() => setActiveView('home')} />;
      case 'dashboard':
        return <Dashboard onBack={() => setActiveView('home')} />;
      case 'process':
        return <ProcessView onBack={() => setActiveView('home')} />;
      case 'rewards':
        return <RewardsView onBack={() => setActiveView('home')} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-6 rounded-b-3xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-3">
                  <Recycle className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">EcoTransform</h1>
                  <p className="text-emerald-100">Plastique → Hydrogène</p>
                </div>
              </div>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-100 text-sm">Plastique traité aujourd'hui</p>
                      <p className="text-2xl font-bold">2.4 kg</p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-100 text-sm">H₂ produit</p>
                      <p className="text-2xl font-bold">150 L</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Actions rapides</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => setActiveView('scanner')}
                  className="h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg"
                >
                  <div className="text-center">
                    <Camera className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Scanner IA</span>
                  </div>
                </Button>

                <Button
                  onClick={() => setActiveView('dashboard')}
                  className="h-24 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
                >
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Statistiques</span>
                  </div>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => setActiveView('process')}
                  variant="outline"
                  className="h-20 border-2 border-teal-200 hover:bg-teal-50"
                >
                  <div className="text-center text-teal-700">
                    <Zap className="h-6 w-6 mx-auto mb-1" />
                    <span className="text-sm">Processus</span>
                  </div>
                </Button>

                <Button
                  onClick={() => setActiveView('rewards')}
                  variant="outline"
                  className="h-20 border-2 border-yellow-200 hover:bg-yellow-50"
                >
                  <div className="text-center text-yellow-700">
                    <Award className="h-6 w-6 mx-auto mb-1" />
                    <span className="text-sm">Récompenses</span>
                  </div>
                </Button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="px-6 space-y-4">
              <Card className="border-l-4 border-l-emerald-500 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Leaf className="h-5 w-5 text-emerald-600 mr-2" />
                    Impact Environnemental
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Chaque kg de plastique traité évite 2.1 kg de CO₂ et produit 
                    de l'hydrogène vert pour l'énergie propre.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Zap className="h-5 w-5 text-blue-600 mr-2" />
                    Technologie IA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Notre IA identifie avec 99.2% de précision les plastiques 
                    non recyclables optimaux pour la transformation.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="h-20"></div>
          </div>
        );
    }
  };

  return renderActiveView();
};

export default Index;
