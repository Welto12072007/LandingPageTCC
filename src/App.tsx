import React from 'react';
import { Heart, Smartphone, Shield, Brain, Users, Award, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">AVC ALERTA</h1>
                <p className="text-sm text-cyan-100">Prevenção e Cuidado</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#funcionalidades" className="hover:text-cyan-200 transition-colors">Funcionalidades</a>
              <a href="#sobre" className="hover:text-cyan-200 transition-colors">Sobre</a>
              <a href="#contato" className="hover:text-cyan-200 transition-colors">Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-blue-600 shadow-lg z-50">
              <div className="px-4 py-2 space-y-2">
                <a href="#funcionalidades" className="block py-2 hover:text-cyan-200">Funcionalidades</a>
                <a href="#sobre" className="block py-2 hover:text-cyan-200">Sobre</a>
                <a href="#contato" className="block py-2 hover:text-cyan-200">Contato</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  <Heart className="w-4 h-4 mr-2" />
                  Salvando Vidas
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Identifique os primeiros 
                  <span className="text-gradient bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"> sintomas de AVC</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  O AVC Alerta é um aplicativo inovador que auxilia na identificação rápida dos sintomas de AVC, oferece orientações nutricionais e monitora sinais vitais através de wearables.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-cyan-300 hover:text-cyan-600 transition-all duration-300">
                  Saiba Mais
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Anos de Risco</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">90%</div>
                  <div className="text-sm text-gray-600">Prevenível</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.5min</div>
                  <div className="text-sm text-gray-600">Tempo Crítico</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 via-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AVC ALERTA</h3>
                  <p className="text-gray-600">Aplicativo para monitoramento e informações sobre o acidente vascular cerebral</p>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700">Monitoramento Ativo</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Pressão Arterial</span>
                        <span className="text-green-600">Normal</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Freq. Cardíaca</span>
                        <span className="text-blue-600">72 bpm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-gray-600">
              O AVC Alerta oferece ferramentas completas para prevenção, identificação e acompanhamento de AVC
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reconhecimento Rápido</h3>
              <p className="text-gray-600">Identifique os primeiros sintomas de AVC com nossa ferramenta intuitiva e receba orientações imediatas.</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoramento Vital</h3>
              <p className="text-gray-600">Integração com wearables para monitoramento contínuo de pressão arterial, frequência cardíaca e outros sinais vitais.</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Orientações Nutricionais</h3>
              <p className="text-gray-600">Guias completos sobre alimentação preventiva, desde alimentos a evitar até aqueles que ajudam na prevenção.</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conteúdo Interativo</h3>
              <p className="text-gray-600">Testes interativos e conteúdo multimídia para tornar as informações mais acessíveis e compreensíveis.</p>
            </div>

            <div className="group bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Acompanhamento</h3>
              <p className="text-gray-600">Facilite o acompanhamento médico e promova hábitos saudáveis para melhor qualidade de vida.</p>
            </div>

            <div className="group bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resultados Comprovados</h3>
              <p className="text-gray-600">Baseado em pesquisa científica para impactar positivamente a recuperação e prevenção de AVC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Brain className="w-4 h-4 mr-2" />
                Pesquisa Científica
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Sobre o Projeto AVC Alerta
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                O AVC Alerta nasceu da necessidade de democratizar o acesso às informações sobre Acidente Vascular Cerebral, uma das principais causas de incapacidade e mortalidade no mundo.
              </p>
              <p className="text-gray-600">
                Desenvolvido com foco científico, o aplicativo combina tecnologia de ponta com conhecimento médico especializado para oferecer uma ferramenta completa de prevenção, identificação e acompanhamento de AVC.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700"><strong>Identificação Precoce:</strong> Reconhecimento rápido dos sintomas pode salvar vidas e reduzir sequelas.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700"><strong>Prevenção Ativa:</strong> Orientações nutricionais e monitoramento contínuo para redução de riscos.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700"><strong>Educação Continuada:</strong> Conteúdo interativo para melhor compreensão da doença.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Dados do AVC no Brasil</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-red-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-red-600">100mil</div>
                      <div className="text-sm text-red-700">Mortes por ano</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-orange-600">2ª</div>
                      <div className="text-sm text-orange-700">Causa de morte</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-blue-600">70%</div>
                      <div className="text-sm text-blue-700">Sequelas permanentes</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-green-600">90%</div>
                      <div className="text-sm text-green-700">Casos preveníveis</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl p-4">
                    <p className="text-sm font-medium">
                      "A cada 4 minutos uma pessoa tem AVC no Brasil"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AVC ALERTA</h3>
                  <p className="text-gray-400 text-sm">Prevenção e Cuidado</p>
                </div>
              </div>
              <p className="text-gray-300">
                Projeto de pesquisa dedicado à prevenção e identificação precoce de AVC, salvando vidas através da tecnologia.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Recursos</h4>
              <div className="space-y-2 text-gray-300">
                <a href="#funcionalidades" className="block hover:text-cyan-400 transition-colors">Funcionalidades</a>
                <a href="#sobre" className="block hover:text-cyan-400 transition-colors">Sobre o Projeto</a>
                <a href="#" className="block hover:text-cyan-400 transition-colors">Política de Privacidade</a>
              </div>
            </div>

            <div className="space-y-4" id="contato">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <p>Para dúvidas sobre o projeto</p>
                <p className="text-cyan-400">contato@avcalerta.com</p>
                <p className="text-sm text-gray-400 mt-4">
                  Este é um projeto de pesquisa acadêmica voltado para a saúde pública.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AVC Alerta. Desenvolvido para fins de pesquisa e prevenção de AVC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;