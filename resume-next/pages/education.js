import Layout from "../components/Layout";
import { education } from "../profile";

const Education = () => (
    <Layout>
      <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Education</h1>

                        <ul >
                            {
                                education.map(({school, degree, from, to}, i) => (
                                    <li key={i}>
                                        <h3>{degree}</h3>
                                        <h4>{school}</h4>
                                        <p>{from}-{to}</p>
                                    </li>
                                ))
                            }
                        </ul>


                    </div>
                </div>
            </div>

</Layout>
)

export default Education;