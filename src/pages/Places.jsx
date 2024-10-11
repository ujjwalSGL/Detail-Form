import React from 'react'
import Card from '../Components/Card'
import image from '../assets/image.png';
import Label from '../Components/Label'


function Places() {

    const handleButtonClick = () => {
        alert('Beautiful Mountains!');
      };

  return (
    <div>
        <div className='mt-8'>
        <Label text={"Mountains"} />
        </div>
        
        <div className='p-8 grid grid-cols-2 justify-center cursor-pointer'>
        
            <Card
            title="Mountain Landscape"
            content="Explore the breathtaking mountain and landscapes."
            image={image}
            buttonText="Explore"
            onButtonClick={handleButtonClick}
          />
           <Card
            title="Mountain Landscape"
            content="Explore the breathtaking mountain and landscapes."
            image={image}
            buttonText="Explore"
            onButtonClick={handleButtonClick}
          />

    </div>
    </div>

    
  )
}

export default Places