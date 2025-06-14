# Deployment

- A deployment is used to manage replicasets which in turn manages pods.

- Why not use a replicaset directly?
  - A deployment can be used to simulate rolling updates.(i.e. updating the application without downtime)
  - It allows you to roll back to previous versions of your application.

### Series of events
- User creates a deployment which creates a replicaset which creates pods
- If pods go down, replicaset controller ensures to bring them back up

