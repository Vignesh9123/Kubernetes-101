# Replicaset 

- A ReplicaSet in Kubernetes is a controller that ensures a specified number of pod replicas are running at any given time. 
- It is used to maintain a stable set of replica Pods running in the cluster, even if some Pods fail or are deleted.
- Even if any extra Pods with the `same label selector` are created, the ReplicaSet will bring the number of Pods down to the desired number.