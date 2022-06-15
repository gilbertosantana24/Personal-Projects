import Layout from "../components/Layout"
import Link from "next/dist/client/link"
import { skills, experiences } from '../profile'

const Index = () => (
    <Layout>

        {/* Header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="Foto%20GASB.jpg" alt="profile pic" className="img-fluid" />
                        </div>
                        <div className="col-md-8 text-light">
                            <h1 className="text-light">Gilberto Santana</h1>
                            <h3 className="text-light">FullStack Developer</h3>
                            <p>asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd as dasd asad asd asd </p>

                            <Link href="/contactme">
                            <a className="text-light">Contact me</a>
                            </Link>
                            
                        </div>
                    </div>
                </div>

            </div>
        </header>

        {/* Second Section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {
                            skills.map(({skill,percentage}, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div 
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percentage}%`}}>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }



                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>

                        <ul >
                            {
                                experiences.map(({title, company, description, from, to}, i) => (
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <h4>{company}</h4>
                                        <p>{description}</p>
                                        <p>{from}-{to}</p>
                                    </li>
                                ))
                            }
                        </ul>


                    </div>
                </div>
            </div>
        </div>

    </Layout>
)

export default Index