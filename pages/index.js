import Button from '../components/Button';
import CarColorPicker from '../components/CarColorPicker';

const Homepage = () => {
  return <div>
<CarColorPicker />

    <h1>Homepage</h1>
    <Button 
      label="Register Now"
      type = "primary"/>
    <Button 
      label = "Download Now"
      type = "secondary"/>
    <Button 
      label = "Learn More"/>
  </div>
}

export default Homepage;