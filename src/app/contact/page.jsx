import LayoutWrapper from '@/Components/Common/LayoutWrapper';
import ContactForm from '../../Components/Common/ContactForm';

export default function ContactPage() {
  return (
    <>
    <LayoutWrapper>
    <div className="min-h-screen  py-12 px-4">
      <div className="container mx-auto font-outfit">
        <div className=" mb-12">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Contact Us</h1>
        </div>
        
        <ContactForm />
      </div>
    </div>
    </LayoutWrapper>
    </>
  );
} 