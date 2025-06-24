
import { ArrowLeft, Zap, Recycle, Beaker, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProcessViewProps {
  onBack: () => void;
}

const ProcessView = ({ onBack }: ProcessViewProps) => {
  const processSteps = [
    {
      step: 1,
      title: 'Tri intelligent',
      description: 'L\'IA identifie et sépare les plastiques non recyclables',
      icon: Recycle,
      color: 'emerald',
      status: 'Actif'
    },
    {
      step: 2,
      title: 'Pyrolyse catalytique',
      description: 'Décomposition thermique contrôlée à 450°C',
      icon: Zap,
      color: 'orange',
      status: 'En cours'
    },
    {
      step: 3,
      title: 'Purification',
      description: 'Filtrage et purification des gaz produits',
      icon: Beaker,
      color: 'blue',
      status: 'En attente'
    },
    {
      step: 4,
      title: 'Production H₂',
      description: 'Extraction et compression de l\'hydrogène pur',
      icon: Gauge,
      color: 'purple',
      status: 'En attente'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      orange: 'bg-orange-100 text-orange-700 border-orange-200',
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200'
    };
    return colors[color as keyof typeof colors];
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Actif': return 'bg-green-100 text-green-800';
      case 'En cours': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
        <div className="flex items-center mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-white hover:bg-white/20 p-2 mr-3">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Processus de transformation</h1>
            <p className="text-purple-100 text-sm">Plastique → Hydrogène vert</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Current Status */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>État du système</span>
              <Badge className="bg-green-100 text-green-800">Opérationnel</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-600">2.4 kg</p>
                <p className="text-sm text-gray-600">En traitement</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-600">87%</p>
                <p className="text-sm text-gray-600">Efficacité</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Étapes du processus</h2>
          
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.step} className={`${getColorClasses(step.color)} border`}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold">Étape {step.step}: {step.title}</h3>
                        <Badge className={getStatusColor(step.status)}>
                          {step.status}
                        </Badge>
                      </div>
                      <p className="text-sm opacity-80">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Progress connector */}
                  {index < processSteps.length - 1 && (
                    <div className="ml-6 mt-4">
                      <div className="w-0.5 h-6 bg-gray-300"></div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical Specs */}
        <Card>
          <CardHeader>
            <CardTitle>Spécifications techniques</CardTitle>
            <CardDescription>Paramètres optimaux du processus</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Température pyrolyse</span>
              <span className="font-semibold">450°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pression de sortie</span>
              <span className="font-semibold">350 bar</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pureté H₂</span>
              <span className="font-semibold">99.95%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Rendement énergétique</span>
              <span className="font-semibold">76%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Capacité journalière</span>
              <span className="font-semibold">50 kg</span>
            </div>
          </CardContent>
        </Card>

        {/* Energy Balance */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Bilan énergétique</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-green-700">Énergie consommée</span>
                <span className="font-semibold text-green-800">12.5 kWh</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-700">H₂ produit (équivalent)</span>
                <span className="font-semibold text-blue-800">33.3 kWh</span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center">
                <span className="font-semibold text-emerald-700">Gain net</span>
                <span className="font-bold text-emerald-800">+20.8 kWh</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProcessView;
