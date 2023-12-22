
import Button from '../components/Button';
import Layout from '../components/Layout';


const Homepage = () => {
  return <Layout>
    <h1>Homepage</h1>
    <Button 
      label="Register Now"
      type = "primary"
      />
    <Button 
      label = "Download Now"
      type = "secondary"
      />
    <Button 
      label = "Learn More"
      />
  </Layout>
}

export default Homepage;