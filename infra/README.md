# Infra

The project that holds the helm related manifests

## Helm Cheat sheet

- `helm create <chart>`: create a chart
- `helm install <name> <chart_dir>`: install a release
- `helm uninstall <name>`: uninstall a release
- `helm get manifest <name>`: takes a release name and prints out all of the Kubernetes resources that were uploaded to the server
- `helm install --debug --dry-run <name> <chart_dir>`: render the templates, but instead of installing the chart, it will return the rendered template
- `helm lint`: will verify that your chart follows best practices
