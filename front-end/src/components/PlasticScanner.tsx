
import { useState } from 'react';
import { Camera, ArrowLeft, CheckCircle, AlertCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PlasticScannerProps {
  onBack: () => void;
}

const PlasticScanner = ({ onBack }: PlasticScannerProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  const handleScan = () => {
    setIsScanning(true);
    // Simuler l'analyse IA
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        plasticType: 'PET #1',
        recyclable: false,
        hydrogenPotential: 'Élevé',
        confidence: 94,
        weight: 0.35,
        h2Production: 22
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-6">
        <div className="flex items-center mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-white hover:bg-white/20 p-2 mr-3">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Scanner IA</h1>
            <p className="text-emerald-100 text-sm">Analyse intelligente du plastique</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Scanner Area */}
        <Card className="relative overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
              {isScanning ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-500 border-t-transparent mx-auto mb-4"></div>
                  <p className="text-gray-600">Analyse en cours...</p>
                </div>
              ) : scanResult ? (
                <div className="text-center p-6">
                  <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                  <p className="text-gray-600">Analyse terminée</p>
                </div>
              ) : (
                <div className="text-center">
                  <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Positionnez le plastique</p>
                </div>
              )}
              
              {/* Scanning overlay */}
              {!scanResult && (
                <div className="absolute inset-4 border-2 border-dashed border-emerald-400 rounded-lg"></div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Scan Button */}
        {!scanResult && (
          <Button 
            onClick={handleScan} 
            disabled={isScanning}
            className="w-full h-14 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-lg font-semibold"
          >
            {isScanning ? 'Analyse...' : 'Lancer le scan'}
          </Button>
        )}

        {/* Results */}
        {scanResult && (
          <div className="space-y-4 animate-fade-in">
            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Résultats d'analyse</span>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                    {scanResult.confidence}% sûr
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Type de plastique</span>
                  <span className="font-semibold">{scanResult.plasticType}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Recyclable traditionnel</span>
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-red-600 font-medium">Non</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Potentiel hydrogène</span>
                  <Badge className="bg-blue-100 text-blue-800">
                    {scanResult.hydrogenPotential}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Poids estimé</span>
                  <span className="font-semibold">{scanResult.weight} kg</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">H₂ potentiel</span>
                  <span className="font-semibold text-blue-600">{scanResult.h2Production} L</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-blue-800">Prêt pour transformation</p>
                    <p className="text-sm text-blue-600">Ce plastique peut être converti en hydrogène vert</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-3">
              <Button 
                onClick={() => setScanResult(null)} 
                variant="outline" 
                className="flex-1"
              >
                Nouveau scan
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-500"
              >
                Traiter
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlasticScanner;
