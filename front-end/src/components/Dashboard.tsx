
import { ArrowLeft, TrendingUp, Recycle, Zap, Calendar, Beaker, Gauge, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface DashboardProps {
  onBack: () => void;
}

const Dashboard = ({ onBack }: DashboardProps) => {
  const stats = {
    totalPlastic: 47.2,
    hydrogenProduced: 2940,
    co2Saved: 99.1,
    monthlyGoal: 75,
    currentMonth: 47.2
  };

  const transformationStats = {
    currentBatch: {
      plasticInput: 2.4,
      expectedH2: 150,
      progress: 65,
      status: 'En cours',
      temperature: 450,
      pressure: 12.5,
      efficiency: 87
    },
    dailyTransformation: {
      batches: 8,
      totalPlastic: 18.2,
      totalH2: 1140,
      avgEfficiency: 84
    }
  };

  const recentActivity = [
    { date: '24 Juin', plastic: 2.4, hydrogen: 150, type: 'PET #1' },
    { date: '23 Juin', plastic: 1.8, hydrogen: 112, type: 'HDPE #2' },
    { date: '22 Juin', plastic: 3.1, hydrogen: 195, type: 'PVC #3' },
    { date: '21 Juin', plastic: 2.7, hydrogen: 168, type: 'PET #1' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-6">
        <div className="flex items-center mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-white hover:bg-white/20 p-2 mr-3">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Tableau de bord</h1>
            <p className="text-blue-100 text-sm">Vos statistiques de recyclage</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-l-4 border-l-emerald-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <Recycle className="h-8 w-8 text-emerald-600" />
                <div className="text-right">
                  <p className="text-2xl font-bold text-emerald-600">{stats.totalPlastic}</p>
                  <p className="text-sm text-gray-600">kg recyclés</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <Zap className="h-8 w-8 text-blue-600" />
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">{stats.hydrogenProduced}</p>
                  <p className="text-sm text-gray-600">L d'H₂</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hydrogen Transformation Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Beaker className="h-6 w-6 text-blue-600 mr-2" />
              Transformation en Hydrogène
            </CardTitle>
            <CardDescription>Processus de conversion en temps réel</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Current Batch */}
            <div className="bg-white/60 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">Lot en cours</h3>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                  {transformationStats.currentBatch.status}
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm">{transformationStats.currentBatch.plasticInput} kg</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">{transformationStats.currentBatch.expectedH2} L H₂</span>
                </div>
              </div>

              <Progress 
                value={transformationStats.currentBatch.progress} 
                className="h-2"
              />
              <p className="text-xs text-gray-600">
                {transformationStats.currentBatch.progress}% terminé
              </p>
            </div>

            {/* Process Parameters */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/60 rounded-lg p-3 text-center">
                <Gauge className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                <p className="text-lg font-bold text-orange-600">{transformationStats.currentBatch.temperature}°C</p>
                <p className="text-xs text-gray-600">Température</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3 text-center">
                <Zap className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                <p className="text-lg font-bold text-purple-600">{transformationStats.currentBatch.pressure} bar</p>
                <p className="text-xs text-gray-600">Pression</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3 text-center">
                <TrendingUp className="h-5 w-5 text-green-600 mx-auto mb-1" />
                <p className="text-lg font-bold text-green-600">{transformationStats.currentBatch.efficiency}%</p>
                <p className="text-xs text-gray-600">Efficacité</p>
              </div>
            </div>

            {/* Daily Summary */}
            <div className="bg-white/60 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">Résumé journalier</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{transformationStats.dailyTransformation.batches}</p>
                  <p className="text-sm text-gray-600">Lots traités</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-600">{transformationStats.dailyTransformation.totalH2}L</p>
                  <p className="text-sm text-gray-600">H₂ produit</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 text-emerald-600 mr-2" />
              Objectif mensuel
            </CardTitle>
            <CardDescription>
              {stats.currentMonth} kg sur {stats.monthlyGoal} kg
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress 
              value={(stats.currentMonth / stats.monthlyGoal) * 100} 
              className="h-3 mb-2"
            />
            <p className="text-sm text-gray-600">
              {Math.round((stats.currentMonth / stats.monthlyGoal) * 100)}% de l'objectif atteint
            </p>
          </CardContent>
        </Card>

        {/* Environmental Impact */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Impact environnemental</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">{stats.co2Saved}</p>
                <p className="text-sm text-green-700">kg CO₂ évités</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">847</p>
                <p className="text-sm text-blue-700">kWh équivalent</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-600 mr-2" />
              Activité récente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{activity.date}</p>
                  <p className="text-sm text-gray-600">{activity.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{activity.plastic} kg</p>
                  <p className="text-sm text-blue-600">{activity.hydrogen} L H₂</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Évolution hebdomadaire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Graphique des performances</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
