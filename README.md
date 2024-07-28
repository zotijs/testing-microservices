# Testing Microservices

An implementation of Honeycomb testing with Microservices

## Prerequisites

### Docker

Install [docker](https://docs.docker.com/engine/install/) and enable [buildKit](https://docs.docker.com/build/buildkit/)

### Minikube

[minikube](https://minikube.sigs.k8s.io/docs/start/) is local Kubernetes, focusing on making it easy to learn and develop for Kubernetes.

Install:

```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

Update:

```
minikube delete --purge

curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

Addons:

Ingress and Ingress DNS: https://minikube.sigs.k8s.io/docs/handbook/addons/ingress-dns/

Commands:

- start: `minikube start`
- stop: `minikube stop`
- dashboard: `minikube dashboard`

### Kubectl

[kubectl](https://kubernetes.io/docs/reference/kubectl/) is a command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API.

Install: https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

### Helm

[helm](https://helm.sh/docs/) is the package manager for Kubernetes.

Install: https://helm.sh/docs/intro/install/

## Publishing Libraries

Inspired by [turborepo-with-changesets](https://github.com/vercel/turbo/tree/main/examples/with-changesets)

**Lessons learned:**

- When you are dealing with scoped registries (like a monorepo) you need to create the organization in [npm](https://www.npmjs.com/) before publishing

## Resources

- Testing of Microservices, spotify [blog](https://engineering.atspotify.com/2018/01/testing-of-microservices/)
- Helm [docs](https://helm.sh/docs/intro/using_helm/), [topics](https://helm.sh/docs/topics/), [best-practices](https://helm.sh/docs/chart_best_practices/), [template-guide](https://helm.sh/docs/chart_template_guide/)
- Skaffold with Helm [guide](https://skaffold.dev/docs/deployers/helm/)
- [skaffold-helm-tutorial](https://github.com/Kapernikov/skaffold-helm-tutorial/tree/main)
