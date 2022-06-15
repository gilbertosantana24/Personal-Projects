import Layout from "../components/Layout";
import { contact } from "../profile";


const Contact = () => (
    <Layout>
        <div className="col-md-8">
            <div className="card bg-light">
                <div className="card-body">
                    {
                        
                        contact.map(({method, info}, i) => (
                            <li key={i}>
                                <h3>{method}</h3>
                                <h4>{info}</h4>
                                
                            </li>
                        )) 
                    }
                </div>
            </div>
        </div>

    </Layout>
)

export default Contact;