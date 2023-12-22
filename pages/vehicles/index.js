import { useState } from 'react';

import Container from '../../components/Container';
import FilterBar from '../../components/FilterBar';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

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
        <Heading 
            level={1} 
            color="black"
            textAlign="center"
            marginBottom={2}
            paddingBottom={2}
        >
            Vehicles
        </Heading>
        <Container>
            <FilterBar items={vehicleTypes} 
            activeItem={activeVehicleType}
            setActiveItem={setActiveVehicleType}
            />
            <Grid
                items={filteredVehicles}
            />
        </Container>
    </Layout>
}
export default vehiclesPage;