import ContactForm from '@/components/contact-form/ContactForm';
import { getContactPageData } from '@/lib/api/fetch-contact-page-data';

export default async function Contact() {
	const contactPageData = await getContactPageData(); 
	
	return (
		<section className='container'>
			<h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
				{contactPageData?.title}
			</h2>
			<div className='max-w-[960px] mx-auto mb-[25px] md:mb-11'>
				<p className='text-sm lg:text-lg text-center'>
					{contactPageData?.description}
				</p>
				<h3 className='text-2xl lg:text-4xl text-center lg:text-left my-4 md:mt-11 md:mb-5 font-semibold'>
					{contactPageData?.ctaText}
				</h3>
				<p className='text-sm lg:text-lg text-center md:text-left mb-11'>
					{contactPageData?.ctaTextSub}
				</p>
				<ContactForm />
			</div>
		</section>
	)
}