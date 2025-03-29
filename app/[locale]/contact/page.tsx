import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function Contact() {
    return (
			 <section className='container'>
				<h2 className='hidden md:block text-4xl lg:text-6xl text-center my-4 lg:my-11'>
          About us
        </h2>
				<div className='hidden md:flex flex-col md:flex-row gap-6 md:gap-11 mb-3.5 lg:my-11'>
					<div className='w-full md:w-[46%] shrink-0'>
						<Image src="/service.png" alt="" width="550" height="476" className='w-full'/>
					</div>
					<p className='text-sm lg:text-lg text-center lg:text-left'>
						Lorem ipsum dolor sit amet consectetur. Auctor aenean erat urna adipiscing egestas aenean viverra.
						Est convallis felis libero porta sit eu. Sagittis ultricies risus tristique mattis pellentesque eu ornare sed id.
						Duis eget malesuada tempus nec risus. Sagittis ac magnis arcu ut eu aliquam maecenas eget aliquet.
						Turpis tincidunt dignissim ultrices odio donec proin auctor velit enim.
						Risus eros cursus blandit nec morbi sollicitudin enim. Nullam lorem sagittis ultricies at.
						Magna mollis neque augue ornare.
					</p>
				</div>
				<h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
          Get in Touch
        </h2>
				<div className='max-w-[960px] mx-auto mb-[25px] md:mb-11'>
					<p className='text-sm lg:text-lg text-center'>
						Lorem ipsum dolor sit amet consectetur. Orci non ornare id rhoncus augue. Mauris pulvinar facilisis quis id.
						Sed ut massa non convallis orci. Lorem ac viverra dui praesent pretium gravida aliquam vel turpis.
					</p>
					<h3 className='text-2xl lg:text-4xl text-center lg:text-left my-4 md:mt-11 md:mb-5 font-semibold'>
						Let's get started!
					</h3>
					<p className='text-sm lg:text-lg text-center md:text-left mb-11'>
						Let's build our relationships! Reach out and let the magic of cooperation light up our sky.
					</p>
					<form action="">
						<div className='flex flex-col md:flex-row gap-[25px] md:gap-3.5 input-row'>
							<div className='flex-1/2 relative'>
								<input type="text" placeholder="First name" className='input' />
							</div>
							<div className='flex-1/2 relative'>
								<input type="text" placeholder="Last name" className='input' />
								<span className='error-msg'>Error message</span>
							</div>
						</div>
						<div className='input-row'>
							<input type="email" placeholder="Email" className='input' />
						</div>
						<div className='input-row'>
							<input type="text" placeholder="Phone" className='input' />
						</div>
						<div className='input-row'>
							<textarea placeholder="Message" className='input resize-none h-[129px]' />
						</div>
						<div className='text-center'>
							<Button buttonType="submit" title="SEND" />
						</div>
					</form>
				</div>
			</section>
    )
}