import React, { useState } from 'react';
import Accordion from '../Components/Accordion';
import Input from '../Components/Input';
import Select from '../Components/Select';

const countryStateMap = {
  India: ['UP', 'MP', 'UK'],
  US: ['California', 'Texas', 'New York'],
  Canada: ['Ontario', 'Quebec', 'British Columbia'],
};

function Contact() {
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [page, setpage] = useState(1);
  const [errors, setErrors] = useState({});
  const nextPage = () => {
    if (page === 1 && validatePage1()) {
      setpage(page + 1);
    }
  };
  const prevPage = () => {
    setpage(page - 1);
  };
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setStates(countryStateMap[country] || []);
    setFormData((prevData) => ({
      ...prevData,
      Country: country,
      State: '',
    }));
    setSelectedState('');
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setFormData((prevData) => ({
      ...prevData,
      State: state,
    }));
  };

  const countryOptions = [
    { value: '', label: 'Select Country' },
    { value: 'India', label: 'India' },
    { value: 'US', label: 'US' },
    { value: 'Canada', label: 'Canada' },
  ];

  const stateOptions = [
    { value: '', label: 'Select State' },
    ...states.map((state) => ({ value: state, label: state })),
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    Mobile: '',
    Email: '',
    Address1: '',
    Address2: '',
    Landmark: '',
    Country: '',
    State: '',
    City: '',
    Pincode: '',
  });
  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function validatePage1() {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.Mobile) newErrors.Mobile = 'Mobile number is required';
    if (!/^\d{10}$/.test(formData.Mobile)) newErrors.Mobile = 'Invalid mobile number';
    if (!formData.Email) newErrors.Email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.Email)) newErrors.Email = 'Invalid email address';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function validatePage2() {
    const newErrors = {};
    if (!formData.Address1) newErrors.Address1 = 'Address 1 is required';
    if (!formData.Country) newErrors.Country = 'Country is required';
    if (!formData.State) newErrors.State = 'State is required';
    if (!formData.City) newErrors.City = 'City is required';
    if (!formData.Pincode) newErrors.Pincode = 'Pincode is required';
    if (!/^\d{6}$/.test(formData.Pincode)) newErrors.Pincode = 'Invalid pincode';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (validatePage2()) {
      console.log(formData);
    }
  }

  return (
    <div className='m-28 border'>
      <Accordion title={"Consignee Details"}>
        <form className="space-y-4 m-4" onSubmit={handleSubmit}>
          {page === 1 && (
            <div>
              <label className='font-bold'>Personal Details</label>
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div>
                  <label>First Name <span className='text-red-600'>*</span></label>
                  <Input type="text" placeholder="Enter First Name..."
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleOnChange}
                  />
                  {errors.firstName && <p className="text-red-600">{errors.firstName}</p>}
                </div>
                <div>
                  <label>Last Name <span className='text-red-600'>*</span></label>
                  <Input type="text" placeholder="Enter Last Name..."
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleOnChange}
                  />
                  {errors.lastName && <p className="text-red-600">{errors.lastName}</p>}
                </div>
                <div>
                  <label>Mobile Number <span className='text-red-600'>*</span></label>
                  <Input type="text" placeholder="Enter Mobile Number..."
                    name="Mobile"
                    value={formData.Mobile}
                    onChange={handleOnChange}
                  />
                  {errors.Mobile && <p className="text-red-600">{errors.Mobile}</p>}
                </div>
                <div>
                  <label>Email Address <span className='text-red-600'>*</span></label>
                  <Input type="email" placeholder="Enter Email ID..."
                    name="Email"
                    value={formData.Email}
                    onChange={handleOnChange}
                  />
                  {errors.Email && <p className="text-red-600">{errors.Email}</p>}
                </div>
              </div>
              <div className='mt-6'>
                <button
                  type="button"
                  onClick={nextPage}
                  className="px-4 py-2 w-24 bg-blue-600 text-white rounded-xl"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {page === 2 && (
            <div>
              <div className='mb-6'>
                <label className='font-bold '>Shipping Address</label>
              </div>

              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                <div>
                  <label>Address 1 <span className='text-red-600'>*</span></label>
                  <Input type="text" placeholder="Enter Address 1..." name="Address1"
                    value={formData.Address1}
                    onChange={handleOnChange}
                  />
                  {errors.Address1 && <p className="text-red-600">{errors.Address1}</p>}
                </div>
                <div>
                  <label>Address 2 <span className='text-red-600'>*</span></label>
                  <Input type="text" placeholder="Enter Address 2..." name="Address2"
                    value={formData.Address2}
                    onChange={handleOnChange}
                  />
                </div>
                <div>
                  <label>Landmark</label>
                  <Input type="text" placeholder="Enter Landmark..."
                    name="Landmark"
                    value={formData.Landmark}
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2'>
                <div>
                  <label>Country <span className='text-red-600'>*</span></label>
                  <Select
                    options={countryOptions}
                    Style="light"
                    value={formData.Country}
                    onChange={handleCountryChange}
                    name="Country"
                  />
                  {errors.Country && <p className="text-red-600">{errors.Country}</p>}
                </div>
                <div>
                  <label>State<span className='text-red-600'>*</span></label>
                  <Select
                    options={stateOptions}
                    Style="light"
                    value={formData.State}
                    onChange={handleStateChange}
                    name="State"
                  />
                  {errors.State && <p className="text-red-600">{errors.State}</p>}
                </div>
                <div>
                  <label>City <span className='text-red-600'>*</span></label>
                  <Input type="text" placeholder="Enter City..."
                    name="City"
                    value={formData.City}
                    onChange={handleOnChange}
                  />
                  {errors.City && <p className="text-red-600">{errors.City}</p>}
                </div>
                <div>
                  <label>Pincode <span className='text-red-600'>*</span></label>
                  <Input type="text" placeholder="Enter Pincode..."
                    name="Pincode"
                    value={formData.Pincode}
                    onChange={handleOnChange}
                  />
                  {errors.Pincode && <p className="text-red-600">{errors.Pincode}</p>}
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <input type="checkbox" name="confirm" className="border p-2 rounded-lg" />
                <label>Billing address is same as shipping address</label>
              </div>

              <div className="flex justify-between mt-5">
                <button
                  type="button"
                  onClick={prevPage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl"
                >
                 Previous
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </form>
      </Accordion>
    </div>
  );
}
export default Contact;