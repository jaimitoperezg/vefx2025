import React, { useState } from 'react';
import { ShoppingCart, Clock2 as Clock24, Handshake, BarChart3, Target, Unlock, Globe2, Package, CreditCard, MoveRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const commitments = [
    {
      icon: <Clock24 className="w-16 h-16 text-primary" />,
      title: "Tu Tienda Online en 30 Días",
      description: "Acelera tu entrada al comercio electrónico con nuestra solución integral WooCommerce. Implementamos, configuramos y optimizamos tu tienda completa en solo 30 días, permitiéndote comenzar a vender más rápido que nunca.",
      features: [
        "Configuración WooCommerce profesional",
        "Diseño personalizado y responsive",
        "Catálogo de productos optimizado",
        "Integración de pagos y envíos"
      ],
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <ShoppingCart className="w-16 h-16 text-primary" />,
      title: "Disponibilidad 24/7 Garantizada",
      description: "Tu negocio nunca duerme y nosotros tampoco. Garantizamos un 99.9% de tiempo de actividad para tu tienda online, respaldado por nuestro equipo de soporte técnico disponible 24/7.",
      features: [
        "Monitoreo constante de servidores",
        "Soporte técnico prioritario",
        "Backups automáticos diarios",
        "Plan de contingencia activo"
      ],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Handshake className="w-16 h-16 text-primary" />,
      title: "Partner Tecnológico Integral",
      description: "Más que un proveedor de servicios, somos tu equipo técnico dedicado. Nos encargamos de toda la infraestructura tecnológica para que tú puedas enfocarte en hacer crecer tu negocio.",
      features: [
        "Asesoría estratégica personalizada",
        "Actualizaciones y mantenimiento continuo",
        "Soporte técnico especializado",
        "Consultoría en e-commerce"
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BarChart3 className="w-16 h-16 text-primary" />,
      title: "Marketing Digital Integrado",
      description: "Transforma tu tienda en una máquina de ventas efectiva. Implementamos las mejores prácticas de SEO y marketing digital para maximizar tu visibilidad online y atraer clientes cualificados.",
      features: [
        "Optimización SEO técnica y de contenido",
        "Integración con redes sociales",
        "Análisis de datos y reportes",
        "Estrategias de conversión"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Target className="w-16 h-16 text-primary" />,
      title: "Resultados Garantizados",
      description: "Nos comprometemos con tu éxito digital. Garantizamos el aumento de tus ventas online mediante estrategias probadas y optimización continua basada en datos reales.",
      features: [
        "Métricas de rendimiento transparentes",
        "Objetivos de venta medibles",
        "Optimización continua",
        "Garantía de satisfacción"
      ],
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Unlock className="w-16 h-16 text-primary" />,
      title: "Libertad Total en tu Negocio",
      description: "Tu tienda, tus reglas. Disfruta de total autonomía para vender como prefieras, sin restricciones ni penalizaciones que limiten tu crecimiento comercial.",
      features: [
        "Control total sobre tu plataforma",
        "Sin restricciones de venta",
        "Personalización completa",
        "Escalabilidad garantizada"
      ],
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Globe2 className="w-16 h-16 text-primary" />,
      title: "Expansión de Mercado",
      description: "Alcanza nuevos horizontes sin límites geográficos. Tu catálogo online te permite llegar a clientes en cualquier parte del mundo, maximizando tu potencial de ventas.",
      features: [
        "Alcance global sin fronteras",
        "Múltiples métodos de pago",
        "Gestión inteligente de envíos",
        "Multiidioma disponible"
      ],
      image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Package className="w-16 h-16 text-primary" />,
      title: "Solución Todo en Uno",
      description: "Todo lo que necesitas para triunfar en el e-commerce en un solo lugar. Desde el diseño hasta el soporte técnico, obtienes un paquete completo por un precio único y transparente.",
      features: [
        "Hosting de alto rendimiento",
        "Certificado SSL premium",
        "Mantenimiento proactivo",
        "Actualizaciones de seguridad"
      ],
      image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <CreditCard className="w-16 h-16 text-primary" />,
      title: "Transparencia Total",
      description: "Sin sorpresas ni costos ocultos. Un único pago transparente te da acceso a todas las funcionalidades y soporte que necesitas para gestionar tu tienda online con éxito.",
      features: [
        "Precio único y transparente",
        "Sin costos mensuales ocultos",
        "Todo incluido sin sorpresas",
        "Garantía de satisfacción"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <MoveRight className="w-16 h-16 text-primary" />,
      title: "Portabilidad Garantizada",
      description: "Tu tienda es realmente tuya. Si decides cambiar de proveedor en el futuro, te garantizamos la portabilidad completa de tu sitio y datos sin pérdida de información.",
      features: [
        "Exportación completa de datos",
        "Sin ataduras contractuales",
        "Transición asistida",
        "Respaldo total garantizado"
      ],
      image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-ochre-light to-white">
        <div className="container max-w-8xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-8 leading-tight">
                Tu Tienda Online Profesional en 30 Días
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Lanza tu negocio al mundo digital con nuestra solución completa de e-commerce. WordPress + WooCommerce + Soporte experto, todo en un solo lugar.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                <button className="btn-primary">
                  Comienza Gratis
                </button>
                <button className="btn-secondary">
                  Ver Demo
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Emprendedora exitosa mirando hacia el CTA"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Tiendas Activas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Garantizado</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30</div>
              <div className="text-blue-100">Días para Lanzar</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            10 Razones para Elegir VEFEX
          </h2>
          <p className="text-xl text-gray-600">
            Descubre por qué más de 1000 emprendedores confían en nosotros para crear y gestionar sus tiendas online.
          </p>
        </div>
        
        {commitments.map((commitment, index) => (
          <div 
            key={index} 
            className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-ochre-light'}`}
          >
            <div className="container max-w-8xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="flex justify-center mb-8">{commitment.icon}</div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-secondary text-center">
                      {commitment.title}
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                      {commitment.description}
                    </p>
                    <ul className="space-y-4">
                      {commitment.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-lg text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'} flex justify-center`}>
                  <img 
                    src={commitment.image}
                    alt={commitment.title}
                    className="rounded-xl shadow-xl max-w-md w-full object-cover h-[400px] transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ochre-light">
        <div className="container max-w-8xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Únete a más de 1000 emprendedores que ya están vendiendo en línea con VEFEX
            </p>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Qué tipo de tienda quieres crear?
                  </label>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Solicitar Demostración Gratuita
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-16">
        <div className="container max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">VEFEX</h3>
              <p className="text-blue-200">
                Tu partner tecnológico para el éxito en e-commerce
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soluciones</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Tienda Online</li>
                <li>WordPress</li>
                <li>WooCommerce</li>
                <li>Marketing Digital</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Blog</li>
                <li>Guías</li>
                <li>Casos de Éxito</li>
                <li>Documentación</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Soporte</li>
                <li>Ventas</li>
                <li>Prensa</li>
                <li>Carreras</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
            <p>&copy; 2024 VEFEX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;