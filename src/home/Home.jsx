import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export { Home };

function Home() {
    const auth = useSelector(x => x.auth.value);
    return (
        <div>
            <h1>Hi <b>{auth?.firstName}!</b></h1>
            <h3><i>You're logged in NPS Kengeri Database</i></h3>
            <p>Programmed only for <i>eductional purpose</i>. Please use the website wisely. In case of any violation of privacy, the website will be temporarily shutdowned</p>
            <h4><Link to="/users">Manage Users</Link></h4>
            
            <h3><a href="https://1drv.ms/x/c/5ED30C58F08FF92E/AZTgpMRxgvRKoiziAbPlU_g?e=gT8kBj&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0" download="class_csv" className="btn btn-sm btn-success mb-2">Export CSV
            </a></h3>
        </div>
    );
}
