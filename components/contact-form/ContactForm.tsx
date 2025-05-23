'use client';

import { Button } from '@/components/ui/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { contactFormSchema } from '@/lib/schema';
import { sendEmail } from '@/app/_actions';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';

type contactFormInputs = z.infer<typeof contactFormSchema>

export default function ContactForm() {

  const t = useTranslations('Global');
  const f = useTranslations('FormFields');
  const m = useTranslations('Messages');

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting }
  } = useForm<contactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    shouldFocusError: false,
  })

  const processForm: SubmitHandler<contactFormInputs> = async data => {
    const result = await sendEmail(data);

    if (result?.success) {
      toast.success(m('emailSent'));   
      reset();
      return
    }

    //Toast error
    toast.error(m('somethingWrong'));
  }

  return (
    <form onSubmit={handleSubmit(processForm)} noValidate>
      <div className='flex flex-col md:flex-row gap-[25px] md:gap-3.5 input-row'>
        <div className='flex-1/2 relative'>
          <input
            {...register('name')}
            type="text" 
            placeholder={f('firstName')}
            className={twMerge('input', errors.name && 'input-error')}
          />
          { errors.name && <span className='error-msg'>{errors.name.message}</span> }
        </div>
        <div className='flex-1/2 relative'>
          <input
            {...register('lastName')}
            type="text"
            placeholder={f('lastName')}
            className={twMerge('input', errors.lastName && 'input-error')}
          />
          { errors.lastName && <span className='error-msg'>{errors.lastName.message}</span> }
        </div>
      </div>
      <div className='input-row'>
        <input
          {...register('email')}
          type="email"
          placeholder={f('email')}
          className={twMerge('input', errors.email && 'input-error')}
        />
        { errors.email && <span className='error-msg'>{errors.email.message}</span> }
      </div>
      <div className='input-row'>
        <input
          {...register('phone')}
          type="text"
          placeholder={f('phone')}
          className={twMerge('input', errors.phone && 'input-error')}  
        />
        { errors.phone && <span className='error-msg'>{errors.phone.message}</span> }
      </div>
      <div className='input-row'>
        <textarea
         {...register('message')}
          placeholder={f('message')}
          className="input resize-none h-[129px]"
        />
      </div>
      <div className='text-center'>
        <Button 
          buttonType="submit"
          variant="button"
          title={t('send')}
          className='cursor-pointer'
        />
      </div>
    </form>
  )
}