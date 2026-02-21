import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Informações Gerais',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, introduza o seu nome.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, introduza o seu email.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, introduza um email válido.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Por favor, escreva a sua mensagem.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    if (validateForm()) {
      // Simulate API call
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Informações Gerais',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-brand-gold uppercase tracking-widest font-bold mb-4">Contactos</h2>
            <h3 className="font-serif text-4xl font-bold mb-8">Visite a Nossa Escola</h3>
            <p className="text-gray-400 mb-10 text-lg">
              Estamos situados no coração de Matosinhos. Venha conhecer as nossas instalações e marque uma aula experimental gratuita.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-burgundy p-3 rounded-full text-brand-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Morada</h4>
                  <p className="text-gray-400">Rua Conselheiro Costa Braga, 124<br />Matosinhos, Portugal</p>
                  <p className="text-brand-gold text-sm mt-1 italic">(Nas instalações da The Future Academy)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-burgundy p-3 rounded-full text-brand-gold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telemóvel</h4>
                  <p className="text-gray-400">+351 937 822 768</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-burgundy p-3 rounded-full text-brand-gold">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-400">escola.albertalima@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-burgundy p-3 rounded-full text-brand-gold">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horário</h4>
                  <p className="text-gray-400">Seg - Sáb: 15:00 - 22:00</p>
                  <p className="text-xs text-gray-500 mt-1">Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-10 rounded-xl overflow-hidden shadow-lg border-2 border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3003.5!2d-8.6906!3d41.1841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e517d75a6d%3A0x4a9c4f85c3b98d1b!2sEscola+de+M%C3%BAsica+e+Bailado+Alberta+Lima!5e0!3m2!1spt-PT!2spt"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Escola Alberta Lima no Google Maps"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/L3FMurUMotxUJm319"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
            >
              <MapPin className="w-4 h-4" />
              Abrir no Google Maps →
            </a>
          </div>

          <div className="bg-white text-brand-dark p-8 md:p-10 rounded-2xl shadow-2xl">
            <h3 className="font-serif text-3xl font-bold mb-6">Envie-nos uma mensagem</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in-up">
                <CheckCircle className="w-5 h-5" />
                <p>Mensagem enviada com sucesso! Entraremos em contacto brevemente.</p>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Nome *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-100 border p-4 rounded-lg focus:ring-2 focus:outline-none transition-colors ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:ring-brand-burgundy'}`}
                  placeholder="O seu nome"
                />
                {errors.name && (
                  <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-100 border p-4 rounded-lg focus:ring-2 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:ring-brand-burgundy'}`}
                  placeholder="O seu email"
                />
                {errors.email && (
                  <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Assunto</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-0 p-4 rounded-lg focus:ring-2 focus:ring-brand-burgundy focus:outline-none text-gray-600"
                >
                  <option>Informações Gerais</option>
                  <option>Marcação de Aula Experimental</option>
                  <option>Inscrições</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Mensagem *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-gray-100 border p-4 rounded-lg h-32 focus:ring-2 focus:outline-none resize-none transition-colors ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:ring-brand-burgundy'}`}
                  placeholder="Como podemos ajudar?"
                ></textarea>
                {errors.message && (
                  <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-brand-burgundy text-white font-bold py-4 rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;