import LayoutWrapper from '@/Components/Common/LayoutWrapper';
import ContactForm from '../../Components/Common/ContactForm';

export default function ContactPage() {
  return (
    <>
    <LayoutWrapper>
    <div className="min-h-screen py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto font-outfit">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Contact Us</h1>
        </div>
        
        <ContactForm />
      </div>
    </div>
    </LayoutWrapper>
    </>
  );
} 