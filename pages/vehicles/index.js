import Container from '../../components/Container';
import FilterBar from '../../components/FilterBar';
import Grid from '../../components/Grid';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

import { getAllVehicles, getVehicleTypes } from '../../lib/api'

export async function getStaticProps () {
    const vehicles = await getAllVehicles();
    const vehicleTypes = await getVehicleTypes();
    return {
        props: {
            vehicles,
            vehicleTypes
        }
    }
}

const vehiclesPage = ({ vehicles, vehicleTypes }) => {
    // add "all" to vehicleTypes
    return <Layout>
        <h1>Vehicles</h1>
        <Container>
            <FilterBar items={vehicleTypes}/>
            <Grid>
                {vehicles.map((vehicle, index) => {
                const { title, slug, vehicleInfromation } = vehicle.node;
                const { trimLevels } = vehicleInfromation;
                return <article key={index}>
                {trimLevels && trimLevels[0].images.thumbnail && 
                <Image 
                src={trimLevels[0].images.thumbnail.node.sourceUrl}
                alt={trimLevels[0].images.thumbnail.node.altText}
                width={trimLevels[0].images.thumbnail.node.mediaDetails.width}
                height={trimLevels[0].images.thumbnail.node.mediaDetails.height}
                />
                }
                <h3>{title}</h3>
                <Link href={`/vehicles/${slug}`}>Learn More</Link>
                </article>
            })}
        </Grid>
    </Container>
</Layout>
}
export default vehiclesPage;