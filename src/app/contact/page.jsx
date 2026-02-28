import ContactFormSection from "../component/ContactFormSection";
import ContactInfo from "../component/ContactInfo";
import Footer from "../component/Footer";
import Header from "../component/Header";
import PageHeader from "../component/PageHeader";
import Preloader from "../component/Preloader";

export default function ContactPage() {
  return (
    <>
      <Preloader />
      <Header />
      <PageHeader title="Contact us" breadcrumb="contact us" />
      <ContactInfo />
      <ContactFormSection />
      <Footer />
    </>
  );
}
