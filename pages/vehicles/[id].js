import Layout from '../../components/Layout';
import { getVehicleBySlug, getallVehicleSlugs } from '../../lib/api';


//WATERFALL
//1. get static paths

export async function getStaticPaths(){
    const pathsArr = getallVehicleSlugs();

    const paths = pathsArr.map((slug) => {
        return{
            params: {
                id: slug
            }
        }
    });
    return{
        paths,
        fallback: false
    }
}

//2. GetStaticProps
export async function getStaticProps ( {params} ) {
    const vehicleData = getVehicleBySlug(params.id);

    return {
        props: {
            vehicleData
        }
    }
}

const SingleVehiclePage = ({ vehicleData }) => {
    const { model, price } = vehicleData;
    return <Layout>
        <h1>{model}</h1>
        <h2>${price}</h2>
    </Layout>
}
export default SingleVehiclePage;