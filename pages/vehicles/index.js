import Layout from '../../components/Layout';
import Link from 'next/link';

import { getAllVehicles } from '../../lib/api'

export async function getStaticProps () {
    const vehicles = await getAllVehicles();

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
            const { title, slug } = vehicle.node;
            return <li>
                <h3>{title}</h3>
                <Link href={`/vehicles/${slug}`}>Learn More</Link>
            </li>
        })}
        
        </ul>
    </Layout>
}
export default vehiclesPage;