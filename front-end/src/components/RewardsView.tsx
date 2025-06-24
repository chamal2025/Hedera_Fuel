
import { ArrowLeft, Trophy, Leaf, Zap, Star, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface RewardsViewProps {
  onBack: () => void;
}

const RewardsView = ({ onBack }: RewardsViewProps) => {
  const userLevel = {
    current: 'Éco-Pionnier',
    points: 2340,
    nextLevel: 'Maître Vert',
    pointsNeeded: 3000,
    progress: (2340 / 3000) * 100
  };

  const achievements = [
    {
      title: 'Premier recyclage',
      description: 'Premier plastique traité',
      icon: Leaf,
      completed: true,
      points: 50,
      date: '15 Mai 2024'
    },
    {
      title: 'Économiseur CO₂',
      description: '50 kg de CO₂ évités',
      icon: Zap,
      completed: true,
      points: 200,
      date: '20 Mai 2024'
    },
    {
      title: 'Producteur H₂',
      description: '1000L d\'hydrogène produits',
      icon: Trophy,
      completed: true,
      points: 500,
      date: '2 Juin 2024'
    },
    {
      title: 'Éco-Champion',
      description: '100 kg de plastique recyclés',
      icon: Star,
      completed: false,
      points: 1000,
      progress: 47.2
    }
  ];

  const rewards = [
    {
      title: 'Bon d\'achat bio',
      cost: 500,
      description: '10€ chez nos partenaires bio',
      available: true
    },
    {
      title: 'Kit éco-responsable',
      cost: 800,
      description: 'Gourde + sac réutilisable',
      available: true
    },
    {
      title: 'Visite d\'usine',
      cost: 1200,
      description: 'Découverte du processus H₂',
      available: true
    },
    {
      title: 'Plantation d\'arbre',
      cost: 2000,
      description: 'Un arbre planté en votre nom',
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-emerald-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-emerald-500 text-white p-6">
        <div className="flex items-center mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-white hover:bg-white/20 p-2 mr-3">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Récompenses</h1>
            <p className="text-yellow-100 text-sm">Vos accomplissements écologiques</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* User Level */}
        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Trophy className="h-6 w-6 text-yellow-600 mr-2" />
                <span>Niveau actuel</span>
              </div>
              <Badge className="bg-yellow-100 text-yellow-800">
                {userLevel.current}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Points EcoScore</span>
                <span className="font-bold text-yellow-600">{userLevel.points}</span>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Progression vers {userLevel.nextLevel}</span>
                  <span>{userLevel.pointsNeeded - userLevel.points} points restants</span>
                </div>
                <Progress value={userLevel.progress} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Accomplissements</h2>
          
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className={`${achievement.completed ? 'bg-emerald-50 border-emerald-200' : 'bg-gray-50 border-gray-200'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      achievement.completed ? 'bg-emerald-100' : 'bg-gray-200'
                    }`}>
                      <Icon className={`h-6 w-6 ${achievement.completed ? 'text-emerald-600' : 'text-gray-400'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <div className="flex items-center space-x-2">
                          {achievement.completed && (
                            <Badge className="bg-emerald-100 text-emerald-800">
                              +{achievement.points} pts
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      {achievement.completed && achievement.date && (
                        <p className="text-xs text-emerald-600 mt-1">Obtenu le {achievement.date}</p>
                      )}
                      {!achievement.completed && achievement.progress && (
                        <div className="mt-2">
                          <Progress value={(achievement.progress / 100) * 100} className="h-1" />
                          <p className="text-xs text-gray-500 mt-1">{achievement.progress}/100 kg</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Rewards Shop */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Boutique récompenses</h2>
          
          <div className="grid gap-4">
            {rewards.map((reward, index) => (
              <Card key={index} className="border-l-4 border-l-blue-300">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Gift className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">{reward.title}</h3>
                        <p className="text-sm text-gray-600">{reward.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-bold text-blue-600">{reward.cost} pts</p>
                      <Button 
                        size="sm" 
                        disabled={userLevel.points < reward.cost}
                        className="mt-1"
                      >
                        {userLevel.points >= reward.cost ? 'Échanger' : 'Bientôt'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Environmental Impact Summary */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Votre impact total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-green-600">47.2</p>
                <p className="text-sm text-green-700">kg plastique recyclés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">2940</p>
                <p className="text-sm text-blue-700">L hydrogène produits</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-600">99.1</p>
                <p className="text-sm text-emerald-700">kg CO₂ évités</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-600">15</p>
                <p className="text-sm text-purple-700">arbres sauvés</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RewardsView;
