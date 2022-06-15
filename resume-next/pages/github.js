import Layout from "../components/Layout";

const Github = ({ user }) => {

    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.login}</h1>
                        <img src={user.avatar_url} alt="" />
                        <a href={user.html_url} target="_blank" className="btn btn-outline-secondary">
                            Go To Github
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {

    const res = await fetch('https://api.github.com/users/gilbertosantana24')
    const data = await res.json();

    return {
        props: {
            user: data
        }
    }

}

export default Github;