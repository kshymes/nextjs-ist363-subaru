import { useState } from 'react';


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
    vehicleTypes.unshift({
        "node": {
            "name": "All",
            "slug": "all"
          }
    },);

    return {
        props: {
            vehicles,
            vehicleTypes
        }
    }
}

const vehiclesPage = ({ vehicles, vehicleTypes }) => {
    // add "all" to vehicle types
    const [activeVehicleType, setActiveVehicleType] = useState ('all');

    // filter vehicles by activeVehicleType
    const filteredVehicles = activeVehicleType === 'all' ? 
    vehicles 
    : 
    vehicles.filter((vehicle) => {
        const { vehicleTypes } = vehicle.node;
        const vehicleTypeSlugs = vehicleTypes.edges.map((vehicleType) => {
            return vehicleType.node.slug;
        });
        return vehicleTypeSlugs.includes(activeVehicleType);
    });
  
    return <Layout>
        <h1>Vehicles</h1>
        <Container>
            <FilterBar items={vehicleTypes} 
            activeItem={activeVehicleType}
            setActiveItem={setActiveVehicleType}
            />
            <Grid>
                {filteredVehicles.map((vehicle, index) => {
                const { title, slug, vehicleInformation } = vehicle.node;
                const { trimLevels } = vehicleInformation;
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