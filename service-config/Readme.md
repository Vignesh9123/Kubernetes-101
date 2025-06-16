# Service 

- A way to expose cluster to the internet(NodePort and LoadBalancer) or within the cluster(ClusterIP)


### Local setup

- There's one extra step before(or after) applying the service manifests to expose the service to the localhost.
- In `kind` we need to modify kind cluster configuration to add a port mapping.
```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  extraPortMappings:
  - containerPort: 30007 # Port on which the service is exposed inside the container
    hostPort: 30007 # Expose service on localhost:30007
- role: worker
- role: worker
```