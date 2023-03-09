import React from 'react';
import { Formik, FormikHelpers, FormikValues } from 'formik';
import { HiArrowLongRight } from 'react-icons/hi2';

interface FormValues {
  email: string;
  country: string;
  destination: string;
  dates: string;
  video: string;
}

const FormTravelRequest: React.FC = () => {
  const initialValues: FormValues = { 
    email: '', 
    country: '', 
    destination: '', 
    dates: '', 
    video: '' 
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    // Email Validation
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    
    // Desired Country
    if (values.country === "") {
      errors.country = 'Required';
    }

    // Desired Destination
    if (!values.destination) {
      errors.destination = 'Required';
    }

    // Desired Dates
    if (!values.dates) {
      errors.dates = 'Required';
    }

    // Desired Dates
    if (!values.video) {
      errors.video = 'Required';
    }

    return errors;
  };

  const onSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className='flex flex-col gap-[30px]'>
          {/* Single Field */}
            <div>
              <label className='block mb-2 text-[#6B6B6B] text-[16px] leading-[24px]' htmlFor="form-email-address">Email address *</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder=''
                id='form-email-address'
                className='w-full h-[60px] text-black px-6 border focus:ring-success focus:ring-opacity-20 focus:ring-[2.5px] border-[#B1B5C3 rounded-[10px] focus:border-success'
              />
              {errors.email && touched.email && <div className='text-[12px] text-danger mt-2'>{errors.email}</div>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                {/* Single Field */}
                <div>
                  <label className='block mb-2 text-[#6B6B6B] text-[16px] leading-[24px]' htmlFor="form-country-of-resedence">Country of Residence *</label>
                  <select 
                      id="form-country-of-resedence"
                      name="country"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='w-full h-[60px] px-6 border focus:ring-success focus:ring-opacity-20 focus:ring-[2.5px] border-[#B1B5C3 rounded-[10px] focus:border-success focus:outline-none;'
                      >
                    <option value="#">Select One</option>
                    <option value="jamaica">Jamaica</option>
                    <option value="united-states">United State</option>
                  </select>
                  {errors.country && touched.country && <div className='text-[12px] text-danger mt-2'>{errors.country}</div>}
                </div>
                
              </div>
              <div className="col-span-2 sm:col-span-1">
                {/* Single Field */}
                <div>
                  <label className='block mb-2 text-[#6B6B6B] text-[16px] leading-[24px]' htmlFor="form-desired-destination">Desired Destination *</label>
                  <input
                    type="text"
                    name="destination"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.destination}
                    placeholder=''
                    id='form-desired-destination'
                    className='w-full h-[60px] px-6 border focus:ring-success focus:ring-opacity-20 focus:ring-[2.5px] border-[#B1B5C3 rounded-[10px] focus:border-success focus:outline-none;'
                  />
                  {errors.destination && touched.destination && <div className='text-[12px] text-danger mt-2'>{errors.destination}</div>}
                </div>
                
              </div>
            </div>
            
              {/* Single Field */}
            <div>
              <label className='block mb-2 text-[#6B6B6B] text-[16px] leading-[24px]' htmlFor="form-dates">Dates (MM/DD/YYYY) *</label>
              <input
                type="date"
                name="dates"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dates}
                placeholder=''
                id='form-dates'
                className='w-full h-[60px] text-black px-6 border focus:ring-success focus:ring-opacity-20 focus:ring-[2.5px] border-[#B1B5C3 rounded-[10px] focus:border-success'
              />
              {errors.dates && touched.dates && <div className='text-[12px] text-danger mt-2'>{errors.dates}</div>}
            </div>
            
            {/* Single Field */}
            <div>
              <label className='block mb-2 text-[#6B6B6B] text-[16px] leading-[24px]' htmlFor="form-video-link">Link to 15s Video Petition *</label>
              <input
                type="text"
                name="video"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.video}
                placeholder=''
                id='form-video-link'
                className='w-full h-[60px] text-black px-6 border focus:ring-success focus:ring-opacity-20 focus:ring-[2.5px] border-[#B1B5C3 rounded-[10px] focus:border-success'
              />
              {errors.video && touched.video && <div className='text-[12px] text-danger mt-2'>{errors.video}</div>}
            </div>

            {/* Submit Button Area */}
            <div className='mt-[10px]'>
              <button type="submit" className='outline-none shadow-[0px_43px_65px_rgba(255,108,44,0.29)] bg-danger text-white hover:bg-success transition-all duration-150 ease-in-out inline-flex gap-2 items-center text-[18px] font-semibold uppercase border border-white border-[2.5px] py-[14px] md:py-[16px] tracking-[0.08em] px-[45px] rounded-full h-[50px] md:h-[55px]' disabled={isSubmitting}>
                Submit
                <HiArrowLongRight />
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormTravelRequest;
