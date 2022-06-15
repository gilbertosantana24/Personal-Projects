import { Button, Card, CardContent, Container, Grid } from 'semantic-ui-react'
import { useRouter } from 'next/router';

export default function HomePage({ tasks }) {

  const router = useRouter();

  if(tasks.length == 0) {
    return (
      <Grid 
      centered 
      verticalAlign="middle" 
      Column="1" 
      style={{height: "80vh"}}
      >
        <Grid.Row>
          <Grid.Column textAlign="centered">
            <h1>No tasks yet</h1>
            <img src='https://www.kvsroofindia.com/admin/public/uploads/nodata.png' alt='noDataFound' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  //RENDER TASKS
  return (
    <Container style={{padding: '20px' }}>
      <Card.Group itemsPerRow={4}>
        {
          tasks.map((task) => (
            <Card key={task._id}>
              <Card.Content>
                <Card.Header>{task.title}</Card.Header>
                <p>{task.description}</p>
              </Card.Content>
              <Card.Content extra>
                <Button primary onClick={()=> router.push(`/tasks/${task._id}`)}>View</Button>
                <Button primary onClick={()=> router.push(`/tasks/${task._id}/edit`)}>Edit</Button>
              </Card.Content>
            </Card>
          ))}
      </Card.Group>
    </Container>
  );
}

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/tasks')
  const tasks = await res.json()

  return {
    props: {
      tasks,
    }
  }
}