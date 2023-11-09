import Layout from '../../components/Layout';
import Link from 'next/link';

import { getAllVehicles } from '../../lib/api'

export async function getStaticProps () {
    const vehicles = getAllVehicles();

    return {
        props: {
            vehicles
        }
    }
}

const vehiclesPage = ({ vehicles }) => {
    return <Layout>
        <h1>Vehicles</h1>
        <ul>
        {vehicles.map((vehicle) => {
            const { model, price, slug } = vehicle;
            return <li>
                <h3>{model}</h3>
                <h4>${price}</h4>
                <Link href={`/vehicles/${slug}`}>Learn More</Link>
            </li>
        })}
        
        </ul>
    </Layout>
}
export default vehiclesPage;